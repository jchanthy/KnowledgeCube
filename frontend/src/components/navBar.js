import React from "react";
import {NavLink, useLocation} from "react-router-dom";
import navItems from "./navItems.js"; // Import the navItems array

const NavBar = () => {
    const location = useLocation();
    return (
        <>
            {navItems.map((route, k) => (
                <NavLink
                    key={k}
                    to={route.path}
                    className={'btn btn-ghost'}>
                    {/* Render the icon component */}
                    {route.icon}
                    {route.name}
                    {location.pathname === route.path && (
                        <span className="absolute inset-x-0 bottom-0 w-1" aria-hidden="true"></span>
                    )}
                </NavLink>
            ))}
        </>
    );
};

export default NavBar;