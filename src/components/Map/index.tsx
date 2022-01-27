import { Tree } from "utils/types";
import Map from "google-map-react";
import { FunctionComponent } from "react";
import Marker from "src/components/Marker"
import styles from "./styles.module.scss";
import Navigation from "src/components/Layout/Navigation";
interface Trees {
    trees: Tree[];
}


const MapContainer: FunctionComponent<Trees> = ({ trees }) => {
    return (
        <main className={styles.main}>
            <Navigation/>
            <div className={styles.map}>
                <Map
                bootstrapURLKeys={{key: process.env.NEXT_PUBLIC_MAPS_API_KEY ?? ''}}
                defaultCenter={{ lat: 35.96, lng: -83.92 }}
                defaultZoom={11}>
                    {trees && trees.map((tree: Tree) => 
                        <Marker lat={Number(tree.coordinates?.latitude)} lng={Number(tree.coordinates?.longitude)} />)}
                </Map>
            </div>
        </main>
    )
}

export default MapContainer;
