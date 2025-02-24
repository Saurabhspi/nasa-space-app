import React, { useEffect, useState } from "react";
import { fetchNEO } from "../api/nasaApi";
import NEOBarChart from "./NEOBarChart"; 
import "../styles/NEO.css";

const NEO = () => {
    const [neoData, setNeoData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function getData() {
            try {
                const data = await fetchNEO();
                console.log("Fetched NEO Data:", data);

                if (!data || !data.near_earth_objects) {
                    throw new Error("No NEO data available.");
                }

                const formattedData = Object.values(data.near_earth_objects).flat();
                console.log("Formatted NEO Array:", formattedData);

                if (formattedData.length === 0) {
                    throw new Error("NEO data is empty.");
                }

                setNeoData(formattedData.slice(0, 10));
            } catch (err) {
                console.error("Error fetching NEO Data:", err);
                setError(err.message || "Failed to load Near-Earth Objects.");
            } finally {
                setLoading(false);
            }
        }
        getData();
    }, []);

    return (
        <div className="neo-container">
            <h2 className="neo-heading">Near-Earth Objects</h2>

            {loading && <p>Loading...</p>}
            {error && <p style={{ color: "red" }}>{error}</p>}

            {!loading && !error && neoData.length > 0 ? (
                <div className="neo-list-container">
                    <ul className="neo-list">
                        {neoData.map((obj) => (
                            <li key={obj.id} className="neo-item">
                                <strong>{obj.name}</strong> - Diameter:{" "}
                                {obj.estimated_diameter?.kilometers?.estimated_diameter_max?.toFixed(2) || "N/A"} km
                            </li>
                        ))}
                    </ul>

                    {/* Render the Bar Chart Visualization */}
                    <NEOBarChart neoData={neoData} />
                </div>
            ) : (
                !loading && !error && <p>No data available</p>
            )}
        </div>
    );
};

export default NEO;
