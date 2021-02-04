import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const Settings = {
  FILMS: new Array(20).fill()
};

const promo = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  year: 2014
};

ReactDOM.render(
    <App
      films={Settings.FILMS} promo={promo}
    />,
    document.querySelector(`#root`)
);
