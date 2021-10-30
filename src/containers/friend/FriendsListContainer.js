import { Component } from "react";
import FriendsList from "../../components/friend/FriendsList";

class FriendsListContainer extends Component{
    state={
        friends: []
    }

    componentDidMount(){
        fetch("http://localhost:3000/friends")
        .then(resp=>resp.json())
        .then(data=>{
            this.setState({
                friends: data
            })
        })
    }

    renderList=()=>
        this.state.friends.map((friend)=>(<FriendsList friend = {friend} />))

    render(){
        return(
        <div>
            <FriendsList />
        </div>
        )
    }
}

export default FriendsListContainer