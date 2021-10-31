import React, { Component } from 'react'
import { BrowserRouter as Router, Route, NavLink, Link } from "react-router-dom"
import './App.css';
import Homepage from "./components/homepage/Homepage";
import LoginForm from "./components/user/LoginForm"
import UserHomepageContainer from "./containers/user/UserHomepageContainer"
import GroupsPageContainer from "./containers/group/GroupsPageContainer"
import FriendsPageContainer from "./containers/friend/FriendsPageContainer"
import EventsPageContainer from "./containers/event/EventsPageContainer"

class App extends Component { 
 
  render() {
    return(
      <Router>
        <div className="App">
          <Route to exact path = "/" render={routerprops=><Homepage {...routerprops}/>}/>
          <Route to exact path="/signup" render={routerprops=><LoginForm {...routerprops} handleLogin={this.login} />}/>
          <Route to exact path="/login" render={routerprops=><LoginForm {...routerprops} handleLogin={this.login}/>}/>
          <Route to path="/user" render={routerprops=><UserHomepageContainer {...routerprops} userData={this.state}/>} />
          <Route to path="/groups" render={routerprops=><GroupsPageContainer {...routerprops}/>} />
          <Route to path="/friends" render={routerprops=><FriendsPageContainer {...routerprops}/>}/>
          <Route to path="/events" render={routerprops =><EventsPageContainer {...routerprops} />}/>
          <Route to path="/availability" />

        </div>
      </Router>
      
    )
  }
}

export default App;

