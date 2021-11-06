import { Component } from "react";
import {Link} from "react-router-dom"

class LoggedInHomepage extends Component{
    render(){
        return(
            <div>
                <Link to="/user">
                <button>
                    Let's Go!
                </button>
                </Link>
            </div>
        )
    }

}

export default LoggedInHomepage