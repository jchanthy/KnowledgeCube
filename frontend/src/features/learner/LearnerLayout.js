import LearnerContent from "./LearnerContent.js";
import Header from "./Header.js";

const LearnerLayout = () => {

    return (
        <>
            <Header/>
            <div className="drawer  lg:drawer-open">
                <input id="my-lerner-drawer" type="checkbox" className="drawer-toggle "/>
                <LearnerContent/>
                {/*<LeftSidebar/>*/}
            </div>
        </>
    )
}

export default LearnerLayout;