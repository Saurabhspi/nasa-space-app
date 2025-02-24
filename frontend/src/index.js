import './styles/global.css';  // Global styles loaded first
import './styles/styles.css';  // Other styles loaded second
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
