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

export const fetchFilm = (id) => (dispatch, _getState, api) => (
  api.get(`/films/${id}`)
  .then((response) => adaptFilm(response.data))
  .then((film)=> {
    dispatch(ActionCreator.selectFilm(film));
  })
);

export const fetchCommentsOnTheFilm = (id) => (dispatch, _getState, api) => (
  api.get(`/comments/${id}`)
  .then((response)=> {
    dispatch(ActionCreator.loadComments(response.data));
  })
);

export const postComment = ({rating, comment}, id) => (dispatch, _getState, api) => (
  api.post(`/comments/${id}`, {rating, comment})
    .then((response) => {
      dispatch(ActionCreator.postComment(response.data));
      return response;
    })
    .then((response) => dispatch(ActionCreator.loadComments(response.data)))
    .then(() => dispatch(ActionCreator.redirectToRoute(`/films/${id}`)))
    .catch()
);
