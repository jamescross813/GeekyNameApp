import { Component } from "react";
import {Link} from "react-router-dom"

class UserHomepage extends Component{
    render(){
        return(
            <div>
                <h2>Welcome {this.props.userInfo.username}!</h2>
                    
                        <Link to= "/events">
                            <h3>My Events</h3>
                        </Link>
                
                        <Link to= "/friends">
                            <h3>My Friends
                        </h3></Link>
                    
                        <Link to= "/groups">
                            <h3>My Groups</h3>
                        </Link>
                    
            </div>
        )
    }
}

export default UserHomepage