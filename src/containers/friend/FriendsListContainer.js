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

    renderList=()=>(
        this.state.friends.map((friend)=>{
            if (friend.user_id === this.props.user.id || friend.friend_id === this.props.user.id){
                console.log("yes")
            }else{
                console.log("nope")
            }
            // console.log(this.props.user.id)
        }
            ))
        

    render(){
        return(
        <div>
            {this.renderList()}
            {/* {console.log(this.props)} */}
        </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return{user: state.user}
}

export default connect(mapStateToProps)(FriendsListContainer)