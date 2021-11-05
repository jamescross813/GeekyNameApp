import { Component } from "react";
import GroupsList from  "../../components/group/GroupsList"
import {connect} from "react-redux"

class GroupsListContainer extends Component{

    gatherList=()=>{
        // console.log(this.props.groupsInfo)
        // return(
        //     this.props.groupsInfo.groups.map((group)=>{
        //         return <GroupsList GroupInfo={group} />
        //     })
        // )
    }
        
    

    render(){
        return(
        <div>
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

