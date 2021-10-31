import { Component } from "react";

class UserContainer extends Component{

    fetchUsers=()=>{
        fetch("http://localhost:3000/users")
        .then(r=>r.json())
        .then(data=>console.log(data))

    }
    render(){
        return(
        <div>{this.fetchUsers()}</div>
        )
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        setUserInfo: (user) => dispatch({
          type: "ADD_USER",
          userData: user
        })
      };
}

export default UserContainer

