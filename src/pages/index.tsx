import React from "react";
import { getTreesByVisibilityStatus } from "../../server/actions/Tree";
import MapContainer from "../components/Map";


export default function HomePage() {
    return (
    <div> 
        <head>
        <title>Trees Knoxville | Map</title>
        </head>
        <h1>Welcome to Trees Knoxville!</h1>
        <br></br>
        <div>
            <MapContainer />
        </div>  
    </div>
    );
}
