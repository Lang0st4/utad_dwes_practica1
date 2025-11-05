//Import
const infoModel = require("../models/nosql/info.model");

//GET ALL
const getInfo = async (req, res) => {
    try {
        const data = await infoModel.find()
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
const getInfoById = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await infoModel.findById(id);
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
const createInfo = async (req, res) => {
    try {
        const body = req.body;
        const data = await infoModel.create(body);
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
const updateInfo = async (req, res) => {
    try {
        const id = req.params.id;
        const body = req.body;
        const data = await infoModel.findByIdAndUpdate(id, body);
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
const deleteInfo = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await infoModel.deleteOne({_id: id});
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
    getInfo,
    getInfoById,
    createInfo,
    updateInfo,
    deleteInfo
};