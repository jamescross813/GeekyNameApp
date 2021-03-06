import { Component } from "react";
import {connect} from "react-redux"
import GroupPage from "../../components/group/GroupPage"

class GroupPageContainer extends Component{
    
    findGroup=()=>{
        let params = this.props.match.params.groupId
        return this.props.groupsInfo.groups.map((group)=>{
            if(group.id == params){
             return <GroupPage groupInfo={group} friendsInfo={this.props.friendsInfo} eventsInfo={this.props.eventsInfo} />
            }
        })
    }

    render(){
        return(
            <div>
               {this.findGroup()}
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return{
        groupsInfo: state.groupsInfo,
        friendsInfo: state.friendsInfo,
        eventsInfo: state.eventsInfo
    }
}

export default connect(mapStateToProps)(GroupPageContainer)