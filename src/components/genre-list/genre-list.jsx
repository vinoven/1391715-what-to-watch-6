import React from 'react';
import {GENRE_OPTIONS, MAX_GENRES_COUNT} from '../../utils/const';
import {filmsPropTypes} from '../../utils/prop-types';
import GenreItem from '../genre-item/genre-item';

const GenreList = (props) => {
  const {films} = props;
  const defineGenres = (data) => {
    const genresList = Array.from(new Set(data.map((film) => film.genre))).slice(0, MAX_GENRES_COUNT);
    genresList.unshift(GENRE_OPTIONS.ALL_GENRES);
    return genresList;
  };

  const genresList = defineGenres(films);

  return (
    <ul className="catalog__genres-list">
      {genresList.map((genre, id)=> <GenreItem key={id} genreTitle={genre} />)}
    </ul>
  );
};

GenreList.propTypes = filmsPropTypes;
export default GenreList;
