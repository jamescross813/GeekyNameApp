import { Component } from "react";
import { Route } from "react-router-dom";
import GroupsPage from "../../components/group/GroupsPage"
import GroupPage from "../../components/group/GroupPage"
import {connect} from "react-redux"

class GroupsPageContainer extends Component{
    render(){
        return(
            <div>
                <GroupsPage />
                <Route path={`${this.props.match.url}/:groupId`} render={(routerProps) =><GroupPage />} />
                {console.log(this.props)}
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return{groupsInfo: state.groupsInfo}
}

export default connect(mapStateToProps)(GroupsPageContainer)