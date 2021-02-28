export const getFilmDataById = (films, id) => {
  return films.find((element) => element.id === id);
};
