import { Component } from "react";
import { connect } from "react-redux"

class EventsContainer extends Component{

    state = {
        events: []
    }
    
    componentDidMount(){
        fetch("http://localhost:3000/events")
        .then(resp=>resp.json())
        .then(data=>this.setState({
            events: data
            })
        )
        .then(data=>this.gatherInfo(data))
    }
            
    gatherInfo=(data)=>{
        this.state.events.map((event)=>{
            return this.gatherListInfo(event.user_events)
            }
        )     
    }

    gatherListInfo=(userevent)=>{
        userevent.map((event)=>{
            if(event.user_id === this.props.userInfo.user.id){
                 return this.finalInfo(event.id)
            }
        }) 
    }  

    finalInfo=(id)=>{
        return this.state.events.map((event)=>{
                if(event.id === id){
                    return this.props.seteventsInfo(event)
                }
            }
        )
    }
    

    render(){
        return(
            <div>
                {console.log(this.props)}
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return{
        userInfo: state.userInfo,
        usersInfo: state.usersInfo,
        friendsInfo: state.friendsInfo,
        eventsInfo: state.eventsInfo
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        seteventsInfo: (event) => dispatch({
          type: "ADD_EVENT",
          eventData: event
        })
      };
}


export default connect(mapStateToProps, mapDispatchToProps)(EventsContainer)

