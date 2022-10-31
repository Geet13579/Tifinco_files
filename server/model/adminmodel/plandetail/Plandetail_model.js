const mongoose = require('mongoose');
var plantypemodel= require('../../../model/adminmodel/plandetail/plantypemodel.js');
const plandetailmodel = new mongoose.Schema({
    plan_name: {
        type: String
    },
    bg_image: {
        type: String
    },
    bg1_color:{ type: String},
    bg2_color:{ type: String},
    lb1_color:{ type: String},
    lb2_color:{ type: String},
    
    vegstrikethrough_price: {
        type: Number
    },
    vegpermeal_price: {
        type: Number
    },
    vegpermonth_price: {
        type: Number
    },
    vegdiscount: {
        type: Number,
    },
    // Vegdecriptionsum: {
    //     type:  JSON,
    // },
    vegplan_item: {
        type:  JSON,

    },
    vegdecription1:
    {
        type:String
    },
    vegdecription2:
    {
        type:String
    },
    vegdecription3:
    {
        type:String
    },
    nonvegdescription1:
    {
        type:String
    },
    nonvegdescription2:
    {
        type:String
    },
    nonvegdescription3:
    {
        type:String
    },
    nonvegstrikethrough_price: {
        type: Number
    },
    nonvegpermeal_price: {
        type: Number
    },
    nonvegpermonth_price: {
        type: Number
    },
    nonvegdiscount: {
        type:  JSON,
    },
    // nonVegdecriptionsum: {
    //     type:  JSON,
    // },
    nonvegplan_item: {
        type:  JSON,

    },

    plan_feature: {
        type:  JSON,
    },
  

    files:
    {
        type:String
    },
    files:
    {
        type:String
    },
    nonvegfile:
    {
        type:String
    },
    nonveg_days:{
        type:String
    },
    plan_vegCount :{
        type:Number
    },
    
    // nonveg_days:{
      
        
    //         type: mongoose.Schema.ObjectId,
    //         ref: "plantypemodel",

    // },
    // plan_vegCount :{
    //     type: mongoose.Schema.ObjectId,
    //     ref: "plantypemodel",
     
    // },



    // nonveg_days: [{ 
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "Blog"
    //  }]
});


const plandetail_infos= mongoose.model('plandetail_infos', plandetailmodel);
module.exports = plandetail_infos ;