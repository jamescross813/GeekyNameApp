import { Component } from "react";
import EventInput from "../../components/event/EventInput"
import {connect} from "react-redux"

class EventInputContainer extends Component{

    createEvent=(formData)=>{
        // console.log(formData.groups)
        let eventInfo = {
            event: {
                event_name: formData.event_name,
                description: formData.description,
                est_time: formData.est_time,
                game_type: formData.game_type,
                user_id: this.props.userInfo.user.id, 
                group: formData.groups
            },
          }
          let configObj = {
            method: "POST",
            headers:{
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(eventInfo)
          };
          fetch("http://localhost:3000/events", configObj)
            .then((r) => r.json())
            .then(data=>this.newEvent(data))
            .then(this.props.history.push("/events"))
    }

    newEvent=(event)=>{
        return this.props.setEventsInfo(event)
    }

    render(){
        return(
            <div>
                <EventInput handleCreate={this.createEvent} groupsInfo={this.props.groupsInfo} />
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return{
        userInfo: state.userInfo,
        groupsInfo: state.groupsInfo
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        setEventsInfo: (events) => dispatch({
          type: "ADD_EVENT",
          eventData: events
        })
      };
}

export default connect(mapStateToProps, mapDispatchToProps)(EventInputContainer)