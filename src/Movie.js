import React from 'react';
import propTypes from 'prop-types';
import './css/App.css';

function Movie({ title, year, rating, summary, poster, genres }) {
  rating = `❤`.repeat(Math.ceil(Number(rating)) / 2);
  return (
    <div className="movie__frame">
      <img className="movie__poster" src={poster} alt={title} title={title} />
      <div className="movie__meta">
        <h3 className="movie__title">{title}</h3>
        <div className="yearRating">
          <span className="movie__year">{year} </span>
          <span className="movie__rating">{rating}</span>
        </div>
        <div className="movie__genres">
          {genres.map((genre, idx) => {
            if (idx >= 3) {
              return;
            }
            return (
              <span key={idx} className="genres__genre">
                {genres.length === 1 ? (
                  <span>{genre}</span>
                ) : (
                  <span>{genre + ' '}</span>
                )}
              </span>
            );
          })}
        </div>
        <p className="movie__summary">
          {summary.length > 60 ? summary.slice(0, 60) + '...' : summary}
        </p>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: propTypes.number.isRequired,
  title: propTypes.string.isRequired,
  year: propTypes.number.isRequired,
  rating: propTypes.number.isRequired,
  summary: propTypes.string.isRequired,
  poster: propTypes.string.isRequired,
  genres: propTypes.array.isRequired,
};

export default Movie;
