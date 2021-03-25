import React, {useEffect} from 'react';
import AddReviewForm from '../add-review-form/add-review-form';
import {Link} from 'react-router-dom';
import {filmPropTypes} from '../../utils/prop-types';
import {connect} from 'react-redux';
import {fetchFilm, fetchFilmComments} from '../../store/api-actions';
import LoadingSpinner from '../loading-spinner/loading-spinner';
import PropTypes from 'prop-types';


// import {getFilmDataById} from '../../utils/utils';

const AddReview = (props) => {
  const {isSelectedFilmLoaded, selectedMovie, onFilmLoad, onReviewsLoad} = props;
  const filmId = Number(props.match.params.id);

  useEffect(() => {
    if (!isSelectedFilmLoaded) {
      onFilmLoad(filmId);
      onReviewsLoad(filmId);
    }
  }, [isSelectedFilmLoaded]);

  if (!isSelectedFilmLoaded) {
    return (
      <LoadingSpinner />
    );
  }

  return (
    <section className="movie-card movie-card--full">
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img src={selectedMovie.backgroundImage} alt={selectedMovie.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <div className="logo">
            <Link to="/" className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to="/films/" className="breadcrumbs__link">{selectedMovie.name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>

          <div className="user-block">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
            </div>
          </div>
        </header>

        <div className="movie-card__poster movie-card__poster--small">
          <img src={selectedMovie.posterImage} alt={selectedMovie.name} width="218" height="327" />
        </div>
      </div>

      <AddReviewForm />

    </section>
  );
};

const mapStateToProps = (state) => ({
  selectedMovie: state.selectedMovie,
  isSelectedFilmLoaded: state.isSelectedFilmLoaded
});

const mapDispatchToProps = (dispatch) => ({
  onFilmLoad(id) {
    dispatch(fetchFilm(id));
  },
  onFilmReviewsLoad(id) {
    dispatch(fetchFilmComments(id));
  }
});

AddReview.propTypes = {
  isSelectedFilmLoaded: PropTypes.bool.isRequired,
  selectedMovie: filmPropTypes,
  onFilmLoad: PropTypes.func.isRequired,
  onReviewsLoad: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    })
  })
};

export {AddReview};
export default connect(mapStateToProps, mapDispatchToProps)(AddReview);
