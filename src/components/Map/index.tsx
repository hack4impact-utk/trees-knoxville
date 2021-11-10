import Tree from "../utils/types";
import React, { FunctionComponent } from "react";
import Map from "google-map-react";
import styles from "../Map.module.css";
import Marker from "../Marker";

interface Trees {
    trees: Tree[];
}

const MapContainer: FunctionComponent<Trees> = ({trees}) => {
    console.log(trees);
    return (
        <div className = {styles.Map} >
            <Map
            bootstrapURLKeys={{key: process.env.NEXT_PUBLIC_MAPS_API_KEY ?? ''}}
            defaultCenter={{ lat: 35.96, lng: -83.92 }}
            defaultZoom={11}>
            <Marker lat={35.96} lng={-83.92} />

            </Map>
        </div>
    );
};

export default MapContainer;