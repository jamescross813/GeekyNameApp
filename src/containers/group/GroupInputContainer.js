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
                user_id: this.props.userInfo.user.id
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
            .then(data=>console.log(data))
            .then(this.props.history.push("/groups"))
    }

    componentDidMount=()=>{
        return(
            this.props.friendsInfo.friends.map((friend)=>{
                if(friend.user_id === this.props.userInfo.user.id) {
                    return this.gatherListInfo(friend.friend_user_id)
                }           
            })  
        )
    }

    gatherListInfo=(id)=>{
        return(
            this.props.usersInfo.users.map((user)=>{
                if(id === user.id){
                    return(
                        this.setState(prevState=>({
                            friends: [...prevState.friends, user]
                        })
                    )
                    )} 
            })
        )
    }   

    render(){
        return(
            <div>
                <GroupInput handleCreate={this.createGroup} friends={this.state.friends}/>
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return{
        userInfo: state.userInfo,
        usersInfo: state.usersInfo,
        friendsInfo: state.friendsInfo
    }
}

export default connect(mapStateToProps)(GroupInputContainer)