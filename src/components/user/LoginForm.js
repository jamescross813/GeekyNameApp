// login form
// handleChange
// handleSubmit

// Form
// username
// password

// pass info back

import React, { Component } from 'react';

class LoginForm extends Component {

    render() {  
        return (
          <form>
              <label>Username</label>
              <input type="text" onChange={this.handleChange} />
              <label>Password</label>
              <input type="password" onChange={this.handleChange} />
              <input type="submit" />
          </form>
        );
      }
};

export default LoginForm