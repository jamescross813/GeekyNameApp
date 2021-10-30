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
        this.props.handleLogin(this.state)
        this.setState({
          username: "",
          password: ""
        })
      }

    render() {  
        return (
          <form onSubmit={this.handleSubmit}>
              <label>Username</label><br/>
              <input type="text" name="username" value={this.state.username} onChange={this.handleChange} /><br/>
              <label>Password</label><br/>
              <input type="password" name="password" value={this.state.password} onChange={this.handleChange} /><br/>
              <Link to="/user/1">
              <input type="submit" />
              </Link>
          </form>
        );
      }
};

export default LoginForm