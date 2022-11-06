const express = require("express"),
	router = express.Router()

// configure routers
router.use("/app", require("./page"))
router.use("/goapi", require("./theme"), require("./asset"), require("./movie"))

module.exports = router
