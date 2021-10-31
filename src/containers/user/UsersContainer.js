import { Component } from "react";

class UserContainer extends Component{

    fetchUsers=()=>{
        fetch("http://localhost:3000/users")
        .then(r=>console.log(r))

    }
    render(){
        <div></div>
    }
}

export default UserContainer

