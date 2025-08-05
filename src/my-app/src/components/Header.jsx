export default function Header(props) {
    return(
        <>
            <header className={props.className}>{props.content}</header>
        </>
    )
}