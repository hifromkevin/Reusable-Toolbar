import React, { Component } from 'react';

import 'font-awesome/css/font-awesome.css';
import FontAwesome from 'react-fontawesome';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 'App.jsx'
    }
  }

  render() {
    return(
      <div className="main">
        <h1 className="main__h1">Hi from {this.state.page} <FontAwesome name='500px' /></h1>
        <p className="main__p">Favorite Food: </p>
      </div>
    )
  }
}