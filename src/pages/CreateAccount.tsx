import googleLogo from '../images/googleLogo.png'
import '../css/pages/createAccount.css'
import '../css/global.css'
import { HeaderBack } from '../componentsExport/Exports';

export function CreateAccount(){
    return (

        <div className="createAccount-container">

            <HeaderBack />

            <h1 className="createAccount-h1" >Criar conta</h1>
            <p className="createAccount-p">Crie uma conta para poder ter acesso a conteúdos exclusivos do aplicativo.</p>

            <main className="createAccount-main">

                <label className="createAccount-label" htmlFor="">Nome de usuário</label>
                <input className="createAccount-input" />
                <label className="createAccount-label" htmlFor="">Senha</label>
                <input className="createAccount-input" type="password" />

                <button className="buttonCreacteAccount createAccount-button">Criar conta</button>
                <button className="buttonLoginWithGoogle createAccount-button">
                    <img className="googleLogo createAccount-img" src={googleLogo} />
                    Entrar com o Google
                </button>

            </main>
        </div>

    );
}