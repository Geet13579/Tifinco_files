const mongoose = require('mongoose');
const userextrafood = new mongoose.Schema({
    item_name: {
        type: String
    },
    item_price: {
        type: String
    },
    item_image: {
        type: String
    },
 
});


const userextrafood_info = mongoose.model('userextrafood_info', userextrafood);
module.exports = userextrafood_info;

