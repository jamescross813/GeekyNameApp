import { Component } from "react";
import GroupsList from  "../../components/group/GroupsList"
import {connect} from "react-redux"
import { Route } from "react-router-dom";
import GroupPageContainer from "./GroupPageContainer";

class GroupsListContainer extends Component{

    gatherList=()=>{
        return(
            this.props.groupsInfo.groups.map((group)=>{
                return <GroupsList groupInfo={group} routerprops={this.props.routerprops} />
            })
        )
    }

    render(){
        return(
        <div>
            <Route path={`${this.props.routerprops.url}/:group_id`} render={(routerProps) =><GroupPageContainer />} />
            {this.gatherList()}
        </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return{
        userInfo: state.userInfo,
        groupsInfo: state.groupsInfo
    }
}

export default connect(mapStateToProps)(GroupsListContainer)

