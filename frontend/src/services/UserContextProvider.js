import React, {createContext, useEffect, useState} from 'react';
import {themeChange} from "theme-change";

// Create a context
export const UserContext = createContext({});

// Create a provider
const UserContextProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [token, setToken] = useState(null);
    const [isAdmin, setIsAdmin] = useState(false);
    useEffect(() => {
        if (user && user.isAdmin) {
            setIsAdmin(user.isAdmin);
        }
    }, [user]);
    useEffect(() => {
        // Load the User from localStorage
        const user = JSON.parse(localStorage.getItem('knowledgeCube-User'));
        // Load the token from localStorage
        const token = localStorage.getItem('knowledgeCube-token');

        themeChange(false);
        if (user) {
            setUser(user);
            setIsAuthenticated(true);
            setToken(token);
        }
    }, []);

    function login(user, token) {

        // Save the User to localStorage
        localStorage.setItem('knowledgeCube-User', JSON.stringify(user));
        // Save the token to localStorage
        localStorage.setItem('knowledgeCube-token', token);
        // Set the User and token in state
        setUser(user);
        setIsAuthenticated(true);
        setToken(token);

        if (isAdmin) {
            window.location.href = '/dashboard';
        } else {
            window.location.href = '/learner';
        }
    }

    function updateUser(user) {
        // Save the User to localStorage
        localStorage.setItem('knowledgeCube-User', JSON.stringify(user));
        // Set the User and token in state
        setUser(user);
    }

    function logout() {
        // Remove the User and token from localStorage
        localStorage.removeItem('knowledgeCube-User');
        localStorage.removeItem('knowledgeCube-token');
        // Remove the User and token from state
        setUser(null);
        setIsAuthenticated(false);
        setToken(null);
    }

    return <UserContext.Provider
        value={{user, login, isAuthenticated, token, updateUser, logout}}>{children}</UserContext.Provider>;
}
export default UserContextProvider;
