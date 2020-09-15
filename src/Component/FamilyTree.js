import React from 'react';
import {isMobile} from 'react-device-detect';
import FamilyTreeBrowser from './FamilyTreeBrowser';
import FamilyTreeMobile from './FamilyTreeMobile';
 
const RenderContent = () => {
    if (isMobile) {
        return <FamilyTreeMobile />
    }
    return <FamilyTreeBrowser />
}
const FamilyTree = () => {
    return (
        <RenderContent />
    )
}

export default FamilyTree;