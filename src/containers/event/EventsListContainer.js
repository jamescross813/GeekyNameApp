import { Component } from "react";
import EventsList from "../../components/event/EventsList";

class EventsListContainer extends Component{
    state={
        event_name: "",
        description:"",
        est_time: "",
        game_type: ""
    }

    componentDidMount(){
        fetch("http://localhost:3000/events")
        .then(resp=>resp.json())
        .then(data=> console.log(data))
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