//Import
const mongoose = require("mongoose");

const probesSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            unique: true,
            required: true
        },
        description: {
            type: String,
            default: ""
        },
        location: {
            type: String,
            default: ""
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

//Export
module.exports = mongoose.model("probes", probesSchema);