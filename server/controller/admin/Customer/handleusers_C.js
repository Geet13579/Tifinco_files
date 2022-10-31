var handleusermodel = require('../../../model/adminmodel/store_usersmgs_M');
var handleuserinfomodel = require('../../../model/adminmodel/store_userinfo_M');
var newsletter_m =  require('../../../model/adminmodel/store_newsletter_M');
const nodemailer = require("nodemailer");
const soketIo = require('socket.io')
// import { Server } from "socket.io";
var sha1 = require('sha1');
const axios = require('axios');

var Websitesharemobileapp =  require('../../../model/adminmodel/Websitesharemobileapp');
exports.storeusersmgs = function(req,res){


    const {user_name} =req.body;
     const {user_email} =req.body;
     const {subject} =req.body;
     const {comment} =req.body;


    
     async function   check(params) {
      

   
            let add = new handleusermodel({
                user_name:user_name,
                user_email:user_email,
                subject:subject,
                comment:comment
            
        
            });
      
            add.save().then(res.json( { msg: "success" })).catch((err) => { res.json({ msg: "failed" }) });
            console.log("success")
          

            
        }
    check()


  }


//  for payment getway    

// const { PaymentGateway } = require('@cashfreepayments/cashfree-sdk');


// const pg = new PaymentGateway({

//   env: 'TEST',


//   appId: '1846232d4b3e663a55577d0f14326481',

//   secretKey: 'TEST1451ccbd914027999926b907662a624765f20215',

// });



//   exports.storeusersinfo= function(req,res){



//     const {user_name} =req.body;
//      const {user_email} =req.body;
//      const {user_number} =req.body;
//      const {plan_type} =req.body;


    
//      async function   check(params) {
      

//       var useremail = await handleuserinfomodel.findOne({ user_email: user_email});

//       var usernumber = await handleuserinfomodel.findOne({ user_number: user_number});

//       if(useremail ){


//         res.send({msg:"email_exist"});
//         console.log("exist");


//       }
//       else if(usernumber){

//         res.send({msg:"mobile_exist"});
//         console.log("mobile_exist");
//       }
//       else{



// // store data in database


//         let add = new handleuserinfomodel({
//           user_name:user_name,
//           user_email:user_email,
//           user_number:user_number,
//           plan_type:plan_type
      
  
//       });
      


//       add.save().then(res.json( { msg: "success" })).catch((err) => { res.json({ msg: "failed" }) });
//       console.log("success")
// //  close 

//     }  
            
//         }
//     check()

//   }








  exports.showusersmgs=function(req,res){

    

      async function   getData(params) {
      var  pData = await handleusermodel.find( );

        if(pData)
        {
          res.send(pData);
        }
        else
        {
          res.send({msg:"notfound"});

        }}
    getData();
    
  }

  exports.showuserinfo=function(req,res){

    

    async function   getData(params) {
    var  pData = await handleuserinfomodel.find( );

      if(pData)
      {
        res.send(pData);
      }
      else
      {
        res.send({msg:"notfound"});

      }}
  getData();
  
}


exports.searchusers = function(req,res)
{
  const {_id} = req.body;
  console.log(_id);

  async function   getData(params) {
    var  pData = await handleuserinfomodel.find({$and:[ {$or :[{ user_name :{ $regex : '.*'+ _id + '.*' }},{user_email:{$regex:'.*'+_id+'.*'},} ,{user_number:{ $regex : '.*'+ _id + '.*' }},{plan_type:{ $regex : '.*'+ _id + '.*' }} ]}]});

    if(pData)
    {
      res.send(pData);
    }
    else
    {
      res.send({msg:"notfound"});

    }}
  getData();

}

exports.sendemailtouser = function(req, res)
{
  // res.send("ok")

    async function  check(params) 
    {

      let user_email ={ user_email: req.body.user_email };
      let bcc = req.body.bcc ;
      let cc =req.body.cc ;
      let user_name =req.body.user_name ;
      let mgs = req.body.mgs ;
      let subject = req.body.subject ;
      let from = `Tifinco <tifincoacct@gmail.com>`

      const user = await handleuserinfomodel.findOne(user_email);


      if (!user)
      {
       res.send({ message: "Invalid Email" });

      }

      else
      {
        // res.send("yes")
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
            
          from: from,
          to: user.user_email,
          subject: subject,
          text: 'TIFINCO',
          html: `
                    <p>Email: ${user.user_email}</p>
                    <p>BCC: ${bcc}</p>
                    <p>CC: ${cc}</p>
                    <p>Name: ${user_name}</p>
                    <p>Message:${mgs}</p>`   } 

         var status = transporter.sendMail(mailOptions, function(error)
         {

          if (error) 
          {
            console.log(error);       
          } 
          else 
          {
            res.send("success"); 
            console.log("email send")
            //  res.send({token:user.token} );        
          }
          });
       }
  
  
    }

  check();
}


exports.sendemailtoMulUser =function(req,res)
{

  async function   check(params) 
  {

   const {_id} = req.body;
   const ids =  _id ;
  //  console.log(ids)
   let bcc = req.body.bcc ;
   let cc =req.body.cc ;
   let mgs = req.body.mgs ;
   let subject = req.body.subject ;
   let from = `Tifinco <tifincoacct@gmail.com>`
 
   const user = await handleuserinfomodel.find({ '_id' : ids  });
    // res.send(user)

    for(var i=0;i<user.length;i++)
    {
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
              
             from: from,
             to: user[i].user_email,
             subject: subject,
             text: 'TIFINCO',
             html: `
            
             <p>BCC: ${bcc}</p>
             <p>CC: ${cc}</p>
         
             <p>Message:${mgs}</p>`
                    
            }
            
           var status = transporter.sendMail(mailOptions, function(error)
           {
            
              if (error) 
              {
                 console.log(error);       
              } 
              else 
              {
                 res.send("success"); 
                 console.log("email send")
                
                //  res.send({token:user.token} );
                     
             }
            });
    }

 }

  check();

}


exports.deleteSignleUserComment=function(req,res){
  // res.send("ok")
  const {_id} = req.body;
  // console.log(_id);

  async function deletedata(params){

    var dataId = await  handleusermodel.find({_id : _id});

    if(dataId){

      handleusermodel.deleteOne({_id: _id}).then(
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


    }
    else{

      // res.send("no");
    }
    
  }

  deletedata();

}



exports.sendemailForuserComment = function(req, res)
{
  // res.send("ok")

    async function  check(params) 
    {

      let user_email ={ user_email: req.body.user_email };
      let bcc = req.body.bcc ;
      let cc =req.body.cc ;
      let user_name =req.body.user_name ;
      let mgs = req.body.mgs ;
      let subject = req.body.subject ;
      let from = `Tifinco <tifincoacct@gmail.com>`

      const user = await handleusermodel.findOne(user_email);


      if (!user)
      {
       res.send({ message: "Invalid Email" });

      }

      else
      {
        // res.send("yes")
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
            
          from: from,
          to: user.user_email,
          subject: subject,
          text: 'TIFINCO',
          html: `
                    <p>Email: ${user.user_email}</p>
                    <p>BCC: ${bcc}</p>
                    <p>CC: ${cc}</p>
                    <p>Name: ${user_name}</p>
                    <p>Message:${mgs}</p>`   } 

         var status = transporter.sendMail(mailOptions, function(error)
         {

          if (error) 
          {
            console.log(error);       
          } 
          else 
          {
            res.send("success"); 
            console.log("email send")
            //  res.send({token:user.token} );        
          }
          });
       }
  
  
    }

  check();
}

exports.deletemulusercomment = function(req,res){
  const {_id} = req.body;
  const ids =  _id ;
  console.log(ids)



  async function deletedata(params){

    var dataId = await await handleusermodel.find({ '_id' : ids  });

    // res.send(dataId);

    if(dataId){

      handleusermodel.deleteMany({_id: ids}).then(
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

    }
    else{

      res.send("no");
    }

  }
  deletedata();
}



exports.deletesubscribeuser = function(req,res){
  
  
  const {_id} = req.body;
  async function deletedata(params){

    var dataId = await await handleusermodel.find({ '_id' : _id  });

    // res.send(dataId);

    if(dataId){

      handleusermodel.deleteOne({_id: _id}).then(
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

    }
    else{

      res.send("no");
    }

  }
  deletedata();
}



exports.storenewsletters=function(req,res){

  // res.send("ok")
  const {user_email} = req.body;
  

  // async function   check(params) {
      

    // var useremail = await newsletter_m.findOne({ user_email: user_email});



    // if(useremail){
    //   res.send({msg:"exist"});
    //   console.log("exist")
    // }
    // else{
    //   let add = new newsletter_m({
       
    //     user_email:user_email,
    //     user_token:sha1(user_email),
      

    // });
    


    // add.save()
   
  

    // }
         
          
      // }

      //  ==============================================================================================================
      async function  sendemail(params) 
      {
    





       let user_email= req.body.user_email ;

       var useremail = await newsletter_m.findOne({ user_email: user_email});

       if(useremail ){

        // 

        if(useremail.subcribe=='yes'){
          res.send({msg:"exist"});
        }
        else{
          let from = `Tifinco <tifincoacct@gmail.com>`

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
            
          from: from,
          to: user_email,
          subject: "Tifinco welcomes you",
          text: 'TIFINCO',
          html: `
          <!DOCTYPE html>
          <html lang="en">
          <head>
          <title>CSS Template</title>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <style>
          .emailheader{
            width: 50%;
            margin-left: auto;
            margin-right: auto;
            height: auto;
        }
        .subemailheader{
        
            background-image: linear-gradient(to right top, rgb(164, 10, 51), rgb(154, 11, 51), rgb(145, 13, 51), rgb(135, 15, 51), rgb(125, 16, 50));
            width: 100%;
            height: 200px;
            text-align:center;
            
          
          
        }
        .divheader1{
            
            width:100%;
            margin-left: auto;
            margin-right: auto;
        }
        .divheader2{
            width: 100%;
            height: 40%;
        }
        .imagelogo{
          
            background-size: contain;
            width: 170px;
            height: 45px;
            background-repeat: no-repeat;
            padding-bottom: 30px;
        }
        .textheader{
            text-align: center;
            color: white;
            font: 900 40px Poppins;
        }
        .main_container{
            background-color: white;
            width: 100%;
            height: auto;
            display: flex;
        }
        .main_div{
            background-color: white;
            width: 90%;
            margin: 20px auto;
        }
        .main_text{
            font: 500 15px Poppins;
        }
        .footer_container{
          background-color: rgb(206,212,224);
          width: auto;
          height: auto;
          display: flex;
          padding-top: 20px;
          padding-bottom: 20px;
        }
        .litext{
          font: 500 13px Poppins;
          line-height: 2.4;
        }

        @media(max-width: 1065px) {
          .emailheader{
            width: 100%;
            margin-left: auto;
            margin-right: auto;
            height: auto;
        }
        .main_text{
          font: 500 12px Poppins;
      }

      .litext{
        font: 500 10px Poppins;
        line-height: 2.4;
      }





        }

          </style>
          </head>
          <body>
          <div class='emailheader' >
          <div class='subemailheader' > 
       
         
            
            <div  style='backgroud-color:blue,width:"100%'>
  

            <img style="width:100px;padding-top:35px;" src='https://tifinco.com:5000/public/emails_image/logo.png' ></img>
            
         
            
            </div>
            <div class='divheader2' >
  
              <h1 class='textheader' >THANK YOU !</h1>
            </div>
          </div>
  
          <div class='main_container'>
  
            <div class='main_div'  >
  
              <h1 class='main_text' >Hey there,</h1>
              <h1 class='main_text' > Thankyou for subscribing to tifinco newsletter. We are glad that you’re interested in us. We are working hard to launch the app as soon as possible.</h1>
              <h1 class='main_text' >As a newsletter subscriber you’ll receive all the update re- garding our app launch, subscription, offers and discounts.</h1>
              <h1 class='main_text' >We promise to not to spam your inbox with un-necessary mails.</h1>
              <h1  class='main_text' >Thankyou, <p >Team Tifinco</p></h1>
             
  
  
            </div>
  
          </div>
  
  
          <div class='footer_container' >
          
          <ul style="    width: 100%;
          text-align: center;
          align-items: center;
          list-style: none;
          line-height: 3.5;
          margin: 0px;
          padding: 0px;">


          <li style="padding-top:10px;"> <a href="https://www.instagram.com/invites/contact/?i=h3aexg1zjzux&utm_content=p2jfrx0" target="_blank" rel="noopener noreferrer"><img style="width:34px;text-align:center" src='https://tifinco.com:5000/public/emails_image/facebook.png' ></img></a>
          <a href="https://www.instagram.com/invites/contact/?i=h3aexg1zjzux&utm_content=p2jfrx0" target="_blank" rel="noopener noreferrer"> <img style="width:34px;text-align:center" src='https://tifinco.com:5000/public/emails_image/insta.png' ></img></a>
          </li>
          <li class="litext">+91 81036 09515   <span> +91 9174847010 </span></li>
          <li class="litext"> support@tifinco.com</li>
          <li class="litext">www.tifinco.com</li>
          <li class="litext">You are receiving this email because you have subscribed to our newsletter</li>
          <li class="litext"> <a href="https://tifinco.com/UnsubscribePage/${sha1(user_email)}">Unsubscribe from all future emails</a><li>
          </ul>
          </div>
          
          </body>
          </html>
          
                    `   }
                    
  
         var status = transporter.sendMail(mailOptions, function(error)
         {
  
          if (error) 
          {
            console.log(error);       
          } 
          else 
          {
          //   res.send({msg:"success"}); 
          //   console.log("email send")
          //   let add = new newsletter_m({
       
          //     user_email:user_email,
          //     user_token:sha1(user_email),
          //     subcribe:"yes"
            
      
          // });
          
      
      
          // add.save()




          newsletter_m.findOne({token: useremail.token}, function (err, user) {
            user.subcribe = "yes"
        
            user.save(function (err) {
                if(err) {
                  res.send({mgs:"err"})
  
                }
                else{
                  res.status(200).json({
                    msg: 'success'
                  });
                }
            });
        });
          }
          });





        }



     

      }
      else {

           let from = `Tifinco <tifincoacct@gmail.com>`

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
              
            from: from,
            to: user_email,
            subject: "Tifinco welcomes you",
            text: 'TIFINCO',
            html: `
            <!DOCTYPE html>
            <html lang="en">
            <head>
            <title>CSS Template</title>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <style>
            .emailheader{
              width: 50%;
              margin-left: auto;
              margin-right: auto;
              height: auto;
          }
          .subemailheader{
          
              background-image: linear-gradient(to right top, rgb(164, 10, 51), rgb(154, 11, 51), rgb(145, 13, 51), rgb(135, 15, 51), rgb(125, 16, 50));
              width: 100%;
              height: 200px;
              text-align:center;
              
            
            
          }
          .divheader1{
              
              width:100%;
              margin-left: auto;
              margin-right: auto;
          }
          .divheader2{
              width: 100%;
              height: 40%;
          }
          .imagelogo{
            
              background-size: contain;
              width: 170px;
              height: 45px;
              background-repeat: no-repeat;
              padding-bottom: 30px;
          }
          .textheader{
              text-align: center;
              color: white;
              font: 900 40px Poppins;
          }
          .main_container{
              background-color: white;
              width: 100%;
              height: auto;
              display: flex;
          }
          .main_div{
              background-color: white;
              width: 90%;
              margin: 20px auto;
          }
          .main_text{
              font: 500 15px Poppins;
          }
          .footer_container{
            background-color: rgb(206,212,224);
            width: auto;
            height: auto;
            display: flex;
            padding-top: 20px;
            padding-bottom: 20px;
          }
          .litext{
            font: 500 13px Poppins;
            line-height: 2.4;
          }

          @media(max-width: 1065px) {
            .emailheader{
              width: 100%;
              margin-left: auto;
              margin-right: auto;
              height: auto;
          }
          .main_text{
            font: 500 12px Poppins;
        }

        .litext{
          font: 500 10px Poppins;
          line-height: 2.4;
        }





          }
  
            </style>
            </head>
            <body>
            <div class='emailheader' >
            <div class='subemailheader' > 
         
           
              
              <div  style='backgroud-color:blue,width:"100%'>
    
  
              <img style="width:100px;padding-top:35px;" src='https://tifinco.com:5000/public/emails_image/logo.png' ></img>
              
           
              
              </div>
              <div class='divheader2' >
    
                <h1 class='textheader' >THANK YOU !</h1>
              </div>
            </div>
    
            <div class='main_container'>
    
              <div class='main_div'  >
    
                <h1 class='main_text' >Hey there,</h1>
                <h1 class='main_text' > Thankyou for subscribing to tifinco newsletter. We are glad that you’re interested in us. We are working hard to launch the app as soon as possible.</h1>
                <h1 class='main_text' >As a newsletter subscriber you’ll receive all the update re- garding our app launch, subscription, offers and discounts.</h1>
                <h1 class='main_text' >We promise to not to spam your inbox with un-necessary mails.</h1>
                <h1  class='main_text' >Thankyou, <p >Team Tifinco</p></h1>
               
    
    
              </div>
    
            </div>
    
    
            <div class='footer_container' >
            
            <ul style="    width: 100%;
            text-align: center;
            align-items: center;
            list-style: none;
            line-height: 3.5;
            margin: 0px;
            padding: 0px;">
  
  
            <li style="padding-top:10px;"> <a href="https://www.instagram.com/invites/contact/?i=h3aexg1zjzux&utm_content=p2jfrx0" target="_blank" rel="noopener noreferrer"><img style="width:34px;text-align:center" src='https://tifinco.com:5000/public/emails_image/facebook.png' ></img></a>
            <a href="https://www.instagram.com/invites/contact/?i=h3aexg1zjzux&utm_content=p2jfrx0" target="_blank" rel="noopener noreferrer"> <img style="width:34px;text-align:center" src='https://tifinco.com:5000/public/emails_image/insta.png' ></img></a>
            </li>
            <li class="litext">+91 81036 09515   <span> +91 9174847010 </span></li>
            <li class="litext"> support@tifinco.com</li>
            <li class="litext">www.tifinco.com</li>
            <li class="litext">You are receiving this email because you have subscribed to our newsletter</li>
            <li class="litext"> <a href="https://tifinco.com/UnsubscribePage/${sha1(user_email)}">Unsubscribe from all future emails</a><li>
            </ul>
            </div>
            
            </body>
            </html>
            
                      `   }
                      
    
           var status = transporter.sendMail(mailOptions, function(error)
           {
    
            if (error) 
            {
              console.log(error);       
            } 
            else 
            {
              res.send({msg:"success"}); 
              console.log("email send")
              let add = new newsletter_m({
         
                user_email:user_email,
                user_token:sha1(user_email),
                subcribe:"yes"
              
        
            });
            
        
        
            add.save()
            }
            });

       
     
    
  
      }
     
        
      }
      // ================================================================================================================
  // check()
  sendemail();

}

//  for news letter 
exports.shownewsletterlist=function(req,res){

    

  async function   getData(params) {
  var  pData = await newsletter_m.find( );

    if(pData)
    {
      res.send(pData);
    }
    else
    {
      res.send({msg:"notfound"});

    }}
getData();

}

exports.searchnewsletter = function(req,res){
  const {_id} = req.body;
  // console.log(_id);

  async function   getData(params) {
    var  pData = await newsletter_m.find({$and:[ {$or :[{user_email:{$regex:'.*'+_id+'.*'},}  ]}]});

    if(pData)
    {
      res.send(pData);
    }
    else
    {
      res.send({msg:"notfound"});

    }}
  getData();
}

exports.sendsingleusernewsletter = function(req,res)
{


  const {user_email} = req.body;

  async function  sendemail(params) 
  {

    let user_email ={ user_email: req.body.user_email };
    let bcc = req.body.bcc ;
    let cc =req.body.cc ;
   
    let mgs = req.body.mgs ;
    let subject = req.body.subject ;
    let from = `Tifinco <tifincoacct@gmail.com>`


    const user = await newsletter_m.findOne(user_email);


    if (!user)
    {
     res.send({ message: "Invalid Email" });

    }

    else
    {
     
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
          
        from: from,
        to: user.user_email,
        subject: subject,
        text: 'Your text is here',
        html: `
                  <p>Email: ${user.user_email}</p>
                  <p>BCC: ${bcc}</p>
                  <p>CC: ${cc}</p>
                  <p>Message:${mgs}</p>
                  <p>
                  <a href="
                  ${BASE_URL = "https://tifinco.com/UnsubscribePage/"+user.user_token}">Unsubscribe</a>
                    </p>`   }
                  

       var status = transporter.sendMail(mailOptions, function(error)
       {

        if (error) 
        {
          console.log(error);       
        } 
        else 
        {
          res.send({mgs:"success"}); 
          console.log("email send")
            
        }
        });
     }


  }

sendemail();

}


exports.unsubscribeuser=function(req,res){

  const {token} = req.body;

 

  async function   updatedata(params) {
      

    var useremail = await newsletter_m.findOne({ user_token: token});


    if(useremail.subcribe=="no"){
      res.send({mgs:"unsubscribe"})

    }else{

      newsletter_m.findOne({token: token}, function (err, user) {
        user.subcribe = "no"
    
        user.save(function (err) {
            if(err) {
              res.send({mgs:"err"})
            }
            else{
              res.status(200).json({
                msg: 'success'
              });
            }
        });
    });
    }

    // if(useremail){
    //   newsletter_m.updateby({token: token}).then(
    //     () => {
          // res.status(200).json({
          //   msg: 'success'
          // });
    //     }
    //   ).catch(
    //     (error) => {
    //       res.status(200).json({
    //         msg: 'failure'
    //       });
    //     }
    //   );
    // }
    // else{
     
    // res.send({mgs:"empty"})
   
    // }

    
   
         
          
      }
  updatedata()
  

}

exports.autoGeneratenewsletters = function(req,res)
{
  const {user_email} = req.body;
  // console.log(req.body.user_email);

  async function  sendemail(params) 
  {

 let user_email= req.body.user_email ;
    // let bcc = req.body.bcc ;
    // let cc =req.body.cc ;
   
    let mgs = "Hey there,First off, We would like to extend a warm welcome and THANK YOU.. for subscribing to the Tifinco newsletter. We recognize that your time is valuable and we are seriously flattered that you chose to join us.We will be launching our service soon stay tuned..If you need anything, please feel free to reach us at out handels at instagram @tifincofoods..Thank you So much again..Cheers!."

    
     let subject = req.body.subject ;
     let from = `Tifinco <tifincoacct@gmail.com>`

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
          
        from: from,
        to: user_email,
        subject: "Tifinco Welcomes",
        text: 'Your text is here',
        html: `
                  <p>Email: ${user_email}</p>
                
                  <p>Message:${mgs}</p>
                  `   }
                  

       var status = transporter.sendMail(mailOptions, function(error)
       {

        if (error) 
        {
          console.log(error);       
        } 
        else 
        {
          res.send({mgs:"success"}); 
          console.log("email send")
            
        }
        });
    


  }
  // res.send("aaauto Generated msg");
  sendemail();
}



exports.sendemailapplink = function(req, res)
{
  // res.send("ok")

    async function  check(params) 
    {

     let user_email=req.body.user_email ;
     let applink=req.body.applink ;
     let from = `Tifinco <tifincoacct@gmail.com>`
  
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
            
          from: from,
          to: user_email,
          subject:"Tifinco welcomes you",
         
          html: `Download tifinco ${applink}
        
                    `   } 

         var status = transporter.sendMail(mailOptions, function(error)
         {

          if (error) 
          {
            console.log(error);       
          } 
          else 
          {
            res.json( { msg: "success" })
            console.log("email send")
            //  res.send({token:user.token} );        
          }
          });
       }
  
  
    

  check();
}


////////////////////////////////////// sms for mobile

// exports.mobilesms=function(req,res)
// {
  exports.mobilesms =  async function(req,res){

    const {mobile}=req.body;
  
       
      let add = new Websitesharemobileapp({
        
          mobile:mobile,
      
      
  
      });

      add.save()
      var userinfo = await Websitesharemobileapp.find({ mobile: mobile });
      console.log(userinfo);

   
      var mobilesms= userinfo[0].mobile;
   console.log(mobilesms);

      var a="https://bit.ly/3Pr9XDq"


  var url = 'https://api.textlocal.in/send/?apikey=NzU0ZTM0NGM1YTUzNzI3MjY1Mzc2OTQxNjU1YTVhNDU=&numbers='+mobilesms+'&sender=TFINCO&message='+
  encodeURIComponent('Thanks for your interest in our app. Here is the download link '+a+' \nThank You! - Tifinco');
    axios.get(url).then(function (resMsg) {
    

      // console.log(resMsg);
      console.log(resMsg.data);
   

      if(resMsg.data['status']=='success'){
       res.send({ msg: 'success'});
     }
    
    })
      console.log("success")




   



   
  
}


////////////////////



//}

exports.mobilesms1 = async function (req, res) {

  const {
    userid, meal_time, plantype, mealpreference, nonveg_pre_d, tiffintype, starting_date, plan_days, repeat_on, unlike_foods, useraddress, extra_item, plan_status, plan_price, payment_id,
    order_id,
    tiffin_price, txn_id, cf_order_id, payment_method } = req.body;


  async function getuserid() {
    console.log(userid)
    var userinfo = await usermodel.find({ token: userid });
    //  res.send(userinfo);

    console.log(userinfo);
    var name = userinfo[0].name;
    console.log(name);
    var mobile = userinfo[0].mobile;

    var data = new userplanmodel({
      mobile:req.body.mobile
    });





var url = 'https://api.textlocal.in/send/?apikey=NzU0ZTM0NGM1YTUzNzI3MjY1Mzc2OTQxNjU1YTVhNDU=&numbers='+mobile+'&sender=TFINCO&message='+
encodeURIComponent('Dear '+name+', Thank you for subscribing to Tifinco. Your Plan is '+data.plantype+', Starting from date today.\nEnjoy the best class tiffin service. - Tifinco');
  // var url = 'https://api.textlocal.in/send/?apikey=NzU0ZTM0NGM1YTUzNzI3MjY1Mzc2OTQxNjU1YTVhNDU=&numbers='+'6267392982'+'&sender=TFINCO&message='+
  // encodeURIComponent('Dear {#var#}, Thank you for subscribing to Tifinco. Your Plan is {#var#}, Starting from date {#var#}.Enjoy the best class tiffin service. - Tifinco');
// console.log(data.userid)
// console.log(data.item)

// res.send(data.item[0].name.substring(0,15)+'...'+ "& others")

// await data.save()
    axios.get(url).then(function (resMsg) {
    

      // console.log(resMsg);
      console.log(resMsg.data);
   

      if(resMsg.data['status']=='success'){
        res.status(200).send({ msg: 'success'});
     }
    
    })
 }
  getuserid();




}

exports.livechatapp = function(req, res)
{
 res.send("kjkgjk")
}