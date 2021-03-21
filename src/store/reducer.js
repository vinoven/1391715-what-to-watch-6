import {ActionType} from "./action";
import {FILMS_TO_RENDER_COUNT} from '../utils/const';

const initialState = {
  films: [],
  isFilmsLoaded: false,
  genre: `All genres`,
  filmsToShowCount: FILMS_TO_RENDER_COUNT.BY_DEFAULT
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return {
        ...state,
        genre: action.payload
      };
    case ActionType.SET_FILMS_TO_SHOW_COUNT:
      return {
        ...state,
        filmsToShowCount: state.filmsToShowCount + action.payload
      };
    case ActionType.RESET_FILMS_TO_SHOW_COUNT:
      return {
        ...state,
        filmsToShowCount: initialState.filmsToShowCount
      };
    case ActionType.LOAD_FILMS:
      return {
        ...state,
        films: action.payload,
        isFilmsLoaded: true
      };
  }

  return state;
};

export {reducer};
