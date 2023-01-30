import { Menu } from "../components/Menu";
import image from '../images/imageExample.png'
import { Link } from "react-router-dom";
import '../styles/pages/latestNews.css';
import { CloseMenu } from '../components/Menu';

export function LatestNews(){

    document.title = 'Últimas notícias';
    
    return (

        <div className="container">

            <Menu />

            <div className="latestNews-container" onClick={CloseMenu}>              
            
                <h1 className="latestNews-h1" >Últimas notícias</h1>

                <div className="latestNews-news">

                    <div className="latestNews-content">

                        <img src={image} className="content-img" alt="Imagem da notícia"/>                    
                        <h4 className="content-h4">Mostra de Inovação - Armazém da Criatividade - <Link to='#' className="latestNews-p" >Ler matéria</Link></h4>
                        
                    </div>                  

                </div>
                
            </div>

        </div>

    );
}