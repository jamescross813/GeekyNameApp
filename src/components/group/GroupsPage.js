import React from "react";
import GroupsListContainer from "../../containers/group/GroupsListContainer";
import { Link } from "react-router-dom";

const GroupsPage = ({routerprops}) =>{
    return(
        <div>
            <h3>Groups Page</h3>
            <GroupsListContainer routerprops={routerprops}/>
            <Link to="/group/add">
                <button>Add</button>
            </Link>
        </div>
    )
}

export default GroupsPage