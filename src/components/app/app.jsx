import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import MainPage from '../main-page/main-page';
import MoviePage from '../movie-page/movie-page';
import MyList from '../my-list/my-list';
import AddReview from '../add-review/add-review';
import Player from '../player/player';
import SignIn from '../sign-in/sign-in';
import PageNotFound from '../page-not-found/page-not-found';
import {filmsPropTypes, promoPropTypes} from '../../utils/prop-types';

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
          <MoviePage film = {films[0]}/>
        </Route>
        <Route exact path="/films/:id?/review">
          <AddReview film = {films[0]} />
        </Route>
        <Route exact path="/player/:id?">
          <Player film = {films[0]} />
        </Route>
        <Route exact path="/mylist">
          <MyList films = {films} />
        </Route>
        <Route>
          <PageNotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  films: filmsPropTypes,
  promo: promoPropTypes
};

export default App;
