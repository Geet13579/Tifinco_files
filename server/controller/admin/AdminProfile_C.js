// var Book = require('../models/book');
const AdminUser = require("../../model/adminmodel/Adminusermodel");

const sha1 = require('sha1');
exports.getProfileData = async function(req, res) {
    // console.log(req.body);
    const {userid } = req.body;

    const profiledata  = await AdminUser.findOne({ email: userid });
   res.json([profiledata]);


//   res.send(req.session.adminuser.userid);
    // AdminUser.find()
    // .then((profile_data) => {
    //   console.log({ profile_data });
    //   res.json(profile_data);
    // })
    // .catch((err) => {
    //   res
    //     .status(404)
    //     .json({ message: "There isnt any todo available", error: err.message });
    // });

};

