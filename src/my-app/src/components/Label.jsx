export default function Label({id, className, htmlFor, label}) {
    return(
        <>
            <label id={id} className={className} htmlFor={htmlFor} />{label}
        </>
    )
}