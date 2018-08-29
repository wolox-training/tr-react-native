import { gameJumpTo, gameHandleClick } from '~redux/game/actions.js';

import { connect } from 'react-redux';
import React, { Component }from 'react';
import PropTypes from 'prop-types';

import { calculateWinner, getStatus, goToMove } from '~utils/gameUtils';

import strings from '~utils/strings.js';

import Board from '../Board';

class Game extends Component {
  state = {
    history: [
      {
        squares: Array(9).fill(null)
      }
    ],
    xIsNext: true,
    stepNumber: 0
  };

  getMoves(history) {
    return history.map((step, move) => {
      const desc = goToMove(move);
      return (
        <li key={step}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });
  }

  handleClick = i => {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = [...current.squares];

    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? strings.PLAYER_ONE : strings.PLAYER_TWO;
    this.setState({
      history: history.concat([
        {
          squares
        }
      ]),
      xIsNext: !this.state.xIsNext,
      stepNumber: history.length
    });
  };

  jumpTo = step => {
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0
    });
  };

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);
    const moves = this.getMoves(history);
    const status = getStatus(winner, this.state.xIsNext);

    return (
      <div className="game">
        <div className="game-board">
          <Board squares={current.squares} onClick={this.handleClick} />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

Game.propTypes = {
  history: PropTypes.arrayOf(PropTypes.node),
  handleClick: PropTypes.func,
  jumpTo: PropTypes.func,
  stepNumber: PropTypes.int,
  winner: PropTypes.string,
  xIsNext: PropTypes.bool
};

const mapStateToProps = state => ({
  history: state.history,
  xIsNext: state.xIsNext,
  stepNumber: state.history.length - 1,
  winner: state.winner
});

const mapDispatchToProps = dispatch => ({
  handleClick: i => dispatch(gameHandleClick(i)),
  jumpTo: step => dispatch(gameJumpTo(step))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Game);
