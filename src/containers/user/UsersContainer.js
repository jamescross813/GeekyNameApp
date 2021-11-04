import { Component } from "react";
import { connect } from "react-redux"
import FriendsContainer from "../friend/FriendsContainer";

class UsersContainer extends Component{

    fetchUsers=()=>{
        fetch("http://localhost:3000/users")
        .then(r=>r.json())
        .then(data=>this.props.setUsersInfo(data))
    }

    render(){
        return(
            <div>
                {this.fetchUsers()}
                <FriendsContainer />
            </div>
        )
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        setUsersInfo: (users) => dispatch({
          type: "ADD_USERS",
          userData: users
        })
      };
}


export default connect(null, mapDispatchToProps)(UsersContainer)

