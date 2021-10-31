import { Component } from "react";

class UserContainer extends Component{

    fetchUsers=()=>{
        fetch("http://localhost:3000/users")

    }
    render(){
        <div></div>
    }
}

export default UserContainer

