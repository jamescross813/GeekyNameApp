import React, { Component } from 'react';
import UserHomepage from "../../components/user/UserHomepage"
import {Route} from "react-router-dom"
import {connect} from "react-redux"

class UserHomepageContainer extends Component{
    state={
        user:{}
    }

        render(){
        
        return(
        <div>
          <UserHomepage userInfo={this.props.user}/>
        </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return{user: state.user}
  }

export default connect(mapStateToProps)(UserHomepageContainer)