var usermodel = require('../../../model/fluttermodel/fluttermodelusers');
var userplanmodel = require('../../../model/fluttermodel/userplanmodel');
const nodemailer = require("nodemailer");
var bodyParser = require('body-parser');
exports.getuserdata  = function(req,res)
{

    usermodel.find((err,data)=>
    {
        if(err)
        {
            res.send({msg:"error"});
        }
        else
        {
            res.send(data);

        }

    });
}



exports.filtercustomer =  function(req,res)
{

    const {limit_val} = req.body;
    console.log(limit_val);
    if (limit_val === 'all')
    {
        usermodel.find((error, data) => 
        {
        if (error)
        {
          res.json(error)
        } 
        else
        {
          res.json(data)
        }
      }).sort({_id:-1})
    }
    else
    {
        usermodel.find((error, data) => {
        if (error) 
        {
          res.json(error)
        } 
        else 
        {
          res.json(data)
        }
      }).limit(10).skip(limit_val).sort({_id:-1});
      // res.send("limit");
    }
  //   async function   getData(params) {
  //     var  pData = await foodproduct_m.find({ p_image : { $gt :  limit_val, $lt : 20}});

  //     if(pData){
  //       res.send(pData);
  //     }else{
  //       res.send({msg:"notfound"});

  //     }}
  //  getData();

  //   }

}
  exports.searchcustomer = function(req,res)
  {
    const {_id} = req.body;
    console.log(_id);

    async function   getData(params) {
      var  pData = await usermodel.find({$and:[ {$or :[{ name :{ $regex : '.*'+ _id + '.*' }},{email:{$regex:'.*'+_id+'.*'},} ,{mobile:{ $regex : '.*'+ _id + '.*' }} ]}]});

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



exports.testmessage = function(req,res)
{
 async function   getData(params)
 {
// res.send(cust_name);

  //   var FCM = require('fcm-node');
  //   var serverKey = 'AAAAcEgIXWs:APA91bGjJIElflwPHyjMp2xlXSfcFsIMdgFYOhksD1OHmVhVCMJ1ED0ds8LLaN7oOB0A-xJYUt-UzoCL6ZqG3aeRGu2hSOM4pYkxuB0aZUyFACGDniI58fo0Um3CxwBN0X3XhSyxRNiI';
  //   var fcm = new FCM(serverKey);

  //   var message = {
	// to:"csYpBNFeSQCmcSjJfoSj4E:APA91bGmtKxRnErG0CP4hZY0K5hE6AADziuyVWXmj7heWLRDasyhQJaEc1Uc33Yq18vS-244msVhFGXVv94_rP8ltBDDMyaQRyQhLVrYa86rWiaEv4ENQOudRjch9llPsQBZI0jStgZS",
  //       notification: {
  //           title: 'NotifcatioTestAPP',
  //           body: '{"Message from node js app"}',
  //       },

  //       data: { //you can send only notification or only data(or include both)
  //           title: 'ok cdfsdsdfsd',
  //           body: '{"name" : "okg ooggle ogrlrl","product_id" : "123","final_price" : "0.00035"}'
  //       }

  //   };

  //   fcm.send(message, function(err, response) {
  //       if (err) {
  //           console.log("Something has gone wrong!"+err);
	// 		console.log("Respponse:! "+response);
  //           res.send("error"+err);
  //       } else {
  //           // showToast("Successfully sent with response");
  //           console.log("Successfully sent with response: ", response);
  //           res.send("ok");
  //       }

  //   });


  const {mgs,device_token}= req.body;
  // 
  var  pData = await usermodel.findOne({device_token:device_token});

  if(pData)
  {
    // res.send(pData);
    var FCM = require('fcm-node');
    var serverKey = 'AAAAcEgIXWs:APA91bGjJIElflwPHyjMp2xlXSfcFsIMdgFYOhksD1OHmVhVCMJ1ED0ds8LLaN7oOB0A-xJYUt-UzoCL6ZqG3aeRGu2hSOM4pYkxuB0aZUyFACGDniI58fo0Um3CxwBN0X3XhSyxRNiI';
    var fcm = new FCM(serverKey);

        const arr = mgs.split(" ");

        for (var i = 0; i < arr.length; i++)
       {
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

        }

        const capitalmgs = arr.join(" ");
        // res.send(capitalmgs);

        const name = pData.name.split(" ");

        for (var i = 0; i < name.length; i++) 
        {
            name[i] = name[i].charAt(0).toUpperCase() + name[i].slice(1);

        }

        const uppercasename = name.join(" ");
        // res.send(uppercasename);

  
    var message = {
         to:device_token,
         notification: {
            title: `Dear ${uppercasename},`,
            body: ` ${capitalmgs}`,
        }, 
    };
  
    fcm.send(message, function(err, response) 
    {
        if (err) 
        {
            console.log("Something has gone wrong!"+err);
            console.log("Respponse:! "+response);
            res.send("error"+err);
        } 
        else 
        {
            // showToast("Successfully sent with response");
            console.log("Successfully sent with response: ", response);
            res.send("ok");
        }
  
    });
  }
  else
  {
    res.send({msg:"notfound"});

  }
 

}
getData();


    // var FCM = require('fcm-node');
    // var serverKey = 'AAAAcEgIXWs:APA91bGjJIElflwPHyjMp2xlXSfcFsIMdgFYOhksD1OHmVhVCMJ1ED0ds8LLaN7oOB0A-xJYUt-UzoCL6ZqG3aeRGu2hSOM4pYkxuB0aZUyFACGDniI58fo0Um3CxwBN0X3XhSyxRNiI'; //put your server key here
    // var fcm = new FCM(serverKey);

    // var message = { //this may vary according to the message type (single recipient, multicast, topic, et cetera)
    //      to: "csYpBNFeSQCmcSjJfoSj4E:APA91bGmtKxRnErG0CP4hZY0K5hE6AADziuyVWXmj7heWLRDasyhQJaEc1Uc33Yq18vS-244msVhFGXVv94_rP8ltBDDMyaQRyQhLVrYa86rWiaEv4ENQOudRjch9llPsQBZI0jStgZS",
    //     //collapse_key: 'your_collapse_key',

    //     notification: {
    //         title: 'Title of your push notification',
    //         body: 'Body of your push notification'
    //     },

    //     // data: {  //you can send only notification or only data(or include both)
    //     //     my_key: 'my value',
    //     //     my_another_key: 'my another value'
    //     // }
    // };

    // fcm.send(message, function(err, response){
    //     if (err) {
    //         console.log(err);
    //     } else {
    //         console.log("Successfully sent with response: ", response);
    //     }
    // });

    //res.send("ok");
  }


   // for all send notification  

    
  exports.foralltestmessage = function(req,res){



    async function   getData(params) {

      const {device_token} = req.body;
        const ids =  device_token ;
        console.log(ids)
      // const {mgs,device_token}= req.body;
      // // 
      var FCM = require('fcm-node');
        var serverKey = 'AAAAcEgIXWs:APA91bGjJIElflwPHyjMp2xlXSfcFsIMdgFYOhksD1OHmVhVCMJ1ED0ds8LLaN7oOB0A-xJYUt-UzoCL6ZqG3aeRGu2hSOM4pYkxuB0aZUyFACGDniI58fo0Um3CxwBN0X3XhSyxRNiI';
        var fcm = new FCM(serverKey);
     
     const user = await usermodel.find({ 'device_token' : ids  });
     const {mgs} = req.body;


      if(user){


        const arr = mgs.split(" ");
    
        for (var i = 0; i < arr.length; i++) {
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

        }

        const capitalmgs = arr.join(" ");

       var tokens=[];
        for(var i=0;i<user.length;i++){
              var message = {
          
          to:user[i].device_token,
          notification: {
            title: `Dear ${user[i].name},`,
            body: ` ${capitalmgs}`,
        
    }
  
  
  
    };

      tokens.push(message);

    }

  

    for(i=0;i<tokens.length;i++)
    {
         fcm.send(tokens[i], function(err, response) 
         {
            if (err) 
            {
                console.log("Something has gone wrong!"+err);
                console.log("Respponse:! "+response);
                // res.send("error"+err);
            } 
            else 
            {
                // showToast("Successfully sent with response");
                console.log("Successfully sent with response: ", response);
                // res.send("ok");
            }
      
        });

    }

      }
      else
      {
        res.send({msg:"notfound"});
    
      }    
    }
    getData();
   
      }




  exports.getUserplandetail = function(req,res)
  {
    userplanmodel.find((err,data)=>
    {

      if(err)
      {
        res.send({msg:"error"});
      }
      else
      {
        res.send(data);
      }
    })


  }



  exports.getUserplandetail_id = function(req,res)
  {
    const {_id} = req.body;
    //console.log(_id);

      async function   getData(params) {
      var  pData = await userplanmodel.find( {_id:_id});

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



  exports.filteruserplan =  function(req,res)
  {
        const {limit_val} = req.body;
        console.log(limit_val);
        if (limit_val === 'all')
        {
          userplanmodel.find((error, data) => 
          {
            if (error)
            {
              res.json(error)
            } 
            else 
            {
              res.json(data)
            }
          }).sort({_id:-1})
        }
        else
        {
          userplanmodel.find((error, data) => 
          {
            if (error) 
            {
              res.json(error)
            } 
            else
            {
              res.json(data)
            }
          }).limit(10).skip(limit_val).sort({_id:-1});
          // res.send("limit");
        }
          //   async function   getData(params) {
          //     var  pData = await foodproduct_m.find({ p_image : { $gt :  limit_val, $lt : 20}});

          //     if(pData){
          //       res.send(pData);
          //     }else{
          //       res.send({msg:"notfound"});

          //     }}
          //  getData();

          //   }

  }
  exports.searchuserplan = function(req,res)
  {
    const {_id} = req.body;
    console.log(_id);

    async function   getData(params) {
     // var  pData = await userplanmodel.find({$and:[ {$or :[{ name :{ $regex : '.*'+ _id + '.*' }},{email:{$regex:'.*'+_id+'.*'},} ,{mobile:{ $regex : '.*'+ _id + '.*' }} ]}]});

     var  pData = await userplanmodel.find({$and:[ {$or :[{ plantype :{ $regex : '.*'+ _id + '.*' }},{customerid:{$regex:'.*'+_id+'.*'},} ,{mealpreference:{ $regex : '.*'+ _id + '.*' }} ]}]});

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

  exports.activeUsers = function(req,res)
  {


    console.log("hello i am purnima");

      // console.log(req.body);
      // res.send(req.body.id);
      var id = req.body.id;
      console.log(id);
      async function   getData(params)
       {

       var  active_userdata = await userplanmodel.find({plan_status : 1});

        if(active_userdata)
        {
          // console.log(active_userdata+"&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&");
          console.log("Active User");
          res.json(active_userdata)
        }
        else
        {
          res.json({msg:"Expired User"});

        }
      }
      getData();

    }
    exports.ExpaireUsers = function(req,res)
    {


      console.log("hello i am purnima");

        // console.log(req.body);
        // res.send(req.body.id);
        var id = req.body.id;
        console.log(id);
        async function   getData(params)
         {

         var  active_userdata = await userplanmodel.find({plan_status : 0});

          if(active_userdata)
          {
            // console.log(active_userdata+"&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&");
            console.log("Active User");
            res.json(active_userdata)
          }
          else
          {
            res.json({msg:"Expired User"});

          }
        }
        getData();

      }
/////////////////// COUNT THE USER

exports. CountUSER = function(req, res) 
{

  userplanmodel.find((error, data) =>
   {
      if (error)
       {
        res.json({category:error})
       }  
       else 
       {
        res.json(data)
       } 
    }).sort({_id:-1}).count();
  };




  exports.sendsingleemailtocust = function(req, res)
  {
    // res.send("ok")
  
      async function  check(params) 
      {
  
        let email ={ email: req.body.email };
        let bcc = req.body.bcc ;
        let cc =req.body.cc ;
        let cust_name =req.body.cust_name ;
        let mgs = req.body.mgs ;
        let subject = req.body.subject ;


        const user = await usermodel.findOne(email);
 
  
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
              
            from: user.email,
            to: user.email,
            subject: subject,
            text: 'Your text is here',
            html: `
                      <p>Email: ${user.email}</p>
                      <p>BCC: ${bcc}</p>
                      <p>CC: ${cc}</p>
                      <p>Name: ${user.cust_name}</p>
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
  




  exports.sendemailtoMulcust =function(req,res)
  {

    async function   check(params) 
    {

      // let email ={ email: req.body.email };
     
    // const user = await usermodel.find({_id:myquery});
    // var mulemail=[];
    
    // for(var i =0; i<user.length-1;i++){
    //   mulemail.push(user[i].email)  

     const {token} = req.body;
     const ids =  token ;
     console.log(ids)
     let bcc = req.body.bcc ;
     let cc =req.body.cc ;
     let mgs = req.body.mgs ;
     let subject = req.body.subject ;
   
     const user = await usermodel.find({ 'token' : ids  });
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
                
               from: user[i].email,
               to: user[i].email,
               subject: subject,
               text: 'Your text is here',
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








 