import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import App from './components/app/app';
import {reducer} from './store/reducer';
import thunk from 'redux-thunk';
import {createAPI} from './services/api';

const api = createAPI();

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);

const promo = {
  title: `The Grand Budapest Hotel`,
  promoGenre: `Drama`,
  year: 2014
};

ReactDOM.render(
    <Provider store={store}>
      <App
        promo={promo}
      />
    </Provider>,
    document.querySelector(`#root`)
);
