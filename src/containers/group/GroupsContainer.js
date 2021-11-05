import { Component } from "react";
import { connect } from "react-redux"

class GroupsContainer extends Component{

    state = {
        groups: []
    }
    
    componentDidMount(){
        fetch("http://localhost:3000/groups")
        .then(resp=>resp.json())
        .then(data=>data.map((group)=>{
                    this.gatherListInfo(group.user_groups)
                    }
            )
        )
    }

        gatherListInfo=(userGroup)=>{
            userGroup.map((group)=>{
                if(group.user_id === this.props.userInfo.user.id){
                    return this.finalInfo(group.id)
                }
            })
        }  
        finalInfo=(id)=>{
            return(
                this.state.groups.map((group)=>{
                    if(group.id === id){
                        return 
                    }
                })
            )
        }

    render(){
        return(
        <div>
            
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



export default connect(mapStateToProps, mapDispatchToProps)(GroupsContainer)

