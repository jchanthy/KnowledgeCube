import React from "react";

const Header = ({ children }) => {
  const [sidebar, globalSearch, profile, notification, themeSwitcher] =
    React.Children.toArray(children);
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="flex ml-5">
            {sidebar}
            {globalSearch}
          </div>
        </div>
        <div className="navbar-end">
          {notification}
          {themeSwitcher}
          {profile}
        </div>
      </div>
    </>
  );
};
export default Header;
