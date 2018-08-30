import actionCreators  from '~redux/game/actions.js';

import { connect } from 'react-redux';
import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import Board from '../Board';

class Game extends Component {
  render() {
    const history = this.props.history;
    const current = history[this.props.stepNumber];
    const winner = this.props.winner;
    const moves = history.map((step, move) => {
      const desc = move ? `Go to move #${move}` : 'Go to game start';
      return (
        <li key={move}>
          <button onClick={() => this.props.jumpTo(move)}>{desc}</button>
        </li>
      );
    });
    let status = `Next player: ${this.props.xIsNext ? 'X' : 'O'}`;
    if (winner) {
      status = `Winner: ${winner}`;
    }
    return (
      <div className="game">
        <div className="game-board">
          <Board squares={current.squares} onClick={i => this.props.handleClick(i)} />
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
  history: state.gameReducer.history,
  xIsNext: state.gameReducer.xIsNext,
  stepNumber: state.gameReducer.history.length - 1,
  winner: state.gameReducer.winner
});

const mapDispatchToProps = dispatch => ({
  handleClick: i => dispatch(actionCreators.gameHandleClick(i)),
  jumpTo: step => dispatch(actionCreators.gameJumpTo(step))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Game);
