import React, {useContext} from "react";
import {Link} from "react-router-dom";
import {UserContext} from "../services/UserContextProvider.js";

const Header = ({children}) => {
    // const token = checkAuth();
    const {isAuthenticated} = useContext(UserContext);
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
                        isAuthenticated ?
                            profile
                            :
                            <Link to={'/login'} className={'btn btn-sm bg-base-200 '}>
                                Login
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth={1.5} stroke="currentColor" className="size-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"/>
                                </svg>
                            </Link>
                    }
                </div>
            </div>
        </>
    );
};
export default Header;
