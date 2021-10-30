// include navbar
// render friends, groups, events, avialability
import { Component } from "react";
import NavBar from "../navbar/NavBar";
import EventsListContainer from "../../containers/event/EventsListContainer"
import FriendsListContainer from "../../containers/friend/FriendsListContainer"
import GroupsListContainer from "../../containers/group/GroupsListContainer"
import EventsPageContainer from "../../containers/event/EventsPageContainer"
import FriendsPageContainer from "../../containers/friend/FriendsPageContainer";
import GroupsPageContainer from "../../containers/group/GroupsPageContainer";

class UserHomepage extends Component{
    render(){
        return(
        <div>
            <NavBar />
            <h2>Welcome</h2>
            <EventsPageContainer />
            <EventsListContainer />
            <FriendsPageContainer />
            <FriendsListContainer />
            <GroupsPageContainer />
            <GroupsListContainer />
        </div>
        )
    }
}

export default UserHomepage