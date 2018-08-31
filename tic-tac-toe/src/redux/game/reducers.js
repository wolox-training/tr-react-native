import { calculateWinner } from '~utils/gameUtils';

import { actions } from '~redux/game/actions';

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

function reducer(state = initState, action) {
  const history = state.history.slice(0, state.stepNumber + 1);
  const current = history[history.length-1];
  const squares = current.squares.slice();
  const i = action.index;
  const winner = calculateWinner(squares);

  if (squares[i]) {
    return state;
  }

  squares[i] = state.xIsNext ? 'X' : 'O';

  switch (action.type) {
    case actions.SQUARE_CLICKED:
      if (winner) {
        return state;
      }
      return {
        ...state,
        history: history.concat([
          {
            squares
          }
        ]),
        xIsNext: !state.xIsNext,
        stepNumber: history.length,
        winner
      };
    case actions.HISTORY_ITEM_SELECTED:
      return {
        ...state,
        stepNumber: action.index,
        xIsNext: action.index % 2 === 0,
        winner,
        history: state.history.slice(0, action.index + 1)
      };
    default:
      return state;
  }
}

export default reducer;
