import React from 'react';
import {connect} from 'react-redux';
import {filmPropTypes} from '../../utils/prop-types';
import {convertMinutesToHoursAndMinutes} from '../../utils/utils';

const DetailsTab = (props) => {
  const {film} = props;
  const runTime = convertMinutesToHoursAndMinutes(film.runTime);

  return (
    <div className="movie-card__text movie-card__row">
      <div className="movie-card__text-col">
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Director</strong>
          <span className="movie-card__details-value">{film.director}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Starring</strong>
          <span className="movie-card__details-value">
            {film.starring.join(`\n`)}
          </span>
        </p>
      </div>

      <div className="movie-card__text-col">
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Run Time</strong>
          <span className="movie-card__details-value">{runTime}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Genre</strong>
          <span className="movie-card__details-value">{film.genre}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Released</strong>
          <span className="movie-card__details-value">{film.released}</span>
        </p>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  film: state.selectedMovie
});

DetailsTab.propTypes = filmPropTypes;
export {DetailsTab};
export default connect(mapStateToProps, null)(DetailsTab);
