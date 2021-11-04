import { Component } from "react";
import FriendsList from "../../components/friend/FriendsList";
import {connect} from "react-redux"

class FriendsListContainer extends Component{

        gatherList=()=>{
            return(
                this.props.friendsInfo.friends.map((friend)=>{
                    return <FriendsList friendInfo={friend} />
                })
            )
        }   
    
        render(){
            return(
                <div>
                   {this.gatherList()}
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
    
    export default connect(mapStateToProps)(FriendsListContainer)