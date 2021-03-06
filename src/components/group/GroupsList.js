import {Component} from "react";
import { Link } from "react-router-dom"

class GroupsList extends Component{

    render(){
        return(
            <div>
                <ul>
                    <li>
                        <Link key={this.props.group_id} to={`/groups/${this.props.groupInfo.id}`}>
                            {this.props.groupInfo.group_name}
                        </Link>
                    </li>
                </ul>
            </div>
        )
    }
}

export default GroupsList