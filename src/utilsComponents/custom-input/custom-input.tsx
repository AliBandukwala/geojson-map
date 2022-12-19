import styles from './custom-input.module.css'

interface CustomInputProps {
    id: string,
    label: string,
    value: number,
    onChangeHandler: Function,
}

const CustomInput = ({id, label, value, onChangeHandler}: CustomInputProps) => {
    return(
        <p>
            <label className={styles.label}  htmlFor={id}>{label}</label>
            <input 
                id={id} 
                onChange={ (e) => onChangeHandler(e) } 
                value={value} 
            />
        </p>
    )
}

export default CustomInput