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
          text: event.target.value
        })
      }

    handleSubmit = (event) =>{
        event.preventDefault()
        this.props.addRest(this.state)
        this.setState({
          text: ""
        })
      }

    render() {  
        return (
          <form onSubmit={this.handleSubmit}>
              <label>Username</label><br/>
              <input type="text" onChange={this.handleChange} /><br/>
              <label>Password</label><br/>
              <input type="password" onChange={this.handleChange} /><br/>
              <input type="submit" />
          </form>
        );
      }
};

export default LoginForm