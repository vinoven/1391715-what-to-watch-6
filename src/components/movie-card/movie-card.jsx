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
    <article className="small-movie-card catalog__movies-card" data-movie-id={film.id} onMouseOver = {handleMouseOver}>
      <VideoPlayer film={film}/>
      {/* <div className="small-movie-card__image">
        <img src={film.previewImage} alt={film.name} width="280" height="175" />
      </div> */}
      <h3 className="small-movie-card__title">
        <Link className="small-movie-card__link" to={`/films/${film.id}`}>{film.name}</Link>
      </h3>
    </article>
  );
};

MovieCard.propTypes = filmPropTypes;

export default MovieCard;
