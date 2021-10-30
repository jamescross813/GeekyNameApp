import { Component } from "react";
import GroupsList from  "../../components/group/GroupsList"

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

    renderList=()=>
    this.state.groups.map((group)=>(<GroupsList group = {group} />))

    render(){
        return(
        <div>
            <GroupsList />
        </div>
        )
    }
}

export default GroupsListContainer