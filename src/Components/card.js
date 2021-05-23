import React from 'react'

const Card = ({ title, messaje, imageurl }) => {


	return (
		<>
			<div className="carrousel-item">
				<img className="carrousel-item__img" src={imageurl} alt="" />
				<div className="carrousel-item__details">
					<p className="carrousel-item__details--title">{title}</p>
					<p className="carrousel-item__details--subtitle">{messaje}</p>
				</div>
			</div>
		</>


	)
}

export { Card };