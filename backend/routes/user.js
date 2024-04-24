const userController = require("../controllers/userController");
const middlewareController = require("../controllers/middlewareController");

const router = require("express").Router();

//Get all
router.get("/",middlewareController.verifyToken,userController.getAllUsers);

//Delete user
router.delete("/:id",middlewareController.verifyTokenAndAdminAuth, userController.deleteUser);


module.exports = router;