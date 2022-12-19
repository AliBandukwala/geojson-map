import useGeoJsonData from "../../hooks/useGeoJsonData"
import { MapContainer, GeoJSON, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import useGeoJsonStore from "../../store/useGeoJsonStore"
import L from "leaflet"

const DisplayGeoJsonFeatures = () => {

    const {isError, isLoading, mapData} = useGeoJsonData()
    const {bbox} = useGeoJsonStore()

    // handle Error UI:
    if(isError.length > 0){
        return <div>ERROR: {isError}</div>
    }

    // handle Loading UI:
    else if(isLoading){
        return <div>LOADING...</div>
    }

    // show required display component in the Map: 
    else{
        const customMarker = L.icon({
            iconUrl: "https://unpkg.com/leaflet@1.4.0/dist/images/marker-icon.png",
            iconSize: [25, 41],
            iconAnchor: [10, 41],
        });

        const setIcon = ({ properties }: any, latlng: any) => {
            return L.marker(latlng, { icon: customMarker });
        };

        return(
            <MapContainer 
                style={{height: '100vh'}} 
                center={[bbox.min_lat, bbox.min_lon]} 
                zoom={14} 
            >
                <TileLayer 
                    url='http://{s}.tile.osm.org/{z}/{x}/{y}.png' 
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
                
                <GeoJSON data={mapData} pointToLayer={setIcon} />
            </MapContainer>
        )
    }
}

export default DisplayGeoJsonFeatures