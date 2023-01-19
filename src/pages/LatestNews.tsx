import { Menu } from "../components/Menu";
import image from '../images/imageExample.png'
import { Link } from "react-router-dom";
import '../styles/pages/latestNews.css';
//import { NewsOpen } from '../pages/NewsOpen';

export function LatestNews(){

    
    return (
        <div className="latesnews-container">

            <Menu />

            <div className="openNew" id="openNew">


                <div className="openNew-content">
                    <h1 className="openNew-content-h1">Mostra de Inovação - Armazém da Criatividade</h1>
                    <img className="openNew-content-img" src={image} alt="" />
                    <p className="openNew-content-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ea in corporis maxime eveniet quibusdam dolor magnam molestiae. Suscipit voluptate obcaecati libero eaque distinctio vero architecto, sequi ullam beatae aliquam. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab, quos. Quod fuga quisquam et ullam fugiat amet adipisci, eaque ipsa consequuntur explicabo? Quas obcaecati earum illum nobis ex qui itaque?</p>
                </div>

            </div>

        
            <h1 className="latestNews-h1" >Últimas notícias</h1>


            <div className="latestNews-div">
                <div className="latestNews-subdiv">
                    <img src={image} className="latestNews-img" alt="" />
                    
                    <h2 className="latestNews-h2">Mostra de Inovação - Armazém da Criatividade - <Link to='/noticiaAberta' className="latestNews-p" >Ler matéria</Link></h2>

                    
                </div>

                    <hr className="latestNews-hr" />
            </div>
        </div>

    );
}