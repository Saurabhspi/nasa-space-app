const express = require('express');
const cors = require('cors');
require('dotenv').config();

const apodRoutes = require('./routes/apodRoutes');
const marsRoutes = require('./routes/marsRoutes');
const neoRoutes = require('./routes/neoRoutes');

const app = express();
const PORT = process.env.PORT || 3000; // Using default port 3000 if not set in environment

app.use(cors());
app.use(express.json());

console.log("Setting up routes...");

// Use routes
app.use('/api/apod', apodRoutes);
console.log("APOD route setup.");
app.use('/api/mars', marsRoutes);
console.log("Mars route setup.");
app.use('/api/neo', neoRoutes);
console.log("NEO route setup.");

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`); // Updated log message
});
