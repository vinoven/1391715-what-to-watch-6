import React, {useState} from 'react';
import {connect} from 'react-redux';
import {postComment} from '../../store/api-actions';
import {ActionCreator} from '../../store/action';
import PropTypes from 'prop-types';
import {filmPropTypes} from '../../utils/prop-types';


const AddReviewForm = (props) => {

  const {isCommentSent, selectedMovie, enableCommentFlag, onSubmitReview} = props;

  const [reviewData, setReviewData] = useState({rating: null, review: ``});

  const hadleChange = ({target}) => {
    const {name, value} = target;
    setReviewData({...reviewData, [name]: value});
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    enableCommentFlag();
    onSubmitReview({
      rating: reviewData.rating,
      comment: reviewData.review
    }, selectedMovie.id);
  };

  return (

    <div className="add-review">
      <form action="#" className="add-review__form" onChange = {hadleChange} onSubmit={handleSubmit}>
        <div className="rating">
          <div className="rating__stars">
            <input className="rating__input" id="star-1" type="radio" name="rating" value="1" />
            <label className="rating__label" htmlFor="star-1">Rating 1</label>

            <input className="rating__input" id="star-2" type="radio" name="rating" value="2" disabled={isCommentSent}/>
            <label className="rating__label" htmlFor="star-2">Rating 2</label>

            <input className="rating__input" id="star-3" type="radio" name="rating" value="3" disabled={isCommentSent}/>
            <label className="rating__label" htmlFor="star-3">Rating 3</label>

            <input className="rating__input" id="star-4" type="radio" name="rating" value="4" disabled={isCommentSent}/>
            <label className="rating__label" htmlFor="star-4">Rating 4</label>

            <input className="rating__input" id="star-5" type="radio" name="rating" value="5" disabled={isCommentSent}/>
            <label className="rating__label" htmlFor="star-5">Rating 5</label>

            <input className="rating__input" id="star-6" type="radio" name="rating" value="6" disabled={isCommentSent}/>
            <label className="rating__label" htmlFor="star-6">Rating 6</label>

            <input className="rating__input" id="star-7" type="radio" name="rating" value="7" disabled={isCommentSent}/>
            <label className="rating__label" htmlFor="star-7">Rating 7</label>

            <input className="rating__input" id="star-8" type="radio" name="rating" value="8" disabled={isCommentSent}/>
            <label className="rating__label" htmlFor="star-8">Rating 8</label>

            <input className="rating__input" id="star-9" type="radio" name="rating" value="9" disabled={isCommentSent}/>
            <label className="rating__label" htmlFor="star-9">Rating 9</label>

            <input className="rating__input" id="star-10" type="radio" name="rating" value="10" disabled={isCommentSent}/>
            <label className="rating__label" htmlFor="star-10">Rating 10</label>
          </div>
        </div>

        <div className="add-review__text">
          <textarea className="add-review__textarea" name="review" id="review" placeholder="Review text"disabled={isCommentSent}></textarea>
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit" disabled={reviewData.review.length < 50 || reviewData.review.length > 400 || reviewData.rating === null || isCommentSent}>Post</button>
          </div>
        </div>

      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isCommentSent: state.isCommentSent,
  selectedMovie: state.selectedMovie
});

const mapDispatchToProps = (dispatch) => ({
  enableCommentFlag() {
    dispatch(ActionCreator.enableCommentFlag());
  },
  onSubmitReview(dataReview, id) {
    dispatch(postComment(dataReview, id));
  }
});


AddReviewForm.propTypes = {
  isCommentSent: PropTypes.bool.isRequired,
  selectedMovie: filmPropTypes,
  enableCommentFlag: PropTypes.func.isRequired,
  onSubmitReview: PropTypes.func.isRequired,
};

export {AddReviewForm};
export default connect(mapStateToProps, mapDispatchToProps)(AddReviewForm);
