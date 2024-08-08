import Header from "../../components/header.js";
import UserProfile from "../../components/profile/userProfile.js";
import Logo from "../../components/logo.js";
import Sidebar from "../../components/sidebar.js";
import NavBar from "../../components/navBar.js";
import Search from "../../components/search.js";

const HeaderPage = () => {

    return (
        <Header>
            <Sidebar/>

            <Search/>

            <Logo/>


            <NavBar/>

            <UserProfile/>
        </Header>
    )
}
export default HeaderPage;