const express = require("express");
const customer = express.Router();
const userroutes  = require('./userroutes.js');
customer.use(userroutes);

module.exports = customer