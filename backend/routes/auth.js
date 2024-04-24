const authController = require("../controllers/authController.js");
const middlewareController = require("../controllers/middlewareController.js")

const router = require('express').Router();

//register
router.post("/register", authController.registerUser);

//login
router.post("/login", authController.loginUser);

//refresh
router.post("/refresh", authController.requesRefreshToken);

//logout
router.post("/logout", authController.userLogout);

module.exports = router; //êk hong được thiếu cái này nha 5h fix đó Lỗi Router.use();