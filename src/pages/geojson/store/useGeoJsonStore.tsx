import create from "zustand";
import { IBBox } from "../../../models/bbox_model";

interface IGeoJsonStore {
    bbox: IBBox,
    setBboxData: Function,
}

// default value for BBox for app initialisation:
export const defaultBBoxValues = { 
    min_lon: 11.54, 
    min_lat: 48.14, 
    max_lon: 11.541, 
    max_lat: 48.141,
} as IBBox

/* Global Store to keep and change BBox data */
const useGeoJsonStore = create<IGeoJsonStore>((set) => ({
    bbox: defaultBBoxValues,
    setBboxData: (newBBox: IBBox) => { set({ bbox: newBBox }) },
}))

export default useGeoJsonStore