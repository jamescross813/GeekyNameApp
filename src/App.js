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

state = {
  username: "",
  password: ""
}

  login = (formData) =>{
    this.fetchSession(formData)
  }

  fetchSession(formData){
    // console.log(formData.username)
    let loginInfo = {
          user: {
            username: formData.username,
            password: formData.password,
          },
        }
        let configObj = {
          method: "POST",
          headers:{
              "Content-Type": "application/json",
              "Accept": "application/json"
          },
          body: JSON.stringify(loginInfo)
      };
    fetch("http://localhost:3000/login", configObj)
    .then((r) => r.json())
    .then(data=> );
    }
  

  render() {
    return(
      <Router>
        <div className="App">
          <Route to exact path = "/" render={()=><Homepage />}/>
          <Route to exact path="/signup" render={()=><LoginForm handleLogin={this.login} />}/>
          <Route to exact path="/login" render={()=><LoginForm handleLogin={this.login} />}/>
          <Route to path="/user/1" render={routerprops=><UserHomepageContainer {...routerprops}/>} />
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

