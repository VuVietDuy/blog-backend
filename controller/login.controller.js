const User = require('../models/User');
const JWT = require('../middleware/auth.jwt');

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
                    const accessTokenSecret = 'vuvietduy';

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