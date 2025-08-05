import Input from "./Input";
import Label from "./Label";

export default function TypePecas({id, type, label}) {
    return (
        <>
            <Label htmlFor={id} />{label}
            <Input id={id} type={type} />
        </>
    )
}