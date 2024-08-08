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
            <div className="navbar w-full top-0 z-50 sticky shadow-md  bg-base-100">
                <div className="flex flex-1 md:gap-1 lg:gap-2">
                    {logo}
                    {search}
                </div>
                <div className={'flex-0'}>
                    {menuItems}
                    <div className={'divider divider-horizontal'}/>
                    {
                        isAuthenticated ?
                            <div className={'pl-4'}>
                                {profile}
                            </div>
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
