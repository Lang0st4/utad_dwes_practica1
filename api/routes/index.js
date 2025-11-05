//Import
const express = require("express");
const fs = require("fs");

const router = express.Router();
const removeFileExtension = (fileName) => {
    return fileName.split('.').shift();
};

fs.readdirSync(__dirname).filter((file) => {
    const name = removeFileExtension(file);
    if (name !== 'index') {
        router.use("/" + name, require('./' + name + '.route'))
    }
});

//Export
module.exports = router;