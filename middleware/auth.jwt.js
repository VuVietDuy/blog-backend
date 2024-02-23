var jwt = require('jsonwebtoken');

const createJWT = (payload, key) => {
    var token = jwt.sign(payload, key);
    console.log(token);
    return token;
}

const verifyToken = (token, key) => {
    var decode = null
    try {
        decode = jwt.verify(token, key);
    } catch (err) {
        console.log(err);
    }
    return decode;
}

module.exports = {
    createJWT,
    verifyToken,
};
