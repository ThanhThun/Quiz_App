const { json } = require("express")
const {Question} = require("../models/Question.js")

const questionController = {
    //add question
    addQuestion: async(req, res) => {
        try {
            const newQuestion = new Question(req.body);
            const savedQuestion = await newQuestion.save();
            res.status(200).json(savedQuestion);
           
        } catch (err) {
            res.status(500).json(err)
        }
    }
}

module.exports = questionController;