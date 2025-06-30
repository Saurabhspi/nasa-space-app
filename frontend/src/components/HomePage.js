import React from 'react';
import { Link } from 'react-router-dom';  // ✅ Import Link
import '../styles/HomePage.css';
import LiveNasaData from './LiveNasaData';

const HomePage = () => (
  <div className="home-container">
    {/* Hero Section */}
    <div className="hero">
      <div className="nebula"></div>
      <div className="stars"></div>
      <div className="overlay"></div>

      <div className="hero-content">
        <h1>Welcome to NASA Explorer</h1>
        <p>Embark on a cosmic journey and explore fascinating space data powered by NASA.</p>
      </div>
    </div>

    {/* ✅ Live NASA Data Section */}
    <LiveNasaData />

    {/* Discover the Wonders of Space */}
    <section className="discover-section">
      <h2>✨ Discover the Wonders of Space</h2>
      <div className="features">
        <Link to="/neo" className="feature-card">
          <h3>🌍 Near-Earth Objects</h3>
          <p>Track asteroids and comets that pass close to Earth.</p>
        </Link>
        <Link to="/apod" className="feature-card">
          <h3>📸 Astronomy Picture of the Day</h3>
          <p>See NASA’s featured space image daily.</p>
        </Link>
        <Link to="/mars" className="feature-card">
          <h3>🚜 Mars Rover Images</h3>
          <p>Explore Mars through real images captured by rovers.</p>
        </Link>
      </div>
    </section>

    {/* Call to Action */}
    <footer className="cta-section">
      <p>🌌 Explore these sections and uncover the universe's secrets!</p>
    </footer>
  </div>
);

export default HomePage;