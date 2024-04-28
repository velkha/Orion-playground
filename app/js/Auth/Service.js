import axios from 'axios';

const API_URL = 'http://localhost:9992/api/auth/signin';

export const login = async (username, password) => {
    try {
        const response = await axios.post(API_URL, { username, password });
        if (response.data.token) {
            console.log('Login success:', response.data.token);
            localStorage.setItem('orion_token', response.data.token); // Save the token in localStorage
        }
        return true; // Return the full response data
    } catch (error) {
        console.error('Login error:', error);
        return false; // Return false if the login failed
    }
};

export const logout = () => {
    console.log('Logout');
    localStorage.removeItem('orion_token'); // Remove the token from localStorage
};