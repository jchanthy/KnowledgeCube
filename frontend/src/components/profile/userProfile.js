import {Link} from "react-router-dom";
import {useContext} from "react";
import {UserContext} from "../../services/UserContextProvider.js";

const UserProfile = () => {

    const {user, isAuthenticated} = useContext(UserContext);
    const logoutUser = () => {
        // localStorage.clear();
        localStorage.removeItem('knowledgeCube-user');
        localStorage.removeItem('knowledgeCube-token');
        window.location.href = '/'
    }
    return (
        <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                    <img
                        alt="this is user profile with the name"
                        src={user.profilePicture}/>
                </div>
            </div>
            <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                <li>
                    <Link to={'/dashboard/profile'} className="justify-between">
                        {user.name}
                    </Link>
                </li>
                <p className={'disabled ml-3'}>{user.email}</p>
                <li><Link to={'/dashboard/settings'}>Settings</Link></li>
                <div className={'divider mt-0 mb-0'}></div>
                <li>
                    {
                        isAuthenticated ? <Link onClick={logoutUser} to={''}>Logout</Link> :
                            <Link to={'/login'}>Login</Link>
                    }
                </li>

            </ul>
        </div>
    );
}

export default UserProfile;
