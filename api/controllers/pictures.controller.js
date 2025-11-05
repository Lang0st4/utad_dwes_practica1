//Import
const picturesModel = require("../models/nosql/pictures.model");

//GET ALL
const getPictures = async (req, res) => {
    try {
        const data = await picturesModel.find()
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
const getPicturesById = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await picturesModel.findById(id);
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
const createPicture = async (req, res) => {
    try {
        const body = req.body;
        const data = await picturesModel.create(body);
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
const updatePicture = async (req, res) => {
    try {
        const id = req.params.id;
        const body = req.body;
        const data = await picturesModel.findByIdAndUpdate(id, body);
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
const deletePicture = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await picturesModel.deleteOne({_id: id});
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
    getPictures,
    getPicturesById,
    createPicture,
    updatePicture,
    deletePicture
};