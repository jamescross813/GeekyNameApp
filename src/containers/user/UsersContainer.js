import { Component } from "react";
import { connect } from "react-redux"
import { fetchUsers } from "../../actions/fetchUsers"

class UsersContainer extends Component{

    render(){
        return(
            <div>
                {this.props.fetchUsers()}
            </div>
        )
    }
}

const mapDispatchToProps=(dispatch)=>{
    return { fetchUsers: ()=> dispatch(fetchUsers())}
}



export default connect(null, mapDispatchToProps)(UsersContainer)

