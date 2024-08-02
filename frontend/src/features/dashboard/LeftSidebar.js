import {NavLink, useLocation} from 'react-router-dom'
import routes from "../../routes/sidebar.js";
import SidebarSubmenu from "./SidebarSubmenu.js";
import Logo from "../../components/logo.js";

function LeftSidebar() {

    const location = useLocation();
    const close = () => {
        document.getElementById('left-sidebar-drawer').click()
    }

    return (
        <>
            <div className="drawer-side  z-30  ">
                <label htmlFor="left-sidebar-drawer" className="drawer-overlay"></label>
                <ul className="menu  pt-2 w-80 bg-base-100 min-h-full   text-base-content">
                    <button
                        className="btn btn-ghost btn-sm mr-3  btn-circle z-50  right-0 absolute lg:hidden"
                        onClick={() => close()}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                             className="size-6">
                            <path fillRule="evenodd"
                                  d="M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z"
                                  clipRule="evenodd"/>
                        </svg>
                    </button>

                    <div className="mb-2 font-semibold text-xl">
                        <Logo/>
                    </div>
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

export default LeftSidebar