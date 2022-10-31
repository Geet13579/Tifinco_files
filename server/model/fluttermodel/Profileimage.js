const mongoose = require('mongoose');
const MenuProfileimage = new mongoose.Schema({
    image: {
        type: String
    }
});


const menuprofileinfos = mongoose.model('menuprofileinfos', MenuProfileimage);
module.exports = menuprofileinfos;