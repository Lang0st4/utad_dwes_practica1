//Import
const mongoose = require("mongoose");

const airQualitySchema = new mongoose.Schema(
    {
        probeID: {
            type: String,
            required: true
        },
        airQualityIndex: {
            type: Number,
            required: true
        },
        ozone: {
            type: Number
        },
        smallParticleConcentration: {
            type: Number
        },
        largeParticleConcentration: {
            type: Number
        },
        CO2: {
            type: Number
        },
        CO: {
            type: Number
        },
        SO2: {
            type: Number
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
module.exports = mongoose.model("airQuality", airQualitySchema);