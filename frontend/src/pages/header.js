import { Link } from "react-router-dom";

const navigation = [
    { name: "Courses", href: "/courses", current: false },
    { name: "Resources", href: "/resources", current: false },
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

            <div className=" gap-2 ">
                <div className="dropdown dropdown-hover">
                    <ul className="menu dropdown-hover lg:menu-horizontal bg-base-200 rounded-box lg:mb-64">
                        <li><a>Item 1</a></li>
                        <li>
                            <details>
                                <summary>Parent item</summary>
                                <ul>
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                    <li>
                                        <details open>
                                            <summary>Parent</summary>
                                            <ul>
                                                <li><a>item 1</a></li>
                                                <li><a>item 2</a></li>
                                            </ul>
                                        </details>
                                    </li>
                                </ul>
                            </details>
                        </li>
                    </ul>
                </div>
                <div className="form-control">
                    <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto"/>
                </div>
                <button className="btn">
                    Inbox
                    <div className="badge badge-secondary">+99</div>
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
                            <a className="justify-between">
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
