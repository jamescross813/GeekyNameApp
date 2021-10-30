// include navbar
// render friends, groups, events, avialability
import { Component } from "react";
import NavBar from "../navbar/NavBar";
import EventsListContainer from "../../containers/event/EventsListContainer"

class UserHomepage extends Component{
    render(){
        return(
        <div>
            <NavBar />
            <EventsListContainer />
        </div>
        )
    }
}

export default UserHomepage