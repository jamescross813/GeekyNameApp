import React from "react";
import EventInputContainer from "../../containers/event/EventInputContainer";
import EventsListContainer from "../../containers/event/EventsListContainer";

const EventsPage = ({handleClick}) =>{
    return(
    <div>
        <h3>Events Page</h3>
        <EventsListContainer />
        <button onClick={handleClick}>Add</button>
    </div>
    )
}

export default EventsPage