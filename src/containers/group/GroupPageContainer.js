import { Component } from "react";
import {connect} from "react-redux"
import GroupPage from "../../components/group/GroupPage"

class GroupPageContainer extends Component{

    renderGroup=()=>{
        let params = this.props.match.params.groupId
        return this.props.groupsInfo.groups.map((group)=>{
            if(group.id == params){
               return <GroupPage groupInfo={group} />
            }
        })

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
    return{groupsInfo: state.groupsInfo}
}

export default connect(mapStateToProps)(GroupPageContainer)