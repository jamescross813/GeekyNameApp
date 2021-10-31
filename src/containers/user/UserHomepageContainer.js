import React, { Component } from 'react';
import UserHomepage from "../../components/user/UserHomepage"
import {Route} from "react-router-dom"

class UserHomepageContainer extends Component{
    state={
        user:{}
    }

        render(){
        console.log(this.props)
        return(
        <div>
          Here
        </div>
        )
    }
}

export default UserHomepageContainer