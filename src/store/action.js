export const ActionType = {
  CHANGE_GENRE: `genre/changeGenre`,
  SET_FILMS_TO_SHOW_COUNT: `films/setFilmsToShowCount`,
  RESET_FILMS_TO_SHOW_COUNT: `films/resetFilmsToShowCount`
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
  })
};
