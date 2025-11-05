//Import
const windModel = require("../models/nosql/wind.model");

//GET ALL
const getWind = async (req, res) => {
    try {
        const data = await windModel.find();
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
const getWindById = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await windModel.findById(id);
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
const createWind = async (req, res) => {
    try {
        const body = req.body;
        const data = await windModel.create(body);
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
const updateWind = async (req, res) => {
    try {
        const id = req.params.id;
        const body = req.body;
        const data = await windModel.findByIdAndUpdate(id, body);
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
const deleteWind = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await windModel.deleteOne({_id: id});
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
    getWind,
    getWindById,
    createWind,
    updateWind,
    deleteWind
};