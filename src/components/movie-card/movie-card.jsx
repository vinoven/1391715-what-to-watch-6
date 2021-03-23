import React from 'react';
import {Link} from 'react-router-dom';
import {filmPropTypes} from '../../utils/prop-types';
import VideoPlayer from '../video-player/video-player';

const MovieCard = (props) => {
  const {film, onActiveFilmSet} = props;
  const handleMouseOver = (evt) => {
    onActiveFilmSet(evt.currentTarget);
  };

  return (
    <article className="small-movie-card catalog__movies-card" data-movie-id={film.id} onMouseOver={handleMouseOver}>
      <Link className="small-movie-card__link" to={`/films/${film.id}`}>
        <VideoPlayer film={film} />
        <h3 className="small-movie-card__title">
          {film.name}
        </h3>
      </Link>
    </article>
  );
};

MovieCard.propTypes = filmPropTypes;

export default MovieCard;
