const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const createError = require("http-errors");
const express = require("express");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const usersRoutes = require("./routes/users");
const booksRoutes = require("./routes/books");
const recomendationRoutes = require("./routes/recommendations");
const app = express();
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(fileUpload());
app.use(express.static(path.join(__dirname, "public")));
app.use("/images", express.static(path.join(__dirname, "public/images")));

app.use(
    cors({
        origin: true,
        credentials: true,
        preflightContinue: true,
    })
);
app.use("/users", usersRoutes);
app.use("/books", booksRoutes);
app.use("/recommendations", recomendationRoutes);


module.exports = app;
