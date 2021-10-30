import { Component } from "react";
import EventsList from "../../components/event/EventsList";

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

    renderList=()=>
        this.state.events.map((event)=>(<EventsList event = {event} />)
        )
    

    render(){
        
        return(
            
        <div>
            {/* {this.renderList()} */}
            {/* {console.log(this.state.events)} */}
            {/* <EventsList /> */}
        </div>
        )
    }
}

export default EventsListContainer