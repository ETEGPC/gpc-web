import React from 'react';
import imageExample from '../images/imageExample.png'
import '../styles/components/carousel.css';

export function Carousel(){

	//Current image of carousel
	let currentImage:number = 0;

	//Current circle of carousel
	let currentCircle:number = 1;
	
	function carousel(){

		const carouselImages = document.getElementById('carousel-images') as HTMLDivElement;
		const images:any = document.querySelectorAll('#carousel-images div');
		currentImage++;

		if(currentImage > images.length - 1){
			currentImage = 0;
		}

		carouselImages.style.transform = `translateX(${-currentImage * 20}%)`;

		//Variable to storage all circles of carousel
		let circles:any = document.querySelectorAll('.circles div');

		if (currentCircle < circles.length && currentCircle >= 1){

			circles[currentCircle].style.backgroundColor = "#010030";			
			circles[currentCircle - 1].style.backgroundColor = "transparent";			
			currentCircle += 1;

		}else if(currentCircle < circles.length){

			circles[currentCircle].style.backgroundColor = "#010030";			
			currentCircle += 1;

		}else if(currentCircle === circles.length) {

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

	return(

		<div className="carousel-container">

				<div className="carousel-images" id="carousel-images">

					<div className="carousel-img">
						<h3>Título</h3>
						<p>Descição Descição Descição Descição Descição Descição Descição Descição Descição Descição Descição</p>
						<img src={imageExample} alt="Imagem do carrossel" />
					</div>


					<div className="carousel-img">
						<h3>Título</h3>
						<p>Descição Descição Descição Descição Descição Descição Descição Descição Descição Descição Descição</p>
						<img src={imageExample} alt="Imagem do carrossel" />
					</div>


					<div className="carousel-img">
						<h3>Título</h3>
						<p>Descição Descição Descição Descição Descição Descição Descição Descição Descição Descição Descição</p>
						<img src={imageExample} alt="Imagem do carrossel" />
					</div>


					<div className="carousel-img">
						<h3>Título</h3>
						<p>Descição Descição Descição Descição Descição Descição Descição Descição Descição Descição Descição</p>
						<img src={imageExample} alt="Imagem do carrossel" />
					</div>


					<div className="carousel-img">
						<h3>Título</h3>
						<p>Descição Descição Descição Descição Descição Descição Descição Descição Descição Descição Descição</p>
						<img src={imageExample} alt="Imagem do carrossel" />
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