import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import store from '~redux/store';

import strings from '~utils/strings';

import Game from '../Game';
import FormContainer from '../FormContainer';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Fragment>
            <Route path={strings.paths.GAME} component={Game} />
            <Route exact path={strings.paths.ROOT} render={() => <FormContainer />} />
          </Fragment>
        </Router>
      </Provider>
    );
  }
}

export default App;
