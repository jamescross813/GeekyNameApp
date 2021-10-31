import { Component } from "react";
import EventsList from "../../components/event/EventsList";
import EventsPage from "../../components/event/EventsPage"

class EventsPageContainer extends Component{
    handleEvent=()=>{
        console.log("clicked")
    }

    render(){
        return(
            <div>
                <EventsPage handleClick={this.handleEvent} />
            </div>
        )
    }
}

export default EventsPageContainer