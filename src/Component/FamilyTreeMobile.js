import React, { useEffect } from 'react';
import "../loader"; // To make d3 and lodash in windows scope which is required for d3-dtree lib
import * as dTree from 'd3-dtree';
import { useFamilyContext } from '../Context/family';

const FamilyTree = () => {
    const store = useFamilyContext(); 
    console.log(store);
    const data = store.data;
    useEffect(() => {
        const graphBlock = document.getElementById(`graph`);
        // remove childNode which is added in initial render when data is empty
        if(graphBlock.hasChildNodes())
            graphBlock.childNodes.forEach(childNode => graphBlock.removeChild(childNode))
        const coreTree = dTree.init(data, {
            target: `#graph`,
            depthOffset: -1,
            debug: false,
            height: 1200,
            width: 800,
            nodeWidth: 200,
            callbacks: {
                nodeClick: function(name, extra, id) {
                    console.log(extra.imageUrl);
                },
                textRenderer: function(name, extra, textClass, nodeClass) {
                // THis callback is optinal but can be used to customize
                // how the text is rendered without having to rewrite the entire node
                // from screatch.
                if (extra && extra.nickname){
                    name = name + " (" + extra.nickname + ")";
                }
                    
                    
                // eslint-disable-next-line no-useless-concat
                return `<div align='center' class="imageWrap ${nodeClass}">
                            <img align='center' src=${extra && extra.imageUrl ? extra.imageUrl : require('../logo.svg')} height="100" width="100" alt="testimage" />
                        </div><br/><br/><br/><br/><br/><br/>
                        <div class="imageDetail">
                            <p>${name}</p>
                            <p>${extra && extra.dateOfBirth ? extra.dateOfBirth : 'Unknown'} - ${extra && extra.dateOfDeath ? (extra.dateOfDeath === '_' ? "Living" : extra.dateOfDeath) : 'Unknown'}</p>
                        <div>
                        `;
                },
                nodeRenderer: function(name, x, y, height, width, extra, id, nodeClass, textClass, textRenderer) {
                    // This callback is optional but can be used to customize the
                    // node element using HTML.
                    let node = '';
                    node += '<div ';
                    node += 'style="height:100%; width:100%; display:flex; flex-direction:column; justify-content:center; align-items:center; flex-wrap: wrap; text-align: center; border-radius:20px;" ';
                    node += 'class="node" ';
                    node += 'id="node' + id + '">\n';
                    node += textRenderer(name, extra, textClass, nodeClass);
                    node += '</div>';
                    return node;
                }
            }
        });
        coreTree.zoomToFit(500)
        //coreTree.resetZoom();
    }, [data] )
    return(
        <div id="graph" />
    )
}

export default FamilyTree;