const express = require("express");

const { getLogin } = require("../controller/loginController");
const decorateHtmlResponse = require("../middleware/common/decorateHtmlResponse");

const router = express.Router();

router.get("/", decorateHtmlResponse("index"), getLogin);
module.exports = router;
