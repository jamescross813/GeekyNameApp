import { Component } from "react";
import FriendInput from "../../components/event/FriendInput"
import {connect} from "react-redux"

class EventInputContainer extends Component{

    render(){
        return(
            <div>
                <FriendInput />
            </div>
        )
    }
}

export default connect()(EventInputContainer)