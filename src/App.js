import './App.css';
import LoginForm from "./components/user/LoginForm"
import React, { Component } from 'react'

class App extends Component {

  login = (username) =>{
    console.log(username)
  }

  render() {
    return(
    <div className="App">
      {/* login form conponent*/}
      <LoginForm handleLogin={this.login}/>
      {/* homepage presentation component */}
    </div>
    )
  }
}

export default App;
