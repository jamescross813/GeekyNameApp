// include navbar
// render friends, groups, events, avialability
import { Component } from "react";

import EventsListContainer from "../../containers/event/EventsListContainer"
import FriendsListContainer from "../../containers/friend/FriendsListContainer"
import GroupsListContainer from "../../containers/group/GroupsListContainer"
// import EventsPageContainer from "../../containers/event/EventsPageContainer"
// import FriendsPageContainer from "../../containers/friend/FriendsPageContainer";
// import GroupsPageContainer from "../../containers/group/GroupsPageContainer";

class UserHomepage extends Component{
    render(){
        {console.log(this.props)}
        return(
        <div>
            
            <h2>Welcome {this.props.userInfo.user.username}!</h2>
            {/* {console.log(this.props.userInfo.user.username)} */}
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