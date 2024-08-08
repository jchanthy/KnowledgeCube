import routes from "./routes/navBarItem.js";
import SidebarSubmenu from "../dashboard/SidebarSubmenu.js";
import {NavLink, useLocation} from "react-router-dom";


const LearnerNavBar = () => {
    const location = useLocation();
    return (
        <>
            {
                routes.map((route, k) => (
                    route.submenu ?
                        <SidebarSubmenu {...route}/> :
                        (<NavLink
                            key={k}
                            end
                            to={route.path}
                            className={'btn btn-ghost'}>
                            {route.icon} {route.name}
                            {
                                location.pathname === route.path ? (<span
                                    className="absolute inset-y-0 left-0 w-1 rounded-tr-md rounded-br-md bg-primary "
                                    aria-hidden="true"></span>) : null
                            }
                        </NavLink>)
                ))
            }
        </>
    )
}
export default LearnerNavBar;