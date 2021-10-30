import React, { Component } from 'react'
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom"
import './App.css';
import Homepage from "./components/homepage/Homepage";
import LoginForm from "./components/user/LoginForm"
import UserHomepageContainer from "./containers/user/UserHomepageContainer"
import GroupsPageContainer from "./containers/group/GroupsPageContainer"
import FriendsPageContainer from "./containers/friend/FriendsPageContainer"
import EventsPageContainer from "./containers/event/EventsPageContainer"

class App extends Component {

  login = (formData) =>{
    console.log(formData.username)
  }

  render() {
    return(
      <Router>
        <div className="App">
          <Route to exact path = "/" render={()=><Homepage />}/>
          <Route to exact path="/signup" render={()=><LoginForm handleLogin={this.login} />}/>
          <Route to exact path="/login" render={()=><LoginForm handleLogin={this.login} />}/>
          <Route to path="/user/1" render={()=><UserHomepageContainer />} />
          <Route to path="/groups" render={()=><GroupsPageContainer />} />
          <Route to path="/friends" render={()=><FriendsPageContainer />}/>
          <Route to path="/events" render={()=><EventsPageContainer />}/>
          <Route to path="/availability" />
        </div>
      </Router>
      
    )
  }
}

export default App;

