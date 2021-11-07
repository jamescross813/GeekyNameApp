import {Component} from "react";

class GroupPage extends Component {

    friendInfo=()=>{
        return this.props.groupInfo.friend_groups.map((friend)=>{
            console.log(friend.friend_id)
        })
    }
    
    render(){
        return(
            <div>
                <h2>{this.props.groupInfo.group_name}</h2>
                {this.friendInfo()}
            </div>
        )
    }
}

export default GroupPage