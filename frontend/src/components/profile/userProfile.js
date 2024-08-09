import {Link} from "react-router-dom";
import {useContext} from "react";
import {UserContext} from "../../services/UserContextProvider.js";
import Cog6ToothIcon from "@heroicons/react/24/outline/Cog6ToothIcon";
import UsersIcon from "@heroicons/react/24/outline/UsersIcon";
import {PowerIcon} from "@heroicons/react/24/solid/index.js";
import getInitials from "../user/UserLetter.js";
import ChevronDownIcon from "@heroicons/react/24/outline/ChevronDownIcon";

const UserProfile = () => {

    const {user, logout, isAuthenticated} = useContext(UserContext);

    return (

        <>
            <div className="dropdown dropdown-hover dropdown-end">
                <div tabIndex={0} role="button" className="btn m-1  ">
                    <span className={'text-md'}>{getInitials(user.name)}</span>
                    <ChevronDownIcon className={'w-5 h-5'}/>

                </div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
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
        </>
    );
}

export default UserProfile;
