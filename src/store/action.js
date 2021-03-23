export const ActionType = {
  CHANGE_GENRE: `genre/changeGenre`,
  SET_FILMS_TO_SHOW_COUNT: `films/setFilmsToShowCount`,
  RESET_FILMS_TO_SHOW_COUNT: `films/resetFilmsToShowCount`,
  LOAD_FILMS: `data/loadFilms`,
  REQUIRED_AUTHORIZATION: `auth/requiredAuthorization`,
  REDIRECT_TO_ROUTE: `auth/redirectToRoute`
};

export const ActionCreator = {
  changeGenre: (genre) => ({
    type: ActionType.CHANGE_GENRE,
    payload: genre
  }),
  setFilmsToShowCount: (count) => ({
    type: ActionType.SET_FILMS_TO_SHOW_COUNT,
    payload: count
  }),
  resetFilmsToShowCount: () => ({
    type: ActionType.RESET_FILMS_TO_SHOW_COUNT
  }),
  loadFilms: (films) => ({
    type: ActionType.LOAD_FILMS,
    payload: films
  }),
  requireAuthorization: (authStatus, user = {}) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: {authStatus, user}
  }),
  redirectToRoute: (url) => ({
    type: ActionType.REDIRECT_TO_ROUTE,
    payload: url
  })
};
