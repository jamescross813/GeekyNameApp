import React, { Component } from 'react'
import { BrowserRouter as Router, Route, NavLink, Link } from "react-router-dom"
import './App.css';
import Homepage from "./components/homepage/Homepage";
import LoginFormContainer from "./containers/user/LoginFormContainer"
import SignupFormContainer from "./containers/user/SignupFormContainer"
import UserHomepageContainer from "./containers/user/UserHomepageContainer"
import GroupsPageContainer from "./containers/group/GroupsPageContainer"
import FriendsPageContainer from "./containers/friend/FriendsPageContainer"
import EventsPageContainer from "./containers/event/EventsPageContainer"
import UsersContainer from "./containers/user/UsersContainer";
import NavBar from "./components/navbar/NavBar";
import EventInputContainer from "./containers/event/EventInputContainer";
import FriendInputContainer from "./containers/friend/FriendInputContainer";
import GroupInputContainer from "./containers/group/GroupInputContainer"
import FriendsContainer from "./containers/friend/FriendsContainer";

class App extends Component { 
 
  render() {
    return(
      <Router>
        <div className="App">
          <UsersContainer/>
          <FriendsContainer />
          <NavBar />
          <Route to exact path = "/" render={routerprops=><Homepage {...routerprops}/>}/>
          <Route to exact path="/signup" render={routerprops=><SignupFormContainer {...routerprops}/>}/>
          <Route to exact path="/login" render={routerprops=><LoginFormContainer {...routerprops} />}/>
          <Route to path="/user" render={routerprops=><UserHomepageContainer {...routerprops} userData={this.state}/>} />
          <Route to path="/groups" render={routerprops=><GroupsPageContainer {...routerprops}/>} />
          <Route to path="/friends" render={routerprops=><FriendsPageContainer {...routerprops}/>}/>
          <Route to path="/events" render={routerprops =><EventsPageContainer {...routerprops} />}/>
          <Route to path="/availability" />
          <Route to path="/event/add" render={routerprops=><EventInputContainer {...routerprops} />} /> 
          <Route to path="/friend/add" render={routerprops=><FriendInputContainer {...routerprops} />} /> 
          <Route to path="/group/add" render={routerprops=><GroupInputContainer {...routerprops} />} /> 

        </div>
      </Router>
      
    )
  }
}

export default App;

