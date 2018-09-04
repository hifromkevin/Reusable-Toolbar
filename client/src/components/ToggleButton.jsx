import React from 'react';
import FontAwesome from 'react-fontawesome';

export default class ToggleButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bgColor: '#fff',
      previousColor: '#fff'
    }

    this.toggleThisButton = this.toggleThisButton.bind(this);
  }

  toggleThisButton() {
    (this.state.bgColor === '#fff') ?
    this.setState({bgColor: '#888'}) :
    this.setState({bgColor: '#fff'})
  }

  hoverThisButton(color) {
    var prev = this.state.bgColor;
    this.setState({
      bgColor: color,
      previousColor: prev
    });
  }

  render() {
    return(
      <div className="component toggleButton" style={{ background: this.state.bgColor }} 
        onClick={ this.toggleThisButton } 
        onMouseEnter={ () => { this.hoverThisButton('#eee')} } 
        onMouseLeave={ () => { this.hoverThisButton(this.state.previousColor)} }  
      >
        <div className="component__title" ><FontAwesome name={this.props.icon} /> {this.props.text}</div>
      </div>
    )
  }
}