//Import
const mongoose = require("mongoose");

const precipitationSchema = new mongoose.Schema(
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
        timestamps: true,
        versionKey: false
    }
);

//Export
module.exports = mongoose.model("precipitation", precipitationSchema);