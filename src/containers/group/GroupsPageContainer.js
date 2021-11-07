import { Component } from "react";
import { Route } from "react-router-dom";
import GroupsPage from "../../components/group/GroupsPage"
import GroupPageContainer from "./GroupPageContainer"


class GroupsPageContainer extends Component{
    render(){
        return(
            <div>
                <GroupsPage />
                <Route path={`${this.props.match.url}/:groupId`} render={(routerProps) =><GroupPageContainer {...routerProps}/>} />
            </div>
        )
    }
}



export default GroupsPageContainer