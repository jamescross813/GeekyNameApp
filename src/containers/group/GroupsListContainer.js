import { Component } from "react";
import GroupsList from  "../../components/group/GroupsList"
import {connect} from "react-redux"
import { Route } from "react-router-dom";
import GroupPageContainer from "./GroupPageContainer";

class GroupsListContainer extends Component{

    gatherList=()=>{
        return(
            this.props.groupsInfo.groups.map((group)=>{
                return <GroupsList groupInfo={group} />
            })
        )
    }

    render(){
        return(
        <div>
            {this.gatherList()}
            <Route path={`${this.props.match.url}/:movieId`} component={GroupPageContainer} />
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

