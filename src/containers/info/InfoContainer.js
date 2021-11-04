import { Component } from "react";
import FriendsContainer from "../friend/FriendsContainer";
import UsersContainer from "../user/UsersContainer";
import {Route} from "react-router-dom"
import UserHomepageContainer from "../user/UserHomepageContainer";

class InfoContainer extends Component{

    redner(){
        <div>
        
            <UsersContainer />
            <FriendsContainer />
           
        </div>
    }

}

export default InfoContainer