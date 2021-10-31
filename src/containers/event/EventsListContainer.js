import { Component } from "react";
import EventsList from "../../components/event/EventsList";
import {connect} from "react-redux"

class EventsListContainer extends Component{
    state={
        events:[]
    }

    componentDidMount(){
        fetch("http://localhost:3000/events")
        .then(resp=>resp.json())
        .then(data=> {
            this.setState({
                events: data
            })
        })
    }

    gatherList=()=>(
        this.state.events.map((event)=>{
            if(event.user_events.length>0){
                return this.gatherListInfo(event.user_events)
            }
            // console.log(event.user_events)
        })
    )

    gatherListInfo = (events)=>{
        return(
            events.map((event)=>{
                if(event.user_id === this.props.user.user.id){
                    return this.finalListInfo(event.event_id)
                }
            })
        )
    }

    finalListInfo=(id)=>{
        return console.log(id)
    }
    
    render(){
        return(   
            <div>
                {this.gatherList()}
                {/* {console.log(this.state.events)} */}
                {/* <EventsList /> */}
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return{
        user: state.user,
        users: state.users
    }
}

export default connect(mapStateToProps)(EventsListContainer)