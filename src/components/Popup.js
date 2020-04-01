import React from 'react'

function Popup({ selected, closePopup }) {

	const handleImage = (e) => {
		e.target.src = 'https://www.galamedianews.com/photo/share/no-image-300x400.jpg'
	}
	return (
		<section className="popup">
			<div className="content">
				<h2>{selected.Title} <span>({selected.Year})</span></h2>
				<p className="rating">Rating: {selected.imdbRating}</p>
				<div className="plot">
					<img src={selected.Poster} onError={handleImage} />
					<p>{selected.Plot}</p>
				</div>
				<button className="close" onClick={closePopup}>Close</button>
			</div>
		</section>
	)
}

export default Popup
