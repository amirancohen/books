var express = require("express");
var router = express.Router();
const users = require("../controllers/users");
const authMiddleware = require("../middleware/auth");

router.post("/signup", users.signup);
router.post("/login", users.login);
router.post("/logout", authMiddleware, users.logout)
router.get("/me", authMiddleware, users.me);

module.exports = router;
