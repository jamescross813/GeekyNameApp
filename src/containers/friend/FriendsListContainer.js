import { Component } from "react";
import FriendsList from "../../components/friend/FriendsList";
import {connect} from "react-redux"

class FriendsListContainer extends Component{

        gatherList=()=>{
            return(
                this.props.friendsInfo.friends.map((friend)=>{
                    return <FriendsList friendInfo={friend} key={friend.username} />
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
    
    export default connect(mapStateToProps)(FriendsListContainer)