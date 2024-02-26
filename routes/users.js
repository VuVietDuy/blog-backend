var express = require('express');
var router = express.Router();
const User = require('../models/User');

/* GET users listing. */
router.get('/', function (req, res, next) {
  User.find()
  .then(user => {
    res.status(200).json({
      success: true,
      message: "Successful",
      data: user,
    });
  })
});

router.post('/create', function (req, res, next) {
  console.log(req.body);
  try {
    const newUser = new User({
      email: req.body.email,
      password: req.body.password,
    });
    newUser.save();
    res.status(200).json({
      success: true,
      message: "Successful",
      user: newUser,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed",
    });
  }
});

module.exports = router;
