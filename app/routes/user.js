const express = require("express");
const router = express.Router();

const UserController = require("../controllers/user");
const userValidation = require("../controllers/user.validator")


//Defining endpoints
router.post("/signup", userValidation, UserController.Signup);
router.post("/signin", userValidation, UserController.Signin);
router.post("/refresh-token", userValidation, UserController.RefreshToken);
router.post('/social-login', userValidation, UserController.SocialLogin)
router.get('/get-all', userValidation, UserController.GetAll);
router.get("/get-by-id", userValidation, UserController.GetById);
router.patch('/verify', userValidation, UserController.Verify);
router.patch("/forgot", userValidation, UserController.ForgotPassword);
router.patch("/reset", userValidation, UserController.ResetPassword);
// router.post("/send-notification", UserController.Notification)


module.exports = router;