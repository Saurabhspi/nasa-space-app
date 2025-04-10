# NASA App
🌌 NASA Explorer
Welcome to Cosmos Explorer, an interactive web application designed to bring NASA's vast space data to your fingertips. Using various NASA Open APIs, the app provides insights into space phenomena, including asteroid close approaches, Mars rover imagery, and astronomical events.

📖 Table of Contents:-
📌 Project Overview
✨ Features
🛠️ Technologies Used
🌍 API Endpoints
📂 Project Structure
🚀 Getting Started
✅ Prerequisites
📥 Installation
🔧 Running the Backend
💻 Running the Frontend
🔑 Environment Variables
🌍 Deployment
🚀 Future Enhancements
📌 Project Overview

NASA Explorer is a React.js & Node.js application that allows users to explore various aspects of space through data-driven visualizations. It fetches real-time data from NASA's APIs and presents it in an engaging, interactive format.

The project consists of:

A frontend (React.js) that provides an intuitive and visually appealing user experience.
A backend (Node.js & Express.js) that acts as a bridge between NASA's APIs and the frontend.
The goal is to create an interactive, responsive, and data-rich platform for space enthusiasts.

✨ Features
✅ Astronomy Picture of the Day (APOD) – View NASA’s featured image with descriptions.
✅ Near-Earth Object (NEO) Tracker – Get real-time asteroid data and their orbits.
✅ Mars Rover Photos – Browse images captured by rovers on Mars.
✅ Orbit Visualization – Interactive 2D asteroid orbits around Earth.
✅ Chatbot Integration – Ask questions and fetch relevant NASA data.
✅ Dynamic UI – A space-themed futuristic design with interactive elements.

🛠️ Technologies Used
Frontend:-
React.js – UI development.
D3.js & Plotly.js – Data visualization.
Axios – API data fetching.

Backend:-
Node.js – Server-side logic.
Express.js – REST API setup.
Axios – Fetching NASA data.
Cors & Helmet – Security enhancements.

Deployment:-
Frontend: RenderGitHub Pages.
Backend: Render.

NASA APIs Used:-
Near-Earth Object Web Service (NeoWs)
APOD (Astronomy Picture of the Day)
Mars Rover Photos API

🚀 Getting Started
Follow these steps to set up the project locally.

✅ Prerequisites
Ensure you have the following installed:

Node.js (v16+)
npm or yarn
A NASA API Key (Get one at api.nasa.gov)

📥 Installation
Clone the repository and navigate into it:
git clone https://github.com/Saurabhspi/nasa-space-app.git
cd nasa-space-app

🔧 Running the Backend
1️⃣ Navigate to the backend directory:
cd nasa-app-backend

2️⃣ Install dependencies:
npm install

3️⃣ Create a .env file and add your NASA API key:
NASA_API_KEY=

4️⃣ Start the backend server:
npm start

💻 Running the Frontend
1️⃣ Navigate to the frontend directory:
cd frontend

2️⃣ Install dependencies:
npm install

3️⃣ Start the frontend:
npm start
The frontend will be available at http://localhost:3000/

🔑 Environment Variables
Backend .env example:
NASA_API_KEY

🚀 Future Enhancements
🔹 3D Visualizations – Advanced asteroid trajectory tracking.
🔹 Search Functionality – Find space events and objects by date.
🔹 User Accounts – Save favorite space data.
🔹 Dark Mode Toggle – Switch between light and dark themes.

🌌 Explore the universe with NASA Explorer! 🚀
If you enjoy this project, consider giving it a ⭐ on GitHub! 😊