import React, {useContext} from 'react'
import BellIcon from '@heroicons/react/24/outline/BellIcon'

import {Link} from 'react-router-dom'
import ThemeSwitcher from "../../components/ThemeSwither.js";
import {useSelector} from "react-redux";
import {UserContext} from "../../services/UserContextProvider.js";


function Header() {
    const {noOfNotifications, pageTitle} = useSelector((state) => state.header);

    const {user} = useContext(UserContext);


    // Opening right sidebar for notification

    function logoutUser() {
        localStorage.removeItem('knowledgeCube-user');
        localStorage.removeItem('knowledgeCube-token');
        window.location.href = '/'
    }

    return (
        // navbar fixed  flex-none justify-between bg-base-300  z-10 shadow-md

        <>
            <div className="navbar sticky top-0 bg-base-100  z-10 shadow-md ">


                {/* Menu toogle for mobile view or small screen */}
                <div className="flex-1">
                    <label htmlFor="left-sidebar-drawer"
                           className="btn btn-ghost btn-circle btn-sm swap swap-rotate drawer-button lg:hidden">
                        {/* this hidden checkbox controls the state */}
                        <input type="checkbox" className={'hidden'}/>

                        {/* hamburger icon */}
                        <svg
                            className="swap-off fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 512 512">
                            <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/>
                        </svg>

                        {/* close icon */}
                        <svg
                            className="swap-on fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 512 512">
                            <polygon
                                points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"/>
                        </svg>
                    </label>
                    <h1 className="text-2xl font-semibold ml-2">{pageTitle} </h1>
                </div>


                <div className="flex-none ">

                    {/* Multiple theme selection, uncomment this if you want to enable multiple themes selection,
                also includes corporate and retro themes in tailwind.config file */}

                    {/* <select className="select select-sm mr-4" data-choose-theme>
                    <option disabled selected>Theme</option>
                    <option value="light">Default</option>
                    <option value="dark">Dark</option>
                    <option value="corporate">Corporate</option>
                    <option value="retro">Retro</option>
                </select> */}


                    {/* Light and dark theme selection toogle **/}

                    <ThemeSwitcher/>

                    {/* Notification icon */}
                    <button className="btn btn-ghost ml-4  btn-circle">
                        <div className="indicator">
                            <BellIcon className="h-6 w-6"/>
                            {noOfNotifications > 0 ? <span
                                className="indicator-item badge badge-secondary badge-sm">{noOfNotifications}</span> : null}
                        </div>
                    </button>


                    {/* Profile icon, opening menu on click */}
                    <div className="dropdown dropdown-end ml-4">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="avatar placeholder">
                                <div className="bg-neutral text-neutral-content w-12 rounded-full">
                                    <span>SY</span>
                                </div>
                            </div>
                        </label>
                        <ul tabIndex={0}
                            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li className="justify-between">
                                <Link to={'/dashboard/profile'}>
                                    {user.name}
                                </Link>
                            </li>
                            <li className=''><Link to={'/dashboard/settings-billing'}>Bill History</Link></li>
                            <div className="divider mt-0 mb-0"></div>
                            <li><Link to={'/'} onClick={logoutUser}>Logout</Link></li>
                        </ul>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Header