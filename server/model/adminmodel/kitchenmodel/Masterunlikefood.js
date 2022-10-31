


// const { timeStamp } = require('console');
const mongoose = require('mongoose');
const Masterunlikefood = new mongoose.Schema({
   
    unlike_foods:

    {
        type:JSON
    },
    p_date:
    {
        type:Date
    },
  
  
  
});


const userunlikefood_info= mongoose.model('masterunlikefood_info', Masterunlikefood);
module.exports = userunlikefood_info ;