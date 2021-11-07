import { Component } from "react";
import {Link} from "react-router-dom"

class UserHomepage extends Component{
    render(){
        return(
        <div>
            <h2>Welcome {this.props.userInfo.username}!</h2>
                <h3>My Events</h3>
                    <Link to= "/events">></Link>
                   
                <h3>My Friends</h3>
                    <Link to= "/friends">></Link>
                   
                <h3>My Groups</h3>
                    <Link to= "/groups">></Link>
                }
        </div>
        )
    }
}

export default UserHomepage