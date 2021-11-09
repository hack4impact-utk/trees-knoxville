import Tree from "utils/types";
import Map from "google-map-react";


interface Trees {
    trees: Tree[];
}


const MapContainer: FunctionComponent<Trees> = ({trees}) => {
    return (
        <div className = "Map" style={{height: "500px"}}>
            <Map
            bootstrapURLKeys={{key: process.env.NEXT_PUBLIC_MAPS_API_KEY ?? ''}}
            defaultCenter={{ lat: 35.96, lng: -83.92 }}
            defaultZoom={11}>

            
            </Map>
        </div>
    )
}

export default MapContainer;