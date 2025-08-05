import Footer from "../components/Footer";
import Header from "../components/Header";
import InputLab from "../components/InputLab";
import Button from "../components/Button";

export default function Login(){
    return(
        <>
            <Header />
            <InputLab type="text" label="Usuário: "/>
            <InputLab type="password" label="Senha: "/>
            <Button label="Entrar"/>
            <Footer />
        </>
    )
}