import { Component } from "react";
import FriendsContainer from "../friend/FriendsContainer";
import GroupsContainer from "../group/GroupsContainer";
import EventsContainer from "../event/EventsContainer"
import LoggedInHomepage from "../../components/user/LoggedInHomePage";

class InfoContainer extends Component{

    render(){
        return(
            <div>
                <FriendsContainer />
                <GroupsContainer />
                <EventsContainer />
                <LoggedInHomepage />
            </div>
        )
    }

}

export default InfoContainer