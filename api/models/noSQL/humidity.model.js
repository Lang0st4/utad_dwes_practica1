//Import
const mongoose = require("mongoose");

const humiditySchema = new mongoose.Schema(
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
        humidity: {
            type: Number,
            required: true
        },
        dewPoint: {
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
        timestamps: true,
        versionKey: false
    }
);

//Export
module.exports = mongoose.model("humidity", humiditySchema);