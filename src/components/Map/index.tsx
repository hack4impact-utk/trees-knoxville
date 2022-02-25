import { Tree } from "utils/types";
import Map from "google-map-react";
import styles from "./Map.module.css"
import { FunctionComponent } from "react";
import Marker from "src/components/Marker"

interface Trees {
    trees: Tree[];
}


const MapContainer: FunctionComponent<Trees> = ({ trees }) => {
    return (
        <div className = {styles.Map} >
            <Map
            bootstrapURLKeys={{key: process.env.NEXT_PUBLIC_MAPS_API_KEY ?? ''}}
            defaultCenter={{ lat: 35.96, lng: -83.92 }}
            defaultZoom={11}>
                {trees && trees.map((tree: Tree) => 
                    <Marker lat={Number(tree.coordinates?.latitude)} lng={Number(tree.coordinates?.longitude)} />)}
            </Map>
        </div>
    )
}

export default MapContainer;