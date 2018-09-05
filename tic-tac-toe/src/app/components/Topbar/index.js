import { connect } from 'react-redux';
import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

import actionCreators from '~redux/login/actions';

import Dropdown from '../Dropdown';

class Topbar extends Component {
  render() {
    const { handleClick, logoff } = this.props;
    return(
      <div className="topbar">
        <span className="topbar-text">WOLOX TIC-TAC-TOE</span>
        <Dropdown onClick={handleClick}  title="Move List" />
        <Link exact to="/history" onClick={handleClick} className="topbar-button">
          History
        </Link>
        <Link to="/" handleClick={ logoff } className="topbar-button">Logout</Link>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  logoff: () => {
    dispatch(actionCreators.logoff());
  }
});

export default connect(mapDispatchToProps)(Topbar);
