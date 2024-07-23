import {createContext, useEffect, useState} from "react";

export const UserContext = createContext({});
export const UserContextProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [token, setToken] = useState(null);

    useEffect(() => {
        // Load the user from localStorage
        const user = JSON.parse(localStorage.getItem('knowledgeCube-user'));
        // Load the token from localStorage
        const token = localStorage.getItem('knowledgeCube-token');
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
    }

    return UserContextProvider({user, token, isAuthenticated, login});
}