import React, { Component } from 'react';
import UserHomepage from "../../components/user/UserHomepage"
import {Route} from "react-router-dom"
import {connect} from "react-redux"
// import FriendsContainer from "../friend/FriendsContainer";

class UserHomepageContainer extends Component{

    render(){
        return(
        <div>
          {/* {console.log(this.props)} */}
          <UserHomepage userInfo={this.props.userInfo.user}/>
          {/* {this.getInfo()} */}
          {/* <FriendsContainer /> */}
        </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return{
      userInfo: state.userInfo,
      usersInfo: state.usersInfo}
  }

export default connect(mapStateToProps)(UserHomepageContainer)