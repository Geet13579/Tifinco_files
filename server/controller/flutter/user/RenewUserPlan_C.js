var userplanmodel = require('../../../model/fluttermodel/userplanmodel.js');

exports.getPlansForRenew = function (req, res) {
    // res.send({msg:"success"});
  
  
    userplanmodel.find((error, data) => {
      if (error) {
        res.json({ msg: error })
      } else {
        res.json(data)
      }
    }).sort({ _id: 1 })
  
  }

  exports.insertRenewUserPlan = async function (req, res) {
  
  
    const {_id, userid, extra_item, plan_days,referal_code,payment_id,amount, payment_method,time } = req.body;
      // console.log(req.body);
  
  
      
    async function getuserid()
     {
          // console.log(userid)
          
          var  userinfo = await userplanmodel.findOne({ _id:req.body._id});
          // console.log(userinfo);
        
          var meal_time = userinfo.meal_time;
          
          var plantype = userinfo.plantype;
          var mealpreference = userinfo.mealpreference;
          var nonveg_pre_d = userinfo.nonveg_pre_d;
          var tiffintype = userinfo.tiffintype;
          var starting_date = userinfo.starting_date;
          var repeat_on =userinfo.repeat_on;
          var unlike_foods = userinfo.unlike_foods;
          var useraddress =userinfo.useraddress;
          var plan_status = userinfo.plan_status;
          var plan_price = userinfo.plan_price;
          var tiffin_price= userinfo.tiffin_price;
          var name = userinfo.name;
          var day_off = userinfo.day_off;
          var plan_pause = userinfo.plan_pause;
          var cf_order_id = userinfo.cf_order_id;
          var orderStatus = userinfo.orderStatus;
          var remainingPlanDay_lunch = userinfo.remainingPlanDay_lunch;
          var remainingPlanDay_dinner = userinfo.remainingPlanDay_dinner;
          var tiffinDeliver_status = userinfo.tiffinDeliver_status;
          
          console.log(plan_days);

          var data =
          {
              userid, extra_item, plan_days, referal_code,payment_id,amount, payment_method,time ,
              meal_time ,plantype,mealpreference,nonveg_pre_d,tiffintype, starting_date,repeat_on ,unlike_foods,useraddress,
              plan_status,plan_price,tiffin_price, name, day_off,plan_pause,cf_order_id ,orderStatus,remainingPlanDay_lunch,
              remainingPlanDay_dinner, tiffinDeliver_status
          }



            userplanmodel.findByIdAndUpdate(_id, data , { new: true }, function( err,data )
             {
              if (err)
               {
                  console.log("err", err);
                  res.status(200).send({msg:'error'});
              }
               else 
               {
                  console.log("success");
                  res.send({msg: data });
               }
            });
     
   
    }
    getuserid();

  }

  // exports.chechTiffinDeliveryStatus()= async function(req, res)
  // {

  //   const {_id, tiffinDeliver_status }= req.body;
  //   console.log(_id);
  //   console.log(tiffinDeliver_status);
  
  // var  userinfo = await userplanmodel.findOne({ _id:req.body._id});
  //         var plan_days = userinfo.plan_days;
  //         var remainingPlanDay_lunch = userinfo.remainingPlanDay_lunch;
  //         var remainingPlanDay_dinner = userinfo.remainingPlanDay_dinner;
  //         var tiffinDeliver_status = userinfo.tiffinDeliver_status;

          

  //         var today = new Date();

  //         console.log(today.getHours());

  //         if(tiffinDeliver_status == 1)
  //         {
  //               if(today.getHours()<15 )
  //               {
  //                   var remainingPlanDay_lunch = parseInt(remainingPlanDay_lunch)-1;
  //                   console.log(remainingPlanDay_lunch);
  //                       const data =
  //                       {
  //                         remainingPlanDay_lunch:remainingPlanDay_lunch
  //                       }

  //                   userplanmodel.findByIdAndUpdate(_id, data , { new: true }, function( err,data ) 
  //                  {

  //                       if (err) 
  //                       {
  //                           console.log("Something wrong when updating data!");
  //                       }
                    
  //                       console.log(doc);
  //                       res.send((msg:"your Tiffin Has delivered". remainingPlanDay_lunch:remainingPlanDay_lunch})
  //                   });

  //             // check if user renew their plan 
  //               var {renew_planstatus} = req.body; // 1 = user renew their plan 
  //               if(renew_planstatus == 0)
  //               {
  //                 console.log("Your plan has expired");
  //               }
  //               else
  //               {
  //                   if(remainingPlanDay_lunch ==0)
  //                   {
  //                       const data =
  //                       {
  //                         remainingPlanDay_lunch:plan_days
  //                       }
  //                       userplanmodel.findByIdAndUpdate(_id, data , { new: true }, function( err,data ) 
  //                       {
          
  //                         if (err) 
  //                         {
  //                             console.log("Something wrong when updating data!");
  //                         }
                      
  //                         console.log(doc);
  //                      });
  //                       // 
  //                   }

  //                }
                   
  //                   // process.exit(0); 
  //               }
  //               else if(today.getHours()>18)
  //               {
  //                   var remainingPlanDay_dinner =parseInt(remainingPlanDay_dinner)-1;
  //                   console.log(remainingPlanDay_dinner);

  //                      const data =
  //                       {
  //                         remainingPlanDay_dinner:remainingPlanDay_dinner
  //                       }

  //                       userplanmodel.findByIdAndUpdate(_id, data , { new: true }, function( err,data ) 
  //                       {

  //                       if (err) 
  //                       {
  //                           console.log("Something wrong when updating data!");
  //                       }
                    
  //                       console.log(doc);
  //                   });

  //                   var {renew_planstatus} = req.body; // 1 = user renew their plan 
  //                   if(renew_planstatus == 0)
  //                   {
  //                     console.log("Your plan has expired");
  //                   }
  //                   else
  //                   {
  //                       if(remainingPlanDay_dinner ==0)
  //                       {
  //                           var remainingPlanDay_dinner = plan_days;
  //                           console.log(remainingPlanDay_dinner);
      
  //                             const data =
  //                             {
  //                               remainingPlanDay_dinner:plan_days
  //                             }
  //                           userplanmodel.findByIdAndUpdate(_id, data , { new: true }, function( err,data ) 
  //                           {
                
  //                               if (err) 
  //                               {
  //                                   console.log("Something wrong when updating data!");
  //                               }
                            
  //                               console.log(doc);
  //                           });
  //                           // 
                        
  //                       }
  //                   }
                   
  //                   // process.exit(0);
  //               }
  //               else
  //               {
  //                   console.log("your tiffin not Delivered");
  //               }
  //         }

  // }