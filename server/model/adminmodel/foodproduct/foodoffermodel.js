const mongoose = require('mongoose');
const foodoffer = new mongoose.Schema({
    name: {
        type: String
    },
  
});


const foodoffer_info= mongoose.model('foodoffertag', foodoffer);
module.exports = foodoffer_info ;