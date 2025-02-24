const axios = require('axios');

const fetchNASAData = async (endpoint) => {
    try {
        const response = await axios.get(
            `https://api.nasa.gov/${endpoint}?api_key=${process.env.NASA_API_KEY}`
        );
        return response.data;
    } catch (error) {
        throw new Error('Error fetching NASA data');
    }
};

module.exports = { fetchNASAData };
