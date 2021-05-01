import React, { Component } from 'react';
import './App.css';
import { User1 } from './components/user1/user1.component';
import { User2 } from './components/user2/user2.component';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: []
    }
  }

  receivedMessage1 = (message) => {
    this.setState(prevState => ({
      userData: [...prevState.userData, ('User1 : ' + message)]
    }))
  }

  receivedMessage2 = (message) => {
    this.setState(prevState => ({
      userData: [...prevState.userData, ('User2 : ' + message)]
    }))
  }

  render() {
  
  return (
    <div className="App">
      <h1>Chat Box - Share your thoughts</h1>
      <div className="user-list">
        <User1 sendMessage = { this.receivedMessage1 }/>
        <User2 sendMessage = { this.receivedMessage2 }/>
      </div>
      <div className="chat-box">
        {
          this.state.userData.map((chat, i) => 
          <h4 key={i}>{chat}</h4>
        )
        }
      </div>
    </div>
  );
  }
}

export default App;
