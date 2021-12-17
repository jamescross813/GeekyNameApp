import { Component } from "react";

class Counter extends Component{

    state={
        input: '',
        counter: 0
    }

    handleChange=(event)=>{
        // this.setState({
        //     input: [event.target.value],
        //     inputArray:[...this.state.inputArray, event.target.value]
        // })
        this.setState({
            input: event.target.value
        })
    }

    clickedCounter=(event)=>{
        event.preventDefault()
        let num = this.state.input.length
        this.setState({
            input: '',
            counter: this.state.counter + num
        })
    }

render(){
    return(
        <div>
        <form>
            <input type="text" value={this.state.input} onChange={this.handleChange}/><br/>
            <button onClick={this.clickedCounter}>Clickme</button>
        </form>
        {this.state.counter}
        </div>
    )
}
}

export default Counter