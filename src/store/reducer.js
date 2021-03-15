import {ActionType} from "./action";
import filmList from '../mocks/films';
import {FILMS_TO_RENDER_COUNT} from '../utils/const';

const initialState = {
  films: filmList,
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
  }

  return state;
};

export {reducer};
