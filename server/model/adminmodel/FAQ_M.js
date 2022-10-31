const mongoose = require('mongoose');
const FAQ_M = new mongoose.Schema({
    question: {
        type: String
    },
    answer: {
        type: String
    },

});


const faq_info = mongoose.model('faq_info', FAQ_M);
module.exports = faq_info;