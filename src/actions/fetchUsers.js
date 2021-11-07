export function fetchUsers(){
    return(dispatch)=>{
        dispatch({type: "START_ADDING_USERS_REQUEST"});
        fetch("http://localhost:3000/users")
        .then(r=>r.json())
        .then((data) => dispatch({type: "ADD_USERS", data}))
    }
}