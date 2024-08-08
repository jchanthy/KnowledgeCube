import routes from "./routes/sidebar.js";
import SidebarSubmenu from "../dashboard/SidebarSubmenu.js";
import {NavLink, useLocation} from "react-router-dom";


const LeftSidebar = () => {
    const location = useLocation();
    return (
        <>
            <div className="drawer-side  z-30  ">
                <label htmlFor="left-sidebar-drawer" className="drawer-overlay"></label>
                <ul className="menu  pt-2 w-80 bg-base-100 min-h-full   text-base-content">
                    {/* Sidebar content here */}
                    {
                        routes.map((route, k) => {
                            return (
                                <li className="" key={k}>
                                    {
                                        route.submenu ?
                                            <SidebarSubmenu {...route}/> :
                                            (<NavLink
                                                end
                                                to={route.path}
                                                className={({isActive}) => `${isActive ? 'font-semibold  bg-base-200 ' : 'font-normal'}`}>
                                                {route.icon} {route.name}
                                                {
                                                    location.pathname === route.path ? (<span
                                                        className="absolute inset-y-0 left-0 w-1 rounded-tr-md rounded-br-md bg-primary "
                                                        aria-hidden="true"></span>) : null
                                                }
                                            </NavLink>)
                                    }

                                </li>
                            )
                        })
                    }
                </ul>
            </div>

        </>
    )
}

export default LeftSidebar;