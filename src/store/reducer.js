import {ActionType} from "./action";
import {AuthorizationStatus, FILMS_TO_RENDER_COUNT} from '../utils/const';

const initialState = {
  films: [],
  isFilmsLoaded: false,
  genre: `All genres`,
  filmsToShowCount: FILMS_TO_RENDER_COUNT.BY_DEFAULT,
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  user: {}
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
    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload.authStatus,
        user: action.payload.user
      };
  }

  return state;
};

export {reducer};
