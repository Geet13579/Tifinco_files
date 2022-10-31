const jwt = require('jsonwebtoken');
const bcrypt = require("bcryptjs");
var usermodel = require('../../../model/fluttermodel/fluttermodelusers');
const sha1 = require('sha1');
var session = require('express-session');
const axios = require('axios');
const TokenGenerator = require('uuid-token-generator');
let referralCodeGenerator = require('referral-code-generator')

//generate otp
exports.verifyOtp = function(req, res){
    //res.send({msg:"success",otp:"1234"});

    const { userid } = req.body;

    // var mobile = parseInt(userid);
    console.log(userid);
    var otp = Math.floor(1000 + Math.random() * 9000);
     var url = 'https://api.textlocal.in/send/?apikey=NzU0ZTM0NGM1YTUzNzI3MjY1Mzc2OTQxNjU1YTVhNDU=&numbers='+userid+'&sender=TFINCO&message='+encodeURIComponent("Dear Customer, "+otp+" is the OTP for your Tifinco login. Please do not share it with anyone.-Tifinco");

  // Make a request for a user with a given ID

  axios.get(url).then(function (response) {

//   console.log(response.data);
  res.send({msg:"success",otp:otp});

})

  .catch(function (error) {

    res.send({msg:"failure"});
  // handle error

  console.log(error);

  })

// res.send({msg:"success",otp:otp});

};

//auth
exports.signin = function(req, res) {
    console.log(req.body);
    const { logintype } = req.body;
    console.log(logintype);

    //for mobile auth
    if (logintype == 'mobile') {

        const { name, userid, mobile } = req.body;
        
        // Check for existing user
        usermodel.findOne({ email: userid }).then((user) => {
            console.log(user)
            //login Check 
            
            // console.log(user.token)

            const tokgen2 = new TokenGenerator(256, TokenGenerator.BASE62);
            var token=tokgen2.generate();
            console.log(token)
            if (user) {
                // session.userid = sha1(userid);
                // req.session.userid = sha1(userid);
                // console.log(session.userid);
                //return res.json({ msg: "userexist" });
                return res.status(200).send({ msg: 'success', userid : user.token ,name:user.name,referral:user.referral, email:user.email ,mobile:mobile});

            }

 
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
            var result = ""
            var charactersLength = characters.length;
            
            for ( var i = 0; i < 7 ; i++ ) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
            
            console.log(result)
            //New User created
            const newmbUser = new usermodel({

                mobile:mobile,
                email: userid,
                name:name,
                // token: sha1(userid),
                token:token,
                device_token:req.body.device_token,
                referral:result,
                wallet:0
            });

            newmbUser.save().then(res.status(200).send({ msg: 'success', userid : token ,name:name,referral:result, email:userid ,mobile:mobile})).catch((err) => { res.send({ msg: "failed" }) });


        });


    } else if (logintype == 'email') {

        //for email auth
        
        const { name, userid, mobile } = req.body;
        console.log(userid);
        console.log(mobile);

        // Check for existing user
        usermodel.findOne({ email: userid }).then((user) => {
            const tokgen2 = new TokenGenerator(256, TokenGenerator.BASE62);
            var token=tokgen2.generate();
            console.log(token)
            console.log("user is "+user)
            //login Check 
            if (user) {

                return res.status(200).send({ msg: "success", userid : user.token,name:user.name,referral:user.referral, email:user.email ,mobile:mobile});

            }

            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
var result = ""
var charactersLength = characters.length;

for ( var i = 0; i < 7 ; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
}

console.log(result)
        //  var referral=  referralCodeGenerator.custom('lowercase', 3, 4, 'temitope');
   
//  console.log(referral)
            //New User created
            const newUser = new usermodel({
                name: name,
                email: userid,
                // profileimage: profileimage,
                // token: sha1(userid),
                mobile:mobile,
                token:token,
                device_token:req.body.device_token,
                referral:result,
                wallet:0
            });

            newUser.save().then(res.status(200).send({ msg: "success" , userid : token,name:name,referral:result, email:userid, mobile:mobile })).catch((err) => { res.send({ msg: "failed" }) });


        });


    } else if (logintype == 'fb') {


        //for facebook auth
        const { name, userid, profileimage,referral } = req.body;
        // Check for existing user
        usermodel.findOne({ facebookid: userid }).then((user) => {
            const tokgen2 = new TokenGenerator(256, TokenGenerator.BASE62);
            var token=tokgen2.generate();
            console.log(token)
            //login Check 
            if (user) {
                
                return res.status(200).send({ msg: 'success', userid : user.token ,user});

            }

            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
            var result = ""
            var charactersLength = characters.length;
            
            for ( var i = 0; i < 7 ; i++ ) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
            
            console.log(result)
            //New User created
            const newfbUser = new usermodel({
                name: name,
                facebookid: userid,
                profileimage: profileimage,
                // token: sha1(userid),
                token:token,
                device_token:req.body.device_token,
                referral:result,
                wallet:0
            });

            newfbUser.save().then(res.status(200).send({ msg: "success" , userid:token,user })).catch((err) => { res.send({ msg: "failed" }) });


        });


    }


};



exports.verifyUSer = async function(req, res)
{
//  var mobile_no = req.body.mobile;
//  var email_id = req.body.email;
    if ( req.body.mobile )
    {
        var userData = await usermodel.findOne({mobile:req.body.mobile });

        if(userData)
        {
            res.send({msg:"Mobile Exist", userData});
        }
        else
        {
            res.send({msg:"Mobile not Exist"});
        }
    }
    else
    {
        var userData = await usermodel.findOne({email:req.body.email });

        if(userData)
        {
            res.send({msg:"Email Exist" ,userData});
        }
        else
        {
            res.send({msg:"Email not Exist"});
        }
    }
    
     
}
