// src/components/LiveNasaData.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/LiveNasaData.css";

const LiveNasaData = () => {
  const [apodTitle, setApodTitle] = useState("");
  const [neoCount, setNeoCount] = useState(null);
  const [latestMarsDate, setLatestMarsDate] = useState("");

  const API_KEY = "DEMO_KEY"; // Replace with your actual key if available

  useEffect(() => {
    // Fetch APOD Title
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
      .then((res) => setApodTitle(res.data.title))
      .catch((err) => console.error("Error fetching APOD:", err));

    // Fetch total NEOs today
    axios
      .get(`https://api.nasa.gov/neo/rest/v1/feed/today?detailed=false&api_key=${API_KEY}`)
      .then((res) => {
        const count = res.data.element_count;
        setNeoCount(count);
      })
      .catch((err) => console.error("Error fetching NEOs:", err));

    // Fetch latest Mars photo date
    axios
      .get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${API_KEY}`)
      .then((res) => {
        const latest = res.data.photos[0]?.earth_date;
        setLatestMarsDate(latest || "No data found");
      })
      .catch((err) => console.error("Error fetching Mars photo date:", err));
  }, []);

  return (
    <section className="live-nasa-section">
      <h2>🛰️ Live NASA Data</h2>
      <div className="live-data-cards">
        <div className="live-card">
          <h3>🌌 Today's APOD</h3>
          <p>{apodTitle || "Loading..."}</p>
        </div>
        <div className="live-card">
          <h3>☄️ Near-Earth Objects Today</h3>
          <p>{neoCount !== null ? neoCount : "Loading..."}</p>
        </div>
        <div className="live-card">
          <h3>🚜 Latest Mars Photo Date</h3>
          <p>{latestMarsDate || "Loading..."}</p>
        </div>
      </div>
    </section>
  );
};

export default LiveNasaData;
