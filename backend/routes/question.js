const authController = require("../controllers/authController.js");
const middlewareController = require("../controllers/middlewareController.js");
const questionController = require("../controllers/questionsController.js");
const { route } = require("./auth.js");

const router = require('express').Router();

//Add question
router.post("/addQuestion", questionController.addQuestion);

module.exports = router;