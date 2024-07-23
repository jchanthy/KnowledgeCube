import {Link} from "react-router-dom";

const Dashboard = () => {
    return (
        <>
            <div className="drawer drawer-open">
                <input id="drawer-dashboard" type="checkbox" className="drawer-toggle"/>
                <div className="drawer-content">
                    {/* Page content here */}
                    <label htmlFor="drawer-dashboard" className="btn btn-primary drawer-button">Open drawer</label>
                </div>
                <div className="drawer-side">
                    <label htmlFor="drawer-dashboard" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                        {/* Sidebar content here */}
                        <li><Link to={'/dashboard/settings'}>Settings</Link></li>
                        <li><a>Sidebar Item 2</a></li>
                    </ul>
                </div>
            </div>
        </>

    )
}

export default Dashboard;