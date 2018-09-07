import React from 'react';
import FontAwesome from 'react-fontawesome';

export default class ToggleButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bgColor: '#fff',
      previousColor: '#fff'
    }
  }

  render() {
    return(
      <div className="component button">
        <div className="" >
          <FontAwesome name={this.props.icon.icon1} /> 
          {this.props.icon.text} 
          <FontAwesome name={this.props.icon.icon2} />
        </div>
      </div>
    )
  }
}