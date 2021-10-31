function usersReducer(state={
    users:{},
},
action){
    switch(action.type){
        case "ADD_USERS":
            return{
                users: action.userData
            }
            default:
                return state
    }
    
}
export default usersReducer