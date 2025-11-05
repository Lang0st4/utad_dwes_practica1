//Import
const advancedModel = require("../models/nosql/advanced.model");

//GET ALL
const getAdvanced = async (req, res) => {
    try {
        const data = await advancedModel.find()
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
const getAdvancedById = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await advancedModel.findById(id);
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
const createAdvanced = async (req, res) => {
    try {
        const body = req.body;
        const data = await advancedModel.create(body);
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
const updateAdvanced = async (req, res) => {
    try {
        const id = req.params.id;
        const body = req.body;
        const data = await advancedModel.findByIdAndUpdate(id, body);
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
const deleteAdvanced = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await advancedModel.deleteOne({_id: id});
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
    getAdvanced,
    getAdvancedById,
    createAdvanced,
    updateAdvanced,
    deleteAdvanced
};