import { Component } from "react";
import { connect } from "react-redux"

class FriendsContainer extends Component{
    
    componentDidMount(){
        fetch("http://localhost:3000/friends")
        .then(resp=>resp.json())
        .then(data=>this.props.setFriendsInfo(data))
    }

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
          type: "ADD_FRIEND",
          friendData: friends
        })
      };
}

export default connect(null, mapDispatchToProps)(FriendsContainer)

