import React from "react";
import checkAuth from "./auth/auth.js";
import {Link} from "react-router-dom";

const Header = ({children}) => {
    const token = checkAuth();
    const [sidebar, logo, profile] =
        React.Children.toArray(children);
    return (
        <>
            <div className="navbar bg-base-100">
                <div className="flex-none gap-2">
                    {sidebar}
                    {logo}
                </div>
                <div className="flex-1">
                </div>
                <div className={'flex-none'}>

                    {
                        token ?
                            profile
                            :
                            <Link to={'/login'} className={'btn btn-sm bg-base-200 '}>
                                Login
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25"/>
                                </svg>

                            </Link>
                    }
                </div>
            </div>
        </>
    );
};
export default Header;
