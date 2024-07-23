import Header from "../components/header.js";
import Notifications from "../components/notifications.js";
import UserProfile from "../components/profile/userProfile.js";
import ThemeSwitcher from "../components/ThemeSwither.js";
import Search from "../components/search.js";
import Logo from "../components/logo.js";
import Sidebar from "../components/sidebar.js";

const HeaderPage = () => {

    return (
        <Header>
            <Sidebar/>
            <Logo/>
            <Search/>
            <ThemeSwitcher/>
            <UserProfile/>
            <Notifications/>
        </Header>
    )
}
export default HeaderPage;