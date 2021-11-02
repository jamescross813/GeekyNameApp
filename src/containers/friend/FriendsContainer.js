import { Component } from "react";
import { connect } from "react-redux"

class FriendsContainer extends Component{

    fetchFriends=()=>{
        fetch("http://localhost:3000/friends")
        .then(r=>r.json())
        .then(data=> this.setFriendsInfo(data))
    }

    render(){
        return(
        <div>
            {this.fetchFriends()}
        </div>
        )
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

export default connect(null, mapDispatchToProps)(FriendsContainer)

