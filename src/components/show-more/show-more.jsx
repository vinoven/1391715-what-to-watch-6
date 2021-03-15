import React from 'react';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';
import {FILMS_TO_RENDER_COUNT} from '../../utils/const';
import PropTypes from 'prop-types';

const ShowMore = (props) => {
  const {setFilmsToShowCount} = props;

  const handleShowMoreButtonClick = () => {
    setFilmsToShowCount(FILMS_TO_RENDER_COUNT.PER_STEP);
  };

  return (
    <div className="catalog__more">
      <button className="catalog__button" type="button" onClick={handleShowMoreButtonClick}>Show more</button>
    </div>
  );
};


const mapDispatchToProps = (dispatch) => ({
  setFilmsToShowCount(count) {
    dispatch(ActionCreator.setFilmsToShowCount(count));
  }
});

ShowMore.propTypes = {
  setFilmsToShowCount: PropTypes.func.isRequired
};

export {ShowMore};
export default connect(null, mapDispatchToProps)(ShowMore);
