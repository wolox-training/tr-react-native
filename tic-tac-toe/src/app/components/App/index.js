import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { handleClick as gameReducer } from '~redux/game/reducers.js';

import Game from '../Game';


const reducer = combineReducers({
  gameReducer,
  formReducer
});

const store = createStore(reducer);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Fragment>
            <Route path="/game" component={Game} />
          </Fragment>
        </Router>
      </Provider>
    );
  }
}

export default App;
