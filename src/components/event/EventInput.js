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
            ...this.state,
          [event.target.name]: event.target.value
        })
      }

      handleSubmit = (event)=>{
          event.preventDefault()
        //   console.log(this.state)
          this.props.handleChange(this.state)
      }

    render(){
        // console.log(this.props)
        return(
            <form>
                <label>Event Title:</label>
                <input type="text" name="event_name" value={this.state.event_name} onChange={this.handleChange}/><br/>
                <label>Event Description:</label>
                <input type="text" name="description" value={this.state.description} onChange={this.handleChange}/><br/>
                <label>Estimated Time:</label>
                <input type="text" name="est_time" value={this.state.est_time} onChange={this.handleChange}/><br/>
                <label>Game Type:</label>
                <input type="text" name="game_type" value={this.state.game_type} onChange={this.handleChange}/><br/>
                <input type="submit"/>
            </form>
        )
    }
}

export default EventInput