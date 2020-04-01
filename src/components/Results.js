import React from 'react'

import Result from './Result'

function Results({ results, openPopup }) {

	const handleImage = (e) => {
		e.target.src = 'https://www.galamedianews.com/photo/share/no-image-300x400.jpg'
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
