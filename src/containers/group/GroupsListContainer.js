import { Component } from "react";
import GroupsList from  "../../components/group/GroupsList"
import {connect} from "react-redux"

class GroupsListContainer extends Component{

    state={
        groups: []
    }

    componentDidMount(){
        fetch("http://localhost:3000/groups")
        .then(resp=>resp.json())
        .then(data=>{
            this.setState({
                groups: data
            })
        })
    }

    gatherList=()=>(
        this.state.groups.map((group)=>{
            console.log(group.user_groups)
                // console.log(this.props.user.user.id)
            }             
        )
    )

    render(){
        return(
        <div>
            {this.gatherList()}
        </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return{
        user: state.user,
        users: state.users
    }
}

export default connect(mapStateToProps)(GroupsListContainer)

