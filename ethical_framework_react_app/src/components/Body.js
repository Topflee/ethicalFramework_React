import React, { Component } from 'react';
import '../styles/Body.css';
import Login from './Login.js';
import Survey from './Survey.js'

export class Body extends Component {
  constructor(props) {
    super(props);
    this.handleLoginChange = this.handleLoginChange.bind(this);
    this.state = {
        isLoggedIn: false,
        participantId: ''
    };
  }

  handleLoginChange(id) {
    this.setState({participantId: id});
    console.log(id);
    if(id !== '') {
        this.setState({isLoggedIn: true});
    }
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let display;
    if (!isLoggedIn) {
        display = <Login onLoginChange={this.handleLoginChange} />;
    } else {
        display = <Survey />;
    }
    return (
        display
    );
  }
}

export default Body;