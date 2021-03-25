import React from 'react';
import {connect} from 'react-redux';
import {filmPropTypes} from '../../utils/prop-types';
import {getRatingDescriptionByRatingValue} from '../../utils/utils';

const OverviewTab = (props) => {
  const {film} = props;
  const ratingDescription = getRatingDescriptionByRatingValue(film.rating);
  return (
    <div className="movie-card__desc">

      <div className="movie-rating">
        <div className="movie-rating__score">{film.rating}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{ratingDescription}</span>
          <span className="movie-rating__count">{film.scoresCount} ratings</span>
        </p>
      </div>

      <div className="movie-card__text">
        <p>
          {film.description}
        </p>

        <p className="movie-card__director"><strong>Director: {film.director}</strong></p>

        <p className="movie-card__starring"><strong>Starring: {film.starring.join(`, `)}</strong></p>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  film: state.selectedMovie
});

OverviewTab.propTypes = filmPropTypes;
export {OverviewTab};
export default connect(mapStateToProps, null)(OverviewTab);
