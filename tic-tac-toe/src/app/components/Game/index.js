import { connect } from 'react-redux';
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import actionCreators from '~redux/game/actions.js';

import { getStatus, goToMove } from '~utils/gameUtils';

import Board from '../Board';
import Topbar from '../Topbar';

class Game extends Component {
  render() {
    const { current, handleClick } = this.props;

    return (
      <Fragment>
        <Topbar/>
        <div className="game">
          <div className="game-board">
            <Board squares={current.squares} onClick={handleClick} />
          </div>
        </div>
      </Fragment>
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
