import React from "react";

const GroupsList = ({groupInfo})=>{
    return(
    <div>
        <ul>
            <li>
                {groupInfo.group_name}
            </li>
        </ul>
    </div>
    )
}

export default GroupsList