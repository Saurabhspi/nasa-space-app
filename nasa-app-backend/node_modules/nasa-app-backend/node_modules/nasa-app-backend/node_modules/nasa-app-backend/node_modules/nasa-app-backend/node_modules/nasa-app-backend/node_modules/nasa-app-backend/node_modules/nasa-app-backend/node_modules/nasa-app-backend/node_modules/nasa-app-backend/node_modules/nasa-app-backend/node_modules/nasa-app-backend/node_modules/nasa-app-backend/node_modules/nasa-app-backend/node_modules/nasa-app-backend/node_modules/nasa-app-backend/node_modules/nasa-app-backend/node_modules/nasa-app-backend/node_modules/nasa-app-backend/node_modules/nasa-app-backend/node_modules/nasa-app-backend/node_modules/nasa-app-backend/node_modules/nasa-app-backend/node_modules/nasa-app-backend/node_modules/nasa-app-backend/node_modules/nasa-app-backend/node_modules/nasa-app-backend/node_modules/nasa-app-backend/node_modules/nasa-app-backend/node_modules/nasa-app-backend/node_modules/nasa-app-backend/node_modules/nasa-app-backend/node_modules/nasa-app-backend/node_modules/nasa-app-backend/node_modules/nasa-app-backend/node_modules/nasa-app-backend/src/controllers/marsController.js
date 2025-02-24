const axios = require('axios');

exports.getMarsPhotos = async (req, res) => {
    try {
        const response = await axios.get(
            `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${process.env.NASA_API_KEY}`
        );
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch Mars Rover photos' });
    }
};
