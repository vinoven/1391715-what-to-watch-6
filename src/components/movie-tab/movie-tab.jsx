import React from 'react';
import {movieTabPropTypes} from '../../utils/prop-types';


const MovieTab = (props) => {
  const {tabName, activeTab, setActiveTab} = props;
  const isActiveTab = tabName === activeTab;

  const handleTabNameClick = (evt) => {
    setActiveTab(evt.target.text);
  };

  return (
    <li onClick={handleTabNameClick} className={`movie-nav__item ${isActiveTab ? `movie-nav__item--active` : ``}`}>
      <a className="movie-nav__link">{tabName}</a>
    </li>
  );
};

MovieTab.propTypes = movieTabPropTypes;
export default MovieTab;
