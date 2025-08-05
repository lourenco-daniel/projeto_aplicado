import InputLab from './InputLab.jsx'
import InputRadio from './InputRadio.jsx'
import Ancora from './Ancora.jsx'
import styles from './partRegister.module.css'

export default function PartRegister(){
    return(
        <>  
        <form>
            <fieldset className={styles.fieldset}>
                <legend>Cadastro de Peças</legend>
                <div className='info-pecas'>
                    <legend>Informações do Produto</legend>
                    <InputLab id="nome-peca" label="Nome da Peça:" type="text" />
                    <InputLab id="marca" label="Marca" type="text" />
                    <InputLab id="descricao" label="Descrição:" type="text" /> 
                    <InputLab id="preco" label="Preço:" type="text" />
                    <InputLab id="data-aquisicao" label="Data Aquisição:" type="date" />
                    <InputLab id="codigo-produto" label="Código do Produto:" type="text" />
                </div>
                <div className='categoria-pecas'>
                    <legend>Categoria</legend>
                    <InputRadio id="transmissao-embreagem" label="Transmissão e Embreagem" />
                    <InputRadio id="suspencao-rodas" label="Suspensão e Rodas" />
                    <InputRadio id="freios" label="Freios" />
                    <InputRadio id="motor-sistema-aliment" label="Motor e Sistema de Alimentação" />
                    <InputRadio id="sistema-eletrico" label="Sistema Elétrico e Eletrônico" />
                    <InputRadio id="conforto-climatizacao" label="Conforto e Climatização" />      
                </div>
                <Ancora href="/submitlist" label="Subir Lista"/>
                <InputLab id="button-register" label="Cadastrar Peça" type="submit" />
            </fieldset>
        </form>
        </>
    )
}
