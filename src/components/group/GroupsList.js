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
                    {this.props.groupInfo.group_name}
                </li>
            </ul>
        </div>
        )
    }
}

export default GroupsList