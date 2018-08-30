function calculateWinner(squares) {
  const lines = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

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

// REDUCERS
export function handleClick(state = initState, action) {
  const history = state.history.slice(0, state.stepNumber + 1);
  const current = history[history.length - 1];
  const squares = current.squares.slice();
  const i = action.index;

  if (squares[i]) {
    return state;
  }

  squares[i] = state.xIsNext ? 'X' : 'O';
  switch (action.type) {
    case 'SQUARE_CLICKED':
      if (state.winner) {
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
        winner: calculateWinner(squares)
      };
    case 'HISTORY_ITEM_SELECTED':
      return {
        ...state,
        stepNumber: action.step,
        xIsNext: action.step % 2 === 0,
        winner:calculateWinner(state.history.slice(0, action.step + 1).squares.slice()), //TODO: find a cleaner way to do this
        history: state.history.slice(0, action.step + 1)
      };
    default:
      return state;
  }
}


export default handleClick;
