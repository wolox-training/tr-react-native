import { createStore } from 'redux';
import { handleClick as gameReducer } from '~redux/game/reducers.js';

const initState = {
  history: [
    {
      squares: Array(9).fill(null)
    }
  ],
  xIsNext: true,
  stepNumber: 0,
  winner: null
};
const store = createStore(gameReducer, initState);
export default store;
