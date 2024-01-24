const jwt = require("jsonwebtoken");
const { User } = require("../models/User");
const config = require("../config/dev");

module.exports = async (req, res, next) => {
    const token = req.cookies.token;
    if (!token) return res.status(401).send("Access denied");

    try {
        var decoded = jwt.verify(token, config.jwt_token);
        const user = await User.findById(decoded.userId);
        if (!user) {
            return res.status(401).send("Access denied");
        }
        delete user.password;
        req.user = user;
        next();
    } catch (err) {
        console.log(err);
        res.status(401).send("Access denied. go to /signin");
    }
};
