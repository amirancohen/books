var express = require("express");
var router = express.Router();

const controller = require("../controllers/recomendations");
const auth = require("../middleware/auth");

router.get("/", controller.getAll);
router.get("/:id", controller.getItem);
router.post("/", auth, controller.add);
router.patch("/:id", auth, controller.edit);
router.delete("/:id", auth, controller.delete);

module.exports = router;
