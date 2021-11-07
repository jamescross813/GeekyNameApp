import { Component } from "react";
import GroupsList from  "../../components/group/GroupsList"
import {connect} from "react-redux"
import { Route } from "react-router-dom";
import GroupPage from "../../components/group/GroupPage";
// import Homepage from "../../components/homepage/Homepage"

class GroupsListContainer extends Component{

    renderGroup=()=>{
        return(
            this.props.groupsInfo.groups.map((group)=>{
                return <GroupsList key={group.group_name} groupInfo={group} routerProps={this.props.routerProps} />
            })
        )
    }

    render(){
        return(
            <div>
                {console.log(this.props)}
                {/* <GroupPage /> */}
                {this.renderGroup()}
                {/* <Route path={`${this.props.routerProps.url}/:group_Id`} render={(routerProps)=><GroupPage {...this.props.routerProps}/>} /> */}
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

