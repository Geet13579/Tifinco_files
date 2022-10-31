const express = require("express");
const customer = express.Router();
const userroutes  = require('./Onepageroutes.js');
customer.use(userroutes);

module.exports = customer