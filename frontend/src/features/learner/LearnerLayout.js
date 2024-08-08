import LeftSidebar from "./LeftSidebar.js";
import Header from "./Header.js";
import Footer from "../../components/footer.js";

const LearnerLayout = () => {

    return (
        <>
            <div className={'bg-base-200'}>
                <Header/>
                <div className="base-content w-full">
                    <div className="grid grid-cols-2">
                        <LeftSidebar/>
                    </div>
                    <Footer/>
                </div>
            </div>
        </>
    )
}

export default LearnerLayout;