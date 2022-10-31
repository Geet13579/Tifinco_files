var handleuserinfomodel = require('../../model/adminmodel/store_userinfo_M');
const { PaymentGateway } = require('@cashfreepayments/cashfree-sdk');
const nodemailer = require("nodemailer");


const pg = new PaymentGateway({

  env: 'TEST',


  appId: '1846232d4b3e663a55577d0f14326481',

  secretKey: 'TEST1451ccbd914027999926b907662a624765f20215',

});

// Create Order 

exports.paymentget=function(req,res){
            
          async function getOrderLink() {

            const { plan_type } = req.body;
            const { user_name } = req.body;
            const { user_number } = req.body;
            const { user_email } = req.body;
            const orderId = "tifinco_"+Date.now();

            console.log(orderId)
            
            // const { _id } = req.body;

      if(plan_type == 'eco'){
              


              pg.orders

              .createOrders({

                orderId: orderId, // required

                orderAmount: 600, // required

                orderCurrency: 'INR',

                // orderNote: 'Subscription',

                customerName: user_name, // required

                customerPhone: user_number, // required

                customerEmail: user_email, // required

                // sellerPhone: '',

                returnUrl: 'https://tifinco.com:5000/admin/getsuccess', // required

                notifyUrl: 'https://example.com/notify',

                // paymentModes: '',

                // pc: '',

              })

              .then(function(data){ 
                
                // res.json({mgs:data})


                // console.log(data.status=="ERROR")

                if(data.status=="ERROR"){

                  console.log("error")

                }
                else{
                  res.json({mgs:data})

                  // store data in database


                let add = new handleuserinfomodel({
                  user_name:user_name,
                  user_email:user_email,
                  user_number:user_number,
                  plan_type:plan_type,
                  orderId:orderId,
                  orderAmount:100

              
          
              });
              


              add.save().then( console.log("success"));
             

                }
            }


              )
            
              .catch((error) => console.error(error));

             




            }


            

                   
            else if(plan_type == 'premium')

              {
                
              pg.orders

              .createOrders({

                orderId: orderId, // required

                orderAmount: 600, // required

                orderCurrency: 'INR',

                // orderNote: 'Subscription',

                customerName: user_name, // required

                customerPhone: user_number, // required

                customerEmail: user_email, // required

                // sellerPhone: '',

                returnUrl: 'https://tifinco.com:5000/admin/getsuccess', // required

                notifyUrl: 'https://example.com/notify',

                // paymentModes: '',

                // pc: '',

              })

              .then(function(data){ 
                
                // res.json({mgs:data})


                // console.log(data.status=="ERROR")

                if(data.status=="ERROR"){

                  console.log("error")

                }
                else{
                  res.json({mgs:data})

          // store data in database


                let add = new handleuserinfomodel({
                  user_name:user_name,
                  user_email:user_email,
                  user_number:user_number,
                  plan_type:plan_type,
                  orderId:orderId,
                  orderAmount:200

              
          
              });
              


              add.save().then( console.log("success"));
             

                }
            }


              )
            
              .catch((error) => console.error(error));

             
                
              }

              else if(plan_type == 'executive')

              {
                
              pg.orders

              .createOrders({

                orderId: orderId, // required

                orderAmount: 600, // required

                orderCurrency: 'INR',

                // orderNote: 'Subscription',

                customerName: user_name, // required

                customerPhone: user_number, // required

                customerEmail: user_email, // required

                // sellerPhone: '',

                returnUrl: 'https://tifinco.com:5000/admin/getsuccess', // required

                notifyUrl: 'https://example.com/notify',

                // paymentModes: '',

                // pc: '',

              })

              .then(function(data){ 
                
                // res.json({mgs:data})


                // console.log(data.status=="ERROR")

                if(data.status=="ERROR"){

                  console.log("error")

                }
                else{
                  res.json({mgs:data})

          // store data in database


                let add = new handleuserinfomodel({
                  user_name:user_name,
                  user_email:user_email,
                  user_number:user_number,
                  plan_type:plan_type,
                  orderId:orderId,
                  orderAmount:300

              
          
              });
              


              add.save().then( console.log("success"));
             

                }
            }


              )
            
              .catch((error) => console.error(error));

             
              }




          // pg.orders

          //   .createOrders({

          //     orderId: 'order_223', // required

          //     orderAmount: '154', // required

          //     orderCurrency: 'INR',

          //     orderNote: 'Subscription',

          //     customerName: 'Test Name', // required

          //     customerPhone: '9111122222', // required

          //     customerEmail: 'johndoe@cashfree.com', // required

          //     sellerPhone: '',

          //     returnUrl: 'https://example.com/return', // required

          //     notifyUrl: 'https://example.com/notify',

          //     paymentModes: '',

          //     pc: '',

          //   })

          //   .then((data) => res.send(data.paymentLink))

          //   .catch((error) => console.error(error));


          }


          getOrderLink()
        }


        // Get Link for existing user

        exports.getorderlink = function(req,res){

          async function  check(params) 
          {
      
            let user_email ={ user_email: req.body.user_email };
            const  {orderId}  = req.body;
      
            const user = await handleuserinfomodel.findOne(user_email);
      
      


            pg.orders

            .getLink({
  
              orderId: orderId, // required
  
            })

            .then(function(data){ 
              
              res.json({mgs:data})


              // console.log(data.status=="ERROR")

              if(data.status=="ERROR"){

                console.log("error")

              }
              else{
                // res.json({mgs:data})

        // Send Email

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
                    
                  from: user.user_email,
                  to: user.user_email,
                  subject: "Given a link for payment",
                  text: 'Your text is here',
                  html: `
                            <p>Email: ${user.user_email}</p>
                            <p>Name: ${user.user_name}</p>
                            <p>OrderId:${user.orderId}</p>
                            <p>Ammount to pay :${user.orderAmount}</p>
                            <p>PaymentLink:${data.paymentLink}</p>`
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
          }


            )
          
            .catch((error) => console.error(error));
        
          }
      
        check();
        }

// send new orderid Payment Link



              exports.getorderNewlink = function(req,res){

                async function  send(params) 
                {

                  
                  const {plan_type} = req.body;
                  const { user_name } = req.body;
                  const { user_number } = req.body;
                  const { user_email } = req.body;
                  const {orderAmount} =req.body;
                  const orderId = "tifinco_"+Date.now();

                 



                  pg.orders

              .createOrders({

                orderId: orderId, // required

                orderAmount: orderAmount, // required

                orderCurrency: 'INR',

                // orderNote: 'Subscription',

                customerName: user_name, // required

                customerPhone: user_number, // required

                customerEmail: user_email, // required

                // sellerPhone: '',

                returnUrl: 'https://tifinco.com:5000/admin/getsuccess', // required

                notifyUrl: 'https://example.com/notify',

                // paymentModes: '',

                // pc: '',

              })

                  .then(function(data){ 
                    
                    res.json({mgs:data})


                    // console.log(data.status=="ERROR")

                    if(data.status=="ERROR"){

                      console.log("error")

                    }
                    else{
                      // res.json({mgs:data})

              // Send Email

                   
                      // res.send("yes")
                      let add = new handleuserinfomodel({
                        user_name:user_name,
                        user_email:user_email,
                        user_number:user_number,
                        plan_type:plan_type,
                        orderId:orderId,
                        orderAmount:orderAmount
      
                    
                
                    });
                    
      
      
                    add.save().then( console.log("success"));





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
                          
                        from: user_email,
                        to: user_email,
                        subject: "Given a link for payment",
                        text: 'Your text is here',
                        html: `
                                  <p>Email: ${user_email}</p>
                                  <p>Name: ${user_name}</p>
                                  <p>OrderId:${orderId}</p>
                                  <p>Plan Type:${plan_type}</p>
                                  <p>Ammount to pay :${orderAmount}</p>
                                  <p>PaymentLink:${data.paymentLink}</p>`
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
                


                  )
                
                  .catch((error) => console.error(error));

                }

              send();
              }







// generate token for App

exports.getsuccess =function(req,res){
    


var XMLHttpRequest = require('xhr2');


var url = "https://tifinco.com:5000/success";

var errorurl = "https://tifinco.com:5000/unsuccess"

var xhr = new XMLHttpRequest();
xhr.open("POST", url);

xhr.setRequestHeader("content-type"," application/x-www-form-urlencoded");
xhr.setRequestHeader("Content-Type", "application/json");
xhr.setRequestHeader("x-client-id", "1846232d4b3e663a55577d0f14326481");
xhr.setRequestHeader("x-client-secret", "TEST1451ccbd914027999926b907662a624765f20215");

// xhr.onreadystatechange = function () {
//    if (xhr.readyState === 4) {
//       console.log(xhr.status);
//       console.log(xhr.responseText);
//       res.send(xhr.responseText)

//    }};

   const { referenceId,txStatus,paymentMode ,txMsg,txTime,signature,orderId,orderAmount} = req.body;

// var data = `
// {
//   referenceId:"885388282",
//   txStatus:"SUCCESS",
//   paymentMode:"Wallet",
//   txMsg:"hfg",
//   txTime:"2022-07-22+11%3A44%3A17",
//   signature:"Ii1UxFOmnmVlOJ1byWL7o1DpKwBB5fgjZUUEv8hOIn0%3D",
//   orderId:"tifinco_1658470454876",
//   orderAmount:"600.00"
// }`;
 var data = {
  referenceId:referenceId,
  txStatus:txStatus,
  paymentMode:paymentMode,
  txMsg:txMsg,
  txTime:txTime,
  signature:signature,
  orderId:orderId,
  orderAmount:orderAmount


 }

//  res.send(data);

if (data.txStatus == 'SUCCESS') {
  
  return res.redirect(`https://tifinco.com/success/${data.referenceId}/${data.txStatus}/${data.paymentMode}/${data.txMsg}/${data.txTime}/${data.orderId}/${data.orderAmount}`);
  
  // {"data":{"referenceId":"885390418","txStatus":"SUCCESS","paymentMode":"Wallet","txMsg":"Transaction pending","txTime":"2022-07-22 17:57:57","signature":"FD496Wb0UFAtfDSpitly+/C0gsYMT6CNPu4SW15EOSs=","orderId":"tifinco_1658492874697","orderAmount":"600.00"}}
 
} else if(data.txStatus == 'FAILED'){
 
  return res.redirect(`https://tifinco.com/unsuccess/${data.paymentMode}/${data.txMsg}/${data.txTime}/${data.signature}/${data.orderId}/${data.orderAmount}/${data.referenceId}/${data.txStatus}`);
  
}






}


exports.getuserpaymentdetail = function(req,res){
const {orderId} = req.body;
// res.send("ok");
pg.orders

  .getDetails({

    orderId: orderId, // required

  })

  .then(function(data){ var userdata = data.details;
    res.send(userdata)})

  .catch((error) => console.error(error));



// pg.orders

//   .triggerPaymentEmail({

//     orderId: 'tifinco_1658736235103', // required

//   })

//   .then((data) => console.log(data))

//   .catch((error) => console.error(error));
// pg.orders

//   .triggerPaymentEmail({

//     orderId: 'tifinco_1658736235103',
//      // required

//   })

//   .then((data) => console.log(data))

//   .catch((error) => console.error(error));

}

// exports.triggerPaymentEmail=function(req,res){

//   res.send("ok");
// }


exports.getUserStatus=function(req,res){
  // get status
const {orderId} = req.body
pg.orders

  .getStatus({

    orderId: orderId, // required

  })

  .then(function(data){ var status = data;
    res.send(status)})

  .catch((error) => console.error(error));


// const sdk = require('api')('@cashfreedocs-new/v2#81hwwj1pl78py09z');
// sdk.server('https://sandbox.cashfree.com/pg');
// sdk.Createrefund({
//   refund_amount: 13,
//   refund_id: 'refund_173',
//   refund_note: 'thank you so much'
// }, {
//   order_id: '206',
//   'x-client-id': '1846232d4b3e663a55577d0f14326481',
//   'x-client-secret': 'TEST1451ccbd914027999926b907662a624765f20215',
//   'x-api-version': '2022-01-01'
// })
//   .then(res => console.log(res))
//   .catch(err => console.error(err));

}




exports.gettokenforapp =function(req,res){
    


  var XMLHttpRequest = require('xhr2');
  
  
  var url = "https://test.cashfree.com/api/v2/cftoken/order";
  
  var xhr = new XMLHttpRequest();
  xhr.open("POST", url);
  
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.setRequestHeader("x-client-id", "1846232d4b3e663a55577d0f14326481");
  xhr.setRequestHeader("x-client-secret", "TEST1451ccbd914027999926b907662a624765f20215");
  
  xhr.onreadystatechange = function () {
     if (xhr.readyState === 4) {
        // console.log(xhr.status);
        // console.log(xhr.responseText);
        res.send(xhr.responseText)
  
     }};

     const {orderId} = req.body;
     const {orderAmount} =req.body;


  var data = {
   
    orderId:orderId,
    orderAmount:orderAmount,
    orderCurrency:"INR"
  
  
   }
// console.log(data)
  
  xhr.send(JSON.stringify(data));

  
  
  }