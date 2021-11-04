import { Component } from "react";
import { connect } from "react-redux"

class FriendsContainer extends Component{

    state = {
        friends: []
    }
    
    componentDidMount(){
        fetch("http://localhost:3000/friends")
        .then(resp=>resp.json())
        .then(data=>this.setState({
            friends: data
        }))
    }

    render(){
        return(
        <div>
            {console.log(this.state.friends)}
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



export default connect(mapStateToProps, mapDispatchToProps)(FriendsContainer)

