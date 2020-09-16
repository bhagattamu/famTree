import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const DetailRow = ({label,columnName, initColumnValue, update, updatedValue, setUpdatedValue}) => {
    const [columnValue, setColumnValue] = useState('');
    
    useEffect(() => {
        setColumnValue(initColumnValue)
    }, [initColumnValue]);

    function set(path, value, obj) {
        var schema = obj;  // a moving reference to internal objects within obj
        var pList = path.split('.');
        var len = pList.length;
        for(var i = 0; i < len-1; i++) {
            var elem = pList[i];
            if( !schema[elem] ) schema[elem] = {}
            schema = schema[elem];
        }
        schema[pList[len-1]] = value;
    }

    const handleChange = (e) => {
        console.log("handle change", e.target.value)
        setColumnValue(e.target.value)
        let payload = {}
        let obj = {}
        obj.properties = ''
        // For column inside propery seperated by |
        if(columnName.split('|').length >= 1){
            columnName.split('|').map((prop,index) => {
                if(index + 1 < columnName.split('|').length){
                    obj.properties = obj.properties === '' ? `${prop}` : obj.properties + `.${prop}`;                    
                }
                else{
                    const valArr = e.target.value.split(' ');
                    // For multiple column name seperated by ,
                    prop.split(',').map((property, index) => (
                        set(obj.properties === '' ? `${property}` : obj.properties + `.${property}`, valArr[index], payload)
                    ))
                }
            })
            setUpdatedValue({
                ...updatedValue, 
                ...payload
            })
        }else{
            payload[`${columnName}`] = e.target.value;
            setUpdatedValue({
                ...updatedValue, 
                ...payload
            })
        }
        
    }
    return (
        <Row>
            <Col align="right">
                <span className="detail-column-name">{label}</span>
            </Col>
            <Col>
            {
                update ? 
                (<input value={columnValue} onChange={(e) => handleChange(e)}/>)
            :
                (<span className="detail-column-value">{columnValue}</span>)
            }
                
            </Col>
        </Row>
    )
}

export const DetailImage = ({imageUrl}) => {
    return (
        <Row>
            <Col align="center">
                <img src={imageUrl} alt={imageUrl} height="100" width="100" style={{margin: 10, borderRadius: 50}}/>
            </Col>
        </Row>
    )
}