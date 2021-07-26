const express = require("express");

const bikesControllers = require("../controller/bikes-controller");

const router = express.Router();

router.get("/", bikesControllers.getBikes);

module.exports = router;
