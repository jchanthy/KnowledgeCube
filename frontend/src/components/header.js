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
                            (
                                <div className={'flex gap-4'}>
                                    <Link to={'/login'} className={'btn btn-sm btn-outline'}>
                                        Login
                                    </Link>
                                    <Link to={'/register'} className={'btn btn-sm btn-primary'}>
                                        Register
                                    </Link>
                                </div>
                            )

                    }
                </div>
            </div>
        </>
    );
};
export default Header;
