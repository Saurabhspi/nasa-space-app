import React from 'react';
import '../styles/HomePage.css'; 

const HomePage = () => (
  <div className="home-container">
    {/* Hero Section */}
    <div className="hero">
      <div className="nebula"></div>
      <div className="stars"></div>
      <div className="overlay"></div>

      <div className="hero-content">
        <h1>🚀 Welcome to NASA Explorer</h1>
        <p>Embark on a cosmic journey and explore fascinating space data powered by NASA.</p>
      </div>
    </div>

    {/* Discover the Wonders of Space */}
    <section className="discover-section">
      <h2>✨ Discover the Wonders of Space</h2>
      <div className="features">
        <div className="feature-card">
          <h3>🌍 Near-Earth Objects</h3>
          <p>Track asteroids and comets that pass close to Earth.</p>
        </div>
        <div className="feature-card">
          <h3>📸 Astronomy Picture of the Day</h3>
          <p>See NASA’s featured space image daily.</p>
        </div>
        <div className="feature-card">
          <h3>🚜 Mars Rover Images</h3>
          <p>Explore Mars through real images captured by rovers.</p>
        </div>
      </div>
    </section>

    {/* Call to Action */}
    <footer className="cta-section">
      <p>🌌 Explore these sections and uncover the universe's secrets!</p>
    </footer>
  </div>
);

export default HomePage;
