import { Component } from "react";
import FriendsList from "../../components/friend/FriendsList";

class FriendsListContainer extends Component{
    state={
        friends: []
    }

    

    render(){
        return(
        <div>
            <FriendsList />
        </div>
        )
    }
}

export default FriendsListContainer