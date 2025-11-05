//Import
const precipitationModel = require("../models/nosql/precipitation.model");

//GET ALL
const getPrecipitation = async (req, res) => {
    try {
        const data = await precipitationModel.find();
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
const getPrecipitationById = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await precipitationModel.findById(id);
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
const createPrecipitation = async (req, res) => {
    try {
        const body = req.body;
        const data = await precipitationModel.create(body);
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
const updatePrecipitation = async (req, res) => {
    try {
        const id = req.params.id;
        const body = req.body;
        const data = await precipitationModel.findByIdAndUpdate(id, body);
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
const deletePrecipitation = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await precipitationModel.deleteOne({_id: id});
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
    getPrecipitation,
    getPrecipitationById,
    createPrecipitation,
    updatePrecipitation,
    deletePrecipitation
};