import { Component } from "react";

class Homepage extends Component{

    render(){
        return(
        <div>
            <button>Login</button>
            <button>Signup</button>
            <Link to exact path = "/signup" render={()=> <LoginForm handleLogin={this.login} />} />
        </div>
        )
    }

}

export default Homepage