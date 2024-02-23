const User = require('../models/User');
const JWT = require('./auth.jwt');
require('dotenv').config();

function isAuth(req, res, next) {
    const accessTokenFromHeader = req.headers.jwt_token_key;
    console.log("Access token >> ", accessTokenFromHeader);
    if (!accessTokenFromHeader) {
        return res.status(401).send("Not found access token");
    };

    const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET;
    const verified = JWT.verifyToken(
        accessTokenFromHeader,
        accessTokenSecret,
    );
    if (!verified) {
        return res
            .status(401)
            .send('Bạn không có quyền truy cập vào tính năng này!');
    }

    console.log("Decode access token >> ", verified);

    // User.findByIdAndDelete(verified.payload._id)
    // .then((response) => {
    //     req.user = response;
    // })

    return next();
}

module.exports = {
    isAuth
};