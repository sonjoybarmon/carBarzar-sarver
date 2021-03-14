const { json } = require("body-parser");
const { allCar, create } = require("../controller/car");
const router = require("express").Router();

router.get("/", allCar);
router.post("/", create);

module.exports = router;
