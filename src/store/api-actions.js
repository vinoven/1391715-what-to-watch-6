import {adaptFilm} from "../utils/adapter";
import {ActionCreator} from "./action";
import {AuthorizationStatus} from '../utils/const';

export const fetchFilmsList = () => (dispatch, _getState, api) => {
  api.get(`/films`)
  .then((response) => response.data.map((film) => adaptFilm(film)))
  .then((films) => dispatch(ActionCreator.loadFilms(films)));
};

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(`/login`, {email, password})
    .then((response) => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH, response.data)))
    .then(() => dispatch(ActionCreator.redirectToRoute(`/`)))
);
