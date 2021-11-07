import { Component } from "react";
import { Route } from "react-router-dom";
import GroupsPage from "../../components/group/GroupsPage"
import GroupPage from "../../components/group/GroupPage"

class GroupsPageContainer extends Component{
    render(){
        return(
            <div>
                <GroupsPage routerProps={this.props.match}/>
                <Route path={`${this.props.match.url}/:groupId`} render={(routerProps) =><GroupPage {...routerProps} />} />
            </div>
        )
    }
}

export default GroupsPageContainer