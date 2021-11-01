import { Component } from "react";
import FriendsList from "../../components/friend/FriendsList";
import {connect} from "react-redux"

class FriendsListContainer extends Component{
    
    componentDidMount(){
        fetch("http://localhost:3000/friends")
        .then(resp=>resp.json())
        .then(data=>{
            if(data.id===this.props.user.user.id){
            this.props.setFriendsInfo(data)
            }
        })
        
    }

    gatherList=()=>(
        // console.log(this.props.friends.friends.friends)
        this.props.friends.friends.friends.map((friend)=>{
            return <FriendsList friendInfo={this.props.friends} />
        })
    )

    render(){
        return(
        <div>
            {this.gatherList()}
            {/* {console.log(this.props)} */}
            {/* <FriendsList friendInfo={this.props.friends} /> */}
        </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return{
        user: state.user,
        users: state.users,
        friends: state.friends
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