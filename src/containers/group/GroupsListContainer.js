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
            return(
                this.gatherListInfo(group.user_groups)
                // console.log(group.user_groups)
                )
            }             
        )
    )

    gatherListInfo=(userGroup)=>(
        userGroup.map((group)=>{
            if(group.user_id === this.props.userInfo.user.id){
                return this.finalInfo(group.id)
            }
        })
    )

    finalInfo=(id)=>{
        return(
            this.state.groups.map((group)=>{
                if(group.id === id){
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
        userInfo: state.userInfo
    }
}

export default connect(mapStateToProps)(GroupsListContainer)

