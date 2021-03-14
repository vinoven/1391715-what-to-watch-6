import {ActionType} from "./action";
import filmList from '../mocks/films';

const initialState = {
  films: filmList,
  genre: `All genres`
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return {
        ...state,
        genre: action.payload
      };
  }

  return state;
};

export {reducer};
