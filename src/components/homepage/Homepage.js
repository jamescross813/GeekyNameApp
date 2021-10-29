import { Component } from "react";
import { Link } from "react-router-dom"
import LoginForm from "../user/LoginForm"

class Homepage extends Component{
    renderPage =()=>{
        return <LoginForm handleLogin={this.login}/>
    }

    render(){
        return(
        <div>
            <button>Login</button>
            <button>Signup</button>
            <Link to= "/signup" exact onCLick={this.renderPage} >Login</Link>
        </div>
        )
    }

}

export default Homepage