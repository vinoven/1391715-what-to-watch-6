import {ActionType} from "./action";


const initialState = {
  films: [],
  genre: `all`
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return {
        ...state,
        genre: action.payload
      };
    case ActionType.GET_FILMS_BY_GENRE:
      return {
        ...state,
        films: action.payload
      };
  }

  return state;
};

export {reducer};
