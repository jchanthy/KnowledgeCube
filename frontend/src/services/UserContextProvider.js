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
        // Load the user from localStorage
        const user = JSON.parse(localStorage.getItem('knowledgeCube-user'));
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

        // Save the user to localStorage
        localStorage.setItem('knowledgeCube-user', JSON.stringify(user));
        // Save the token to localStorage
        localStorage.setItem('knowledgeCube-token', token);
        // Set the user and token in state
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
        // Save the user to localStorage
        localStorage.setItem('knowledgeCube-user', JSON.stringify(user));
        // Set the user and token in state
        setUser(user);
    }

    function logout() {
        // Remove the user and token from localStorage
        localStorage.removeItem('knowledgeCube-user');
        localStorage.removeItem('knowledgeCube-token');
        // Remove the user and token from state
        setUser(null);
        setIsAuthenticated(false);
        setToken(null);
    }

    return <UserContext.Provider
        value={{user, login, isAuthenticated, token, updateUser, logout}}>{children}</UserContext.Provider>;
}
export default UserContextProvider;
