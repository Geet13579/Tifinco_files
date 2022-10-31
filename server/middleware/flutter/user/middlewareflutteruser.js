// const Users = require('../models/userModel');
const jwt = require('jsonwebtoken');



const authflutteruser = async(req, res, next) => {
    
    try {
        const token = req.body.token;
      console.log(token);
    //   console.log("token");

        if (!token) {
           // console.log("first");
            return res.json({ msg: "unauthorized" });
        }

        const decoded = jwt.verify(token, process.env.TOKEN_SECRET);

        if (!decoded) {
            //console.log("second");
            return res.json({ msg: "unauthorized" });
        }
        req.body = decoded;

        next();
    } catch (err) {
        return res.status(500).json({ msg: err.message });
    }
}



module.exports = authflutteruser;