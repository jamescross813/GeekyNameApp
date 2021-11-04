import { Component } from "react";
import FriendsList from "../../components/friend/FriendsList";
import {connect} from "react-redux"

class FriendsListContainer extends Component{

        gatherList=()=>{
            console.log(this.props)
        }

        // gatherListInfo = (id)=>{
        //     return(
        //         this.props.usersInfo.users.map((user)=>{
        //             if(id === user.id){
        //                 return <FriendsList friendInfo={user} />
        //             } 
        //         })
        //     )
        // }   
    
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