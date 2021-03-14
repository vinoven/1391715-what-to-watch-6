export const ActionType = {
  CHANGE_GENRE: `genre/changeGenre`
};

export const ActionCreator = {
  changeGenre: (genre) => ({
    type: ActionType.CHANGE_GENRE,
    payload: genre
  })
};
