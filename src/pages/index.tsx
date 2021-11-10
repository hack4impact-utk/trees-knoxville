import React from "react";
import { getTreesByVisibilityStatus } from "../../server/actions/Tree";
import MapContainer from "../components/Map";
import { Tree } from "../../utils/types"

const mockTree: Tree = {
    species: "test species",
    age: 222,
    coordinates: {
        latitude: 35.95868,
        longitude: -83.92465,
    },
    adopted: true,
    watering: true,
    pruning: false,
};
const mockTree2: Tree = {
    species: "oak",
    age: 123,
    coordinates: {
        latitude: 35.95685,
        longitude: -83.92899,
    },
    adopted: true,
    watering: true,
    pruning: false,
};
export default function HomePage() {
    // const gatherData = async () => {
    //     const trees = await getTreesByVisibilityStatus(true);
    //     return trees;
    // };
    // let treeList = gatherData();
    let treeList: Tree[] = [mockTree, mockTree2];

    return (
    <div> 
        <head>
        <title>Trees Knoxville | Map</title>
        </head>
        <h1>Welcome to Trees Knoxville!</h1>
        <br></br>
        <div>
            <MapContainer trees={treeList}/>
        </div>  
    </div>
    );
};

