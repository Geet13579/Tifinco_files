const mongoose = require('mongoose');
const suggestionSchema = new mongoose.Schema({
    suggestion: 
    {
        type: String
    }
});


const suggestion_infos = mongoose.model('suggestion_info', suggestionSchema);
module.exports = suggestion_infos;