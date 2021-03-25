import React, {useState} from 'react';
import {TabToComponentMap} from '../../utils/const';
import OverviewTab from '../overview-tab/overview-tab';
import DetailsTab from '../details-tab/details-tab';
import ReviewsTab from '../reviews-tab/reviews-tab';
import MovieTab from '../movie-tab/movie-tab';

const MovieTabs = () => {
  const [activeTab, setActiveTab] = useState(`Overview`);

  const getComponentByTabName = (tabName) => {
    switch (tabName) {
      case TabToComponentMap.Overview:
        return <OverviewTab />;
      case TabToComponentMap.Details:
        return <DetailsTab />;
      case TabToComponentMap.Reviews:
        return <ReviewsTab />;
      default:
        return <OverviewTab />;
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

export default MovieTabs;
