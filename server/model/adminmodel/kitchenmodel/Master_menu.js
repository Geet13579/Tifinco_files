


// const { timeStamp } = require('console');
const mongoose = require('mongoose');
const Master_menu = new mongoose.Schema({
   
    p_name:
    {
        type:String
    },
    p_date:
    {
        type:Date
    },
  
  
 
  
});


const mastermenu_info= mongoose.model('mastermenu_info', Master_menu);
module.exports = mastermenu_info ;