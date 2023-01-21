import { Menu } from "../components/Menu";
import image from '../images/imageExample.png'
import { Link } from "react-router-dom";
import '../styles/pages/latestNews.css';
import { CloseMenu } from '../components/Menu';

export function LatestNews(){

    document.title = 'ETE GPC | Últimas notícias';
    
    return (

        <div className="container">

            <Menu />

            <div className="latestNews-container" onClick={CloseMenu}>              
            
                <h1 className="latestNews-h1" >Últimas notícias</h1>

                <div className="latestNews-news">

                    <div className="latestNews-content">

                        <img src={image} className="content-img" alt="imagem referente à notícia"/>                    
                        <h2 className="content-h2">Mostra de Inovação - Armazém da Criatividade - <Link to='#' className="latestNews-p" >Ler matéria</Link></h2>
                        
                    </div>                  

                </div>


            </div>

        </div>

    );
}