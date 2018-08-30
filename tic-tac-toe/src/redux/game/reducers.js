import calculateWinner from '~utils/gameUtils';

export function handleClick(state, action) {
  const history = state.history.slice(0, state.stepNumber + 1);
  const current = history[history.length - 1];
  const squares = current.squares.slice();
  const i = action.index;
  const winner = calculateWinner(squares);
  console.log(winner);

  if (squares[i]) {
    return state;
  }

  squares[i] = state.xIsNext ? 'X' : 'O';
  switch (action.type) {
    case 'SQUARE_CLICKED':
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
    case 'HISTORY_ITEM_SELECTED':
      return {
        ...state,
        stepNumber: action.step,
        xIsNext: action.step % 2 === 0,
        winner,
        history: state.history.slice(0, action.step + 1)
      };
    default:
      return state;
  }
}

export default handleClick;
