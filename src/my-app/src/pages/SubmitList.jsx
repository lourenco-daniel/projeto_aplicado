import Header from "../components/Header"
import Footer from "../components/Footer"
import Label from "../components/Label"
import Input from "../components/Input"
export default function SubmitList() {
    return(
        <>
            <Header></Header>
            <Label label="Suba Listas: " />
            <Input type="file"/>
            <Footer></Footer>
        </>
    )
}