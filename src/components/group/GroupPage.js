import { Component } from "react";

class GroupPage extends Component {

    friendInfo(){
        return this.props.groupInfo.friend_groups.map((friend)=>{
            return this.renderFriends(friend.friend_id)
        })
    }

    renderFriends(friendId){
        return this.props.friendsInfo.friends.map((friend)=>{
            if(friend.id === friendId ){
                return <li>{friend.username}</li>
            }
        })
    }

    eventInfo(){
        return this.props.eventsInfo.events.map((event)=>{
            event.group_events.map((groupEvent)=>{
               if(groupEvent.group_id === this.props.groupInfo.id){
                   return this.renderEvents(groupEvent.event_id)
                }
            })
        })
    }

    renderEvents(eventId){
        return this.props.eventsInfo.events.map((event)=>{
            if(event.id === eventId ){
                // return <p>{event.event_name}</p>
                console.log(event.event_name)
            }
        })
    }
    
    render(){
        return(
            <div>
                <h2>{this.props.groupInfo.group_name}</h2>
                    <h4>Friends</h4>
                        {this.friendInfo()}
                    <h4>Events</h4>
                        {this.eventInfo()}

            </div>
        )
    }
}

export default GroupPage