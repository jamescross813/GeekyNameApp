import { Component } from "react";
import EventsListContainer from "../../containers/event/EventsListContainer"
import FriendsListContainer from "../../containers/friend/FriendsListContainer"
import GroupsListContainer from "../../containers/group/GroupsListContainer"


class UserHomepage extends Component{
    render(){
        return(
        <div>
            <h2>Welcome {this.props.userInfo.username}!</h2>
                <h3>My Events</h3>
                    <EventsListContainer />
                <h3>My Friends</h3>
                    <FriendsListContainer />
                <h3>My Groups</h3>
                    <GroupsListContainer />
        </div>
        )
    }
}

export default UserHomepage