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
              <input type="text" onChange={this.handleChange} />
              <input type="password" onChange={this.handleChange} />
              <input type="submit" />
          </form>
        );
      }
};