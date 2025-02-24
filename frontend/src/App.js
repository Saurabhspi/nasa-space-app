import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import APOD from './components/APOD';
import Mars from './components/Mars';
import NEO from './components/NEO';
import Chatbot from './components/Chatbot'; // ✅ Import the Chatbot
import HomePage from './components/HomePage'; // ✅ Import the new HomePage component
import About from './components/About'; // ✅ Import the About component

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white">
        <Navbar />
        <div className="container mx-auto px-4 py-6">
          <Routes>
            <Route path="/" element={<HomePage />} /> {/* Use the new HomePage component */}
            <Route path="/apod" element={<APOD />} />
            <Route path="/mars" element={<Mars />} />
            <Route path="/neo" element={<NEO />} />
            <Route path="/chatbot" element={<Chatbot />} /> {/* Add Chatbot Route */}
            <Route path="/about" element={<About />} /> {/* Add About Route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Chatbot /> {/* Add chatbot at the bottom of the page */}
      </div>
    </Router>
  );
}

// 404 Not Found Component
const NotFound = () => (
  <div className="text-center">
    <h1 className="text-3xl font-bold text-red-500">404 - Page Not Found</h1>
    <p className="mt-2">Oops! The page you're looking for doesn't exist.</p>
  </div>
);

export default App;
