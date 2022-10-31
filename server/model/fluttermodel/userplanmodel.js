const mongoose = require('mongoose');
var planorder_id_M = require('../../model/fluttermodel/planorder_id_M');
var plantype_infos= require('../../model/adminmodel/plandetail/plantypemodel.js');
const PlanSchema = new mongoose.Schema({
       userid: {
              type: String,
       },
       meal_time: {
              type: String,
       },

       plantype: {
              type: String,
       },

       mealpreference: {
              type: String,
       },

       nonveg_pre_d: {
              type: JSON,
       },

       tiffintype: {
              type: String,
       },

       starting_date: {
              type: String,
       },

       plan_days: {
              type: String,
       },

       repeat_on: {
              type: JSON,
       },

       unlike_foods: {
              type: JSON,
       },

       useraddress: {
              type: JSON,
       },

       extra_item:
       {
              type: JSON
       },

       plan_status: {
              type: String,
       },

       plan_price: {
              type: String,
       },
       payment_id: {
              type: String,
       },
       order_id: {
              type: String,
       },

       tiffin_price: {
              type: String,
       },
       name: {
              type: String
       },

       day_off: {
              type: String
       },

       plan_pause:
       {
              type: String
       },
       time: { type: Date, default: Date.now },
       txn_id:
       {
              type: String
       },

       cf_order_id:
       {
              type:String
       },
       // order_id: {

       //        type: mongoose.Schema.ObjectId ,
       //        ref: "planorder_id_M",
            
            
       //      },

       payment_method:
       {
              type: String
       },

       orderStatus: {
              type: String,
              // required: true,
              default: "Processing",
       },
       deliveredAt: Date,
       createdAt: {
              type: Date,
              default: Date.now,
       },

       referal_code:
       {
              type:String
       },
       amount:
       {
              type:Number
       },
       remainingPlanDay_lunch:
       {
              type:String

       },
       remainingPlanDay_dinner:
       {
             type :String
       },
       tiffinDeliver_status:
       {
              type :String
       }



});
const UserPlanInfo = mongoose.model('userplaninfo', PlanSchema);
module.exports = UserPlanInfo;