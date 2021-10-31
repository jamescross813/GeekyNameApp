import { Component } from "react";

class GroupInput extends Component{

    state={
        group_name: ""
    }

    handleChange = (event) =>{
        this.setState({
          [event.target.name]: event.target.value
        })
      }

    render(){
        return(
            <form >
                <label>Username:</label>
                <input type="text" name="group_name" value={this.state.group_name} onChange={this.handleChange} /><br/>
                <input type="submit"/>
            </form>
        )
    }
}

export default GroupInput