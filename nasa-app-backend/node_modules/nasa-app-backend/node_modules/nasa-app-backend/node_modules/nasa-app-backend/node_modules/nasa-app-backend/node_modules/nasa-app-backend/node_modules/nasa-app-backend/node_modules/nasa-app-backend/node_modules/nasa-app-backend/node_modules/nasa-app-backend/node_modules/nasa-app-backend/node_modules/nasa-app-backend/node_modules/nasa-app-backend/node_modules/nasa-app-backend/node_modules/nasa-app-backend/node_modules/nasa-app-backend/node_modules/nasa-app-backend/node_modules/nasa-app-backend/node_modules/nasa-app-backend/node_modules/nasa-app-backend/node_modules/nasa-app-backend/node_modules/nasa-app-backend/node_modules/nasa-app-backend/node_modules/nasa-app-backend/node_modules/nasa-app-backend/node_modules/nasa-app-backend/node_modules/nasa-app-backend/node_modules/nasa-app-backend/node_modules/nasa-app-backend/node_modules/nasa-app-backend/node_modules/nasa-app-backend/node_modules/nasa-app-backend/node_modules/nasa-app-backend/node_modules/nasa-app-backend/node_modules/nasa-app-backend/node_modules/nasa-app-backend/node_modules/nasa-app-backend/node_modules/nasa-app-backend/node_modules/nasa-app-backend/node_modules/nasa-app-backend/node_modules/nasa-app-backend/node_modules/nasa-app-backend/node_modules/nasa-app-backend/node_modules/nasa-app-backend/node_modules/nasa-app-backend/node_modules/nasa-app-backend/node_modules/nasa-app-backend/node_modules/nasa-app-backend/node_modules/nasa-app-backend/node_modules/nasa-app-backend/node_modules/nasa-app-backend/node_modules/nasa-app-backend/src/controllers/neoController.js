const axios = require('axios');

exports.getNearEarthObjects = async (req, res) => {
    try {
        const response = await axios.get(
            `https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=${process.env.NASA_API_KEY}`
        );
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch NEO data' });
    }
};
