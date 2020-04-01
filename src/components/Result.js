import React from 'react'

function Result({ result, openPopup, handleImage }) {
	return (
		<div className="result" onClick={() => openPopup(result.imdbID)}>
			<img src={result.Poster} onError={handleImage} />
			<h3>{result.Title}</h3>
		</div>
	)
}

export default Result
