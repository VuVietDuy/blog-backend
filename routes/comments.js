var express = require('express');
var router = express.Router();
var commentController = require('../controller/comment.controller')

router.post('', commentController.createComment)
router.get('/:tagetId', commentController.getCommentByTagetId)

module.exports = router;