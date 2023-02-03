import React from 'react';
import noticesPlaceHolder from '../images/imageExample3.svg';
import eventsPlaceHolder from '../images/imageExample4.svg';
import '../styles/components/carousel.css';
import { useEffect, useState } from 'react';
import api from '../services/api';

interface ICarrossel {
	title?: string,
	description?: string,
	url?: string,
	schoolClass?: string,
	image?: {
		imageUrl?: string
	},
	date?: Date
}

export function Carousel() {
	const [carouselData, setCarousselData] = useState<ICarrossel[]>([]);

	async function getCarouselData() {
		const data = await (await api.http.get('/carrossel-data')).data
		setCarousselData(data);
	}

	useEffect(() => {
		if (carouselData.length === 0) {
			getCarouselData();
		}
	})

	//Current image of carousel
	let currentImage: number = 0;

	//Current circle of carousel
	let currentCircle: number = 1;

	function carousel() {

		const carouselImages = document.getElementById('carousel-images') as HTMLDivElement;
		const images: any = document.querySelectorAll('#carousel-images div');
		currentImage++;

		if (currentImage > images.length - 1) {
			currentImage = 0;
		}

		carouselImages.style.transform = `translateX(${-currentImage * 20}%)`;

		//Variable to storage all circles of carousel
		let circles: any = document.querySelectorAll('.circles div');

		if (currentCircle < circles.length && currentCircle >= 1) {

			circles[currentCircle].style.backgroundColor = "#010030";
			circles[currentCircle - 1].style.backgroundColor = "transparent";
			currentCircle += 1;

		} else if (currentCircle < circles.length) {

			circles[currentCircle].style.backgroundColor = "#010030";
			currentCircle += 1;

		} else if (currentCircle === circles.length) {

			circles[0].style.backgroundColor = "#010030";
			circles[currentCircle - 1].style.backgroundColor = "transparent";
			currentCircle = 1;

		}

		circles[0].addEventListener('click', () => {

			carouselImages.style.transform = `translateX(0%)`;
			circles[0].style.backgroundColor = '#010030';

			setTimeout(() => {
				circles[0].style.backgroundColor = 'transparent';
			}, 350)

		})

		circles[1].addEventListener('click', () => {

			carouselImages.style.transform = `translateX(-20%)`;
			circles[1].style.backgroundColor = '#010030';

			setTimeout(() => {
				circles[1].style.backgroundColor = 'transparent';
			}, 350)

		})

		circles[2].addEventListener('click', () => {

			carouselImages.style.transform = `translateX(-40%)`;
			circles[2].style.backgroundColor = '#010030';

			setTimeout(() => {
				circles[2].style.backgroundColor = 'transparent';
			}, 350)

		})

		circles[3].addEventListener('click', () => {

			carouselImages.style.transform = `translateX(-60%)`;
			circles[3].style.backgroundColor = '#010030';

			setTimeout(() => {
				circles[3].style.backgroundColor = 'transparent';
			}, 350)

		})

		circles[4].addEventListener('click', () => {

			carouselImages.style.transform = `translateX(-80%)`;
			circles[4].style.backgroundColor = '#010030';

			setTimeout(() => {
				circles[4].style.backgroundColor = 'transparent';
			}, 350)
		})

	}

	setInterval(carousel, 2300);

	if (carouselData.length === 0) {
		return (
			<div className="carousel-container">

				<div className="carousel-images" id="carousel-images">

					<div className="carousel-img">
						<h3>Carregando...</h3>
						<p>Carregando as últimas atualizações de nossa escola, aguarde um pouco</p>
						<img src={noticesPlaceHolder} alt="Imagem do carrossel" />
					</div>

				</div>
			</div>
		)
	}

	return (

		<div className="carousel-container">

			<div className="carousel-images" id="carousel-images">

				<div className="carousel-img">
					<h3>{carouselData[0]?.title}</h3>
					<p>{carouselData[0].description}</p>
					<p style={{ marginTop: 30 }}>Turma: {carouselData[0].schoolClass}</p>
					<img src={noticesPlaceHolder} alt="Imagem do carrossel" />
				</div>

				<div className="carousel-img">
					<h3>{carouselData[1]?.title}</h3>
					<p>{carouselData[1].description}</p>
					<p style={{ marginTop: 30 }}>Turma: {carouselData[0].schoolClass}</p>
					<img src={noticesPlaceHolder} alt="Imagem do carrossel" />
				</div>


				<div className="carousel-img">
					<h3>{carouselData[2]?.title}</h3>
					<p>{carouselData[2].description}</p>
					<p style={{ marginTop: 30 }}>Turma: {carouselData[0].schoolClass}</p>
					<img src={noticesPlaceHolder} alt="Imagem do carrossel" />
				</div>


				<div className="carousel-img">
					<h3>{carouselData[3]?.title}</h3>
					<p style={{ marginTop: 20 }}>{carouselData[3].description}</p>
					<p style={{ marginTop: 50 }}>Data: { carouselData[3].date ? new Date(carouselData[3].date).toLocaleDateString() : 'Não há a data deste evento'}</p>
					<img src={eventsPlaceHolder} alt="Imagem do carrossel" />
				</div>


				<div className="carousel-img">
					<a href={carouselData[4].url} target="_blank" rel='noreferrer'>
						<h3>{carouselData[4]?.title}</h3>
					</a>
					<img src={carouselData[4].image?.imageUrl} height={250} alt={carouselData[4]?.title} />
				</div>

			</div>

			<div className="circles">
				<div className="circle" id="circle1"></div>
				<div className="circle" id="circle2"></div>
				<div className="circle" id="circle3"></div>
				<div className="circle" id="circle4"></div>
				<div className="circle" id="circle5"></div>
			</div>
		</div>
	);
}