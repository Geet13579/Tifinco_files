var Jimp = require('jimp');
var fs = require('fs');
var Login_M = require('../../../model/adminmodel/deliverymodel/Login_M');


// var {Auth} = require('../../../middleware/adminmiddleware/adminimages/Deliverylogin_mid');
var ErrorResponse=require('../../../middleware/adminmiddleware/adminimages/Deliverylogin_mid');

const bcrypt = require("bcryptjs");
// // const User = require("../models/User"); // User model
const Joi = require('@hapi/joi');
// const { registerSchema, loginSchema } = require('../utils/userValidations');

// exports.Login = function(req, res) {
 



// // console.log("hii");
//         const { email, password } = req.body;

//         // basic validation
//         const result = Auth.validate({ email, password });
//         if (!result.error) {
//                 //check for existing user
//                 Login_M.findOne({ email }).then((user) => {
//                         if (!user) return res.status(400).json("Incorrect Email ");

//                         // Validate password
//                         bcrypt.compare(password, user.password).then((isMatch) => {

//                                 if (!isMatch) return res.status(400).json("Incorrect Email or Password");

//                                 const sessUser = { id: user.id, name: user.name, email: user.email };
//                                 req.session.user = sessUser; // Auto saves session data in mongo store

//                                 res.json(sessUser); // sends cookie with sessionID automatically in response
//                         });
//                 });
//         } else {
//                 console.log(result.error)
//                 res.status(422).json(result.error.details[0].message);
//         }
// };




exports.register = async function(req, res, next) 
{
        const { username, email, name, date_of_birth, mobile,address, adhaar_card, pan_card,joining_date } = req.body;
        
        console.log(username);
        console.log(email);
        console.log(name);
        console.log(date_of_birth);

        console.log(mobile);
        console.log(address);
        console.log(adhaar_card);
        console.log(pan_card);
        console.log(joining_date);


        // var filename = req.files;
        // console.log(typeof req.files);
console.log("files occured");
console.log(req.files);
var pan_imagefilename = req.files.pan_image[0].filename;
var adhaar_imagefilename = req.files.adhaar_image[0].filename;
var profile_imagefilename = req.files.profile_image[0].filename;

        // const { filename_adhaar, path } = req.file;
        // const { filename_profile, path } = req.file;
        // console.log("filename1"+req.file.pan_image);
  

        // console.log("filename2"+req.file.adhaar_image);
        // console.log("filename3"+req.file.profile_image);


        // var p_name= req.body.p_name;
        
          async function check(params) 
          {
            var  pData = await Login_M.findOne({ username:username });

            // console.log( pData );
    
            if(pData)
            {
             
                let strC_PAN =   "./public/deliveryRegistration/"+pan_imagefilename;
                let strC_ADHAAR =   "./public/deliveryRegistration/"+adhaar_imagefilename;
                let strC_PROFILE =   "./public/deliveryRegistration/"+profile_imagefilename;
                
                console.log(strC_ADHAAR );
                console.log(strC_PAN );
                console.log(strC_PROFILE);
          
                  if (fs.existsSync(strC_PAN) && fs.existsSync(strC_ADHAAR) && fs.existsSync(strC_PROFILE)) 
                  {
                      console.log("if exist");
                      fs.unlinkSync(strC_PAN);
                      fs.unlinkSync(strC_ADHAAR);
                      fs.unlinkSync(strC_PROFILE);
                      res.send({msg:"exist"});
                  }
                  else
                  {
                      console.log("else");
                      res.send({msg:"exist"});
                  }
       
             }
             else
             {
              //  console.log("fdshgdf");
    
              // Jimp.read('https://tifinco.com:5000/public/deliveryRegistration/'+pan_imagefilename, (err, photo) => {
              //   if (err) throw err;
              //    photo.resize(700, 700) ;
              //    photo.quality(60) ;// set JPEG quality
              //    // photo.greyscale() ;
              //    photo.write('./public/deliveryRegistration/'+pan_imagefilename); // save

                 
              //    Jimp.read('https://tifinco.com:5000/public/deliveryRegistration/'+adhaar_imagefilename, (err, photo) => {
              //     if (err) throw err;
              //      photo.resize(700, 700) ;
              //      photo.quality(60) ;// set JPEG quality
              //      // photo.greyscale() ;
                  
              //    photo.write('./public/deliveryRegistration/'+adhaar_imagefilename); // save
                 

              //    Jimp.read('https://tifinco.com:5000/public/deliveryRegistration/'+profile_imagefilename, (err, photo) => {
              //     if (err) throw err;
              //      photo.resize(700, 700) ;
              //      photo.quality(60) ;// set JPEG quality
              //      // photo.greyscale() ;
                   
              //    photo.write('./public/deliveryRegistration/'+profile_imagefilename); // save
                 
                 
              //    const data = new Login_M({
              
              //     name: name,
              //     username:username,
              //     email:email,
              //     date_of_birth:date_of_birth,
              //     mobile:mobile,
              //     address:address,
              //     adhaar_card:adhaar_card,
              //     pan_card:pan_card,
              //     joining_date: joining_date,
              //     pan_image: 'https://tifinco.com:5000/public/deliveryRegistration/'+pan_imagefilename,
              //     adhaar_image: 'https://tifinco.com:5000/public/deliveryRegistration/'+adhaar_imagefilename,
              //     profile_image: 'https://tifinco.com:5000/public/deliveryRegistration/'+profile_imagefilename,
              //     });
            
                
              //     data.save().then(res.json({ msg: "success" }))
              //     .catch((err) => { res.json({ msg: "failed" }) });

              //   }) //profileimagename
              //   })  // adhaarimage fille name 
                
              //   });
    

              Jimp.read('https://tifinco.com:5000/public/deliveryRegistration/'+pan_imagefilename, (err, photo) => {
                if (err) throw err;
                 photo.resize(700, 700) ;
                 photo.quality(60) ;// set JPEG quality
                 // photo.greyscale() ;
                 photo.write('./public/deliveryRegistration/'+pan_imagefilename); // save

                 
                 Jimp.read('https://tifinco.com:5000/public/deliveryRegistration/'+adhaar_imagefilename, (err, photo) => {
                  if (err) throw err;
                   photo.resize(700, 700) ;
                   photo.quality(60) ;// set JPEG quality
                   // photo.greyscale() ;
                  
                 photo.write('./public/deliveryRegistration/'+adhaar_imagefilename); // save
                 

                 Jimp.read('https://tifinco.com:5000/public/deliveryRegistration/'+profile_imagefilename, (err, photo) => {
                  if (err) throw err;
                   photo.resize(700, 700) ;
                   photo.quality(60) ;// set JPEG quality
                   // photo.greyscale() ;
                   
                 photo.write('./public/deliveryRegistration/'+profile_imagefilename); // save
                 
                 
                 const data = new Login_M({
              
                  name: name,
                  username:username,
                  email:email,
                  date_of_birth:date_of_birth,
                  mobile:mobile,
                  address:address,
                  adhaar_card:adhaar_card,
                  pan_card:pan_card,
                  joining_date: joining_date,
                  pan_image: 'https://tifinco.com:5000/public/deliveryRegistration/'+pan_imagefilename,
                  adhaar_image: 'https://tifinco.com:5000/public/deliveryRegistration/'+adhaar_imagefilename,
                  profile_image: 'https://tifinco.com:5000/public/deliveryRegistration/'+profile_imagefilename,
                  });
            
                
                  data.save().then(res.json({ msg: "success" }))
                  // .catch((err) => { res.json({ msg: "failed" }) });

                }) //profileimagename
                .catch((err) => { res.json({ msg: "failed" }) });
                })  // adhaarimage fille name 
                });
    
    
    
            }
          }
    
          check();

      
        // try 
        // {
        //   const user = await Login_M.create({
        //     username,
        //     email,
        //     password,
        //     name, date_of_birth, mobile,address, adhaar_card,adhaar_image, pan_image, profile_image, pan_card, joining_date 
        //   });
        //   (res.json({ msg: "success" }))
      
        // //   sendToken(user, 200, res);
        // } catch (err) 
        // {
        //   next(err);
        //   { res.json({ msg: "failed" }) }

          
        // }
        
 };


exports.login = async (req, res, next) => 
{
   const { email, password } = req.body;

  // Check if email and password is provided
  if (!email || !password) 
  {
      return next(new ErrorResponse("Please provide an email and password", 400));
  }

  try 
  {
      // Check that user exists by email
      const user = await Login_M.findOne({ email }).select("+password");

      if (!user)
      {
        return next(new ErrorResponse("Invalid email", 401));
      }

      // Check that password match
      const isMatch = await user.matchPassword(password);
      {
      (res.json({ msg: "success" }))
      }

      if (!isMatch)
      {
        return next(new ErrorResponse("Invalid  password", 401));
        
      }

       //     sendToken(user, 200, res);
  } catch (err) 
   {
    next(err);
  }
};
      

// ////////////////////////////////////////////////////////////////////////
// const crypto = require("crypto");
// const ErrorResponse = require("../utils/errorResponse");
// const User = require("../models/User");
// const sendEmail = require("../utils/sendEmail");

// // @desc    Login user
// exports.login = async (req, res, next) => {
//   const { email, password } = req.body;

//   // Check if email and password is provided
//   if (!email || !password) {
//     return next(new ErrorResponse("Please provide an email and password", 400));
//   }

//   try {
//     // Check that user exists by email
//     const user = await User.findOne({ email }).select("+password");

//     if (!user) {
//       return next(new ErrorResponse("Invalid credentials", 401));
//     }

//     // Check that password match
//     const isMatch = await user.matchPassword(password);

//     if (!isMatch) {
//       return next(new ErrorResponse("Invalid credentials", 401));
//     }

//     sendToken(user, 200, res);
//   } catch (err) {
//     next(err);
//   }
// };

// // @desc    Register user
// exports.register = async (req, res, next) => {
//   const { username, email, password } = req.body;

//   try {
//     const user = await User.create({
//       username,
//       email,
//       password,
//     });

//     sendToken(user, 200, res);
//   } catch (err) {
//     next(err);
//   }
// };

// // @desc    Forgot Password Initialization
// exports.forgotPassword = async (req, res, next) => {
//   // Send Email to email provided but first check if user exists
//   const { email } = req.body;

//   try {
//     const user = await User.findOne({ email });

//     if (!user) {
//       return next(new ErrorResponse("No email could not be sent", 404));
//     }

//     // Reset Token Gen and add to database hashed (private) version of token
//     const resetToken = user.getResetPasswordToken();

//     await user.save();

//     // Create reset url to email to provided email
//     const resetUrl = `http://localhost:3000/passwordreset/${resetToken}`;

//     // HTML Message
//     const message = `
//       <h1>You have requested a password reset</h1>
//       <p>Please make a put request to the following link:</p>
//       <a href=${resetUrl} clicktracking=off>${resetUrl}</a>
//     `;

//     try {
//       await sendEmail({
//         to: user.email,
//         subject: "Password Reset Request",
//         text: message,
//       });

//       res.status(200).json({ success: true, data: "Email Sent" });
//     } catch (err) {
//       console.log(err);

//       user.resetPasswordToken = undefined;
//       user.resetPasswordExpire = undefined;

//       await user.save();

//       return next(new ErrorResponse("Email could not be sent", 500));
//     }
//   } catch (err) {
//     next(err);
//   }
// };

// // @desc    Reset User Password
// exports.resetPassword = async (req, res, next) => {
//   // Compare token in URL params to hashed token
//   const resetPasswordToken = crypto
//     .createHash("sha256")
//     .update(req.params.resetToken)
//     .digest("hex");

//   try {
//     const user = await User.findOne({
//       resetPasswordToken,
//       resetPasswordExpire: { $gt: Date.now() },
//     });

//     if (!user) {
//       return next(new ErrorResponse("Invalid Token", 400));
//     }

//     user.password = req.body.password;
//     user.resetPasswordToken = undefined;
//     user.resetPasswordExpire = undefined;

//     await user.save();

//     res.status(201).json({
//       success: true,
//       data: "Password Updated Success",
//       token: user.getSignedJwtToken(),
//     });
//   } catch (err) {
//     next(err);
//   }
// };

// const sendToken = (user, statusCode, res) => {
//   const token = user.getSignedJwtToken();
//   res.status(statusCode).json({ sucess: true, token });
// };
