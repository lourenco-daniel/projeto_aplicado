import Input from "./Input";
import Label from "./Label";
import styles from "./inputLab.module.css"

export default function InputLab({id, type, label}) {
    return (
        <>
            <Label className={styles.InputLab} htmlFor={id} />{label}
            <Input className={styles.InputLab} id={id} type={type} />
        </>
    )
}