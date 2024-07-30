import React from "react";

const Header = ({children}) => {
    const [sidebar, logo, profile] =
        React.Children.toArray(children);
    return (
        <>
            <div className="navbar bg-base-100">
                <div className="flex-none gap-2">
                    {sidebar}
                    {logo}
                </div>
                <div className="flex-1">
                </div>
                <div className={'flex-none'}>
                    {profile}
                </div>
            </div>
        </>
    );
};
export default Header;
