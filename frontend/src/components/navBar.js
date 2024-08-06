import React from "react";
import {NavLink, useLocation} from "react-router-dom";
import SidebarSubmenu from "../features/dashboard/SidebarSubmenu.js";
import navItems from "./navItems.js"; // Import the navItems array menuItems,

const NavBar = () => {

    const location = useLocation();
    return (
        <nav className="navbar bg-base-100">
            {
                navItems.map((route, k) => {
                    return (
                        <ul key={k} className={'menu menu-horizontal flex'}>
                            {
                                route.submenu ?
                                    <SidebarSubmenu {...route}/> :
                                    (<li>
                                        <NavLink
                                            end
                                            to={route.path}
                                            className={({isActive}) => `${isActive ? 'font-semibold  bg-base-200 ' : 'font-normal'}`}>
                                            {route.icon} {route.name}
                                            {
                                                location.pathname === route.path ? (<span
                                                    className="absolute  inset-y-0 left-0 w-1 bg-primary "
                                                    aria-hidden="true"></span>) : null
                                            }
                                        </NavLink>
                                    </li>)
                            }
                        </ul>
                    )
                })
            }
        </nav>
    );
};

export default NavBar;