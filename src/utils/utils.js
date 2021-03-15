import {RATING_DESCRIPTION} from './const';
import {GENRE_OPTIONS} from './const';

export const getFilmDataById = (films, id) => {
  return films.find((element) => element.id === id);
};

export const convertMinutesToHoursAndMinutes = (durationInMinutes) => {
  const MINS_IN_HOUR = 60;
  const hours = Math.floor(durationInMinutes / MINS_IN_HOUR);
  const minutes = durationInMinutes % MINS_IN_HOUR;
  return `${hours}h ${minutes}m`;
};

export const getRatingDescriptionByRatingValue = (ratingValue) => {
  let ratingDescription = ``;

  switch (true) {
    case (ratingValue >= 0 && ratingValue < 3):
      ratingDescription = RATING_DESCRIPTION.BAD;
      break;
    case (ratingValue >= 3 && ratingValue < 5):
      ratingDescription = RATING_DESCRIPTION.NORMAL;
      break;
    case (ratingValue >= 5 && ratingValue < 8):
      ratingDescription = RATING_DESCRIPTION.GOOD;
      break;
    case (ratingValue >= 8 && ratingValue < 10):
      ratingDescription = RATING_DESCRIPTION.VERY_GOOD;
      break;
    case (ratingValue >= 10):
      ratingDescription = RATING_DESCRIPTION.AWESOME;
      break;
  }

  return ratingDescription;
};

export const filterFilmsByGenre = (films, genre) => {
  if (genre === GENRE_OPTIONS.ALL_GENRES) {
    return films;
  }

  return films.filter((film) => film.genre === genre);
};
