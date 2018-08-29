import strings from '~utils/strings.js';

export function getStatus(winner, next) {
  let status = strings.NEXT_PLAYER + (next ? strings.PLAYER_ONE : strings.PLAYER_TWO);
  if (winner) {
    status = strings.WINNER + winner;
  }
  return status;
}

export function goToMove(move) {
  return move ? strings.MOVE_MSG + move : strings.MOVE_START;
}

export function calculateWinner(squares) {
  const lines = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
  // eslint-disable-next-line
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
