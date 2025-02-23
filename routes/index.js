//@TS-Check
const express = require('express');
const router = express.Router();
const openCors = require("../middleware/openCors");
router.use(express.static('static'));


router.use('/', require('./swagger'));
router.use('/app/games', require('./games'));
router.use('/app/companies',  require('./companies'));
router.use('/app/users',require('./users'))

module.exports = router;

