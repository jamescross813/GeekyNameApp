import React, { Component } from 'react'
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom"
import './App.css';
import LoginForm from "./components/user/LoginForm"
import UserHomepageContainer from "./containers/user/UserHomepageContainer"
import Homepage from "./components/homepage/Homepage";

class App extends Component {

  login = (formData) =>{
    console.log(formData.username)
  }

  render() {
    return(
      <Router>
        <div className="App">
          
          
          {/* login form conponent*/}
          <Route to exact path = "/" render={()=><Homepage />}/>
          <Route to exact path="/signup" render={()=><LoginForm handleLogin={this.login} />}/>
          <Route to exact path="/login" render={()=><LoginForm handleLogin={this.login} />}/>
          <Route to path="/user/1" render={()=><UserHomepageContainer />} />
          <Route to path="/groups"/>
          <Route to path="/friends" />
          <Route to path="/events" />
          <Route to path="/availability" />
        </div>
        
      </Router>
      
    )
  }
}

export default App;

