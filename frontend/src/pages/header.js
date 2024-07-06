import { Link } from "react-router-dom";

const navigation = [
    { name: "Courses", href: "/courses", current: false },
    { name: "Resources", href: "/resources", current: false, subMenu: [
            { name: "Tutorials", href: "/tutorials", current: false },

        ] },
    { name: "Calendar", href: "/calendar", current: false },
];


function classNames( ...classes ) {
    return classes.filter( Boolean ).join( " " );
}

export default function Header() {
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <Link to='/' className="font-bold text-xl px-4">KnowledgeCube</Link>
            </div>

            <div className="gap-2">
                {navigation.map((item) => (
                    <div key={item.name} className="dropdown dropdown-hover">
                        <div className="btn m-1">{item.name}</div>

                        <ul tabIndex={0}
                            className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                            {item.subMenu && item.subMenu.map((subItem) => (
                                <li key={subItem.name}><Link to={subItem.href}>{subItem.name}</Link></li>
                            ))}
                        </ul>
                    </div>
                ))}
                <div className="form-control input-sm">
                    <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto"/>
                </div>
                <button className="btn btn-sm">
                Inbox
                    <div className="badge badge-sm badge-secondary">+99</div>
                </button>
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
                            <a className="justify-between ">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><Link to='/settings'>Settings</Link></li>
                        <li><Link to='/login'>Logout</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
