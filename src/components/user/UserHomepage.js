// include navbar
// render friends, groups, events, avialability
import { Component } from "react";
import NavBar from "../navbar/NavBar";
import EventsListContainer from "../../containers/event/EventsListContainer"
import FriendsListContainer from "../../containers/friend/FriendsListContainer"
import GroupsListContainer from "../../containers/group/GroupsListContainer"
import EventsPageContainer from "../../containers/event/EventsPageContainer";

class UserHomepage extends Component{
    render(){
        return(
        <div>
            <NavBar />
            <EventsPageContainer />
            
            <EventsListContainer />
            <FriendsListContainer />
            <GroupsListContainer />
        </div>
        )
    }
}

export default UserHomepage