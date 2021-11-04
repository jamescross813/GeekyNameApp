import { Component } from "react";
import { connect } from "react-redux"

class FriendsContainer extends Component{

    state = {
        friends: []
    }
    
    componentDidMount(){
        fetch("http://localhost:3000/friends")
        .then(resp=>resp.json())
        .then(data=>data.map((friend)=>{
                    if(friend.user_id === this.props.userInfo.user.id) {
                        return this.gatherListInfo(friend.friend_user_id)
                    }
                }
            )
        )
    }

        gatherListInfo=(id)=>{
            return this.props.usersInfo.users.map((user)=>{
                        if(id === user.id){
                            return this.props.setFriendsInfo(user)
                            // console.log(user)
                        } 
                    })
        }  

    render(){
        return(
        <div>
            {console.log(this.props.friendsInfo.friends)}
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

const mapDispatchToProps=(dispatch)=>{
    return {
        setFriendsInfo: (friends) => dispatch({
          type: "ADD_FRIEND",
          friendData: friends
        })
      };
}



export default connect(mapStateToProps, mapDispatchToProps)(FriendsContainer)

