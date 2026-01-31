//Import
const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true
        },
        
        fullName: {
            type: String,
            required: true    
        },
        description: {
            type: String,
            default: ""
        },
        email: {
            type: String,
            unique: true,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        role: {
            type: String,
            required: false,
            enum: ["admin", "user"],
            default: "user"
        }
    },
    {
        timestamp: true,
        versionKey: false
    }
);

//Export
module.exports = mongoose.model("users", usersSchema);