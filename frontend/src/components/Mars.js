    import React, { useEffect, useState } from "react";
    import { fetchMarsPhotos } from "../api/nasaApi";
    import "../styles/Mars.css";

    const Mars = () => {
    const [photos, setPhotos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedPhoto, setSelectedPhoto] = useState(null); 

    useEffect(() => {
        async function getData() {
        try {
            const data = await fetchMarsPhotos();
            console.log("Mars API Response:", data);

            if (data && data.photos) {
            setPhotos(data.photos.slice(0, 20)); 
            } else {
            throw new Error("No photos available");
            }
        } catch (err) {
            console.error("Error fetching Mars photos:", err);
            setError("Failed to load Mars Rover Photos.");
        } finally {
            setLoading(false);
        }
        }
        getData();
    }, []);

    return (
        <div className="mars-container">
        <h1>Mars Rover Photos</h1>

        {loading && <p>Loading...</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}

        {!loading && !error && photos.length > 0 ? (
            <div className="photo-grid">
            {photos.map((photo) => (
                <div key={photo.id} className="photo-card" onClick={() => setSelectedPhoto(photo.img_src)}>
                <img src={photo.img_src} alt={`Mars Rover - ${photo.camera.full_name}`} />
                <div className="photo-info">
                    <p><strong>📅 Date:</strong> {photo.earth_date}</p>
                    <p><strong>📷 Camera:</strong> {photo.camera.full_name}</p>
                </div>
                </div>
            ))}
            </div>
        ) : (
            !loading && !error && <p>No images available</p>
        )}

        {/* Lightbox Modal */}
        {selectedPhoto && (
            <div className="lightbox" onClick={() => setSelectedPhoto(null)}>
            <span className="close-btn">&times;</span>
            <img src={selectedPhoto} alt="Mars Rover Full View" className="lightbox-img" />
            </div>
        )}
        </div>
    );
    };

    export default Mars;
