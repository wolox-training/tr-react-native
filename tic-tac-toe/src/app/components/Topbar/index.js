import { connect } from 'react-redux';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import actionCreators from '~redux/login/actions';

import Dropdown from '../Dropdown';

class Topbar extends Component {
  render() {
    const { handleClick, logoff } = this.props;
    return (
      <div className="topbar">
        <span className="topbar-text">WOLOX TIC-TAC-TOE</span>
        <Dropdown onClick={handleClick} title="Move List" />
        <Link exact to="/history" onClick={handleClick} className="topbar-button">
          History
        </Link>
        <Link to="/" handleClick={logoff} className="topbar-button">
          Logout
        </Link>
      </div>
    );
  }
}

Topbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  logoff: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  logoff: () => {
    dispatch(actionCreators.logoff());
  }
});

export default connect(mapDispatchToProps)(Topbar);
