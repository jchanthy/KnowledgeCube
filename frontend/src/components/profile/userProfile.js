import {Link} from "react-router-dom";

const UserProfile = () => {
    return (
        <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                    <img
                        alt="Tailwind CSS Navbar component"
                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"/>
                </div>
            </div>
            <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                <li>
                    <Link to={'/dashboard/profile'} className="justify-between">
                        Profile
                        <span className="badge">New</span>
                    </Link>
                </li>
                <li><Link to={'/dashboard/settings'}>Settings</Link></li>
                <li><Link to={'/login'}>Logout</Link></li>
            </ul>
        </div>
    );
}

export default UserProfile;
