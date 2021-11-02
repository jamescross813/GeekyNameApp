import { Component } from "react";
import FriendsList from "../../components/friend/FriendsList";
import {connect} from "react-redux"

class FriendsListContainer extends Component{
    state={
        friends: []
    }

    componentDidMount(){
        fetch("http://localhost:3000/friends")
        .then(resp=>resp.json())
        .then(data=>{
            this.setState({
                friends: data
            })
        })
    }

    gatherList=()=>(
        // console.log(this.props.userInfo.user.id)
        this.state.friends.map((friend)=>{
            if(friend.user_id === this.props.userInfo.user.id) {
                return this.props.setFriendsInfo(friend.friend_user_id)
                // console.log(this.props.user.user.id)
            }            
            
        })
    )

    // gatherListInfo = (id)=>{
    //     // console.log(this.props.usersInfo.users)
    //     return this.props.usersInfo.users.map((friendlyuser)=>{
    //         if(friendlyuser.id === id){
    //             console.log(friendlyuser.id)
    //             return this.props.setFriendsInfo(friendlyuser.id)
    //         }
    //     })
    // }     

    render(){
        return(
        <div>
            {this.gatherList()}
            {console.log(this.props)}
            {/* <FriendsList friendInfo={user} /> */}
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
        setFriendsInfo: (friend) => dispatch({
          type: "ADD_FRIEND",
          friendData: friend
        })
      };
}

export default connect(mapStateToProps, mapDispatchToProps)(FriendsListContainer)