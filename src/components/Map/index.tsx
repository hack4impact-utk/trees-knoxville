import { Tree } from "utils/types";
import Map from "google-map-react";
import Marker from "src/components/Marker"
import React from "react";
import TreeInfoComponent from "src/components/TreeInfoComponent";
import styles from "./styles.module.scss";

interface Trees {
    trees: Tree[];
}

const MapContainer: React.FC<Trees> = ({ trees }) => {
    const [treeToDisplay, setTreeToDisplay] = React.useState<Tree>({});
    const [displayingTree, setDisplayingTree] = React.useState(false);
    const handleTreeDisplay = (tree: Tree) => {
        //If a tree isn't currently being displayed, set it to be displayed.
        if(!displayingTree) setDisplayingTree(true);
        setTreeToDisplay(tree);
    }
    return (
        <div className = {styles.Map} >
            <Map
            bootstrapURLKeys={{key: process.env.NEXT_PUBLIC_MAPS_API_KEY ?? ''}}
            defaultCenter={{ lat: 35.96, lng: -83.92 }}
            defaultZoom={11}
            options={{fullscreenControl: false}}>
                {trees && trees.map((tree: Tree) => 
                    <Marker key={tree._id} lat={Number(tree.coordinates?.latitude)} lng={Number(tree.coordinates?.longitude)} tree={tree} handleTreeDisplay={handleTreeDisplay}/>)}
            </Map>
            <TreeInfoComponent displayingTree={displayingTree} tree={treeToDisplay} setDisplayingTree={setDisplayingTree}/>
        </div>
    )
}

export default MapContainer;