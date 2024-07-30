import Header from "../../components/header.js";
import UserProfile from "../../components/profile/userProfile.js";
import Logo from "../../components/logo.js";
import Sidebar from "../../components/sidebar.js";

const HeaderPage = () => {

    return (
        <Header>
            <Sidebar/>
            <Logo/>
            <UserProfile/>
        </Header>
    )
}
export default HeaderPage;