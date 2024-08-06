import Header from "../../components/header.js";
import UserProfile from "../../components/profile/userProfile.js";
import Logo from "../../components/logo.js";
import Sidebar from "../../components/sidebar.js";
import NavBar from "../../components/navBar.js";

const HeaderPage = () => {

    return (
        <Header>
            <Sidebar/>
            <Logo/>
            <NavBar/>
            <UserProfile/>
        </Header>
    )
}
export default HeaderPage;