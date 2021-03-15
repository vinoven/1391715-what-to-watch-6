import React from 'react';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';
import {genreItemPropTypes} from '../../utils/prop-types';

const GenreItem = (props) => {
  const {genreTitle, genre, changeGenre, resetFilmsToShowCount} = props;
  const handleGenreClick = () => {
    changeGenre(genreTitle);
    resetFilmsToShowCount();
  };
  const isActive = genre === genreTitle;

  return (
    <li className={`catalog__genres-item ${isActive ? `catalog__genres-item--active` : ``}`} onClick={handleGenreClick}>
      <a href="#" className="catalog__genres-link">{genreTitle}</a>
    </li>
  );
};

const mapStateToProps = (state) => ({
  films: state.films,
  genre: state.genre
});

const mapDispactchToProps = (dispatch) => ({
  changeGenre(genre) {
    dispatch(ActionCreator.changeGenre(genre));
  },
  resetFilmsToShowCount() {
    dispatch(ActionCreator.resetFilmsToShowCount());
  }
});

GenreItem.propTypes = genreItemPropTypes;
export {GenreItem};
export default connect(mapStateToProps, mapDispactchToProps)(GenreItem);

