import React, {useState} from 'react';
import {filmPropTypes} from '../../utils/prop-types';
import {TabToComponentMap} from '../../utils/const';
import reviews from '../../mocks/reviews';
import OverviewTab from '../overview-tab/overview-tab';
import DetailsTab from '../details-tab/details-tab';
import ReviewsTab from '../reviews-tab/reviews-tab';
import MovieTab from '../movie-tab/movie-tab';

const MovieTabs = (props) => {
  const {film} = props;
  const [activeTab, setActiveTab] = useState(`Overview`);

  const getComponentByTabName = (tabName) => {
    switch (tabName) {
      case TabToComponentMap.Overview:
        return <OverviewTab film={film} />;
      case TabToComponentMap.Details:
        return <DetailsTab film={film} />;
      case TabToComponentMap.Reviews:
        return <ReviewsTab reviews={reviews.filter((review) => review.id === film.id)}/>;
      default:
        return <OverviewTab film={film} />;
    }
  };

  return (
    <div className="movie-card__desc">
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">

          {Object.values(TabToComponentMap).map((tabName, id) => <MovieTab key={id} tabName={tabName} activeTab={activeTab} setActiveTab={setActiveTab} />)}

        </ul>
      </nav>

      {getComponentByTabName(activeTab)}

    </div>
  );
};

MovieTabs.propTypes = filmPropTypes;
export default MovieTabs;
