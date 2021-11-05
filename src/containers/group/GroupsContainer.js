import { Component } from "react";
import { connect } from "react-redux"

class GroupsContainer extends Component{

    state = {
        groups: []
    }
    
    componentDidMount(){
        fetch("http://localhost:3000/groups")
        .then(resp=>resp.json())
        .then(data=>this.setState({
            groups: data
            })
        )
        // .then(this.gatherInfo())
    }
            
    gatherInfo=()=>{
        // {console.log(this.state.groups)}
        this.state.groups.map((group)=>{
            return this.gatherListInfo(group.user_groups)
            }
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
        return this.state.groups.map((group)=>{
                if(group.id === id){
                    return this.props.setGroupsInfo(group)
                    // console.log(group)
                }
            })
    }

    render(){
        return(
        <div>
            {this.gatherInfo()}
            {/* {console.log(this.props)} */}
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

