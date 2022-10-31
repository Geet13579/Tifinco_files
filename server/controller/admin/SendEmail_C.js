
var admin_model = require('../../model/adminmodel/Adminusermodel');

var tokenstore_m = require('../../model/adminmodel/tokenstore_m');


const nodemailer = require("nodemailer");

const bcrypt = require('bcrypt');

var md5 = require("md5");
var crypto = require('crypto');

exports.SendEmail=function(req,res){

    // res.send("send");
   let email ={ email: req.body.email };
  
  
  
  
    async function   check(params) {
  
   
      const user = await admin_model.findOne(email);
  
      //   admin_model.findOne( email )
      // .then(doc => {
      //     console.log(doc);
  
      //     tokenstore_m.insertMany([doc])
      //         .then(d => {
      //           res.send([d]);
      //         })
  
  
  
      //         .catch(error => {
      //             console.log(error);
      //         })
      //       })
    // admin_model.findOneAndUpdate( email, token )
    //           .then(d => {
    //             // res.send([d]);
    //               console.log(" succesfully");
    //           })
    //           .catch(error => {
    //               console.log(error);
    //           });
  
  
  
  
    if (!user){
  
  
     res.send({ message: "Invalid Email" });
  
    }
  
    else{
  
  
  
  //     let exp ={ exptime: req.body.exptime };
  
  //     // let pass = {password:req.body.password,};
  //     // console.log(user.email)
  
  //  admin_model.findOneAndUpdate(email, exp, function(err){
  //       if(err){
  //         console.log(err);
  //         return;
  //       } else {
  //        console.log("success");
  
         
  //       }
  //     });
  
  
  var minutesToAdd=30;
  var currentDate = new Date();
  var futureDate = new Date(currentDate.getTime() + minutesToAdd*60000);
  
  console.log(futureDate)
  
  let add = new tokenstore_m({
    token:user.token,
    email:user.email,
    exptime:futureDate,
 
  
  
  });
  
  add.save().then().catch((err) => { });


  
//   tokenstore_m.createIndex( { "lastModifiedDate": 1 }, { expireAfterSeconds: 3600 } )
  
    
  
  var transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,  
    service: 'Gmail',
    auth: {
      user: 'tifincoacct@gmail.com',
      pass: 'bbelrjxwynsqfuyt' }
  });
  
  var mailOptions = {
    
   from: user.email,
   to: user.email,
   subject: 'send mail',
   text: 'Your text is here',
   html: `
             <p>Email: ${user.email}</p>
             <p>Message: ${
              BASE_URL = "https://tifinco.com/forgotPassword/token="+user.token}</p>`
             
  
  
  
  
           
  }
  
  
  
  
  var status = transporter.sendMail(mailOptions, function(error){
  
    if (error) {
       console.log(error);       
    } else {
       console.log('Email sent: '); 
       
       
       res.send({token:user.token} );
           
   }
  });
    }
    
    
  }
  
  
  
    check();
  }
  
  
  
 