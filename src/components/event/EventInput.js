import { Component } from "react";

class EventInput extends Component{

    state={
        event_name: "",
        description: "",
        est_time: "",
        game_type:"",
        groups: []
    }

    handleCheck=(event)=>{
        this.setState({
            groups: [...this.state.groups, event.target.name]
        })
    }

    handleChange = (event) =>{
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event)=>{
          event.preventDefault()
          this.props.handleCreate(this.state)
    }

    renderGroups=()=>{
        return this.props.groupsInfo.groups.map((group)=>{
            return(<label>
                <input type="checkbox" name={group.group_name} key={group.group_name} onChange={this.handleCheck}/>
                    {group.group_name}<br></br>
            </label>
            )
        })
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>Event Title:</label>
                    <input type="text" name="event_name" value={this.state.event_name} onChange={this.handleChange}/><br/>
                <label>Event Description:</label>
                    <input type="text" name="description" value={this.state.description} onChange={this.handleChange}/><br/>
                <label>Estimated Time:</label>
                    <input type="text" name="est_time" value={this.state.est_time} onChange={this.handleChange}/><br/>
                <label>Game Type:</label>
                    <input type="text" name="game_type" value={this.state.game_type} onChange={this.handleChange}/><br/>
                        {this.renderGroups()}
                    <input type="submit"/>
            </form>
        )
    }
}

export default EventInput