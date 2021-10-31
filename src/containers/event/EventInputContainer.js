import { Component } from "react";
import EventInput from "../../components/event/EventInput"

class EventInputContainer extends Component{

    createEvent=(formData)=>{
        let eventInfo = {
            event: {
                event_name: formData.event_name,
                description: formData.description,
                est_time: formData.est_time,
                game_type: formData.game_type
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
            .then((r) => console.log(r))
            
    }

    render(){
        return(
            <div>
                <EventInput handleCreate={this.createEvent}/>
            </div>
        )
    }
}

export default EventInputContainer