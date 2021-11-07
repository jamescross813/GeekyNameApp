import { Component } from "react";
import GroupsList from  "../../components/group/GroupsList"
import {connect} from "react-redux"

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
                {this.renderGroup()}
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

