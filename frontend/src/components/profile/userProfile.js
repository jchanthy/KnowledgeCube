import {Link} from "react-router-dom";
import {useContext} from "react";
import {UserContext} from "../../services/UserContextProvider.js";
import Cog6ToothIcon from "@heroicons/react/24/outline/Cog6ToothIcon";
import UsersIcon from "@heroicons/react/24/outline/UsersIcon";
import UserIcon from "@heroicons/react/24/solid/UserIcon";
import {PowerIcon} from "@heroicons/react/24/solid/index.js";

const UserProfile = () => {

    const {user, logout, isAuthenticated} = useContext(UserContext);

    return (
        <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="avatar placeholder btn btn-ghost bg-base-200 btn-circle ">
                <UserIcon className={"w-5 h-5"}/>
            </div>
            <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                <li className={'flex'}>
                    <Link to={'/learner/profile'} className="justify-start">
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
                        isAuthenticated ?
                            <Link onClick={logout} to={'/'} className={'justify-start'}>
                                <PowerIcon className={'w-5 h-5'}/>
                                Logout
                            </Link>
                            :
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
