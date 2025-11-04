//Import
const mongoose = require("mongoose");

const precipitationSchema = new mongoose.Schema(
    {
        probeID: {
            type: String,
            required: true
        },
        type: {
            type: String,
            required: true
        },
        probability: {
            type: Number,
            required: true,
        },
        accumulatedPrecipitation: {
            type: Number
        },
        date: {
            type: Date
        },
        time: {
            type: String
        }
    },
    {
        timestamp: true,
        versionKey: false
    }
);

//Export
module.exports = mongoose.model("precipitation", precipitationSchema);