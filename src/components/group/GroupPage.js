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

    eventInfo=()=>{
        return this.props.groupInfo.group_events.map((event)=>{
            return this.renderEvents(event.event_id)
        })  
    }

    renderEvents=(eventId)=>{
        return this.props.eventsInfo.events.map((event)=>{
            if(event.id === eventId ){
                return <li>{event.event_name}</li>
            }
        })
    }
    
    render(){
        return(
            <div>
                <h2>{this.props.groupInfo.group_name}</h2>
                    <h4>Friends</h4>
                        {this.friendInfo()}
                    {/* <h4>Events</h4>
                        {this.eventInfo()} */}
                        {console.log(this.props)}
            </div>
        )
    }
}

export default GroupPage