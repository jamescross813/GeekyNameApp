import React, { Component } from 'react';
import UserHomepage from "../../components/user/UserHomepage"

class UserHomepageContainer extends Component{

    render(){
        console.log(this.props.userData)
        return(
        <div>
            <UserHomepage />
        </div>
        )
    }
}

export default UserHomepageContainer