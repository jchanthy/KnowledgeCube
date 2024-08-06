import {Link} from "react-router-dom";
import {useContext} from "react";
import {UserContext} from "../../services/UserContextProvider.js";
import Cog6ToothIcon from "@heroicons/react/24/outline/Cog6ToothIcon";
import UsersIcon from "@heroicons/react/24/outline/UsersIcon";
import {ArrowLeftStartOnRectangleIcon} from "@heroicons/react/24/outline/index.js";
import getInitials from "../user/UserLetter.js";
import UserIcon from "@heroicons/react/24/solid/UserIcon";

const UserProfile = () => {

    const {user, logoutUser, isAuthenticated} = useContext(UserContext);

    return (
        <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-sm btn-outline">
                <UserIcon className={"w-5 h-5"}/>
                {getInitials(user.name)}
            </div>
            <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                <li className={'flex'}>

                    <Link to={'/dashboard/profile'} className="justify-start">
                        <UsersIcon className={"w-5 h-5"}/>
                        {user.name}
                    </Link>
                </li>
                <li><Link to={'/dashboard/settings'} className={'justify-start'}>
                    <Cog6ToothIcon className={'w-5 h-5'}/>
                    Settings</Link></li>
                <div className={'divider mt-0 mb-0'}></div>
                <li>
                    {
                        isAuthenticated ? <Link onClick={logoutUser} to={'/'} className={'justify-start'}>
                                <ArrowLeftStartOnRectangleIcon className={'w-5 h-5'}/>
                                Logout</Link> :
                            <Link to={'/login'}>
                                Login
                            </Link>
                    }
                </li>

            </ul>
        </div>
    );
}

export default UserProfile;
