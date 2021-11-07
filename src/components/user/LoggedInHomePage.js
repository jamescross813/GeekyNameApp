import React from "react";
import { Link } from "react-router-dom"

const LoggedInHomepage=()=>{
    return(
        <div>
            <Link to="/user">
                <button>
                    Let's Go!
                </button>
            </Link>
        </div>
    )
}


export default LoggedInHomepage