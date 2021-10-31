import { Component } from "react";

class FormInput extends Component{

    state={
        username:""
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
        return(
            <form onSubmit={this.handleSubmit}>
                <label>Username:</label>
                <input type="text" name="username" value={this.state.username} onChange={this.handleChange} /><br/>
                <input type="submit"/>
            </form>
        )
    }
}

export default FormInput