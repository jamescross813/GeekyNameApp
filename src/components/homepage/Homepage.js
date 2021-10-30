import { Component } from "react";
import { Link } from "react-router-dom"
import HomepageNavBar from "../navbar/HomepageNavBar";
import LoginForm from "../user/LoginForm"

class Homepage extends Component{

    render(){
        return(
        <div>
            <HomepageNavBar />
            <h1>Geeky Name App</h1>
            <h4>About us</h4>
            <p>This app is a way for geeks and nerds to share events and availabilty to ensure games happen and geeks stay united.</p>

        </div>
        )
    }

}

export default Homepage