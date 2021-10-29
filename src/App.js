import React, { Component } from 'react'
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom"
import './App.css';
import LoginForm from "./components/user/LoginForm"

class App extends Component {

  login = (formData) =>{
    console.log(formData.username)
  }

  render() {
    return(
      <Router>
        <div className="App">
          {/* login form conponent*/}
          <Route to exact path = "/" render={()=> <LoginForm handleLogin={this.login} />} />
          {/* homepage presentation component */}
        </div>
      </Router>
    )
  }
}

export default App;
