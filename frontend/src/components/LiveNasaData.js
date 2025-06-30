// src/components/LiveNasaData.js
import React, { useEffect, useState } from "react";
import { fetchAPOD, fetchNEO, fetchMarsPhotos } from "../api/nasaApi"; // Adjust path as needed
import "../styles/LiveNasaData.css";

const LiveNasaData = () => {
  const [apodTitle, setApodTitle] = useState("");
  const [neoCount, setNeoCount] = useState(null);
  const [latestMarsDate, setLatestMarsDate] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      setError(null);
      try {
        const apod = await fetchAPOD();
        const neo = await fetchNEO();
        const mars = await fetchMarsPhotos();

        setApodTitle(apod?.title || "No data available");
        setNeoCount(neo?.element_count ?? "No data available");
        setLatestMarsDate(mars?.photos?.[0]?.earth_date || "No data available");
      } catch (err) {
        console.error("Error fetching NASA data:", err);
        setError("Failed to load NASA data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) return <p>Loading NASA data...</p>;
  if (error) return <p className="error-message">{error}</p>;

  return (
    <section className="live-nasa-section">
      <h2>🛰️ Live NASA Data</h2>
      <div className="live-data-cards">
        <div className="live-card">
          <h3>🌌 Today's APOD</h3>
          <p>{apodTitle}</p>
        </div>
        <div className="live-card">
          <h3>☄️ Near-Earth Objects Today</h3>
          <p>{neoCount}</p>
        </div>
        <div className="live-card">
          <h3>🚜 Latest Mars Photo Date</h3>
          <p>{latestMarsDate}</p>
        </div>
      </div>
    </section>
  );
};

export default LiveNasaData;
