import React, { Component } from 'react';
import UserHomepage from "../../components/user/UserHomepage"

class UserHomepageContainer extends Component{

    login = (formData) =>{
        this.fetchSession(formData)
      }
    
      fetchSession(formData){
        console.log(formData)
        fetch("http://localhost:3000/login",{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          user: {
            username: formData.username,
            password: formData.password,
          },
        }),
      })
        .then((r) => r.json())
        .then(data=> <Link to="/user/1" userData={data}/>);
        }

    render(){
        // console.log(this.props)
        return(
        <div>
            <UserHomepage />
        </div>
        )
    }
}

export default UserHomepageContainer