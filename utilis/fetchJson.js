const axios = require('axios');

/**
 * Fetch JSON data from a given URL.
 * @param {string} url - The API URL to fetch data from.
 * @param {object} [options={}] - Optional configurations for the request.
 * @returns {Promise<object>} - Returns a JSON response.
 */
const fetchJson = async (url, options = {}) => {
    try {
        const response = await axios.get(url, options);
        return response.data; // Return JSON response
    } catch (error) {
        console.error('Error fetching JSON:', error.response ? error.response.data : error.message);
        return null; // Return null in case of error
    }
};

module.exports = fetchJson;
