import { Component } from "react";
import EventInput from "../../components/event/EventInput"

class EventInputContainer extends Component{

    createEvent=(formData)=>{
        console.log(formData)
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