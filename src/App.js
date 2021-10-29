import React, { Component } from 'react'
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom"
import './App.css';
import LoginForm from "./components/user/LoginForm"
import UserHomepageContainer from "./containers/user/UserHomepageContainer"

class App extends Component {

  login = (formData) =>{
    console.log(formData.username)
  }

  render() {
    return(
      <Router>
        <div className="App">
          <UserHomepageContainer />
          {/* login form conponent*/}
          {/* <Route to exact path = "/" render={()=> <LoginForm handleLogin={this.login} />} /> */}
          {/* homepage presentation component */}
          {/* <Route to exact path = "/user/1" render={()=> <UserHomepageContainer/>}/> */}
        </div>
        
      </Router>
      
    )
  }
}

export default App;
