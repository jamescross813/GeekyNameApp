// login form
// handleChange
// handleSubmit

// Form
// username
// password

// pass info back

import React, { Component } from 'react';

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
        console.log(this.state)
        this.setState({
          text: ""
        })
      }

    render() {  
        return (
          <form onSubmit={this.handleSubmit}>
              <label>Username</label><br/>
              <input type="text" name="username" value={this.state.username} onChange={this.handleChange} /><br/>
              <label>Password</label><br/>
              <input type="password" name="password" value={this.state.password} onChange={this.handleChange} /><br/>
              <input type="submit" />
          </form>
        );
      }
};

export default LoginForm