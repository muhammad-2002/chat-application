const express = require("express");

const { getUsers, addUser } = require("../controller/usersController");
const decorateHtmlResponse = require("../middleware/common/decorateHtmlResponse");
const avatarUpload = require("../middleware/common/user/avaterUpload");

const {
  addUserValidationHandler,
  addUserValidator,
} = require("../middleware/common/user/userValidator");

const router = express.Router();

router.get("/", decorateHtmlResponse("users"), getUsers);

router.post(
  "/",
  avatarUpload,
  addUserValidator,
  addUserValidationHandler,
  addUser
);
module.exports = router;
