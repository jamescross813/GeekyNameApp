import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoginForm from "../../components/user/LoginForm";

class LoginFormContainer extends Component {

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
                fetch("http://localhost:3000/login", configObj)
                  .then((r) => r.json())
                  .then(data=> this.props.setUserInfo(data)) 
                  .then(this.props.history.push("/homepage"))
    }

    render() {  
        return (
         <div>
           <LoginForm handleLogin={this.login} />
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

export default connect(null, mapDispatchToProps)(LoginFormContainer)