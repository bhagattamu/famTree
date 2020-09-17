import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import { DetailRow, DetailImage } from './DetailRow';
import { useFamilyContext } from '../Context/family';

const DetailModal = ({show, handleClose, detailData}) => {
    const { rawData, setRawData, setData, constructTreeData } = useFamilyContext();
    const [update, setUpdate] = useState(false);
    const [updated, setUpdated] = useState({});    
    const {
        id,
        firstName,
        middleName,
        lastName,
        familyName,
        origin,
        imageUrl
    } = detailData;

    const getTreeData = () => {
        if(rawData.length !== 0){
            const constructedTreeData = constructTreeData(rawData, 'dhuli_id');
            let tree = [];
            tree.push(constructedTreeData)
            setData(tree);
        }
    }
    useEffect(getTreeData, [rawData])
    
    if(id === undefined){
        return (<></>)
    }
    
    const handleUpdate = () => {
        if(update){
            const dataToBeUpdated = {...rawData.filter(d => d.id === id)[0], ...updated};
            setRawData([
                ...rawData.map(d => {
                    if(d.id === dataToBeUpdated.id){
                        return dataToBeUpdated;
                    }
                    return d;
                })
            ]);
            setUpdated({});
            handleClose();
        }
        setUpdate(!update);
    }
    return (
        <Modal size="lg" show={show} onHide={() => { setUpdate(false);handleClose()}} animation={false} >
            <Modal.Header closeButton>
                <Modal.Title>{id}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <DetailImage imageUrl={imageUrl} />
                <DetailRow 
                    label="Name:"
                    columnName="firstName,middleName,lastName" 
                    initColumnValue={firstName + ' ' + middleName + ' ' + lastName } 
                    update={update}
                    updatedValue={updated}
                    setUpdatedValue={setUpdated}
                />
                <DetailRow 
                    label="Family:" 
                    columnName="familyName|main,sub"
                    initColumnValue={familyName && familyName.main ? `${familyName.main} ${familyName.sub}` : 'Unknown Unknown'}
                    update={update}
                    updatedValue={updated}
                    setUpdatedValue={setUpdated}
                />
                <DetailRow 
                    label="Origin:" 
                    columnName="origin"
                    initColumnValue={origin}
                    update={update}
                    updatedValue={updated}
                    setUpdatedValue={setUpdated}
                />           
            </Modal.Body>
            <Modal.Footer>
                <button onClick={() => handleUpdate(id)}>Update</button>
            </Modal.Footer>
        </Modal>
    )
}

export default DetailModal;