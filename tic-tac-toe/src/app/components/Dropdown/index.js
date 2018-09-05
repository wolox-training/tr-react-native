import { connect } from 'react-redux';
import React, { Component, Fragment } from 'react';
import { FontAwesome } from 'react-fontawesome';

import { getStatus, goToMove } from '~utils/gameUtils';

import actionCreators from '~redux/game/actions.js';

class Dropdown extends Component {
  state = {
    listOpen: false,
    headerTitle: this.props.title
  };

  handleClickOutside() {
    this.setState({
      listOpen: false
    });
  }

  toggleList() {
    this.setState(prevState => ({
      listOpen: !prevState.listOpen
    }));
  }

  getMoves(history) {
    return history.map((step, move) => {
      const desc = goToMove(move);
      return (
        <li role="menuitem" className="dd-list-item" key={move} onClick={() => this.props.jumpTo(move)}>
          {desc}
        </li>
      );
    });
  }

  render() {
    const { history } = this.props; // Este list debería venir del history.
    const { listOpen, headerTitle } = this.state;

    const moves = this.getMoves(history);

    return (
      <Fragment>
        <div className="dd-wrapper">
          <div className="dd-header" role="presentation" onClick={() => this.toggleList()}>
            <div className="dd-header-title">{headerTitle}</div>
          </div>
          {listOpen && <ol className="dd-list">{moves}</ol>}
        </div>
    </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  history: state.game.history
});

const mapDispatchToProps = dispatch => ({
  handleClick: i => dispatch(actionCreators.toggleList(i)),
  jumpTo: step => dispatch(actionCreators.gameJumpTo(step))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dropdown);
