import { Menu } from '../components/Exports';
import image from '../images/imageExample.png';
import '../styles/pages/newsOpen.css';

export function NewsOpen(){
    return(

        <div className='newsOpen-container'>

            <Menu />

            <h1 className='newsOpen-h1'>Título da notícia</h1>
            <img src={image}  className='newsOpen-img'/>
            <p className='newsOpen-p'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum nihil id sequi aliquam officiis illo nobis rem consectetur! Repellat libero laborum distinctio eius vero unde dolorum? Perspiciatis fuga voluptates labore! Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ad odio vel magni debitis. Culpa, fugit repellendus. Mollitia enim culpa illo quod esse dolor eum eveniet doloribus molestiae? Officia, odio!</p>


        </div>

    );
}