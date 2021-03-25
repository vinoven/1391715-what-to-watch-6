import React from 'react';
import {Link} from 'react-router-dom';
import {filmPropTypes} from '../../utils/prop-types';
import VideoPlayer from '../video-player/video-player';
import {fetchFilm, fetchCommentsOnTheFilm} from '../../store/api-actions';
import {connect} from 'react-redux';

const MovieCard = (props) => {
  const {film, onActiveFilmSet, onFilmLoad, onFilmReviewsLoad} = props;
  const handleMouseOver = (evt) => {
    onActiveFilmSet(evt.currentTarget);
  };

  const handleDataLoading = (id) => {
    onFilmLoad(id);
    onFilmReviewsLoad(id);
  };

  return (
    <article className="small-movie-card catalog__movies-card" data-movie-id={film.id} onMouseOver={handleMouseOver}>
      <Link className="small-movie-card__link" to={`/films/${film.id}`} onClick={() => handleDataLoading(film.id)}>
        <VideoPlayer film={film} />
        <h3 className="small-movie-card__title">
          {film.name}
        </h3>
      </Link>
    </article>
  );
};

const mapDispatchToProps = (dispatch) => ({
  onFilmLoad(id) {
    dispatch(fetchFilm(id));
  },
  onFilmReviewsLoad(id) {
    dispatch(fetchCommentsOnTheFilm(id));
  }
});

MovieCard.propTypes = filmPropTypes;

export {MovieCard};
export default connect(null, mapDispatchToProps)(MovieCard);
