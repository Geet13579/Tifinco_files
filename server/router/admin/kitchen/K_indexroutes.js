const express = require('express');
const router = express.Router();
// const  dashboard_routes  = require('./dashboard_routes.js');
const kitchen    = require('../kitchen/Kitchen_routes.js');
const K_addmaterialroutes    = require('../kitchen/K_addmaterialroutes.js');
const K_menuroutes=require('../kitchen/K_menuroutes.js')
const K_orderroutes=require('../kitchen/K_orderroutes.js')
const k_Mastermenu=require('../kitchen/K_mastermenuroutes')
const K_unlikefoodroutes=require('../kitchen/K_unlikefoodroutes.js')
const Extraroutes=require('../kitchen/Extraroutes.js')


router.use(kitchen);
router.use(K_orderroutes);
router.use(K_menuroutes);
// router.use(slider_routes);
router.use(K_unlikefoodroutes);
router.use(k_Mastermenu);
router.use(K_addmaterialroutes);
router.use(Extraroutes);
module.exports = router;