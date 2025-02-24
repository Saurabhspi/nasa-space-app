# NASA App Backend

This is the backend for the NASA App, which utilizes NASA's Near-Earth Object Web Service (NeoWs) and NASA Image and Video Library APIs. Built with Node.js and Express, this backend serves data to the frontend application, enabling users to explore and visualize space-related information.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation and Setup](#installation-and-setup)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
  - [Fetch Asteroid Data](#1-fetch-asteroid-data)
  - [Search Media](#2-search-media)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

- **Asteroid Data Retrieval:** Fetches information about near-Earth objects, including size, velocity, and close approach dates.
- **Media Search:** Allows users to search NASA's Image and Video Library for space-related images and videos.
- **CORS Enabled:** Allows cross-origin requests from the frontend application.
- **Error Handling:** Robust error handling for API requests and server operations.
- **Rate Limiting:** Protects the API from excessive requests.
- **Compression:** Improves performance by compressing response bodies.

## Technologies Used

- **Node.js**
- **Express.js**
- **Axios**
- **dotenv**
- **cors**
- **express-rate-limit**
- **compression**
- **nodemon** (development)

## Installation and Setup

### Prerequisites

- **Node.js** and **npm** installed on your machine.
- A **NASA API Key**. You can obtain one by signing up at [NASA API](https://api.nasa.gov/).

### Steps

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/your-username/nasa-app-backend.git
   cd nasa-app-backend
