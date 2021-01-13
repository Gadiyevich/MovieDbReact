import React from 'react'

import Result from './Result'

function Results({ results, openPopup }) {

	const handleImage = (e) => {
		e.target.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLbrFDVFpFny8ur3undAnHk8Zg2VOEVqXoaw&usqp=CAU'
	}
	return (
		<section className="results">
			{results.map(result => (
				<Result key={result.imdbID} result={result} openPopup={openPopup} handleImage={handleImage} />
			))}
		</section>
	)
}

export default Results
