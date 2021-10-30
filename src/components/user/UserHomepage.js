// include navbar
// render friends, groups, events, avialability
import { Component } from "react";
import NavBar from "../navbar/NavBar";
import EventsListContainer from "../../containers/event/EventsListContainer"
import FriendsListContainer from "../../containers/friend/FriendsListContainer"

class UserHomepage extends Component{
    render(){
        return(
        <div>
            <NavBar />
            <EventsListContainer />
            <FriendsListContainer />
        </div>
        )
    }
}

export default UserHomepage