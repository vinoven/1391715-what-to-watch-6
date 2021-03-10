import React from 'react';
import {reviewPropTypes} from '../../utils/prop-types';
import dayjs from 'dayjs';

const Review = (props) => {
  const {reviewData} = props;

  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{reviewData.comment}</p>

        <footer className="review__details">
          <cite className="review__author">{reviewData.user.name}</cite>
          <time className="review__date" dateTime={dayjs(reviewData.date).format(`YYYY-MM-DD`)}>{dayjs(reviewData.date).format(`MMMM DD, YYYY`)}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{reviewData.rating}</div>
    </div>
  );
};

Review.propTypes = reviewPropTypes;
export default Review;
