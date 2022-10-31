var usermodel = require('../../../model/fluttermodel/fluttermodelusers');
var otp_model = require('../../../model/fluttermodel/OtpVerify_m.js');
const nodemailer = require("nodemailer");
const { time } = require('console');
// var cron = require('node-cron');
const axios = require('axios');
var CronJobManager = require('cron-job-manager');

exports.Emailverified = function (req, res) 
{


    async function check(params) {

        let email = { email: req.body.email };

        // var date1 = new Date();

        //     var crrtime = date1.getHours() + ':' + date1.getMinutes() + ':' + date1.getSeconds();
        //     console.log(crrtime);


        const user = await usermodel.findOne(email);


        if (!user) {
            // res.send({ message: "Invalid Email" });



            var val = Math.floor(1000 + Math.random() * 9000);
            console.log(val);
            var OTP = val;
            var transporter = nodemailer.createTransport({
                host: 'smtp.gmail.com',
                port: 465,
                secure: true,
                service: 'Gmail',
                auth: {
                    user: 'kharemani22@gmail.com',
                    pass: 'gpjgibiibxglzrgi'
                }
            });

            var mailOptions = {

                from:email.email,
                to:email.email,


                html: `
                <p>A sign in attempt requires further verification because we did not recognize your device. To complete the sign in, enter the verification code on the unrecognized device.</p>
                <p>Email: ${email.email}</p>
        
                <p>Verification code :${OTP}</p>`
            }

            var status = transporter.sendMail(mailOptions, function (error) {
                console.log(mailOptions);

                if (error) {

                    res.status(500).json({
                        status: 'Failed',
                        message: error
                    })
                }
                else {


                    res.status(200).json({
                        status: 'Success',
                        data: {
                            OTP
                        }
                    })

                }
            });
      

        }

        else {
            res.send({ message: "Email Exists" });
            

        
      }


    }

    check();
    // console.log('The answer to life, the universe, and everything!');
    // });


}




exports.mobileverified = function (req, res) {


    async function check(params) {

        let mobile =  req.body.mobile ;

        // const { mobile } = req.body
        // console.log(mobile)

        const user = await usermodel.findOne({mobile:mobile});
    

        if (!user) {
       

    // var mobile = parseInt(userid);
    // console.log(mobile);
    var otp = Math.floor(1000 + Math.random() * 9000);
     var url = 'https://api.textlocal.in/send/?apikey=NzU0ZTM0NGM1YTUzNzI3MjY1Mzc2OTQxNjU1YTVhNDU=&numbers='+mobile+'&sender=TFINCO&message='+encodeURIComponent("Dear Customer, "+otp+" is the OTP for your Tifinco login. Please do not share it with anyone.-Tifinco");

  // Make a request for a user with a given ID

//   axios.get(url).then(function (response) 
//   {

//   console.log(response.data);
  res.send({msg:"success",otp:otp});

// })

//   .catch(function (error) {

//     res.send({msg:"failure"});
//   // handle error

//   console.log(error);

//   })

        }

        else {
            res.send({ message: "Mobile Exists" });
            // res.send("yes")
           
     }


    }

    check();
    // console.log('The answer to life, the universe, and everything!');
    // });


}



exports.Emailverified_With_Timer = function (req, res) 
{




    var expires = require('expires');
// Returns some timestamp like 1341151672247
var timestamp = expires.after('1 minute');
 
// Then it can be tested for expiration
var a=expires.expired(timestamp); 
console.log(a)






async function check(params) {

            let email = { email: req.body.email };

        const user = await usermodel.findOne(email);


        if (!user) {
            res.send({ message: "Invalid Email" });

        }

                var val = Math.floor(1000 + Math.random() * 9000);
                console.log(val);
                var OTP = val;
                var transporter = nodemailer.createTransport({
                    host: 'smtp.gmail.com',
                    port: 465,
                    secure: true,
                    service: 'Gmail',
                    auth: {
                        user: 'kharemani22@gmail.com',
                        pass: 'gpjgibiibxglzrgi'
                    }
                });
    
                var mailOptions = {
    
                    from:user.email,
                    to:user.email,
    
    
                    html: `
                    <p>A sign in attempt requires further verification because we did not recognize your device. To complete the sign in, enter the verification code on the unrecognized device.</p>
                    <p>Email: ${user.email}</p>
            
                    <p>Verification code :${OTP}</p>
                    <p>This code <b>Expires in 1 hour </b></p>`
                }
    
    
    
                var status = transporter.sendMail(mailOptions, function (error) {
                    console.log(mailOptions);
    
                    if (error) {
    
                        res.status(500).json({
                            status: 'Failed',
                            message: error
                        })
                    }
                    else {
    
    
                        res.status(201).json({
                            status: 'Success',
                            data: {
                                OTP
                            },
                        
                        })
    
                    }
                });
         //  }
    
    
        }
    
        check();




// false
setTimeout(function() {
    console.log(" aapka link expire ho gaya hai ");
  var b=expires.expired(timestamp);
  console.log(b)  





async function check(params) {

    let email = { email: req.body.email };

// =========================================================================================
// var popupS = require('popups');
 

        var val = Math.floor(1000 + Math.random() * 9000);
        console.log(val);
        var OTP = val;
        var transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            service: 'Gmail',
            auth: {
                user: 'kharemani22@gmail.com',
                pass: 'gpjgibiibxglzrgi'
            }
        });

        // popupS.alert({
        //     content: 'Hello World!'
        // });
        var mailOptions = {

            from:email.email,
            to:email.email,


            html: `
            <p>A sign in attempt requires further verification because we did not recognize your device. To complete the sign in, enter the verification code on the unrecognized device.</p>
            <p>Email: ${email.email}</p>
    
            <p>Verification code :${OTP}</p>
            <p>This code <b>Expires in 1 hour </b></p>
          
            `
        }



        var status = transporter.sendMail(mailOptions, function (error) {
            console.log(mailOptions);

            if (error) {

                res.status(500).json({
                    status: 'Failed',
                    message: error
                })
            }
            else {


                res.status(201).json({
                    status: 'Success',
                    data: {
                        OTP
                    },
                
                })

            }
        });
 //  }


}

check();
  // true
}, 60000);


}
