import axios from 'axios';

const API_URL = 'http://localhost:9992/api/auth/signup';

export const login = async (username, password) => {
    try {
        const response = await axios.post(API_URL, { username, password });
        if (response.data.token) {
            localStorage.setItem('orion_token', response.data.token); // Save the token in localStorage
        }
        return response.data; // Return the full response data
    } catch (error) {
        console.error('Login error:', error);
        throw error;
    }
};

export const logout = () => {
    localStorage.removeItem('orion_token'); // Remove the token from localStorage
};