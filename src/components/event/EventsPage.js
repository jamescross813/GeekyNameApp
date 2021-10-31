import React from "react";
import EventInputContainer from "../../containers/event/EventInputContainer";
import EventsListContainer from "../../containers/event/EventsListContainer";

const EventsPage = ()=>{
    return(
    <div>
        <h3>Events Page</h3>
        <EventsListContainer />
        <EventInputContainer />
    </div>
    )
}

export default EventsPage