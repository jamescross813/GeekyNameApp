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
            console.log(event)
        })
    )
    
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

export default connect()(EventsListContainer)