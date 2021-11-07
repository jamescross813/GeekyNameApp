import { Component } from "react";
import { connect } from "react-redux"
import { fetchUsers } from "../../actions/fetchUsers"

class UsersContainer extends Component{

    // fetchUsers=()=>{
    //     fetch("http://localhost:3000/users")
    //     .then(r=>r.json())
    //     .then(data=>this.props.setUsersInfo(data))
    // }

    render(){
        return(
            <div>
                {this.props.fetchUsers()}
            </div>
        )
    }
}

// const mapDispatchToProps=(dispatch)=>{
//     return {
//         setUsersInfo: (users) => dispatch({
//           type: "ADD_USERS",
//           userData: users
//         })
//       };
// }

const mapDispatchToProps=(dispatch)=>{
    return { fetchUsers: ()=> dispatch(fetchUsers())}
}



export default connect(null, mapDispatchToProps)(UsersContainer)

