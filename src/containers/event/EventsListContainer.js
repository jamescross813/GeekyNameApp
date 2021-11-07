import { Component } from "react";
import EventsList from "../../components/event/EventsList";
import {connect} from "react-redux"

class EventsListContainer extends Component{

    gatherList=()=>{
        return(
            this.props.eventsInfo.events.map((event)=>{
                return <EventsList eventInfo={event} key={event.event_name}/>
            })
        )
    }
    
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
        usersInfo: state.usersInfo,
        eventsInfo: state.eventsInfo
    }
}


    

export default connect(mapStateToProps)(EventsListContainer)