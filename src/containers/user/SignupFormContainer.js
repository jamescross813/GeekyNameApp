import React, { Component } from 'react';
import { Link } from "react-router-dom"
import UserHomepageContainer from "./UserHomepageContainer";
import { connect } from 'react-redux';
import SignupForm from "../../components/user/LoginForm";

class SignupFormContainer extends Component {

    login = (userData) =>{
        let loginInfo = {
                  user: {
                    username: userData.username,
                    password: userData.password,
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
                fetch("http://localhost:3000/users", configObj)
                  .then((r) => r.json())
                  .then(data=> this.props.setUserInfo(data))   
                  .then(this.props.history.push("/homepage"))
    }

    render() {  
        return (
          <div>
            <SignupForm handleLogin={this.login} />
          </div>
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

export default connect(null, mapDispatchToProps)(SignupFormContainer)