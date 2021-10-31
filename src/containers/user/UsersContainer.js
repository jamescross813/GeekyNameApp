import { Component } from "react";
import { connect } from "react-redux"

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
        </div>
        )
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        setUsersInfo: (user) => dispatch({
          type: "ADD_USER",
          userData: user
        })
      };
}


export default connect(null, mapDispatchToProps)(UsersContainer)

