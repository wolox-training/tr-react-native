import { connect } from 'react-redux';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import actionCreators from '~redux/game/actions.js';

import { calculateWinner, getStatus, goToMove } from '~utils/gameUtils';

import Board from '../Board';

class Game extends Component {
  getMoves(history) {
    return history.map((step, move) => {
      const desc = goToMove(move);
      return (
        <li key={move}>
          <button onClick={() => this.props.jumpTo(move)}>{desc}</button>
        </li>
      );
    });
  }

  render() {
    const history = this.props.history;
    const current = history[this.props.stepNumber];
    const winner = calculateWinner(current.squares);
    const moves = this.getMoves(history);
    const status = getStatus(winner, this.props.xIsNext);

    return (
      <div className="game">
        <div className="game-board">
          <Board squares={current.squares} onClick={this.props.handleClick} />
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
  handleClick: i => dispatch(actionCreators.gameHandleClick(i)),
  jumpTo: step => dispatch(actionCreators.gameJumpTo(step))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Game);
