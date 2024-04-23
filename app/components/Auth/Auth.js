import axios from 'axios';

axios.interceptors.request.use(function (config) {
    // Assuming 'token' is stored in localStorage after login
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

axios.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    return response;
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    if (error.response.status === 401) { // Token expired or unauthorized
        // Handle token refresh here if you have refresh token logic implemented
        // Optionally redirect to login or do other tasks
    }
    return Promise.reject(error);
});