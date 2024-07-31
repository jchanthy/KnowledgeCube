import PageContent from "./PageContent.js"
import LeftSidebar from "./LeftSidebar.js"
import 'react-notifications/lib/notifications.css';

function DashboardLayout() {


    return (
        <>
            { /* Left drawer - containing page content and side bar (always open) */}
            <div className="drawer  lg:drawer-open">
                <input id="left-sidebar-drawer" type="checkbox" className="drawer-toggle"/>
                <PageContent/>
                <LeftSidebar/>
            </div>

            { /* Right drawer - containing secondary content like notifications list etc.. */}
            {/*<RightSidebar />*/}


            {/** Notification layout container */}
            {/*<NotificationContainer />*/}

            {/* Modal layout container */}
            {/*  <ModalLayout />*/}

        </>
    )
}

export default DashboardLayout