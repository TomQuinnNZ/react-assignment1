import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {

  state = {
    username: 'Username not defined'
  }

  setUsernameHandler = (event) => {
    this.setState( {
      username: event.target.value
    });
  }

  render = () => {
    return (
      <div className="App">
        <UserInput
          changed={this.setUsernameHandler}
          default={this.state.username}>
        </UserInput>
        <UserOutput
          username={this.state.username}>
        </UserOutput>
        <UserOutput
          username={this.state.username}>
        </UserOutput>
      </div>
    );
  }
}

export default App;
