import {ActionType} from "./action";
import {AuthorizationStatus, FILMS_TO_RENDER_COUNT} from '../utils/const';

const initialState = {
  films: [],
  isFilmsLoaded: false,
  genre: `All genres`,
  filmsToShowCount: FILMS_TO_RENDER_COUNT.BY_DEFAULT,
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  user: {},
  selectedMovie: {},
  isSelectedFilmLoaded: false,
  isCommentSent: false,
  selectedComments: []
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
    case ActionType.SELECT_FILM:
      return {
        ...state,
        selectedMovie: action.payload,
        isSelectedFilmLoaded: true
      };
    case ActionType.POST_COMMENT:
      return {
        ...state,
        isCommentSent: false
      };
    case ActionType.ENABLE_COMMENT_FLAG:
      return {
        ...state,
        isCommentSent: true
      };
    case ActionType.LOAD_COMMENTS:
      return {
        ...state,
        selectedComments: action.payload,
      };
  }

  return state;
};

export {reducer};
