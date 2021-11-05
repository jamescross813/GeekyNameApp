import { Component } from "react";
import { connect } from "react-redux"

class EventsContainer extends Component{

    state = {
        events: []
    }
    
    

    render(){
        return(
            <div>
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return{
        userInfo: state.userInfo,
        usersInfo: state.usersInfo,
        friendsInfo: state.friendsInfo,
        eventsInfo: state.eventsInfo
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        seteventsInfo: (event) => dispatch({
          type: "ADD_event",
          eventData: event
        })
      };
}


export default connect(mapStateToProps, mapDispatchToProps)(EventsContainer)

