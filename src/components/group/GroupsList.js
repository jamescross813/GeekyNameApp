import {Component} from "react";
import {Link} from "react-router-dom"
import GroupPageContainer from "./GroupPage"

class GroupsList extends Component{

    onClick=(event)=>{
        event.preventDefault()
        return <GroupPageContainer groupInfo={this.props.groupInfo} />
    }

    render(){
        return(
        <div>
            <ul>
                <li>
                <Link key={this.props.group_id} to={`/groups/${this.props.group_id}`}>
                    {this.props.groupInfo.group_name}
                </Link>
                </li>
            </ul>
        </div>
        )
    }
}

export default GroupsList