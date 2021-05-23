import React, { useRef } from 'react'
import { Card } from './card'
import flechaDerecha from '../Images/derecha.svg'
import flechaizquierda from '../Images/izquierda.svg'


const Carousel = ({ showCarrusel = false, datos }) => {

	const showCard = useRef(null)

	const siguiente = () => {
		if (showCard.current.children.length > 0) {
			const primerCard = showCard.current.children[0];
			showCard.current.style.transition = `30ms easy-out all`
			const tamanoCard = showCard.current.children[0].offsetWidth;
			showCard.current.style.transform = `translateX(${tamanoCard}px)`

			const transicion = () => {
				showCard.current.style.transition = 'none';
				showCard.current.style.transform = `translateX(0)`;

				showCard.current.appendChild(primerCard);
				showCard.current.removeEventListener('transitionend', transicion);
			}

			showCard.current.addEventListener('transitionend', transicion);

		}
		console.log(showCard)

	}

	const anterior = () => {
		console.log('Anterior');
		if (showCard.current.children.length > 0) {
			const index = showCard.current.children.length - 1;
			const ultimoElemento = showCard.current.children[index];
			showCard.current.insertBefore(ultimoElemento, showCard.current.firstChild);

			showCard.current.style.transition = 'none';
			const tamañoSlide = showCard.current.children[0].offsetWidth;
			showCard.current.style.transform = `translateX(-${tamañoSlide}px)`;

			setTimeout(() => {
				showCard.current.style.transition = `300ms ease-out all`;
				showCard.current.style.transform = `translateX(0)`;
			}, 30);
		}
	}

	if (showCarrusel === false) {
		return (
			<>
				<section class="carrousel">
					<div class="carrousel__container" ref={showCard}>

					</div>
					<div className="controles" >

					</div>
				</section>
			</>
		)
	} else {
		return (
			<>
				<section class="carrousel">
					<div class="carrousel__container" ref={showCard}>
						<Card imageurl={datos.values[0].url}
							messaje={datos.values[0].message} title={datos.values[0].title}
						/>
						<Card imageurl={datos.values[0].url}
							messaje={datos.values[0].message} title={datos.values[0].title}
						/>
						<Card imageurl={datos.values[0].url}
							messaje={datos.values[0].message} title={datos.values[0].title}
						/>
						<Card imageurl={datos.values[0].url}
							messaje={datos.values[0].message} title={datos.values[0].title}
						/>
						<Card imageurl={datos.values[0].url}
							messaje={datos.values[0].message} title={datos.values[0].title}
						/>

					</div>
					<div className="controles" >
						<button className="flechaIzquierda" onClick={anterior}>
							<imag src={flechaizquierda} /> "left"
					</button>
						<button className="flechaDerecha" onClick={siguiente}>
							<imag src={flechaDerecha} /> "right"
					</button>

					</div>
				</section>


			</>




		)
	}

}

export { Carousel };