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

    render(){
        
        return(
            
        <div>
            {console.log(this.state.evemnts)}
            {/* <EventsList /> */}
        </div>
        )
    }
}

export default EventsListContainer