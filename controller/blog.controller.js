const Blog = require('../models/Blog')

function create(req, res) {
    try {
        console.log(req.body);
        const newBlog = new Blog(req.body);
        newBlog.save();
        return res.status(200).json({
            success: true,
            message: 'Successful',
            blogs: newBlog,
        });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

function getAllBlog(req, res) {
    Blog.find()
        .then((allBlog) => {
            return res.status(200).json({
                success: true,
                message: 'Successful',
                blogs: allBlog,
            });
        })
        .catch((err) => {
            res.status(500).json({
                success: false,
                message: 'Server error. Please try again.',
                error: err.message,
            });
        });
}

function getBlogById(req, res) {
    const id = req.params.id;
    Blog.findById(id)
    .then((blog) => {
        return res.status(200).json({
            success: true,
            message: 'Successful',
            blogs: blog,
        })
    })
    .catch((err) => {
        res.status(500).json({
            success: false,
            message: 'Server error. Please try again.',
            error: err.message,
        });
    })
}

function deleteBlog(req, res) {
    const id = req.params.id;
    Blog.findByIdAndDelete(id)
    .then((response) => {
        return res.status(200).json({
            success: true,
            message: response,
        })
    })
}

module.exports = {
    create,
    getAllBlog,
    getBlogById,
    deleteBlog,
};