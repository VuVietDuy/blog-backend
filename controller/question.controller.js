const Question = require('../models/Question')

function createQuestion(req, res, next) {
    try {
        const newQuestion = new Question({
            content: 'How to reference the objectId from one collection/schema to another?',
            tag: [
                'Javascript',
                'MongoDB',
                'Mongoose'
            ],
            createdBy: '65d84399173c2194b1056d00',
        })
        newQuestion.save();
        return res.status(200).json({
            success: true,
            message: 'Successful',
            data: newQuestion,
        });
    } catch (err) {
        res.status(400).json({ 
            success: false,
            message: err.message 
        });
    }
}

function getAllQuestion(req, res) {
    Question.find()
        .then((allQuestion) => {
            return res.status(200).json({
                success: true,
                message: 'Successful',
                data: allQuestion,
            });
        })
        .catch((err) => {
            res.status(500).json({
                success: false,
                message: 'Failed. Please try again.',
                error: err.message,
            });
        });
}

module.exports = {
    createQuestion,
    getAllQuestion,
}