//Import
const humidityModel = require("../models/nosql/humidity.model");

//GET ALL
const getHumidity = async (req, res) => {
    try {
        const data = await humidityModel.find()
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
const getHumidityById = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await humidityModel.findById(id);
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
const createHumidity = async (req, res) => {
    try {
        const body = req.body;
        const data = await humidityModel.create(body);
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
const updateHumidity = async (req, res) => {
    try {
        const id = req.params.id;
        const body = req.body;
        const data = await humidityModel.findByIdAndUpdate(id, body);
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
const deleteHumidity = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await humidityModel.deleteOne({_id: id});
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
    getHumidity,
    getHumidityById,
    createHumidity,
    updateHumidity,
    deleteHumidity
};