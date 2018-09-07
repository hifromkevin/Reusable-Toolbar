import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

import DropdownListItem from './DropdownListItem.jsx';

export default class DropdownMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedListItem: props.listItems[0]
    }

    this.switchDropdownSelected = this.switchDropdownSelected.bind(this);
  }

  switchDropdownSelected(title) {
    this.setState({
      selectedListItem: title
    });
  }

  render() {
    var listItemsHolder = [];
    {this.props.listItems.map((item, index) => {
        listItemsHolder.push( <DropdownListItem key={index} title={item} switchDropdownSelected={this.switchDropdownSelected} /> )
      })
    }

    return(
      <div className="dropdown component">
        <div>
          <p>{this.state.selectedListItem} <FontAwesome name='caret-down' /></p>
        </div>
        <div className="dropdown__list">
          {listItemsHolder}
        </div>
      </div>
    );
  }
}