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
            // return(
            //     this.gatherListInfo(group.user_groups)
            //     )
            // console.log(group.user_groups)
                // console.log(this.props.user.user.id)
                console.log(group)
            }             
        )
    )

    // gatherListInfo=(userGroup)=>(
    //     // console.log(userGroup)
    //     // userGroup.map((group)=>this.finalInfo(group.id))
    // )

    finalInfo=(id)=>{
        return(
            this.state.groups.map((group)=>{
                if(group.id === id){
                    // console.log(group)
                    return <GroupsList groupInfo={group} />
                }
            })
        )
    }

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

