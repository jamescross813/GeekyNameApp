import React from "react";
import EventsListContainer from "../../containers/event/EventsListContainer";
import { Link } from "react-router-dom";

const EventsPage = () =>{
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