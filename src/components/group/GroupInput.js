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

      handleSubmit = (event)=>{
        event.preventDefault()
        this.props.handleCreate(this.state)
    }

    render(){
        // console.log(this.props)
        return(
            <form onSubmit={this.handleSubmit}>
                <label>Group Name:</label>
                <input type="text" name="group_name" value={this.state.group_name} onChange={this.handleChange} /><br/>
                {/* {this.props.friends.map((friend)=>{})} */}
                
                {this.props.friends.map((friend)=>{<input type="checkbox" name={friend.username}/>})}
                <input type="submit"/>
            </form>
        )
    }
}

export default GroupInput