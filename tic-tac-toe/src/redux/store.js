import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';
import { compose } from 'react';

import gameReducer from '~redux/game/reducers.js';

import loginReducer from '~redux/login/reducers.js';

const rootReducer = combineReducers({
  game: gameReducer,
  form: formReducer,
  login: loginReducer
});
/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, {}, composeEnhancers(applyMiddleware(thunk)));

export default store;
