import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component {
  state = {
    value: null,
  }

  render() {
    return (
      <button className="square" onClick={()=>{this.setState({value: 'X'})}}>
        {this.state.value}
      </button>
    );
  }
}

export default Square;
