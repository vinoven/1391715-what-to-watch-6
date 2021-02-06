import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import MainPage from '../main-page/main-page';
import MoviePage from '../movie-page/movie-page';
import MyList from '../my-list/my-list';
import AddReview from '../add-review/add-review';
import Player from '../player/player';
import SignIn from '../sign-in/sign-in';
import PageNotFound from '../page-not-found/page-not-found';

const App = (props) => {
  const {films, promo} = props;
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainPage films={films} promo={promo} />
        </Route>
        <Route exact path="/login">
          <SignIn />
        </Route>
        <Route exact path="/films/:id?">
          <MoviePage />
        </Route>
        <Route exact path="/films/:id?/review">
          <AddReview />
        </Route>
        <Route exact path="/player/:id?">
          <Player />
        </Route>
        <Route exact path="/mylist">
          <MyList />
        </Route>
        <Route>
          <PageNotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  films: PropTypes.array.isRequired,
  promo: PropTypes.object.isRequired
};

export default App;
