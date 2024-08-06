import HeaderPage from "./HeaderPage.js";
import Footer from "../../components/footer.js";

const HomePageLayout = ({content}) => {
    return (
        <>
            <HeaderPage/>

            {content}

            <Footer/>
        </>
    )
}
export default HomePageLayout;