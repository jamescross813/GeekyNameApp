import { Component } from "react";
import GroupsList from  "../../components/group/GroupsList"

class GroupsListContainer extends Component{

    state={
        groups: []
    }
    
    render(){
        return(
        <div>
            <GroupsList />
        </div>
        )
    }
}

export default GroupsListContainer