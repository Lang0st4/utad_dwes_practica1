//Import
const usersModel = require("../models/nosql/users.model");

//GET ALL
const getUsers = async (req, res) => {
    try {
        const data = await usersModel.find();
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
const getUsersByName = async (req, res) => {
    try {
        const username = req.params.username;
        const data = await usersModel.findById(username);
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
const createUser = async (req, res) => {
    try {
        const body = req.body;
        const data = await usersModel.create(body);
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
const updateUser = async (req, res) => {
    try {
        const username = req.params.username;
        const body = req.body;
        const data = await usersModel.findByIdAndUpdate(username, body);
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
const deleteUser = async (req, res) => {
    try {
        const username = req.params.username;
        const data = await usersModel.deleteOne({_id: username});
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
    getUsers,
    getUsersByName,
    createUser,
    updateUser,
    deleteUser
};