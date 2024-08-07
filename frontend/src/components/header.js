import React, {useContext} from "react";
import {Link} from "react-router-dom";
import {UserContext} from "../services/UserContextProvider.js";

const Header = ({children}) => {
    // const token = checkAuth();
    const {isAuthenticated} = useContext(UserContext);
    const [sidebar, search, logo, menuItems, profile] =
        React.Children.toArray(children);
    return (
        <>
            <div className="navbar top-0 z-50 sticky shadow-md  bg-base-100">
                <div className="flex-none gap-2">
                    {/*{sidebar}*/}
                    {logo}
                    {search}
                </div>
                <div className="flex-1">
                    {menuItems}
                </div>
                <div className={'flex-none'}>

                    {
                        isAuthenticated ?
                            profile
                            :
                            (
                                <div className={'flex gap-4'}>
                                    <Link to={'/login'} className={'btn btn-sm rounded btn-outline'}>
                                        Login
                                    </Link>
                                    <Link to={'/register'} className={'btn btn-sm rounded btn-primary'}>
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
