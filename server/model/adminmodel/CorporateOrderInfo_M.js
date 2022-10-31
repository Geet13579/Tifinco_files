const mongoose = require('mongoose');
const corporate_order = new mongoose.Schema({
  
    nameOfinstitude_Or_Compony: {
        type: String
    },
   
    address:{
        type: String
    },
    contactperson_name:{
        type: String
    },
   contact_number:{
        type: String
    },
    gst:{
        type: String
    },
    meal_prefrence:{
        type: String
    },
    time_prefrence:{
        type: String
    },
    no_of_vegpeople:{
        type: Number
    },
    no_of_nonvegpeople:{
        type: Number
    },
    starting_date:{
        type: String
    },
    ending_date:{
        type: String
    },
    // deliverytime:{
    //     type: String
    // },
    lunchtime:{
        type: String
    },
    dinnertime:{
        type: String
    },
    plan_type:{
        type: String
    },
    payment:{
        type: String
    },
    email:{
        type: String
    },
    amount:{
        type: Number

    },
    orderId:{
        type: String
    },
    status:{
        type: String
    },
   
    
}, { timestamps: { 
  } ,
});


const handleusersinfo = mongoose.model('corporate_Orderinfo', corporate_order);
module.exports = handleusersinfo;