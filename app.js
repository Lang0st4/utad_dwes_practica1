//Imports
const express = require("express");
const cors = require("cors");
const mongoDBConnect = require("./api/config/mongodb.config");
require("dotenv").config();

//Middlewares
const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
    mongoDBConnect();
});