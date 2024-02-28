var express = require("express");
var router = express.Router();

const controller = require("../controllers/recomendations");
const auth = require("../middleware/auth");

router.get("/", controller.getAll);
router.get("/:id", controller.getItem);
router.post("/", controller.add);
module.exports = router;
