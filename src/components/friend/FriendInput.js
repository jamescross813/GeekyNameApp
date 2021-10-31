import { Component } from "react";

class FormInput extends Component{

    state={
        
    }
    
    handleChange = (event) =>{
        this.setState({
            ...this.state,
          [event.target.name]: event.target.value
        })
      }

      handleSubmit = (event)=>{
          event.preventDefault()
          this.props.handleCreate(this.state)
      }

    render(){
        return(
            <form>
                
            </form>
        )
    }
}

export default FormInput