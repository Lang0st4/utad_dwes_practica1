//Import
const probesModel = require("../models/nosql/probes.model");

//GET ALL
const getProbes = async (req, res) => {
    try {
        const data = await probesModel.find();
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
const getProbesByName = async (req, res) => {
    try {
        const name = req.params.name;
        const data = await probesModel.findById(name);
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
const createProbe = async (req, res) => {
    try {
        const body = req.body;
        const data = await probesModel.create(body);
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
const updateProbe = async (req, res) => {
    try {
        const name = req.params.name;
        const body = req.body;
        const data = probesModel.findByIdAndUpdate(name, body);
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
const deleteProbe = async (req, res) => {
    try {
        const name = req.params.name;
        const data = await probesModel.deleteOne({_id: name});
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
}

//Export
module.exports = {
    getProbes,
    getProbesByName,
    createProbe,
    updateProbe,
    deleteProbe
};