import { Component } from "react";
import FriendsContainer from "../friend/FriendsContainer";
import UsersContainer from "../user/UsersContainer";
import {Link} from "react-router-dom"
import UserHomepageContainer from "../user/UserHomepageContainer";
import GroupsContainer from "../group/GroupsContainer";
import EventsContainer from "../event/EventsContainer"

class InfoContainer extends Component{

    render(){
        return(
            <div>
                {console.log(this.props)}
                <FriendsContainer />
                <GroupsContainer />
                <EventsContainer />
                <UserHomepageContainer />
            </div>
        )
    }

}

export default InfoContainer