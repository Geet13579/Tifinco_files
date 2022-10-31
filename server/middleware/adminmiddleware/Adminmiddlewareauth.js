// const Users = require('../models/userModel');
// const jwt = require('jsonwebtoken');
const session_model = require("../../model/sessionModel");

const authadminuser = async(req, res, next) => 
{
    
	
    try {
        const { userid } = req.body;

        const session_user = await session_model.findOne({ userid : userid });



        if (session_user) {
            next();
        } else {
            res.status(200).json({ msg: "unauthorized" });
			console.log("unauthorized");
        }

    } catch (err) {
        console.log(err);
    }
	
	
	
	// var  sess = req.session;
    // if (req.userid) {
    //     next();
    // } else {
    //     err = res.json({ msg: "unauthorized" })
    //     return err;
    // }

    // try {
    //     const userid = req.body.userid;
    //          // session.userid = sha1(userid);
    //             // req.session.userid = sha1(userid);
    //             // console.log(session.userid);
    //             //return res.json({ msg: "userexist" });
    //     if (!userid) {
    //         return res.json({ msg: "notauthorized" });
    //     }

    //     // const decoded = jwt.verify(token, process.env.TOKEN_SECRET);

    //     if (!decoded) {
    //         return res.json({ msg: "authorized" });
    //     }
    //     req.body = decoded;

    //     next();
    // } catch (err) {
    //     return res.status(500).json({ msg: err.message });
    // }
}



module.exports = authadminuser;