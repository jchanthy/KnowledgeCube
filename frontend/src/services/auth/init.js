import axios from "axios"

const initializeApp = () => {

    // Setting base URL for all API request via axios
    axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

    // Setting default headers
    axios.defaults.headers.common['Content-Type'] = 'application/json';
    axios.defaults.headers.common['Accept'] = 'application/json';
    axios.defaults.headers.common['Authorization'] = 'application/json';

    // Setting default auth token
    if (localStorage.getItem('knowledgeCube-token')) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('knowledgeCube-token')}`;
    }
}

export default initializeApp