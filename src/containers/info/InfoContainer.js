import { Component } from "react";
import FriendsContainer from "../friend/FriendsContainer";
import UsersContainer from "../user/UsersContainer";

class InfoContainer extends Component{

    redner(){
        <div>
            <FriendsContainer />
            <UsersContainer />
        </div>
    }

}

export default InfoContainer