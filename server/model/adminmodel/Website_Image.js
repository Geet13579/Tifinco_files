const mongoose = require('mongoose');
const Website_bg_image= new mongoose.Schema({
    // carousel_img1: 
    // {
    //     type: String
    // },
    // carousel_img2:
    // {
    //     type:String
    // },
    // slider_image:
    // {
    //     type:String
    // },
    name: {
        type: String
    },
    image: {
        type: String
    },
  
});


const website_imgInfo = mongoose.model('website_imgInfo', Website_bg_image);
module.exports = website_imgInfo;