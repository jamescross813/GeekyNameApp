import React, { Component } from 'react';
import UserHomepage from "../../components/user/UserHomepage"
import {Route} from "react-router-dom"
import {connect} from "react-redux"

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

const mapStateToProps=(state)=>{
    return{user: state.user}
  }

export default connect(mapStateToProps)(UserHomepageContainer)