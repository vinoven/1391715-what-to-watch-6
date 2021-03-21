import React, {useEffect} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import MainPage from '../main-page/main-page';
import MoviePage from '../movie-page/movie-page';
import MyList from '../my-list/my-list';
import AddReview from '../add-review/add-review';
import Player from '../player/player';
import SignIn from '../sign-in/sign-in';
import PageNotFound from '../page-not-found/page-not-found';
import {filmsPropTypes, promoPropTypes} from '../../utils/prop-types';
import {connect} from 'react-redux';
import {fetchFilmsList} from '../../store/api-actions';
import LoadingSpinner from '../loading-spinner/loading-spinner';
import PropTypes from 'prop-types';


const App = (props) => {
  const {films, isFilmsLoaded, loadFilms, promo} = props;

  useEffect(() => {
    if (!isFilmsLoaded) {
      loadFilms();
    }
  }, [isFilmsLoaded]);

  if (!isFilmsLoaded) {
    return (
      <LoadingSpinner />
    );
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainPage promo={promo} />
        </Route>
        <Route exact path="/login">
          <SignIn />
        </Route>
        <Route exact path="/films/:id?" render={(defaultProps) => (
          <MoviePage
            films={films}
            {...defaultProps} />
        )} />
        <Route exact path="/films/:id?/review" render={(defaultProps) => (
          <AddReview
            films={films}
            {...defaultProps} />
        )} />
        <Route exact path="/player/:id?" render={(defaultProps) => (
          <Player
            films={films}
            {...defaultProps} />
        )} />
        <Route exact path="/mylist">
          <MyList films={films} />
        </Route>
        <Route>
          <PageNotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

const mapStateToProps = (state) => ({
  films: state.films,
  isFilmsLoaded: state.isFilmsLoaded
});

const mapDispatchToProps = (dispatch) => ({
  loadFilms() {
    dispatch(fetchFilmsList());
  }
});

App.propTypes = {
  films: filmsPropTypes,
  promo: promoPropTypes,
  isFilmsLoaded: PropTypes.bool.isRequired,
  loadFilms: PropTypes.func.isRequired
};

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
