import React from "react";
import FriendsListContainer from "../../containers/friend/FriendsListContainer";
import { Link } from "react-router-dom";

const FriendsPage = () =>{
    return(
    <div>
        <h3>Friends Page</h3>
        <FriendsListContainer />
        <Link to="/friend/add">
            <button>Add</button>
        </Link>
    </div>
    )
}

export default FriendsPage