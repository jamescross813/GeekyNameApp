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
        this.state.friends.map((friend)=>{
            if(friend.user_id === this.props.user.user.id) {
                return this.gatherListInfo(friend.friend_user_id)
                // console.log(this.props.user.user.id)
            }             
        })
    )

    gatherListInfo = (id)=>{
        return(
            this.props.users.users.map((user)=>{
                if(id === user.id){
                    // console.log(user.username)
                    return <FriendsList friendInfo={user} />
                } 
            })
        )
    }     

    render(){
        return(
        <div>
            {this.gatherList()}
            {/* {console.log(this.props)} */}
        </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return{
        user: state.user,
        users: state.users
    }
}

export default connect(mapStateToProps)(FriendsListContainer)