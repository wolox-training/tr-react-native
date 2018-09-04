import { connect } from 'react-redux';
import React, { Component, Fragment } from 'react';

class MoveList extends Component {
  render() {
    const {className} = this.props;
    return <div className={className}>MoveList</div>;
  }
}
export default MoveList;
