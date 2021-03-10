export const getFilmDataById = (films, id) => {
  return films.find((element) => element.id === id);
};

export const convertMinutesToHoursAndMinutes = (durationInMinutes) => {
  const MINS_IN_HOUR = 60;
  const hours = Math.floor(durationInMinutes / MINS_IN_HOUR);
  const minutes = durationInMinutes % MINS_IN_HOUR;
  return `${hours}h ${minutes}m`;
};
