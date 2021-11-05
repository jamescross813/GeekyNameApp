function groupsReducer(state={
    groups:[]
},
action){
    switch(action.type){
        case "ADD_GROUP":
            return{
                groups: [...state.groups, action.groupData]
            }
            default:
                return state
    }
}
export default groupsReducer