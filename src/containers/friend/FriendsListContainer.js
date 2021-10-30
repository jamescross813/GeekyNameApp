import { Component } from "react";
import FriendsList from "../../components/friend/FriendsList";

class FriendsListContainer extends Component{
    state={
        friends: []
    }

    componentDidMount(){
        fetch("http://localhost:3000/friends")
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