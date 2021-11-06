import { Component } from "react"; 

class GroupInput extends Component{

    state={
        group_name: "",
        friends:[]
    }

    handleChange = (event) =>{
        this.setState({
          [event.target.name]: event.target.value
        })
      }

      handleCheck=(event)=>{
          this.setState({
              friends: [...this.state.friends, event.target.name]
          })
      }

      handleSubmit = (event)=>{
        event.preventDefault()
        this.props.handleCreate(this.state)
    }

    renderFriends=()=>{
       return this.props.friendsInfo.map((friend)=>{
           return(<label>
            <input type="checkbox" name={friend.username} key={friend.username} onChange={this.handleCheck}/>
                {friend.username} <br></br>
            </label>
            )
        })
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>Group Name:</label>
                <input type="text" name="group_name" value={this.state.group_name} onChange={this.handleChange} /><br/>
                {this.renderFriends()}
                <input type="submit"/>
            </form>
        )
    }
}

export default GroupInput