var express = require('express');
var router = express.Router();
const loginController = require("../controller/login.controller");

router.post('/', loginController.login);

module.exports = router;