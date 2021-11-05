import { Component } from "react";
import { connect } from "react-redux"

class GroupsContainer extends Component{

    state = {
        groups: []
    }
    
    componentDidMount(){
        fetch("http://localhost:3000/groups")
        .then(resp=>resp.json())
        // .then(data=>data.map((friend)=>{
        //             if(friend.user_id === this.props.userInfo.user.id) {
        //                 return this.gatherListInfo(friend.friend_user_id)
        //             }
        //         }
        //     )
        // )
        .then(data=>console.log(data))
    }

        gatherListInfo=(id)=>{
            // return this.props.usersInfo.users.map((user)=>{
            //             if(id === user.id){
            //                 return this.props.setFriendsInfo(user)
            //             } 
            //         })
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
        setFriendsInfo: (group) => dispatch({
          type: "ADD_GROUP",
          groupData: group
        })
      };
}



export default connect(mapStateToProps, mapDispatchToProps)(GroupsContainer)

