function userReducer(state={
    user:[],
},
action){
    switch(action.type){
        case "ADD_USER":
            return{
                ...state,
                user:[...state.user, action.name]
            }
            default:
                return sate
    }
}
