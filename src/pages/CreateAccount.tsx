import googleLogo from '../images/icons/google_icon.svg'
import '../styles/pages/createAccount.css'
import '../styles/global.css'
import { Menu } from '../components/Exports';

export function CreateAccount(){
    return (

        <div className="container">

            <Menu />

            <div className="createAccount-container">

                <h1 className="createAccount-h1" >Criar conta</h1>
                <p className="createAccount-p">Crie uma conta para poder ter acesso a conteúdos exclusivos do aplicativo.</p>

                <main className="createAccount-main">

                    <div className="createAccount-user-name">

                        <input required className="createAccount-user-name-input" type="text"/>
                        <label className="createAccount-user-name-label">Nome do usuário</label>

                    </div>

                    <div className="createAccount-password">

                        <input required className="createAccount-password-input" type="password"/>
                        <label className="createAccount-password-label">Senha</label>
                        
                    </div>

                    <button className="buttonCreacteAccount createAccount-button">Criar conta</button>
                    <button className="buttonLoginWithGoogle createAccount-button">
                        <img className="googleLogo createAccount-img" src={googleLogo} />
                        Entrar com o Google
                    </button>

                </main>

            </div>

        </div>

    );
}