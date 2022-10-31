const mongoose = require('mongoose');
const RegistrationSchema = new mongoose.Schema
({

       name:
       {
           type: String,
            required: true
       },
       date_of_birth:
       {
            type: Date,
             required: true
       },
       mobile:
       {
           type : String,
            required: true
       },
       email:
       {
           type : String,
            required: true
       },
	    address:
        {
            type: String,
             required: true
        },
       adhaar_card :
       {
           type: String,
            required: true   
       },

       adhaar_image:
       {
        type: String
       },

       pan_image:
       {
        type: String
       },
       
       Profile_image:
       {
        type: String
       },

       pan_card:
       {
           type:String,
           required: true 
       },

       username:
       {
           type: String,
            required: true
       },
       password:
       {
           type : String,
           required: true
       },
       
       date:
       {
            type: Date,
            default: Date.now
       }

});

const delivery_registration = mongoose.model('delivery_registration_info', RegistrationSchema);
module.exports = delivery_registration 
