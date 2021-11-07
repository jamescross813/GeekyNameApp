import React, { Component } from 'react';
import UserHomepage from "../../components/user/UserHomepage"
import {connect} from "react-redux"

class UserHomepageContainer extends Component{

    render(){
        return(
          <div>
            <UserHomepage userInfo={this.props.userInfo.user}/>
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