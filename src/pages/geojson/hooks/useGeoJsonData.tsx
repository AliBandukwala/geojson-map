import axios from "axios"
import osmtogeojson from "osmtogeojson";
import { useEffect, useState } from "react"
import useGeoJsonStore from "../store/useGeoJsonStore";

const useGeoJsonData = () => {

    const { bbox } = useGeoJsonStore() // accessing bbox data from global store

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isError, setIsError] = useState<string>('');
    // state type should be Feature<Geometry, GeoJsonProperties>[], 
    //but interfaces not exposed:
    const [mapData, setMapData] = useState<any>(null); 

    const fetchData = async () => {
        try {
            setIsError('')
            setIsLoading(true)

            const resp = await axios.get(
                `https://api.openstreetmap.org/api/0.6/map?bbox=${bbox.min_lon},${bbox.min_lat},${bbox.max_lon},${bbox.max_lat}`
            );

            setIsLoading(false)

            if(resp.status !== 200) { 
                throw new Error(resp.data)
            }
            else{
                const newdata = osmtogeojson(resp.data);
                setMapData(newdata.features);
            }
        } 
        catch (error: any) {
            setIsError(error.toString())
        }
    };

    useEffect(() => {
        fetchData()
    },
        // as bbox is an Object (referential type), using primitive type values in dependency array:
        [bbox.max_lat, bbox.max_lon, bbox.min_lat, bbox.min_lon]
    ) 

    return { mapData, isLoading, isError, }
}

export default useGeoJsonData