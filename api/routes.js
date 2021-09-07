const express = require("express");

const messageController = require("./controllers/MessageControllers");

const router = express.Router();

router.get("/", messageController.getMessage);

module.exports = router;