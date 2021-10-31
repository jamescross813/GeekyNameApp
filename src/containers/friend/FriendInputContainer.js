import { Component } from "react";
import FriendInput from "../../components/friend/FriendInput"
import {connect} from "react-redux"

class EventInputContainer extends Component{

    createFriend=(formData)=>{
        let friendInfo = {
            friend: {
                username: formData.username,
                user_id: this.props.user.user.id
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
            // .then((r) => r.json())
            .then((r)=>console.log(r))
            // .then(data=>console.log(data))
            // .then(this.props.history.push("/friends"))
        }

    render(){
        return(
            <div>
                <FriendInput />
            </div>
        )
    }
}

export default connect()(EventInputContainer)