import React from 'react';
import '../styles/About.css';

const About = () => {
    return (
        <main className="about-container" role="main" aria-labelledby="about-title">
            <div className="about-content">
                <h1 id="about-title">About NASA Explorer</h1>
                <p>
                    Welcome to <strong>NASA Explorer</strong>! This web application allows users to explore space using NASA's public APIs. 
                    You can view the <strong>Astronomy Picture of the Day (APOD)</strong>, browse <strong>Mars Rover</strong> photos, 
                    and check for <strong>Near-Earth Objects (NEOs)</strong> that pass close to Earth.
                </p>

                <hr />

                <h2>Technologies Used</h2>
                <ul>
                    <li><strong>React.js</strong> for the frontend</li>
                    <li><strong>Node.js & Express</strong> for the backend</li>
                    <li><strong>NASA APIs</strong> for real-time space data</li>
                </ul>

                <blockquote>
                    <p>
                        "The important achievement of Apollo was demonstrating that humanity is not forever chained to this planet."
                    </p>
                    <cite>— Neil Armstrong</cite>
                </blockquote>
            </div>
        </main>
    );
};

export default About;
