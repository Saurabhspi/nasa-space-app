const express = require('express');
const { getAPOD } = require('../controllers/apodController');

const router = express.Router();

router.get('/', getAPOD);

module.exports = router;
