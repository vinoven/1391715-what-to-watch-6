import React, { useState } from 'react';
import MovieCard from '../movie-card/movie-card';

const MoviesList = (props) => {
  const { films } = props;
  const [filmId, setFilmId] = useState(null);

  return (
    <div className="catalog__movies-list">
      {films.map((film) => <MovieCard key={film.id} film={film} />)}
    </div>
  );
};

export default MoviesList;
