import React from "react";
import Filter from "src/components/Filter/index"
import AllTrees from "src/components/AllTrees";
import UpsertTreeForm from "src/components/UpsertTreeForm";
import MapContainer from "src/components/Map";



export default function HomePage() {
    return (
    <div> 
        <head>
            <title>Map | Trees Knoxville</title>
        </head>
        <h1>Welcome to Trees Knoxville!</h1>
        <Filter/>
        <div>
            <MapContainer />
            <br /><br />
            <UpsertTreeForm />
        </div>  
    </div>

    );
}
