var express = require('express');
var router = express.Router();
const blogController = require('../controller/blog.controller')
const authMiddleware = require('../middleware/auth.middleware')

router.get('/', blogController.getAllBlog)
router.get('/:id', blogController.getBlogById)
router.delete ('/:id',authMiddleware.isAuth, blogController.deleteBlog)
router.post('/create',authMiddleware.isAuth ,blogController.create)

module.exports = router;
