function eventsReducer(state={
    events:[]
},
action){
    switch(action.type){
        case "ADD_EVENT":
            return{
                events: [...state.events, action.eventData]
            }
            default:
                return state
    }
}
export default eventsReducer