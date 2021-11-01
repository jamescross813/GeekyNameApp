import { Component } from "react";
import { connect } from "react-redux"

class FriendsContainer extends Component{

    render(){
        return(
        <div>
            
        </div>
        )
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        setFriendsInfo: (friends) => dispatch({
          type: "ADD_USERS",
          friendData: friends
        })
      };
}

export default connect(null, mapDispatchToProps)(FriendsContainer)

