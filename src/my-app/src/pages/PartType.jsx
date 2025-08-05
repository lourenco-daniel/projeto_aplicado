import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import TypePecas from '../components/TypePecas.jsx'
import Button from '../components/Button.jsx'

export default function PartType() {
    return(
        <>  
            <Header className="header" content="Cadastrar Peças"/>
            <TypePecas id="nome-peca" label="Nome da Peça:" type="text" />
            <h2>Tipo de Peça:</h2>
            <TypePecas id="transmissao-embreagem" label="Transmissão e Embreagem" type="radio" />
            <TypePecas id="suspencao-rodas" label="Suspensão e Rodas" type="radio" />
            <TypePecas id="freios" label="Freios" type="radio" />
            <TypePecas id="motor-sistema-aliment" label="Motor e Sistema de Alimentação" type="radio" />
            <TypePecas id="sistema-eletrico" label="Sistema Elétrico e Eletrônico" type="radio" />
            <TypePecas id="conforto-climatizacao" label="Conforto e Climatização" type="radio" />    
            <a href="/submitlist">Subir Lista</a>
            <Button label="Cadastrar Peça" />
            <Footer className="footer" content="Todos os direitos reservados"></Footer>
        </>
    )
}