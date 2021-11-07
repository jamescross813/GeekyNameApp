import React from "react";

const FriendsList = ({friendInfo})=>{
    return(
        <div>
            <ul>
                <li>
                    {friendInfo.username}
                </li>
            </ul>
        </div>
    )
}

export default FriendsList