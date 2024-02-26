const Comment = require('../models/Comment');

function createComment(req, res, next) {
    try {
        const newComment = new Comment({
            target_id: '65d8bdd63328714f222d2e20',
            content: 'demo',
            createdBy: '65d84399173c2194b1056d00',
        })
        newComment.save();
        return res.status(200).json({
            success: true,
            message: 'Successful',
            data: newComment,
        });
    } catch (err) {
        res.status(400).json({ 
            success: false,
            message: err.message 
        });
    }
}

function getCommentByTagetId(req, res) {
    const targetId = req.params.targetId;
    Comment.find({targetId: targetId}).populate('createdBy')
        .then((comments) => {
            return res.status(200).json({
                success: true,
                message: 'Successful',
                data: comments,
            });
        })
        .catch((err) => {
            res.status(500).json({
                success: false,
                message: 'Server error. Please try again.',
                error: err.message,
            });
        })
}

function deleteComment(req, res) {
    const id = req.params.id;
    Comment.findByIdAndDelete(id)
        .then((response) => {
            return res.status(200).json({
                success: true,
                message: response,
            });
        });
}

module.exports = {
    createComment,
    getCommentByTagetId,
}