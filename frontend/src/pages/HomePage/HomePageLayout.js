import HeaderPage from "./HeaderPage.js";
import Footer from "../../components/footer.js";
import {Outlet} from "react-router-dom";

const HomePageLayout = () => {
    return (
        <>
            <HeaderPage/>

            <Outlet/>

            <Footer/>
        </>
    )
}
export default HomePageLayout;