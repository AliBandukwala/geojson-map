import BBoxValuesForm from "./components/bbox_value_form/bbox_value_form"
import DisplayGeoJsonFeatures from "./components/display_features/display_features"

const GeoJson = () => {
    return (
        <div style={{position: 'relative'}} >
            <BBoxValuesForm />
            <DisplayGeoJsonFeatures />
        </div>
    )
}

export default GeoJson