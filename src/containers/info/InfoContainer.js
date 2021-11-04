import { Component } from "react";
import FriendsContainer from "../friend/FriendsContainer";
import UsersContainer from "../user/UsersContainer";
import {Link} from "react-router-dom"
import UserHomepageContainer from "../user/UserHomepageContainer";

class InfoContainer extends Component{

    render(){
        return(
            <div>
                <UsersContainer />
                <FriendsContainer />
                <Link to="/"><button>Enter Here</button></Link>
            </div>
        )
    }

}

export default InfoContainer