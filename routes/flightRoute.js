const express = require('express');

const router = express.Router();
const controller = require('../controllers/flightController');

router.post('/flight', controller.createFlights)
router.get('/flight', controller.getAllFlights)
router.get('/flight/:id', controller.getFlight)
router.put('/flight/:id', controller.updateFlight)
router.delete('/flight/:id', controller.deleteFlight)


module.exports = router;

