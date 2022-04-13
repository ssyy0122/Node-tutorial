"use strict";

const req = require("express/lib/request");
const res = require("express/lib/response");

const output = {
  home: (req, res) => {
    res.render("home/index");
  },

  login: (req, res) => {
    res.render("home/login");
  },
};

const process = {
  login: (req, res) => {
    console.log(req.body);
  },
};

module.exports = {
  output,
  process,
};
