// include navbar
// render friends, groups, events, avialability
import { Component } from "react";
import NavBar from "../navbar/NavBar";

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