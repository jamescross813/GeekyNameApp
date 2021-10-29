import { Component } from "react";
import { Link } from "react-router-dom"
import LoginForm from "../user/LoginForm"

class Homepage extends Component{

    render(){
        return(
        <div>
            
            <Link to= "/signup" exact >Sign up</Link>
            <Link to= "/login" exact >Login</Link>
        </div>
        )
    }

}

export default Homepage