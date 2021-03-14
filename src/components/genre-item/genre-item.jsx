import React from 'react';
import {genreItemPropTypes} from '../../utils/prop-types';

const GenreItem = (props) => {
  const {genreTitle} = props;

  return (
    <li className="catalog__genres-item catalog__genres-item--active">
      <a href="#" className="catalog__genres-link">{genreTitle}</a>
    </li>
  );
};

GenreItem.propTypes = genreItemPropTypes;
export default GenreItem;
