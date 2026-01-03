//Import
const { validationResult } = require("express-validator");
const { handleHTTPError } = require("./handleResponse.util");

const validateResults = (req, res, next) => {
    try {
        validationResult(req).throw();
        return next();
    }
    catch(err) {
        handleHTTPError(res, "Couldn't validate input data")
    }
}

module.exports = {
    validateResults
};