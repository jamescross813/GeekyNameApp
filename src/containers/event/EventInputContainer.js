import { Component } from "react";
import EventInput from "../../components/event/EventInput"
import {connect} from "react-redux"

class EventInputContainer extends Component{

    createEvent=(formData)=>{
        let eventInfo = {
            event: {
                event_name: formData.event_name,
                description: formData.description,
                est_time: formData.est_time,
                game_type: formData.game_type
                // user_id: this.
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
            // .then(data=>console.log(data))
            .then(this.props.history.push("/user"))
            
    }

    render(){
        return(
            <div>
                {console.log(this.props)}
                <EventInput handleCreate={this.createEvent}/>
            </div>
        )
    }
}

export default connect()(EventInputContainer)