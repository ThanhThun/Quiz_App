const authController = require("../controllers/authController.js");
const middlewareController = require("../controllers/middlewareController.js");
const questionController = require("../controllers/questionsController.js");
const roomController = require("../controllers/roomController.js");
const { route } = require("./auth.js");

const router = require('express').Router();

//Add room
router.post("/addRoom", roomController.addRoom);

module.exports = router;