import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {

  state = {
    username: 'tomquinn'
  }

  setUsernameHandler = (name) => {
    this.setState( {
      username: name
    });
  }

  render = () => {
    return (
      <div className="App">
        <UserInput>
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
