const express = require('express');
const { getMarsPhotos } = require('../controllers/marsController');

const router = express.Router();

router.get('/', getMarsPhotos);

module.exports = router;
