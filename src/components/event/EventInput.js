import { Component } from "react";

class EventInput extends Component{

    state={
        event_name: "",
        description: "",
        est_time: "",
        game_type:""
    }

    handleChange = (event) =>{
        this.setState({
          [event.target.name]: event.target.value
        })
      }

    render(){
        return(
            <form>
                <label>Event Title:</label>
                <input type="text"/><br/>
                <label>Event Description:</label>
                <input type="text"/><br/>
                <label>Estimated Time:</label>
                <input type="text"/><br/>
                <label>Game Type:</label>
                <input type="text"/><br/>
                <input type="submit"/>
            </form>
        )
    }
}

export default EventInput