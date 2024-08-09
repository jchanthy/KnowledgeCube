import routes from "./routes/navBarItem.js";
import SidebarSubmenu from "../dashboard/SidebarSubmenu.js";
import {NavLink} from "react-router-dom";


const LearnerNavBar = () => {
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
                            className={({isActive}) => `${isActive ? 'font-semibold' : 'font-normal'}  btn btn-ghost`}>
                            {route.icon} {route.name}
                        </NavLink>)
                ))
            }
        </>
    )
}
export default LearnerNavBar;