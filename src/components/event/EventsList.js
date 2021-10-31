import React from "react";

const EventsList = ({eventInfo})=>{
    return(
    <div>
        <ul>
            <li>
                {/* {eventInfo.event_name} */}
                {console.log(eventInfo)}
            </li>
        </ul>
    </div>
    )
}

export default EventsList