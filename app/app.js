"use strict";
//모듈
const express = require("express");
const app = express();

//라우팅
const home = require("./src/routes/home");

//앱셋팅
app.set("views", "./views");
app.set("view engine", "ejs");

app.use("/", home);

module.exports = app;