import { calculateWinner } from '~utils/gameUtils';

import strings from '~utils/strings';

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
  const current = history[history.length - 1];
  const squares = [...current.squares];

  let i;
  if (action.payload) {
    i = action.payload.index;
  }
  if (squares[i] || (state.winner && action.type === actions.SQUARE_CLICKED)) {
    return state;
  }

  squares[i] = state.xIsNext ? strings.PLAYER_ONE : strings.PLAYER_TWO;
  const winner = calculateWinner(squares);
  switch (action.type) {
    case actions.SQUARE_CLICKED:
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
        stepNumber: action.payload.index,
        xIsNext: action.payload.index % 2 === 0,
        winner,
        history: state.history.slice(0, action.payload.index + 1)
      };
    default:
      return state;
  }
}

export default reducer;
