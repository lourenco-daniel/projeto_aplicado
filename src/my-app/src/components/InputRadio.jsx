import Label from './Label'
import styles from './inputRadio.module.css'
export default function InputRadio({id, label}) {
    return(
        <>  
            <Label label={label}/>
            <input className={styles.InputRadio} type="radio" name="" id={id} />
        </>
    )
}