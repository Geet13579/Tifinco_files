const mongoose = require('mongoose');
const categorymodel = new mongoose.Schema({
    cat_image: {
        type: String
    },
    cat_name: {
        type: String
    }
});


const catInfo = mongoose.model('comboProd_cat_infos', categorymodel);
module.exports = catInfo ;