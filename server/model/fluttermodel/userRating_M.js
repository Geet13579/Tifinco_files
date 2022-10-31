const mongoose = require('mongoose');
const rating_model = new mongoose.Schema
({
    userid:
    {
        type: String
    },
    delivery_rating: 
    {
        type: String
    },
    foodTaste_rating:
    {
         type: String
    },
    
    feedback:
    {
        type:String
    },

    boolean_rating:
    {
        type:Boolean
    },
    current_date:
    {
    //    type: new Date().toLocaleDateString()
        // type: Number, default: function(){return new Date().getDate()}
         type:Date 
        // type:Date , default:  Date.now
    }
});


const rating_Info = mongoose.model('rating_info', rating_model);
module.exports = rating_Info;