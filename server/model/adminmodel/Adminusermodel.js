const mongoose = require('mongoose');
const useradmin = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    admintype: {
        type: String
    },
    profileImage: {
        type: String
    },
    token: {
        type: String
    }
});


const AdminInfo = mongoose.model('admin_info', useradmin);
module.exports = AdminInfo;