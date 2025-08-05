import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import PartRegister from '../components/PartRegister.jsx'

export default function PartType() {
    return(
        <>  
            <Header className="header" content="Peças Automotivas"/>
            <PartRegister />
            <Footer className="footer" content="Todos os direitos reservados"></Footer>
        </>
    )
}