import { Component } from "react";
import EventsList from "../../components/event/EventsList";
import EventsPage from "../../components/event/EventsPage"
import EventInputContainer from "./EventInputContainer";

class EventsPageContainer extends Component{
   
    render(){
        
        return(
            <div>
                <EventsPage />
            </div>
        )
    }
}

export default EventsPageContainer