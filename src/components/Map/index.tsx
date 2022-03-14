import React, { useRef } from 'react';
import { Tree } from "utils/types";
import Map from "google-map-react";
import styles from "../Map.module.css"
import { FunctionComponent } from "react";
import Marker from "src/components/Marker"
import MarkerInfo from "src/components/MarkerInfo"
import { setTextRange } from 'typescript';
import { getTree } from 'server/actions/Tree';

interface Trees {
    trees: Tree[];
}


const MapContainer: FunctionComponent<Trees> = ({ trees }) => {
    const [showInfo, setShowInfo] = React.useState(false);
    const [tree, setTree] = React.useState(null);
    const onClick = (tree: Tree) => {
        
        if (!showInfo) {
            setShowInfo(true);
        }
        else {
            setShowInfo(false);
        }
    }
    return (
        <div className = {styles.Map} >
            <Map
            bootstrapURLKeys={{key: process.env.NEXT_PUBLIC_MAPS_API_KEY ?? ''}}
            defaultCenter={{ lat: 35.96, lng: -83.92 }}
            defaultZoom={11}>
                {trees && trees.map((tree: Tree) => 
                    <Marker onClick={() => onClick(tree)} lat={Number(tree.coordinates?.latitude)} lng={Number(tree.coordinates?.longitude)} />)}
            </Map>
            {showInfo ?  <MarkerInfo tree={tree}/> : null}
            
        </div>
    )
}

export default MapContainer;