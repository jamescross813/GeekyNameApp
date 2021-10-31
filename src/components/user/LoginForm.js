// login form
// handleChange
// handleSubmit

// Form
// username
// password

// pass info back

import React, { Component } from 'react';
import { Link } from "react-router-dom"

class LoginForm extends Component {

    state = {
        user:"", 
        username: "",
        password: ""
    }

    handleChange = (event) =>{
        this.setState({
          [event.target.name]: event.target.value
        })
      }

    handleSubmit = (event) =>{
        event.preventDefault()
        let loginInfo = {
          user: {
            username: this.state.username,
            password: this.state.password,
          },
        }
        let configObj = {
          method: "POST",
          headers:{
              "Content-Type": "application/json",
              "Accept": "application/json"
          },
          body: JSON.stringify(loginInfo)
      };
    fetch("http://localhost:3000/login", configObj)
    .then((r) => r.json())
    .then(data=> this.dataHandler(data))
    }

    dataHandler(data){
      console.log(data)
    }
    
    render() {  
        return (
          <form onSubmit={this.handleSubmit}>
              <label>Username</label><br/>
              <input type="text" name="username" value={this.state.username} onChange={this.handleChange} /><br/>
              <label>Password</label><br/>
              <input type="password" name="password" value={this.state.password} onChange={this.handleChange} /><br/>
              {/* <Link to="/user/1"> */}
                <input type="submit" />
              {/* </Link> */}
          </form>
        );
      }
};

export default LoginForm