
var corporate_M = require('../../../model/adminmodel/CorporateOrderInfo_M.js');
const { PaymentGateway } = require('@cashfreepayments/cashfree-sdk');
const nodemailer = require("nodemailer");


const pg = new PaymentGateway({

  env: 'TEST',


  appId: '1846232d4b3e663a55577d0f14326481',

  secretKey: 'TEST1451ccbd914027999926b907662a624765f20215',

});

exports.insertcoporate_orders  = function(req,res)
{



        const {nameOfinstitude_Or_Compony} =req.body;
        const {address} =req.body;
        const {contactperson_name} =req.body;
        const {contact_number} =req.body;

        const {gst} =req.body;
        const {meal_prefrence} =req.body;
        const {no_of_vegpeople} =req.body;
        const {no_of_nonvegpeople} =req.body;
        const {starting_date} =req.body;
        const {ending_date} =req.body;
        const {deliverytime} =req.body;
        const {plan_type} =req.body;
        const {payment} = req.body;
        const {status} = req.body




        let add = new corporate_M({
            nameOfinstitude_Or_Compony:nameOfinstitude_Or_Compony,
            address:address,
            contactperson_name:contactperson_name,
            contact_number:contact_number,
            gst:gst,
            meal_prefrence:meal_prefrence,
            no_of_vegpeople:no_of_vegpeople,
            no_of_nonvegpeople:no_of_nonvegpeople,
            starting_date:starting_date,
            ending_date:ending_date,
            lunchtime:lunchtime,
            dinnertime:dinnertime,
            plan_type:plan_type,
            payment:payment,
            status:status


        });



add.save().then(res.send( { msg: "success" })).catch((err) => { res.json({ msg: "failed" }) });
console.log("success")
//  close 

 
      
  
check()


}


exports.corporatepayment=function(req,res){
            
    async function getOrderLink() {

        const {nameOfinstitude_Or_Compony} =req.body;
        const {address} =req.body;
        const {contactperson_name} =req.body;
        const {contact_number} =req.body;
        const {time_prefrence} =req.body;
         

        const {gst} =req.body;
        const {meal_prefrence} =req.body;
        const {no_of_vegpeople} =req.body;
        const {no_of_nonvegpeople} =req.body;
        const {starting_date} =req.body;
        const {ending_date} =req.body;
        const {lunchtime} =req.body;
        const {dinnertime} =req.body;
        const {plan_type} =req.body;
        const {payment} = req.body;
        const {status} = req.body;
        const {email}=req.body;
        const {amount}=req.body;



       


      const orderId = "tifinco_"+Date.now();
      


      let add = new corporate_M({
        nameOfinstitude_Or_Compony:nameOfinstitude_Or_Compony,
        address:address,
        contactperson_name:contactperson_name,
        contact_number:contact_number,
        gst:gst,
        meal_prefrence:meal_prefrence,
        time_prefrence,time_prefrence,
        no_of_vegpeople:no_of_vegpeople,
        no_of_nonvegpeople:no_of_nonvegpeople,
        starting_date:starting_date,
        ending_date:ending_date,
        lunchtime:lunchtime,
        dinnertime:dinnertime,
        plan_type:plan_type,
        email:email,
        amount:amount,
        orderId:orderId,
        status:status,
       
        


    });
      // const { _id } = req.body;

       if(plan_type == 'eco'){
        

        console.log("eco");

        pg.orders

        .createOrders({
  
          orderId: orderId, // required
  
          orderAmount: amount, // required
  
          orderCurrency: 'INR',
  
          // orderNote: 'Subscription',
  
          customerName: contactperson_name, // required
  
          customerPhone: contact_number, // required
  
          customerEmail: email, // required
  
          // sellerPhone: '',
  
          returnUrl: 'https://tifinco.com:5000/admin/getsuccess', // required
  
          notifyUrl: 'https://example.com/notify',
  
          // paymentModes: '',
  
          // pc: '',
  
        })
  
        .then(function(data){ 
          
          // res.send({mgs:data})
  
  
          // console.log(data.status=="ERROR")
  
          if(data.status=="ERROR"){
  
            console.log("error")
  
          }
          else if(data.status=="OK"){
  
              console.log("heeloo")
            res.json({mgs:data})
  
            // store data in database
  
  
  
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
                
              from: email,
              to: email,
              subject: "Given a link for payment",
              text: 'Your text is here',
              html: `
                        <p>Email: ${email}</p>
                        <p>Name: ${contactperson_name}</p>
                        <p>OrderId:${orderId}</p>
                        <p>Plan Type:${plan_type}</p>
                        <p>Ammount to pay :${amount}</p>
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
        add.save().then( console.log("success"));
       
  
          }
      }
  
  
        )
      
        .catch((error) => console.log(error));
  




      }


      

             
      else if(plan_type == 'executive')

        {
          
            pg.orders

            .createOrders({
      
              orderId: orderId, // required
      
              orderAmount: amount, // required
      
              orderCurrency: 'INR',
      
              // orderNote: 'Subscription',
      
              customerName: contactperson_name, // required
      
              customerPhone: contact_number, // required
      
              customerEmail: email, // required
      
              // sellerPhone: '',
      
              returnUrl: 'https://tifinco.com:5000/admin/getsuccess', // required
      
              notifyUrl: 'https://example.com/notify',
      
              // paymentModes: '',
      
              // pc: '',
      
            })
      
            .then(function(data){ 
              
              // res.send({mgs:data})
      
      
              // console.log(data.status=="ERROR")
      
              if(data.status=="ERROR"){
      
                console.log("error")
      
              }
              else if(data.status=="OK"){
      
                  console.log("heeloo")
                res.json({mgs:data})
      
                // store data in database
      
      
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
                    
                  from: email,
                  to: email,
                  subject: "Given a link for payment",
                  text: 'Your text is here',
                  html: `
                            <p>Email: ${email}</p>
                            <p>Name: ${contactperson_name}</p>
                            <p>OrderId:${orderId}</p>
                            <p>Plan Type:${plan_type}</p>
                            <p>Ammount to pay :${amount}</p>
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
      
            add.save().then( console.log("success"));
           
      
              }
          }
      
      
            )
          
            .catch((error) => console.log(error));
      
          
        }





        else if(plan_type == 'premium')

        {
          
        pg.orders

      .createOrders({

        orderId: orderId, // required

        orderAmount: amount, // required

        orderCurrency: 'INR',

        // orderNote: 'Subscription',

        customerName: contactperson_name, // required

        customerPhone: contact_number, // required

        customerEmail: email, // required

        // sellerPhone: '',

        returnUrl: 'https://tifinco.com:5000/admin/getsuccess', // required

        notifyUrl: 'https://example.com/notify',

        // paymentModes: '',

        // pc: '',

      })

      .then(function(data){ 
        
        // res.send({mgs:data})


        // console.log(data.status=="ERROR")

        if(data.status=="ERROR"){

          console.log("error")

        }
        else if(data.status=="OK"){

            console.log("heeloo")
          res.json({mgs:data})

          // store data in database



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
              
            from: email,
            to: email,
            subject: "Given a link for payment",
            text: 'Your text is here',
            html: `
                      <p>Email: ${email}</p>
                      <p>Name: ${contactperson_name}</p>
                      <p>OrderId:${orderId}</p>
                      <p>Plan Type:${plan_type}</p>
                      <p>Ammount to pay :${amount}</p>
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


      add.save().then( console.log("success"));
     

        }
    }


      )
    
      .catch((error) => console.log(error));

       
        }




    // pg.orders

    //   .createOrders({

    //     orderId: 'order_223', // required

    //     orderAmount: amount4', // required

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


  exports.show_Corporate_orders = function(req, res) {
  


    async function   getData(params) {
      var  pData = await corporate_M.find( );
  
        if(pData)
        {
          res.send(pData);
        }
        else
        {
          res.send({msg:"notfound"});
  
        }}
    getData();
  };

  exports.getuserCorporatedetail=function(req,res){
    const {id} =req.body;
   

   
    async function   check(params) {
      var tiffinData = await corporate_M.findOne({ _id: id});
  
      res.send(tiffinData);
           
       }
   check()

  }

//   exports.sendemailto_corporateuser = function(req, res)
// {
//   // res.send("ok")

//     async function  check(params) 
//     {

//       let user_email ={ user_email: req.body.user_email };
//       let bcc = req.body.bcc ;
//       let cc =req.body.cc ;
//       let user_name =req.body.user_name ;
//       let mgs = req.body.mgs ;
//       let subject = req.body.subject ;
//       let from = `Tifinco <tifincoacct@gmail.com>`

//       const user = await handleuserinfomodel.findOne(user_email);


//       if (!user)
//       {
//        res.send({ message: "Invalid Email" });

//       }

//       else
//       {
//         // res.send("yes")
//           var transporter = nodemailer.createTransport({
//           host: 'smtp.gmail.com',
//           port: 465,
//           secure: true,  
//           service: 'Gmail',
//           auth: {
//             user: 'tifincoacct@gmail.com',
//             pass: 'bbelrjxwynsqfuyt' }
//             });
 
//           var mailOptions = {
            
//           from: from,
//           to: user.user_email,
//           subject: subject,
//           text: 'TIFINCO',
//           html: `
//                     <p>Email: ${user.user_email}</p>
//                     <p>BCC: ${bcc}</p>
//                     <p>CC: ${cc}</p>
//                     <p>Name: ${user_name}</p>
//                     <p>Message:${mgs}</p>`   } 

//          var status = transporter.sendMail(mailOptions, function(error)
//          {

//           if (error) 
//           {
//             console.log(error);       
//           } 
//           else 
//           {
//             res.send("success"); 
//             console.log("email send")
//             //  res.send({token:user.token} );        
//           }
//           });
//        }
  
  
//     }

//   check();
// }

