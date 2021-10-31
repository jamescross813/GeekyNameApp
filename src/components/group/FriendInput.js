import { Component } from "react";

class GroupInput extends Component{

    state={
        
    }

    handleChange = (event) =>{
        this.setState({
          [event.target.name]: event.target.value
        })
      }

    render(){
        return(
            <form >
                
            </form>
        )
    }
}

export default GroupInput