const mongoose = require('mongoose');
const slider_image = new mongoose.Schema({
    image_name: {
        type: String
    }
});


const slider_info = mongoose.model('slider_info', slider_image);
module.exports = slider_info;