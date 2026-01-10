//Import
const bcryptjs = require("bcryptjs");

const SALT_ROUNDS = 12;

//Hash
const hashPassword = async (password) => {
    const hash = await bcryptjs.hash(password, SALT_ROUNDS);
    return hash;
};

//Compare
const comparePassword = async (password, hash) => {
    const result = await bcryptjs.compare(password, hash);
    return result;
};

//Export
module.exports = {
    hashPassword,
    comparePassword
};