import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MoveList extends Component {
  render() {
    const { className } = this.props;
    return <div className={className}>MoveList</div>;
  }
}

MoveList.propTypes = {
  className: PropTypes.string
}

export default MoveList;
