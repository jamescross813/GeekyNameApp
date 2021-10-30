// links to events, friends, log out, groups

import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink 
        to="/"
        exact
        >
          Home
        </NavLink>
        <NavLink 
        to="/friends"
        exact
        >
          Friends
        </NavLink>
        <NavLink 
        to="/groups"
        exact
        >
          Groups
        </NavLink>
        <NavLink 
        to="/events"
        exact
        >
          Events
        </NavLink>
    </div>
  );
};

export default NavBar;
