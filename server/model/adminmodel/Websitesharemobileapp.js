const mongoose = require('mongoose');
const Websitesharemobileapp = new mongoose.Schema({
    mobile: {
        type: Number
    }
  

});


const Websitesharemobileapp_info = mongoose.model('Websitesharemobileapp_info', Websitesharemobileapp);
module.exports = Websitesharemobileapp_info;