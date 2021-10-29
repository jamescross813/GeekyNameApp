import React, { Component } from 'react'
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom"
import './App.css';
import LoginForm from "./components/user/LoginForm"

class App extends Component {

  login = (username) =>{
    console.log(username)
  }

  render() {
    return(
      <Router>
        <div className="App">
      <NavLink>
          {/* login form conponent*/}
          <Route exact path = "/" component={LoginForm} handleLogin={this.login}/>
          {/* homepage presentation component */}
   </NavLink>
        </div>
      </Router>
    )
  }
}

export default App;
