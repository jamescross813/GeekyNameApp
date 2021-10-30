import { Component } from "react";
import EventsList from "../../components/event/EventsList";

class EventsListContainer extends Component{
    state={
        event_name: "",
        description:"",
        est_time: "",
        game_type: ""
    }

   
    render(){
        return(
        <div>
            <EventsList />
        </div>
        )
    }
}

export default EventsListContainer