import { Component } from "react";
import GroupInput from "../../components/group/GroupInput"
import {connect} from "react-redux"

class GroupInputContainer extends Component{

    createGroup=(formData)=>{
        console.log(formData)
    }

    render(){
        return(
            <div>
                <GroupInput handleCreate={this.createGroup}/>
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return{user: state.user}
}

export default connect(mapStateToProps)(GroupInputContainer)