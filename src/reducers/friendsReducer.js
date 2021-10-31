function friendsReducer(state={
    friends:{},
},
action){
    switch(action.type){
        case "ADD_FRIEND":
            return{
                friends: action.userData
            }
            default:
                return state
    }
    
}
export default friendsReducer