import React, {useState} from 'react';
import MovieCard from '../movie-card/movie-card';
import {filmsPropTypes} from '../../utils/prop-types';

const MoviesList = (props) => {
  const {films} = props;
  const [filmId, setFilmId] = useState(null);

  const onActiveFilmSet = (activeFilm) => {
    setFilmId(activeFilm.dataset.movieId);
  };

  return (
    <div className="catalog__movies-list">
      {films.map((film) => <MovieCard key={film.id} film={film} onActiveFilmSet = {onActiveFilmSet} />)}
    </div>
  );
};

MoviesList.propTypes = filmsPropTypes;

export default MoviesList;
