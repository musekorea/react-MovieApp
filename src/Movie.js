import React from 'react';
import propTypes from 'prop-types';

function Movie({ id, title, year, rating, summary, poster }) {
  return (
    <div>
      <h3>{id}</h3>
      <h3>{title}</h3>
      <p>
        {year}
        <span> </span>
        {rating}
      </p>
      <p>{summary}</p>
      <img src={poster} alt="" />
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
};

export default Movie;
