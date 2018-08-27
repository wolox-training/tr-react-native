import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import { handleClick as gameReducer } from '~redux/game/reducers.js';

import Game from '../Game';

const initState = {
  history: [{
      squares: Array(9).fill(null)
    }
  ],
  xIsNext: true,
  stepNumber: 0,
  winner: null
};

const store = createStore(gameReducer,initState);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Game />
      </Provider>
    );
  }
}

export default App;
