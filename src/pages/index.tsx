import React from "react";
import AllTrees from "src/components/AllTrees";
import AddTreeForm from "src/components/AddTreeForm";
import MapContainer from "src/components/Map";


export default function HomePage() {
    return (
    <div> 
        <head>
            <title>Map | Trees Knoxville</title>
        </head>
        <h1>Welcome to Trees Knoxville!</h1>
        <br></br>
        <div>
            <MapContainer />
            <br /><br />
            <AddTreeForm />
        </div>  
    </div>
    );
}
