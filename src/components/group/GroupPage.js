import {Component} from "react";

class GroupPage extends Component {
    
    render(){
        return(
            <div>
                <h2>{this.props.groupInfo.group_name}</h2>
                {/* <li>{groupInfo.friend</li> */}
            </div>
        )
    }
}

export default GroupPage