import axios from 'axios';

const API_BASE_URL = "http://localhost:5000/api";


const fetchData = async (endpoint) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/${endpoint}`);
        console.log(`✅ ${endpoint.toUpperCase()} API Response:`, response.data);
        return response.data;
    } catch (error) {
        console.error(`❌ Error fetching ${endpoint.toUpperCase()} data:`, error);
        return null;
    }
};

// Fetch Astronomy Picture of the Day (APOD)
export const fetchAPOD = () => fetchData("apod");

// Fetch Mars Rover Photos
export const fetchMarsPhotos = () => fetchData("mars");

// Fetch Near-Earth Objects (NEO)
export const fetchNEO = () => fetchData("neo");
