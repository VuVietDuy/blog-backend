var express = require('express');
var router = express.Router();
const User = require('../models/User');

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.post('/create', function (req, res, next) {
  try {
    const newUser = new User({
      email: 'admin@gmail.com',
      password: '123',
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
