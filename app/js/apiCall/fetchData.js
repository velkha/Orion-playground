import axios from 'axios';

export async function fetchData(url, method, data) {
    try {
        const response = await axios({ method, url, data });
        return response.data;
    } catch (error) {
        console.error('API call error:', error);
        throw error;
    }
}