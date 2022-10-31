const mongoose = require('mongoose');
const MenuProfileimage = new mongoose.Schema({
    image: {
        type: String
    }
});


const MenuProfileimage_info = mongoose.model('MenuProfileimage_info', MenuProfileimage);
module.exports = MenuProfileimage_info;