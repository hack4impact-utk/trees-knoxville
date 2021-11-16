import React from "react";
import AddTreeForm from "../components/AddTreeForm";
import MapContainer from "../components/Map";


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
