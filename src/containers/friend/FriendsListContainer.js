import { Component } from "react";
import FriendsList from "../../components/friend/FriendsList";
import {connect} from "react-redux"

class FriendsListContainer extends Component{

        gatherList=()=>{
            // console.log(this.props.friendsInfo.friends)
            return(
                this.props.friendsInfo.friends.map((friend)=>{
                    if(friend.user_id === this.props.userInfo.user.id) {
                        return this.gatherListInfo(friend.friend_user_id)
                    }           
                })
            )
        }

        gatherListInfo = (id)=>{
            return(
                this.props.usersInfo.users.map((user)=>{
                    if(id === user.id){
                        return <FriendsList friendInfo={user} />
                    } 
                })
            )
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
    
    export default connect(mapStateToProps, mapDispatchToProps)(FriendsListContainer)