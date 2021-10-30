import React from 'react';
import { NavLink } from 'react-router-dom';

const HomepageNavBar = () => {
    return(
        <div className = "HomepageNavBar">
            <NavLink to= "/signup" exact >Sign up</NavLink>
            <NavLink to= "/login" exact >Login</NavLink>
        </div>
    )
};

export default HomepageNavBar;
