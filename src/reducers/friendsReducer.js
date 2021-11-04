function friendsReducer(state={
    friends:[],
},
action){

    switch(action.type){
        case "ADD_FRIEND":
            return{
                friends: [...state, action.friendData]
            }
            default:
                return state
    }
    
}
export default friendsReducer