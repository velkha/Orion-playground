import axios from 'axios';

export async function fetchData(url, method, data) {
    try {
        const response = await axios({ method, url, data });
        console.log('API call success:', response.data);
        return true;
    } catch (error) {
        console.error('API call error:', error);
        return false;
        throw error;
    }
}