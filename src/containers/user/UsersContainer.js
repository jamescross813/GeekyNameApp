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

export default UserContainer

