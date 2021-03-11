import React from 'react';
import {REVIEW_COLUMNS_NUMBER} from '../../utils/const';
import {reviewsPropTypes} from '../../utils/prop-types';
import Review from '../review/review';

const ReviewsTab = (props) => {
  const {reviews} = props;

  return (
    <div className="movie-card__reviews movie-card__row">
      <div className="movie-card__reviews-col">
        {reviews.slice(0, Math.ceil(reviews.length / REVIEW_COLUMNS_NUMBER)).map((review, id) => <Review key={id} reviewData={review} />)}
      </div>
      <div className="movie-card__reviews-col">
        {reviews.slice(Math.ceil(reviews.length / REVIEW_COLUMNS_NUMBER)).map((review, id) => <Review key={id} reviewData={review} />)}
      </div>
    </div>
  );
};

ReviewsTab.propTypes = reviewsPropTypes;
export default ReviewsTab;
