import React, { Component } from 'react';
import UserHomepage from "../../components/user/UserHomepage"
import {Route} from "react-router-dom"
import {connect} from "react-redux"
import FriendsContainer from "../friend/FriendsContainer";

class UserHomepageContainer extends Component{
    
    render(){
        return(
        <div>
          <UserHomepage userInfo={this.props.user}/>
          {/* {console.log(this.props.user)} */}
          <FriendsContainer />
        </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return{
      user: state.user,
      users: state.users}
  }

export default connect(mapStateToProps)(UserHomepageContainer)