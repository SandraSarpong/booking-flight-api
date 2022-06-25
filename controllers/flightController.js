 const { json } = require("express");
 const path = require('path');
 //const flights = require('./models/Flight.js')
 const flights = ('path.join(path.models(process,mainModule.Flight');
// const flights = require('path.join(path.models(process,mainModule.Flight');

exports.createFlights = (req, res) => {    
    try{
        res.status(200).json(req.body);
       flights.push(req.body);
        console.log(`Flight was created successfully`)
        console.log(req.body)

    }
        catch(error){
        res.status(500).send(`An error occured whiles creating flight`);
    };
}

exports.getAllFlights = (req, res) => {
    try{
        res.status(200).json({flights});
    console.log("All flights created")
    }
    catch(error){
        res.status(500).send(`An error occured whiles getting all flights`);
    };
}

exports.getFlight = (req, res) => {
    try {
        const flightId = req.params.id
        const flight = flights.find((flight) => flight.id === flightId)
        res.status(200).json(flight)
        console.log(`Request made to get a flight`)
    } catch (error) {
        res.status(500).send(
            `An error occured whiles getting flight by id`
        )
    }
}

exports.updateFlight = (req, res) => {
    try {
        const id = req.params.id
        const flight = flights.findByIdAndUpdate((flight) => flight.id === id)
        res.status(200).json(flight)
        console.log(`Request made to update a flight by id`)
    } catch (error) {
        res.status(500).send(
            `An error occured whiles updating flight by id`
        )
    }
}

exports.deleteFlight = (req, res) => {
    try {
        const id = req.params.id
        const flight = flights.findByIdAndDelete((flight) => flight.id === id)
        res.status(200).json(flight)
        console.log(`Request made to delete a flight by id`)
    } catch (error) {
        res.status(500).send(
            `An error occured whiles deleting flight by id`
        )
    }
}


