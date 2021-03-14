import PropTypes from 'prop-types';

export const promoPropTypes = PropTypes.exact({
  title: PropTypes.string.isRequired,
  promoGenre: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired
}).isRequired;

export const filmPropTypes = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  posterImage: PropTypes.string.isRequired,
  previewImage: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  videoLink: PropTypes.string.isRequired,
  previewVideoLink: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  scoresCount: PropTypes.number.isRequired,
  director: PropTypes.string.isRequired,
  starring: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  runTime: PropTypes.number.isRequired,
  genre: PropTypes.string.isRequired,
  released: PropTypes.number.isRequired,
  isFavorite: PropTypes.bool.isRequired
}).isRequired;

export const filmsPropTypes = PropTypes.arrayOf(filmPropTypes).isRequired;

export const movieTabPropTypes = {
  tabName: PropTypes.string.isRequired,
  activeTab: PropTypes.string.isRequired,
  setActiveTab: PropTypes.func.isRequired
};

export const reviewPropTypes = PropTypes.shape({
  id: PropTypes.number.isRequired,
  user: PropTypes.exact({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  rating: PropTypes.number.isRequired,
  comment: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired
}).isRequired;

export const reviewsPropTypes = PropTypes.arrayOf(filmPropTypes).isRequired;
export const genreItemPropTypes = {
  genreTitle: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  changeGenre: PropTypes.func.isRequired
};

export const genrePropTypes = PropTypes.string.isRequired;
