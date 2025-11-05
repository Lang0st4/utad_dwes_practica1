//Imports
const express = require("express");
const cors = require("cors");
require("dotenv").config();

//MongoDB Connection
const dbConnect= require("./api/config/mongodb.config");
const PORT = process.env.PORT;

//Web Server Setup
const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", require("./api/routes"));

//Initialize Web Server
app.listen(PORT, async () => {
    try {
        await dbConnect();
        console.log(`Server listening at port: ${PORT}...`);
    }
    catch(err) {
        console.err(`Server initializing failed at port ${PORT}`)
    }
});