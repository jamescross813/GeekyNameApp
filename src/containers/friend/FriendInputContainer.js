import { Component } from "react";
import FriendInput from "../../components/friend/FriendInput"
import {connect} from "react-redux"
import FriendsContainer from "./FriendsContainer";

class EventInputContainer extends Component{

    createFriend=(formData)=>{
        let friendInfo = {
            friend: {
                username: formData.username,
                user_id: this.props.userInfo.user.id
            },
          }
          let configObj = {
            method: "POST",
            headers:{
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(friendInfo)
          };
          fetch("http://localhost:3000/friends", configObj)
            .then((r) => r.json())
            // .then((r)=>console.log(r))
            .then(data=>this.newFriend(data))
            .then(this.props.history.push("/friends"))
        }

    render(){
        return(
            <div>
                <FriendInput handleCreate={this.createFriend}/>
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return{userInfo: state.userInfo}
}

const mapDispatchToProps=(dispatch)=>{
    return {
        setFriendsInfo: (friends) => dispatch({
          type: "ADD_FRIEND",
          friendData: friends
        })
      };
}

export default connect(mapStateToProps, mapDispatchToProps)(EventInputContainer)