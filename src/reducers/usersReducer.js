function userReducer(state={
    user:{},
},
action){
    // console.log(action)
    switch(action.type){
        case "ADD_USER":
            return{
                user: action.userData
            }
            default:
                return state
    }
    
}
export default userReducer