import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { thunk } from 'react-thunk';

import reducer from '~redux/game/reducers.js';

import Game from '../Game';
import LoginForm from '../LoginForm';

const rootReducer = combineReducers({
  reducer,
  form: formReducer
});

const store = createStore(
  rootReducer,
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Fragment>
            <Route path="/game" component={Game} />
            <Route exact path="/" component={LoginForm} />
          </Fragment>
        </Router>
      </Provider>
    );
  }
}

export default App;
