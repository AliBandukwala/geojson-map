import React, { useState } from "react"
import { IBBox } from "../../../../models/bbox_model"
import CustomInput from "../../../../utilsComponents/custom-input/custom-input"
import useGeoJsonStore, { defaultBBoxValues } from "../../store/useGeoJsonStore"
import styles from './bbox_value_form.module.css'

const BBoxValuesForm = () => {

    const { setBboxData } = useGeoJsonStore()

    const [inputBBoxValues, setInputBBoxValues] = useState<IBBox>(defaultBBoxValues)

    // Method to set bbox values in input, with required data validation:
    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target
        let number: number = parseInt(value)
        // Latitude is a decimal between -90 and 90 only
        if(id.includes('lat') && (number >= -90.0 && number <= 90.0)){
            setInputBBoxValues({
                ...inputBBoxValues,
                [id]: value,
            })
        }
        // longitude is a decimal between -180 and 180 only
        else if(id.includes('lon') && (number >= -180.0 && number <= 180.0)){
            setInputBBoxValues({
                ...inputBBoxValues,
                [id]: value,
            })
        }  
    }

    return (
        <form aria-label="form">
            <h3>Enter Desired Coordinates</h3>
            
            <CustomInput 
                value={inputBBoxValues.min_lon} 
                onChangeHandler={handleOnChange} 
                id='min_lon' 
                label="Min. Longitude (-180 to 180)" 
            />

            <CustomInput 
                value={inputBBoxValues.min_lat} 
                onChangeHandler={handleOnChange} 
                id='min_lat' 
                label="Min. Latitude (-90 to 90)"
            />

            <CustomInput 
                value={inputBBoxValues.max_lon}  
                onChangeHandler={handleOnChange} 
                id='max_lon' 
                label="Max. Longitude (-180 to 180)"
            />

            <CustomInput 
                value={inputBBoxValues.max_lat}  
                onChangeHandler={handleOnChange} 
                id='max_lat' 
                label="Max. Latitude (-90 to 90)"
            />

            <button 
                className={styles.button}
                onClick={(e) => { e.preventDefault(); setBboxData(inputBBoxValues); }}
            >
                Get Features
            </button>
        </form>
    )
}

export default BBoxValuesForm