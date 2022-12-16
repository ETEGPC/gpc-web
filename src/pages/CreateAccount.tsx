import googleLogo from '../images/googleLogo.png'
import '../css/pages/createAccount.css'
import '../css/global.css'
import { HeaderBack } from '../componentsExport/Exports';

export function CreateAccount(){
    return (

        <div>

            <HeaderBack />

            <h1>Criar conta</h1>
            <p>Crie uma conta para poder ter acesso a conteúdos exclusivos do aplicativo.</p>

            <main>

                <label htmlFor="">Nome de usuário</label>
                <input />
                <label htmlFor="">Senha</label>
                <input type="password" />

                <button className="buttonCreacteAccount">Criar conta</button>
                <button className="buttonLoginWithGoogle">
                    <img className="googleLogo" src={googleLogo} />
                    Entrar com o Google
                </button>

            </main>
        </div>

    );
}