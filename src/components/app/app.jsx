import React, {useEffect} from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import MainPage from '../main-page/main-page';
import MoviePage from '../movie-page/movie-page';
import MyList from '../my-list/my-list';
import AddReview from '../add-review/add-review';
import Player from '../player/player';
import SignIn from '../sign-in/sign-in';
import PageNotFound from '../page-not-found/page-not-found';
import {filmsPropTypes} from '../../utils/prop-types';
import {connect} from 'react-redux';
import {fetchFilmsList} from '../../store/api-actions';
import LoadingSpinner from '../loading-spinner/loading-spinner';
import PropTypes from 'prop-types';
import browserHistory from '../../services/browser-history';
import PrivateRoute from '../private-route/private-route';

const App = (props) => {
  const {films, isFilmsLoaded, loadFilms} = props;

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
    <Router history={browserHistory}>
      <Switch>
        <Route exact path="/" render={({history}) => {
          return <MainPage
            redirectToMyList={() => history.push(`/mylist`)}
            redirectToFilmPlayer={() => history.push(`/player/${films[0].id}`)}
          />;
        }} />
        <Route exact path="/login">
          <SignIn />
        </Route>
        <Route exact path="/films/:id" render={(defaultProps) => (
          <MoviePage
            films={films}
            {...defaultProps}
            redirectToMyList={() => defaultProps.history.push(`/mylist`)}
          />
        )} />
        <PrivateRoute exact path="/films/:id/review" render={(defaultProps) => (
          <AddReview
            {...defaultProps} />
        )} />
        <Route exact path="/player/:id" render={(defaultProps) => (
          <Player
            films={films}
            {...defaultProps} />
        )} />
        <PrivateRoute exact path="/mylist" render={()=>(<MyList films={films} />)} />
        <Route>
          <PageNotFound />
        </Route>
      </Switch>
    </Router>
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
  isFilmsLoaded: PropTypes.bool.isRequired,
  loadFilms: PropTypes.func.isRequired
};

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
