//Import
const jwt = require("jsonwebtoken");

const JWT_SECRET = process.env.JWT_SECRET;
const NORMAL_TOKENS_EXPIRATION = "2h";

const tokenSign = (user) => {
    const sign = jwt.sign(
        {
            _id: user._id,
            rol: user.rol
        },
        JWT_SECRET,
        {
            expiresIn: NORMAL_TOKENS_EXPIRATION
        }
    );
    return sign
}

const verifyToken = (JWTToken) => {
    try {
        return jwt.verify(JWTToken, JWT_SECRET);
    }
    catch (err) {
        console.log(`ERROR [handleJWT.util / verifyToken]: ${err}`);
    }
}

//Export
module.exports = {
    tokenSign,
    verifyToken
};