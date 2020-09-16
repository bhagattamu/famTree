import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Heading } from './Component/StyledComp';
import FamilyTree from './Component/FamilyTree';
import { getData } from './data';
import { FamilyContext } from './Context/family';

function App() {
  const [treeData, setTreeData] = useState([]);
  const [rawData, setRawData] = useState([]);
  
  const getRoot = data => {
    //let rootId = [];
    // calculate root id
    //logics pachi garchu
    return data[0].id;
  }

  const getById = (id, data) => {
    return data.filter(d => d.id === id)[0];
  }

  const getFullName = (firstName, ...lastName) => {   
    return `${firstName} ${lastName.length > 1 ? lastName[0] + ' ' + lastName[1] : lastName[0]}`;
  }

  const addClass = (...classes) => {
    let classString = "";
    classes.forEach(className => classString += className + ' ')
    return classString;
  }

  const constructTreeData = (data, rootId) => {
    let rootData = getById(rootId, data);
    let tree = {
      "name": getFullName(rootData.firstName, rootData.middleName, rootData.lastName),
      "class": addClass(rootData.gender, rootData.dateOfDeath === "_" ? "alive" : "death"),
      "extra": {
        ...rootData
      },
      "marriages": rootData.marriages.length > 0 ? rootData.marriages.map(({spouse, childrens}) => {
        const rootSpouse = getById(spouse, data);
        return {
          "spouse": {
            "name": getFullName(rootSpouse.firstName, rootSpouse.middleName, rootSpouse.lastName),
            "class": addClass(rootSpouse.gender, rootSpouse.dateOfDeath === "_" ? "alive" : "death"),
            "extra": {
              ...rootSpouse
            }
          },
          "children": childrens.map(child => {
            return constructTreeData(data, child);
          })
        }
      }) : []
    }
    return tree;
  }
  const getTreeData = () => {
    getData().then(data => {
      const rootId = getRoot(data);
      const constructedTreeData = constructTreeData(data, rootId);
      let tree = [];
      tree.push(constructedTreeData)
      setTreeData(tree);
      setRawData(data);
    })
  }
  useEffect(getTreeData,[])
  return (
    <div className="App">
      <Container>
        <Heading>d3-dtree Family Tree Example</Heading>
        <Row>
          <Col>
            <FamilyContext.Provider value={{data: treeData, rawData, setRawData, setData: setTreeData,constructTreeData }}>
              <FamilyTree />
            </FamilyContext.Provider>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
