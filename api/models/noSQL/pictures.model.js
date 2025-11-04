//Import
const mongoose = require("mongoose");

const picturesSchema = new mongoose.Schema(
    {
        id: {
            type: Number,
            required: true,
            unique: true
        },
        url: {
            type: String,
            unique: true,
            required: true
        },
        location: {
            type: String,
            default: ""
        },
        date: {
            type: Date,
            required: true
        },
        time: {
            type: String,
            required: true
        }
    },
    {
        timestamp: true,
        versionKey: false
    }
);

//Export
module.exports = mongoose.model("pictures", picturesSchema);