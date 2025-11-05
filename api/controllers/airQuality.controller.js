//Import
const airQualityModel = require("../models/nosql/airQuality.model");

//GET ALL
const getAirQuality = async (req, res) => {
    try {
        const data = await airQualityModel.find()
        res.send({
            error: false,
            data
        });
    }
    catch(err) {
        console.log(`Error: ${err}`);
        res.status(500).send({
            error: true,
            message: "INTERNAL SERVER ERROR"
        });
    }
};

//GET by ID
const getAirQualityById = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await airQualityModel.findById(id);
        res.send({
            error: false,
            data
        });
    }
    catch(err) {
        console.log(`Error: ${err}`);
        res.status(500).send({
            error: true,
            message: "INTERNAL SERVER ERROR"
        });
    }
};

//CREATE
const createAirQuality = async (req, res) => {
    try {
        const body = req.body;
        const data = await airQualityModel.create(body);
        res.send({
            error: false,
            data
        });
    }
    catch(err) {
        console.log(`Error: ${err}`);
        res.status(500).send({
            error: true,
            message: "INTERNAL SERVER ERROR"
        });
    }
};

//UPDATE
const updateAirQuality = async (req, res) => {
    try {
        const id = req.params.id;
        const body = req.body;
        const data = await airQualityModel.findByIdAndUpdate(id, body);
        res.send({
            error: false,
            data
        });
    }
    catch(err) {
        console.log(`Error: ${err}`);
        res.status(500).send({
            error: true,
            message: "INTERNAL SERVER ERROR"
        });
    }
};

//DELETE
const deleteAirQuality = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await airQualityModel.deleteOne({_id: id});
    }
    catch(err) {
        console.log(`Error: ${err}`);
        res.status(500).send({
            error: true,
            message: "INTERNAL SERVER ERROR"
        });
    }
};

//Export
module.exports = {
    getAirQuality,
    getAirQualityById,
    createAirQuality,
    updateAirQuality,
    deleteAirQuality
};