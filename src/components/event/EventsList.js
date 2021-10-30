import React from "react";

const EventsList = ({event})=>{
    return(
    <div>
        <ul>
            <li>
                {event.event_name}
            </li>
        </ul>
    </div>
    )
}

export default EventsList