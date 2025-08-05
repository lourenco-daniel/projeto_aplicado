import Header from "../components/Header"
import Footer from "../components/Footer"
import InputLab from "../components/InputLab"
import Ancora from "../components/Ancora"
export default function SubmitList() {
    return(
        <>
            <Header></Header>
            <InputLab type="file" label="Envie uma Lista: "/>
            <Ancora href="../archives/modelo_lista.csv" nameFile="modelo_lista.csv" label="Baixe um Modelo"/>
            <Footer></Footer>
        </>
    )
}