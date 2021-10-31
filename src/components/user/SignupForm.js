import React, { Component } from 'react';
import { Link } from "react-router-dom"
import UserHomepageContainer from "../../containers/user/UserHomepageContainer";
import { connect } from 'react-redux';


class SignupForm extends Component {

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
      // console.log(this.props)
      event.preventDefault()
      this.props.handleLogin(this.state)
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



export default SignupForm