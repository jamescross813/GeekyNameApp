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
            if(friend.friend_id === this.props.user.id) {
                return this.renderList(friend.friend_id)
            }            
            
        })
    )

    renderList = ()=>{
        // return <FriendsList userInfo={this.props.user} friendInfo={friend} />
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
    return{user: state.user}
}

export default connect(mapStateToProps)(FriendsListContainer)