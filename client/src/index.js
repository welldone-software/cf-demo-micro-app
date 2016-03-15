import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import App from './components/App';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

const enhancers = compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

fetch('api/init')
  .then(res => res.json())
  .then(json => init(json))
  .catch(err => {
    console.error(err);
    init({});
 });


function init(config){

  try {
    fetch('api/susp')
      .then(res => res.text())
      .then(res => console.debug('suspected', res));
  }
  catch (e) {
    console.error('suspected api error:', e);
  }

  const initialState = {
    config
  };

  const store = createStore(
    rootReducer,
    initialState,
    enhancers
  );

  const script = document.createElement('script');
  script.src = `${config.auth.baseUrl}/cf-auth.js`;
  document.body.appendChild(script);

  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
}
