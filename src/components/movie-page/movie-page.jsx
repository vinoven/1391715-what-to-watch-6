import React, {useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {filmPropTypes} from '../../utils/prop-types';
import MovieTabs from '../movie-tabs/movie-tabs';
import MoviesList from '../movies-list/movies-list';
import {AuthorizationStatus} from '../../utils/const';
import {connect} from 'react-redux';
import {fetchFilm, fetchFilmComments} from '../../store/api-actions';
import LoadingSpinner from '../loading-spinner/loading-spinner';

const MoviePage = (props) => {
  const {films, authorizationStatus, redirectToMyList, selectedMovie, isSelectedFilmLoaded, onFilmLoad, onFilmReviewsLoad} = props;
  const filmId = Number(props.match.params.id);
  // const film = getFilmDataById(films, filmId);
  const history = useHistory();

  useEffect(() => {
    if (!isSelectedFilmLoaded) {
      onFilmLoad(filmId);
      onFilmReviewsLoad(filmId);
    }
  }, []);

  if (!isSelectedFilmLoaded) {
    return (
      <LoadingSpinner />
    );
  }

  return (
    <React.Fragment>
      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={selectedMovie.backgroundImage} alt={selectedMovie.name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header movie-card__head">
            <div className="logo">
              <Link to="/" className="logo__link">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </Link>
            </div>

            <div className="user-block">

              {(authorizationStatus === AuthorizationStatus.AUTH) ?
                <div className="user-block__avatar">
                  <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" onClick={() => redirectToMyList()} />
                </div> : <Link to="/login" className="user-block__link">Sign in</Link>
              }
            </div>

          </header>

          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{selectedMovie.name}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{selectedMovie.genre}</span>
                <span className="movie-card__year">{selectedMovie.released}</span>
              </p>

              <div className="movie-card__buttons">
                <button onClick = {() => history.push(`/player/${selectedMovie.id}`)} className="btn btn--play movie-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list movie-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
                {authorizationStatus === AuthorizationStatus.AUTH ? <Link to={`/films/${selectedMovie.id}/review`} className="btn movie-card__button">Add review</Link> : ``}
              </div>
            </div>
          </div>
        </div >

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={selectedMovie.posterImage} alt={selectedMovie.name} width="218" height="327" />
            </div>

            <MovieTabs />
          </div>
        </div>
      </section >

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <MoviesList films={films.filter((currentFilm)=>currentFilm.genre === selectedMovie.genre).slice(0, 3)}/>
        </section>

        <footer className="page-footer">
          <div className="logo">
            <Link to="/" className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus,
  isSelectedFilmLoaded: state.isSelectedFilmLoaded,
  selectedMovie: state.selectedMovie
});

MoviePage.propTypes = {
  ...filmPropTypes
};

const mapDispatchToProps = (dispatch) => ({
  onFilmLoad(id) {
    dispatch(fetchFilm(id));
  },
  onFilmReviewsLoad(id) {
    dispatch(fetchFilmComments(id));
  }
});

export {MoviePage};
export default connect(mapStateToProps, mapDispatchToProps)(MoviePage);

