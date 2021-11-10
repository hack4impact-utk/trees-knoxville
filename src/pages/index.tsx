import React from "react";
import Filter from "src/components/Filter/index"
import MapContainer from "../components/Map";


export default function HomePage() {
    return (
    <div> 
        <head>
        <title>Trees Knoxville | Map</title>
        </head>
        <h1>Welcome to Trees Knoxville!</h1>
        <Filter/>
        <div>
            <MapContainer />
        </div>  
    </div>

    );
}
