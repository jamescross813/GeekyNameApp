function friendsReducer(state={
    friends:{},
},
action){
console.log(action)
    switch(action.type){
        case "ADD_FRIEND":
            return{
                friends: action.friendData
            }
            default:
                return state
    }
    
}
export default friendsReducer