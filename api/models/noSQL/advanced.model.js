//Import
const mongoose = require("mongoose");

const advancedSchema = new mongoose.Schema(
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
        airPressure: {
            type: Number,
            required: true
        },
        ultravioletIndex: {
            type: Number,
        },
        pollenIndex: {
            type: Number
        },
        date: {
            type: Number,
            required: true
        },
        time: {
            type: Number,
            required: true
        }
    },
    {
        timestamp: true,
        versionKey: false
    }
);

//Export
module.exports = mongoose.model("advanced", advancedSchema);