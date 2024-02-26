var express = require('express');
var router = express.Router();
var questionsController = require('../controller/question.controller')

router.get('', questionsController.getAllQuestion)
router.post('', questionsController.createQuestion)

module.exports = router;