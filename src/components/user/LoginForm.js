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

    render() {  
        return (
          <form>
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