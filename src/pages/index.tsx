import React from "react";
import MapContainer from "../components/Map";


export default function HomePage() {
    return (
        <div>
            <h1>Welcome to Trees Knoxville!</h1>
            <div className="Map">
                <MapContainer />
            </div>        
        </div>

    );
}
