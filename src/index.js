import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import App from './components/app/app';
import films from './mocks/films';
import {reducer} from './store/reducer';

const store = createStore(
    reducer,
    composeWithDevTools()
);

const promo = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  year: 2014
};

ReactDOM.render(
    <Provider store={store}>
      <App
        films={films} promo={promo}
      />
    </Provider>,
    document.querySelector(`#root`)
);
