import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import MoveList from '../MoveList';

class Topbar extends Component {
  render() {
    const { handleClick } = this.props;
    return (
      <div className="topbar">
        <span className="topbar-text">WOLOX TIC-TAC-TOE</span>
        <MoveList onClick={handleClick} className="topbar-button" />
        <Link exact to="/history" onClick={handleClick} className="topbar-button">
          History
        </Link>
        <Link to="/" onClick={handleClick} className="topbar-button">
          Logout
        </Link>
      </div>
    );
  }
}

Topbar.propTypes = {
  handleClick: PropTypes.func
};

export default Topbar;
