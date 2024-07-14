import React from "react";

const Header = ({children}) => {
    const [sidebar, logo, search, globalSearch, profile, notification, themeSwitcher] =
        React.Children.toArray(children);
    return (
        <>
            <div className="navbar bg-base-100">
                <div className="flex-none gap-2">
                    {sidebar}
                    {logo}
                    {search}
                </div>
                <div className="flex-1">
                </div>
                <div className={'flex-none'}>
                    {themeSwitcher}
                    {notification}
                    {profile}
                </div>
            </div>
        </>
    );
};
export default Header;
