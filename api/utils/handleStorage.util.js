//Imports
const multer = require("multer");

const storage = multer.diskStorage({
    destination: function(req, file, callBack){
        const pathStorage = __dirname + "/../storage"
        callBack(null, filename);
    },

    filename: function(req, file, callBack){
        const ext = file.originalname.split(".").pop();
        const filename = "file-" + Date.now() + "." + ext;
        callBack(null, filename);
    }
});

const uploadMiddleware = multer({storage});

module.exports = uploadMiddleware;