export default function Ancora({href, nameFile, label}){
    return(
        <>
            <a href={href} download={nameFile}>{label}</a>
        </>
    )
}