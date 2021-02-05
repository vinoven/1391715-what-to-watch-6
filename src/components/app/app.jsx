import React from 'react';
import PropTypes from 'prop-types';
import MainPage from '../main-page/main-page';

const App = (props) => {
  const {films, promo} = props;
  return (
    <MainPage
      films={films} promo={promo}/>
  );
};

App.propTypes = {
  films: PropTypes.array.isRequired,
  promo: PropTypes.object.isRequired
};

export default App;
