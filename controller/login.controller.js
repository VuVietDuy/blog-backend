const User = require('../models/User');
const JWT = require('../middleware/auth.jwt');
require('dotenv').config();

function checkPassword(inputPassword, password) {
    return inputPassword === password;
}

function login(req, res) {
    console.log(req.body);
    User.findOne({ email: req.body.email })
        .then(user => {
            if (user) {
                if (checkPassword(req.body.password, user.password)) {
                    const dataForAccessToken = {
                        _id: user._id
                    };
                    const accessTokenLife = process.env.ACCESS_TOKEN_LIFE;
                    const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET;

                    accessToken = JWT.createJWT(dataForAccessToken, accessTokenSecret);

                    res.status(200).json({
                        success: true,
                        message: "Login succesfully",
                        user: user,
                        accessToken: accessToken
                    });
                } else {
                    res.status(500).json({
                        success: false,
                        message: "Sai mật khẩu",
                    });
                }
            } else {
                res.status(500).json({
                    success: false,
                    message: "Tài khoản không tồn tại",
                });
            }

        })
        .catch(error => {
            res.status(500).json({
                success: false,
                message: error.message,
            });
        })
}

module.exports = {
    login,
};