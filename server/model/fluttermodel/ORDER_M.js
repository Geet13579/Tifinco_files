const mongoose = require("mongoose");
var Order_id_M = require('../../model/fluttermodel/Order_id_M');
const orderSchema = new mongoose.Schema({
  item: [{
    name: {
      type: String,
   
    },
    quantity: {
      type: Number,
   
    },

    price: {
      type: Number,
   
    },

    extra: [
      {
      type: Object,
   
      }
    ],
    total_itemprice:{
      type:Number
    }

  }
  ],

  address:
  {
    address1: {
      type: String,
   
    },
    address2: {
      type: String,
   
    },
    addresstype: {
      type: String,
   
    },
    location: {
      lat: {
        type: String,
     
      },
      lng: {
        type: String,
     
      }
    },
  
  },
  


  paymentid: {

    type: String,
 
  },

  paymentmethod: {
    type: String,
 
  },
  finalprice: {
    type: Number,
 
    default: 0,
  },

  coupon: {

    couponcode: {
      type: String,
   
      default: 0,
    },
    discount:
    {
      type: Number,
   
      default: 0,

    }

  },
  deliveryCharges:
  {
    type: Number,

  },
  tax:
  {
    type :Number
  },

  Orderid: {

    // type: mongoose.Schema.ObjectId ,
    // ref: "Order_id_M",
    type: String,
  
  },
  mobile:
  {
    type : String
  },

  userid:
  {
    type: String
  },
  totalPrice: {
    type: Number,
 
    default: 0,
  },
  orderStatus: {
    type: String,
 
    default: "Processing",
  },
  txn_time:
  {
    type:String,
   
  },
  cf_orderid:
  {
    type :String
  },
  deliveredAt: Date,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  refund:{
    type:Number
  }

});
orderSchema.index({'location':'2dsphere'});
module.exports = mongoose.model("Order", orderSchema);