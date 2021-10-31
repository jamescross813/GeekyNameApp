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
        {console.log(this.props)}
        return(
        <div>
            <NavBar />
            <h2>Welcome</h2>
            {/* <EventsPageContainer /> */}
            <h3>My Events</h3>
            <EventsListContainer />
            {/* <FriendsPageContainer /> */}
            <h3>My Friends</h3>
            <FriendsListContainer />
            {/* <GroupsPageContainer /> */}
            <h3>My Groups</h3>
            <GroupsListContainer />
        </div>
        )
    }
}

export default UserHomepage