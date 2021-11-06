import React from "react";
import { Link } from "react-router-dom";

const GroupsList = ({groupInfo})=>{
    return(
    <div>
        <ul>
            <li>
                <Link>
                    {groupInfo.group_name}
                </Link>
            </li>
        </ul>
    </div>
    )
}

export default GroupsList