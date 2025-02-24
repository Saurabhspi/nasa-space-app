import React, { useEffect, useState } from "react";
import { fetchAPOD } from "../api/nasaApi";
import "../styles/APOD.css";

const APOD = () => {
    const [apod, setApod] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedDate, setSelectedDate] = useState("");

    const today = new Date().toISOString().split("T")[0];

    const getData = async (date = "") => {
        setLoading(true);
        setError(null);
        try {
            const timestamp = new Date().getTime();
            console.log("🔍 Fetching APOD for date:", date || "Latest");

            const queryParam = date ? `date=${date}&timestamp=${timestamp}` : `timestamp=${timestamp}`;
            const data = await fetchAPOD(queryParam);
            console.log("✅ APOD Data Fetched:", data);

            setApod(data);
        } catch (err) {
            console.error("❌ API Fetch Error:", err);
            setError("Failed to load APOD. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    const handleDateChange = (e) => {
        const rawDate = e.target.value;
        if (!rawDate) return;
        setSelectedDate(rawDate);
    };

    useEffect(() => {
        if (selectedDate) {
            getData(selectedDate);
        }
    }, [selectedDate]);

    return (
        <div className="apod-container">
            <h1>Astronomy Picture of the Day 🌠</h1>

            {/* 📅 Date Picker */}
            <input
                type="date"
                value={selectedDate}
                onChange={handleDateChange}
                className="date-picker"
                max={today}
            />

            {/* 🔄 Loader & Error Handling */}
            {loading ? (
                <p className="loading">⏳ Loading...</p>
            ) : error ? (
                <p className="error">{error}</p>
            ) : (
                apod && (
                    <div className="apod-card">
                        <h2>{apod.title}</h2>

                        {/* 🎬 Image or Video Display */}
                        {apod.media_type === "image" ? (
                            <img src={apod.url} alt={apod.title} className="apod-image" />
                        ) : (
                            <iframe
                                className="apod-video"
                                src={apod.url}
                                title="APOD Video"
                                allowFullScreen
                            ></iframe>
                        )}

                        <div className="buttons-container">
                            {/* 🔗 View HD Image */}
                            <a href={apod.hdurl || apod.url} target="_blank" rel="noopener noreferrer">
                                <button className="view-hd" aria-label="View high-resolution image">🔭 View in HD</button>
                            </a>
                        </div>

                        {/* 📖 Description Section */}
                        <p className="apod-description">{apod.explanation}</p>
                    </div>
                )
            )}
        </div>
    );
};

export default APOD;
