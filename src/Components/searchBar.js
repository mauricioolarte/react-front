import React, { useState } from 'react'
import axios from 'axios'




const SearchBar = ({ getData, data }) => {

	const [searchWords, setsearchWords] = useState("");
	const [placeholderValue, setplacehoderValue] = useState("buscar...");

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log(searchWords);
		axios.post('http://localhost:8080/api/search', { words: searchWords })
			.then((values) => {
				console.log('consulta')

				console.log(values.data.values)
				getData({
					isData: true,
					values: values.data.values
				})
				console.log(data)
			})

		setplacehoderValue("")
	}


	return (


		<section className="main">

			<h2 className="main__title">¿Qué Anime Buscas?</h2>
			<form className="form" onSubmit={handleSubmit}>
				<input className="main__input" type="text" onChange={(e) => setsearchWords(e.target.value)} placeholder={placeholderValue} />
				<input className="main__buscar" type="submit" value="buscar" />
			</form>
		</section>




	)
}

export { SearchBar }