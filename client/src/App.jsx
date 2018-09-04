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
      toggle1: 'align-left', 
      toggle2: 'align-center',
      toggle3: 'align-right', 
      dropdown2: [['Arial', 'Roboto', 'PT Serif', 'Lobster']],
      toggleSet: ['bold', 'underline', 'italic']
    }
  }

  render() {
    return(
      <div className="main">
        <DropdownMenu name={'Fonts'} listItems={['First', 'Second', 'Third', 'Fourth Item Goes Hereeeeee']} onClick={this.toggleThisButton}  />
        <ToggleButton icon={'align-left'} />
        <ToggleButton icon={'align-center'} />
        <ToggleButton icon={'align-right'}  />
        <DropdownMenu listItems={['First', 'Second', 'Third', 'Fourth Item Goes Hereeeeee']} />
        <Grouping buttons={this.state.toggleSet} dropdown={this.state.dropdown2} />
      </div>
    )
  }
}