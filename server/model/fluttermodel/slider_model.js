const mongoose = require('mongoose');
const slidermodel = new mongoose.Schema({
    image: {
        type: String
    }
});


const sliderInfo = mongoose.model('sliderinfos', slidermodel);
module.exports = sliderInfo;