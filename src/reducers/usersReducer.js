function usersReducer(state={
    users:{},
    requesting: false
},
action){
    switch(action.type){
        case "START_ADDING_USERS_REQUEST":
            return{
                users: action.data,
                requesting: true,
            }
        case "ADD_USERS":
            return{
                users: action.data,
                requesting: false,
            }
            default:
                return state
    }
    
}
export default usersReducer