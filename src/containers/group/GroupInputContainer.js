import { Component } from "react";
import GroupInput from "../../components/group/GroupInput"
import {connect} from "react-redux"

class GroupInputContainer extends Component{

    state={
        friends: []
    }

    createGroup=(formData)=>{
        let groupInfo = {
            group: {
                group_name: formData.group_name,
                user_id: this.props.userInfo.user.id,
                friend_info: formData.friends
            },
          }
          let configObj = {
            method: "POST",
            headers:{
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(groupInfo)
          };
          fetch("http://localhost:3000/groups", configObj)
            .then((r) => r.json())
            .then(data=>this.newGroup(data))
            .then(this.props.history.push("/groups"))
    }  

    newGroup=(group)=>{
        return this.props.setGroupsInfo(group)
    }

    render(){
        return(
            <div>
                <GroupInput handleCreate={this.createGroup} friendsInfo={this.props.friendsInfo.friends}/>
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return{
        userInfo: state.userInfo,
        usersInfo: state.usersInfo,
        friendsInfo: state.friendsInfo,
        groupsInfo: state.groupsInfo
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        setGroupsInfo: (group) => dispatch({
          type: "ADD_GROUP",
          groupData: group
        })
      };
}

export default connect(mapStateToProps, mapDispatchToProps)(GroupInputContainer)