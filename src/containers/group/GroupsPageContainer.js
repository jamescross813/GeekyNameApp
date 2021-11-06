import { Component } from "react";
import GroupsPage from "../../components/group/GroupsPage"

class GroupsPageContainer extends Component{
    render(){
        return(
            <div>
                <GroupsPage routerprops={this.props.match}/>
            </div>
        )
    }
}

export default GroupsPageContainer