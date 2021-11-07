import {Component} from "react";

class GroupPage extends Component {

    friendInfo=()=>{
        return this.props.groupInfo.friend_groups.map((friend)=>{
            return this.renderFriends(friend.friend_id)
        })
    }

    renderFriends=(friendId)=>{
        return this.props.friendsInfo.friends.map((friend)=>{
            if(friend.id === friendId ){
                return <li>{friend.username}</li>
            }
        })
    }

    // eventInfo=()=>{

    // }
    
    render(){
        return(
            <div>
                <h2>{this.props.groupInfo.group_name}</h2>
                <h4>Friends</h4>
                {this.friendInfo()}
                <h4>Events</h4>
                {/* {console.log(this.props.friendsInfo.friends)} */}
            </div>
        )
    }
}

export default GroupPage