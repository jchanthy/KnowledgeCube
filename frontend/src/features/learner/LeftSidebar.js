import routes from "./routes/sidebar.js";
import SidebarSubmenu from "../dashboard/SidebarSubmenu.js";
import {NavLink, useLocation} from "react-router-dom";


const LeftSidebar = () => {
    const location = useLocation();
    return (
        <>
            <div className="drawer-side sm:z-30 lg:z-10">
                <input id="my-lerner-drawer" type="checkbox" className="drawer-overlay hidden"/>

                <label htmlFor="my-lerner-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu  pt-2 w-80 bg-base-100 min-h-full text-base-content">
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