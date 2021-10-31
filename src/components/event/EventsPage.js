import React from "react";
import EventInputContainer from "../../containers/event/EventInputContainer";
import EventsListContainer from "../../containers/event/EventsListContainer";
import { Link } from "react-router-dom";

const EventsPage = ({handleClick}) =>{
    return(
    <div>
        <h3>Events Page</h3>
        <EventsListContainer />
        <Link to="/event/add">
        <button>Add</button>
        </Link>
    </div>
    )
}

export default EventsPage