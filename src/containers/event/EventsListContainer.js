import { Component } from "react";
import EventsList from "../../components/event/EventsList";
import {connect} from "react-redux"

class EventsListContainer extends Component{
    
    render(){
        return(   
            <div>
                {this.gatherList()}
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return{
        userInfo: state.userInfo,
        usersInfo: state.usersInfo
    }
}


    

export default connect(mapStateToProps)(EventsListContainer)