import {Component} from "react";
import {Link} from "react-router-dom"

class GroupsList extends Component{

    onClick=(event)=>{
        event.preventDefault()
        console.log("clicked")
    }
    render(){
        return(
        <div>
            <ul>
                <li>
                    <Link onClick={this.onClick}>
                        {this.props.groupInfo.group_name}
                    </Link>
                </li>
            </ul>
        </div>
        )
    }
}

export default GroupsList