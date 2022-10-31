// const Users = require('../models/userModel');
// const jwt = require('jsonwebtoken');
//const session_model = require("../../model/sessionModel");
var cat_model = require('../../../model/adminmodel/Category/Category_model');

const catCheck = async(req, res, next) => {
    
    const { cat_name } = req.body;

    console.log(cat_name);

    async function   check(params) {
        console.log(req.body.cat_name );
        var  catData = await cat_model.findOne({ cat_name: req.body.cat_name });

        if(catData){
            console.log("if" );
            res.send({msg:"exist"});
            
        }else{

          next();
        }
      }

      check();

   // next();
    // try {
    //     const { userid } = req.body;

    //     const session_user = await session_model.findOne({ userid : userid });



    //     if (session_user) {
    //         next();
    //     } else {
    //         res.status(200).json({ msg: "unauthorized" });
	// 		console.log("unauthorized");
    //     }

    // } catch (err) {
    //     console.log(err);
    // }
	

}



module.exports = catCheck;