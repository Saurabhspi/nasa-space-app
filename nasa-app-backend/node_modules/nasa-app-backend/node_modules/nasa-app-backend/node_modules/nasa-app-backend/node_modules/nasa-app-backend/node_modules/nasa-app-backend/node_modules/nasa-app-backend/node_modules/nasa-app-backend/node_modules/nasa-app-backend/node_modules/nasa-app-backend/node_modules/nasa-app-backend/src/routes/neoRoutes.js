const express = require('express');
const { getNearEarthObjects } = require('../controllers/neoController');

const router = express.Router();

router.get('/', getNearEarthObjects);

module.exports = router;
