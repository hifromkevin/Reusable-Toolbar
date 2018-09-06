import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

import DropdownMenu from './components/DropdownMenu.jsx';
import ToggleButton from './components/ToggleButton.jsx';
import Grouping from './components/Grouping.jsx';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 'App.jsx',
      dropdown1: ['First', 'Second', 'Third', 'Fourth Item Goes Hereeeeee'], 
      dropdown2: [['Arial', 'Roboto', 'PT Serif', 'Lobster']],
      toggleSet: ['bold', 'underline', 'italic'],
      toggleSet2: ['align-left', 'align-center','align-right']
    }
  }

  render() {
    return(
      <div className="menubar">
        <Grouping buttons={this.state.toggleSet} dropdown={this.state.dropdown2} />
        <Grouping />
        <DropdownMenu listItems={this.state.dropdown1} />
        <Grouping buttons={this.state.toggleSet2} />
        <ToggleButton icon={this.state.toggleSet2[0]} />
      </div>
    )
  }
}


/**** TO DO
  * Documentation
  * Button Click 
****/

//Non-grouped items always fall to the front of the line