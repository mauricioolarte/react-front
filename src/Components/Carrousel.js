import React, { useRef, useContext } from 'react'
import { Card } from './card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import DataContext from '../utils/Datacontext'



const Carousel = ({ showCarrusel = false, datos }) => {

	const showCard = useRef(null)

	const { dataApp } = useContext(DataContext);

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


	console.log('esto es litcard')
	const listCard = dataApp.values.map((dato) =>

		<Card imageurl={dato.image_url}
			messaje={dato.message} title={dato.title}
		/>
	)


	if (showCarrusel === false) {
		return (
			<>
				<section className="carrousel">
					<div className="carrousel__container" ref={showCard}>

					</div>
					<div className="controles" >

					</div>
				</section>
			</>
		)
	} else {
		return (

			<section className="carrousel">
				<div className="carrousel__container" ref={showCard}>
					{listCard}
				</div>
				<div className="controles" >
					<button className="flechaIzquierda" onClick={anterior}>
						<FontAwesomeIcon icon={faAngleLeft} size="3x" />
					</button>
					<button className="flechaDerecha" onClick={siguiente}>
						<FontAwesomeIcon icon={faAngleRight} size="3x" />
					</button>

				</div>
			</section>

		)
	}

}

export { Carousel };