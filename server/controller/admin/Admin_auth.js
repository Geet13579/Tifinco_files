// var Book = require('../models/book');
const AdminUser = require("../../model/adminmodel/Adminusermodel");
const session_model = require("../../model/sessionModel");
const sha1 = require('sha1');
// var session = require('express-session');
exports.showdata = function(req, res) {
    res.send('show data ');
    // User.find()
    // .then((todo) => {
    //   console.log({ todo });
    //   res.json(todo);
    // })
    // .catch((err) => {
    //   res
    //     .status(404)
    //     .json({ message: "There isnt any todo available", error: err.message });
    // });

};

exports.signin = async function(req, res) {

  // console.log(req.body)
    // req.session.destroy(err => {
    //     if (err) {
    //         console.log(err);
    //     } else {
    //         res.send('Session is destroyed')
    //     }
    // // });
    // var  sess = req.session;
    // sess.userid = "er@gmail"
    // sess.userid = "ravi";
    // console.log(sess.userid);
   // res.send(req.session.user.uuid);
    // req.session.user = {
    //         uuid: '12234-2345-2323423'
    //     }


    // req.session.save((err) => {
    //     if (err) {
    //         return next(err);
    //     }

    //     res.status(200).send('OK');
    // });



    try {
        const { userid, password } = req.body;
      //  console.log(userid);

        const AdminLogin = await AdminUser.findOne({ email: userid });

        //console.log(AdminLogin);
        if (AdminLogin) {
            // console.log(AdminLogin.password);
            //   console.log(sha1(password));
            var isMatch = false;
            if (AdminLogin.password === sha1(password)) {
                // console.log("true");
                isMatch = true;
            } else {
                isMatch = false;
                // console.log("false");
            }
            // await compare(password, userLogin.password);
            if (!isMatch) {

                res.status(200).json({ msg: "failure" });
            } else {


              const session_user = await session_model.findOne({ userid : userid });
              if(session_user){

                res.status(200).json({ msg: "success" ,admintype:AdminLogin['admintype']});
		
              }else{

            let curr_date = new Date();
            //newSession created
             const newSession = new session_model({
               userid:userid,
               admintype:AdminLogin['admintype'],
               session_time:curr_date
             });
            
               newSession
                   .save()
                   .then(
                     res.status(200).json({ msg: "success" ,admintype:AdminLogin['admintype']})
                   )
                   .catch((err) => res.status(200).json({ msg: "failure" }));
              
                    console.log("success");
                //   var  sess = req.session;
                //   sess.userid = userid;
                //   console.log(sess.userid);
                //  req.session.save();
          }

               
            }
        } else {
            res.status(200).json({ msg: "failure" });
            //console.log("nnnn");
        }

    } catch (err) {
        console.log(err);
    }

};

exports.logout = function(req, res) {
	   const { userid } = req.body;
	 session_model.deleteOne({userid: userid}).then(
    () => {
      res.status(200).json({
        msg: 'success'
      });
    }
  ).catch(
    (error) => {
      res.status(200).json({
        msg: 'failure'
      });
    }
  );
    // var ss = req.session;

    

    //   req.session.destroy(err => {
   
    //     //res.send(req.session.user.uuid);
    //     if (err) {
    //         res.status(200).json({ msg: "failure" });
    //     } else {
    //         console.log("destroy");
    //         res.json({ msg: "success" });
    //     }
    // });

};