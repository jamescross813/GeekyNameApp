import React from "react";

const FriendsList = ({friendInfo})=>{
    return(
    <div>
        <ul>
            <li>
                {friendInfo.username}
                {/* {console.log(friendInfo)} */}
            </li>
        </ul>
    </div>
    )
}

export default FriendsList