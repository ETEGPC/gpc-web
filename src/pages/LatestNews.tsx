import { Menu } from "../components/Menu";
// import image from '../images/imageExample.png'
// import { Link } from "react-router-dom";
import '../styles/pages/latestNews.css';
import { CloseMenu } from '../components/Menu';
import api from "../services/api";
import { INews } from "../@types/api";
import { useEffect, useState} from "react";

export function LatestNews() {
	document.title = 'ETE GPC | Últimas notícias';

	const [latestNews, setLatestNews] = useState<INews[]>([]);

	async function getLatestNews() {
		await api.http.get('/news').then(resp => {
			setLatestNews(resp.data);
		}).catch(err => {
			console.error(err);
			alert('Houve um erro ao buscar os dados')
		})
	}

	useEffect(() => {
		getLatestNews();
	})

	return (

		<div className="container">

			<Menu />

			<div className="latestNews-container" onClick={CloseMenu}>

				<h1 className="latestNews-h1" >Últimas notícias</h1>
				{
					latestNews.map(news => {
						return (
								<div key={news.id} className="latestNews-news">

									<div className="latestNews-content">

										<img src={news.image.imageUrl} className="content-img" alt="Imagem da notícia" />
										<h4 className="content-h4">{news.title} <a href={news.url} rel='noreferrer' target="_blank" className="latestNews-p" >Ler matéria</a></h4>

									</div>

								</div>

							);
					})
				}

			</div>

		</div>

	);
}