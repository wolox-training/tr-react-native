import React, { Component } from 'react';
import { FontAwesome } from 'react-fontawesome';

class Dropdown extends Component {
  state = {
    listOpen: false,
    headerTitle: this.props.title
  }
  handleClickOutside(){
    this.setState({
      listOpen: false
    })
  }
  toggleList(){
    this.setState(prevState => ({
      listOpen: !prevState.listOpen
    }))
  }
  render(){
    const { list } = this.props; //Este list debería venir del history.
    const { listOpen, headerTitle } = this.state;
    return(
      <div className="dd-wrapper">
      <div className="dd-header" onClick={() => this.toggleList()}>
          <div className="dd-header-title">{headerTitle}</div>
          {listOpen ? <FontAwesome name="angle-up" size="2x" /> : <FontAwesome name="angle-down" size="2x" />}
        </div>
        {listOpen && (
          <ol className="dd-list">
            {list.map(item => (
              <li className="dd-list-item" key={item.id}>
                {item.title}
            </li>
            ))}
          </ol>
        )}
    </div>
    );
  }
}
