import {adaptFilm} from "../utils/adapter";
import {ActionCreator} from "./action";

export const fetchFilmsList = () => (dispatch, getState, api) => {
  api.get(`/films`)
  .then((response) => response.data.map((film) => adaptFilm(film)))
  .then((films) => dispatch(ActionCreator.loadFilms(films)));
};
