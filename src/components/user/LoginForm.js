import React, { Component } from 'react';
import { Link } from "react-router-dom"
import UserHomepageContainer from "../../containers/user/UserHomepageContainer";
import { connect } from 'react-redux';


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
      console.log(this.props)
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
                  .then(data=> this.props.setUserInfo(data)) 
                  // .then(console.log(this.props))   
                  .then(this.props.history.push("/user"))
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

const mapDispatchToProps=(dispatch)=>{
  return {
    setUserInfo: (user) => dispatch({
      type: "ADD_USER",
      userData: user
    })
  };
}
const mapStateToProps=(state)=>{
  return{user: state.user}
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)