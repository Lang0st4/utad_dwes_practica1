//Import
const mongoose = require("mongoose");

const infoSchema = new mongoose.Schema(
    {
        id: {
            type: Number,
            required: true,
            unique: true
        },
        probeID: {
            type: String,
            required: true
        },
        temperature: {
            type: Number,
            required: true
        },
        apparentTemperature: {
            type: Number
        },
        cloudCover: {
            type: String,
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
        timestamps: true,
        versionKey: false
    }
);

//Export
module.exports = mongoose.model("info", infoSchema);