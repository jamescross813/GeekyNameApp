import React from "react";
import GroupsListContainer from "../../containers/group/GroupsListContainer";
import { Link } from "react-router-dom";

const GroupsPage = ({routerProps}) =>{
    return(
        <div>
            <h3>Groups Page</h3>
            <GroupsListContainer routerProps={routerProps}/>
            <Link to="/group/add">
                <button>Add</button>
            </Link>
        </div>
    )
}

export default GroupsPage