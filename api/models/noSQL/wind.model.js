//Import
const mongoose = require("mongoose");

const windSchema = new mongoose.Schema(
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
        windVelocity: {
            type: Number,
            required: true
        },
        windGustsVelocity: {
            type: Number
        },
        direction: {
            type: String,
            enum: ["N", "NE", "E", "SE", "S", "SW", "W", "NW"],
            required: true
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
module.exports = mongoose.model("wind", windSchema);