const express = require("express");
const bodyParser = require("body-parser");
const chamadosRoute = require("./chamadosRoute");
const path = require("path");

module.exports = (app) => {
  app.use(bodyParser.json(), chamadosRoute);
};
