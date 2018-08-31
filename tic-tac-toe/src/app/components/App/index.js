import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import thunk  from 'redux-thunk';

import reducer from '~redux/game/reducers.js';

import Game from '../Game';
import FormContainer from '../FormContainer';

const rootReducer = combineReducers({
  reducer,
  form: formReducer
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, {}, composeEnhancers(applyMiddleware(thunk)));

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Router>
          <Fragment>
            <Route path="/game" component={Game} />
            <Route exact path="/" render={() => <FormContainer handleSubmit={this.submit}/>} />
          </Fragment>
        </Router>
      </Provider>
    );
  }
}

export default App;
