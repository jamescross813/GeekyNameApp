import { Component } from "react";
import GroupInput from "../../components/group/GroupInput"
import {connect} from "react-redux"

class GroupInputContainer extends Component{

    createGroup=(formData)=>{
        let groupInfo = {
            group: {
                group_name: formData.group_name,
                user_id: this.props.user.user.id
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
            // .then((r)=>console.log(r))
            .then(data=>console.log(data))
            .then(this.props.history.push("/groups"))
    }

    render(){
        console.log(this.props)
        return(
            <div>
                <GroupInput handleCreate={this.createGroup}/>
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    // console.log(state)
    return{
        user: state.user,
        friends: state.friends
    }
}

export default connect(mapStateToProps)(GroupInputContainer)