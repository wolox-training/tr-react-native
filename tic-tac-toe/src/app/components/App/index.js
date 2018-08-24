import React from 'react';
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import { reducer as gameReducer } from '~redux/game/reducers.js';
//import { reducer as squareReducer } from "~redux/squareReducer/reducer";


import Game from '../Game';

const initState = {}
//const rootReducer = combineReducers(gameReducer,squareReducer);
const store = createStore(initState,gameReducer);

class App extends React.Component {
  render() {
    return (
      <Provider /*store={store}*/>
        <Game />
      </Provider>
    );
  }
}

export default App;
