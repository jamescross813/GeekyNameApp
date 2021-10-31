import React, { Component } from 'react';
import UserHomepage from "../../components/user/UserHomepage"
import {Route} from "react-router-dom"

class UserHomepageContainer extends Component{
    state={
        user:{}
    }

// getData= (formData)=>{
//     let loginInfo = {
//         user: {
//           username: formData.username,
//           password: formData.password,
//         },
//       }
//       let configObj = {
//         method: "POST",
//         headers:{
//             "Content-Type": "application/json",
//             "Accept": "application/json"
//         },
//         body: JSON.stringify(loginInfo)
//       };
//       fetch("http://localhost:3000/login", configObj)
//         .then((r) => r.json())
//         .then(data=> console.log(this.setState({
//           user: data
//         }))
        
//       )
//       // (this.state.user)
    
// }

    render(formData){
        console.log(this.props.userData)
        return(
        <div>
            {this.getData(formData)}
            <Route to path="/user/1" render={routerprops=><UserHomepage {...routerprops} userData={this.state.user}/>} />
        </div>
        )
    }
}

export default UserHomepageContainer