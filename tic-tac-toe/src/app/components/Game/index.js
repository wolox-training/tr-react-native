import { connect } from 'react-redux';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import actionCreators from '~redux/game/actions.js';

import { getStatus, goToMove } from '~utils/gameUtils';

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
    const { status, current, history, handleClick } = this.props;
    const moves = this.getMoves(history);

    return (
      <div className="game">
        <div className="game-board">
          <Board squares={current.squares} onClick={handleClick} />
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
  handleClick: PropTypes.func.isRequired,
  jumpTo: PropTypes.func.isRequired,
  stepNumber: PropTypes.number,
  status: PropTypes.string,
  current: PropTypes.arrayOf(PropTypes.string)
};

const mapStateToProps = state => ({
  history: state.game.history,
  xIsNext: state.game.xIsNext,
  stepNumber: state.game.history.length - 1,
  winner: state.game.winner,
  status: getStatus(state.game.winner, state.game.xIsNext),
  current: state.game.history[state.game.stepNumber]
});

const mapDispatchToProps = dispatch => ({
  handleClick: i => dispatch(actionCreators.gameHandleClick(i)),
  jumpTo: step => dispatch(actionCreators.gameJumpTo(step))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Game);
