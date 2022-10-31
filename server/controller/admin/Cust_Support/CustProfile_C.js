var userplanmodel = require('../../../model/fluttermodel/userplanmodel.js');
var userinfo = require('../../../model/fluttermodel/fluttermodelusers.js');
var pause_plan_M = require('../../../model/fluttermodel/pause_plan_M');
var plantype_infos= require('../../../model/adminmodel/plandetail/plantypemodel.js');
var userextrafood_Model = require('../../../model/adminmodel/plandetail/userextrafoodmodel.js')

exports.getCustProfile = function (req, res) 
{
    // res.send({msg:"success"});
  
  
    userplanmodel.find((error, data) => {
      if (error) {
        res.json({ msg: error })
      } else {
        res.json(data)
      }
    }).sort({ _id: 1 })
  
  }
  exports.getcust_supportBy_id = function (req, res)
   {
    // res.send({msg:"success"});
    async function check(params)
     {
        let token =  req.body.token ;
        // console.log(_id);
        const user = await userplanmodel.findOne({userid:token});
        // res.send(user);

      if (user) 
      {
        // var userarr = [];
        // const userinfos = await userinfo.findOne({token:token});
        // userarr.push(user, userinfos);
        
        // res.send(userarr);
        res.send(user);
      } 
      else 
      {
        res.send("no user found");
      }
    }
    check();

    // let token =  req.body.token ;
    // res.send(token);

    // userplanmodel.aggregate([
    //   { $lookup:
    //     {
    //       from: 'userinfos',
    //       localField: 'token',
    //       foreignField: 'userid',
    //       as: 'plandetail'
    //     }
    //   }
    //   ]).then(function(data) {
    //     res.send(data);
    //   })

    // ++++++++++++++++++++++++++++++++++++++++++++++++++++pipeline that match equal data from collection +++++++++++++++++++++++++++++++++++++++++++++++++++
  //   let token =  req.body.token ;
  //   userplanmodel.aggregate( [
  //     {
  //        $lookup:
  //           {
  //             from: "userinfos",
  //             let: { plan_userid: "$userid" },
  //             pipeline: [
  //                { $match:
  //                   { $expr:
  //                      { $and:
  //                         [
  //                           { $eq: [ "$token",  "$$plan_userid" ] }
  //                         ]
  //                      }
  //                   }
  //                }
  //             ],
  //             as: "stockdata"
  //           }
  //      }
  //  ] ).then(function(data) {

  //   var stockdata = data[1].stockdata;
  //   res.send(stockdata);
  // })
  // +++++++++++++++++++++++++++++++++++++++++++++Ending of pipeline that match equal data from collection ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  }



  exports.getuserInfo = function( req, res)

  {

  //   async function check(params)
  //   {
  //     var userid = req.body.userid;
      
  //      const user = await userinfo.findOne({ token : userid });
  //     //  res.send(user);

  //    if (user) 
  //    {
  //      res.send(user);
  //    } 
  //    else 
  //    {
  //      res.send("no user found");
  //    }
  //  }
  //  check();

// ===================================================
  // userinfo.find((error, data) => {
  //   if (error) {
  //     res.json({ msg: error })
  //   } else {
  //     res.json(data)
  //   }
  // }).sort({ _id: 1 })
  // ============================================

  userinfo.aggregate([
      { $lookup:
        {
          from: 'userplaninfos',
          // localField: 'userid',
          // foreignField: 'token',
          let: { userinfo_userid: "$token", name:"$name" },
                      pipeline: [
                         { $match:
                            { $expr:
                               { $and:
                                  [
                                    { $eq: [ "$userid",  "$$userinfo_userid" ] },
                                    { $eq: [ "$name",  "$$name" ] }
                                  ]
                               }
                            }
                         }
                      ],
          as: 'user_detail'
        }
      }
      ]).then(function(data) {
        console.log(data.length)
        var item = [];
        for(var i = 0; i<data.length;i++)
        {
           var size = Object.keys(data[i].user_detail).length;
            if(size == 0)
            {
                console.log("nothing to do");
            }
            else
            {
              item.push(data[i])
            }
            
        }
        res.send(item);
    
      })

  //  const q = userinfo.aggregate(
  //   [ { $match : { token : userid } } ] );

  //   res.send(q);
  }


exports.updateCustPausedPlan=async function(req,res)
{
 
    var token=req.body.token;
     console.log(token);

    var planpause=  await pause_plan_M.findOne({userid:token})
    var _id = planpause._id;
    console.log(planpause);
    console.log(_id);
    // var _id = req.body._id;
  var con_info =
   {

    starting_date:req.body.starting_date,
    ending_date:req.body.ending_date,
    dayscount:req.body.dayscount,
    meal_time:req.body.meal_time,
    activation_date:req.body.activation_date
 
  };

  pause_plan_M.findByIdAndUpdate(_id, con_info , { new: true }, function( err,con_info )
   {
      if (err)
      {
          console.log("err", err);
          res.status(200).send({msg:'error'});
      } 
      else
      {
        console.log("success");
        res.send({msg: con_info });
      }
  });

    
///////////////////////////////////////////////////////////////////////////////////
  // var plan_mode =  userplanmodel.aggregate([
  //     { $lookup:
  //         {
  //            from: pause_plan_M,
  //            localField: userid,
  //            foreignField: userid,
  //            as: "new_plan_status"
  //         }
  //     }
  // ])


  // userplanmodel.aggregate([
  //   { $lookup:
  //       {
  //         from: pause_plan_M,
  //         let: { post_userid: "$userid", plan_status: "$plan_status"},
  //         pipeline: [
  //              { $match:
  //                  { $expr:
  //                      { $and:
  //                          [
  //                             { $gt: [ "$plan_status", "$$plan_status"] },
  //                             { $eq: ["$$post_userid", "$userid" ] }
  //                          ]
  //                      }
  //                  }
  //              }
  //          ],
  //          as: "comments"
  //          }
  //   }
  //  ])

  // console.log(plan_mode);

  // res.send(planpause);
    // if(planpause)
    // {
    //     res.send(" your plan is not paused" );
    // }

    // else
    // { 
        // var starting_date=planpause.starting_date.slice(0, 10);
        // var ending_date= planpause.ending_date.slice(0, 10);
        // var activation_date=planpause.activation_date.slice(0, 13)
        
        // new Date().toISOString().slice(0,10);
        // var currentdate= new Date().toISOString().slice(0,10)
        
        // console.log(  new Date().toISOString().slice(0,10));
        
        // if(starting_date>currentdate && currentdate<ending_date)
        // {
        // res.send({msg:"pause comming soon" , ending_date:ending_date,starting_date:starting_date});
        // }
        //   else if(currentdate>starting_date&& currentdate>ending_date)
        // {
        //   res.send("pause expired ");
        // //  res.send("plan pause");
        // }
        // else if(currentdate>=starting_date && ending_date>=currentdate)
        // {
        //     //  res.send(" plan date not match"); 
        //     res.send({pause: true, msg: "paused today" ,activation_date:activation_date,ending_date:ending_date});
        // }
        // else
        // {
        //     res.send("not found");
        // }

    // }

  }

  exports.getCust_pausePlan= async function(req,res)
  {
      var token=req.body.token;
      console.log(token);

      var planpause=  await pause_plan_M.findOne({userid:token})
        res.send(planpause);
   
  
   };

   exports.get_extraFoodInfo = async function(req,res)
   {
      userextrafood_Model.find((error, data) => {
      if (error) 
      {
        res.json({ msg: error })
      }
      else
      {
        res.send(data)
      }
    });
    // res.send("hii");
    
   }
   
   exports.getplantype = function(req,res)
   {

    plantype_infos.find((error, data) => {
        if (error) {
          res.json({msg:error})
        } else {
          res.json(data)
        }
      }).sort({_id:-1})
  
  };

   exports.updateCust_Data = async function(req,res)
   {
   
        var userid=req.body.userid;   
      
        var plane_data=  await userplanmodel.findOne({userid:userid})
        var _id = plane_data._id;
       
                var con_info =
              {

                // name: req.body.name,
                meal_time:req.body.meal_time,
                plan_days:req.body.plan_days,
                plantype : req.body.plantype,
                plan_price:req.body.plan_price,
                mealpreference : req.body.mealpreference,
                tiffintype:req.body.tiffintype,
                tiffin_price:req.body.tiffin_price,
                amount:req.body.amount,
                addressLine1:req.body.lunch_addressLine1,
                addressLine2:req.body.lunch_addressLine2,
                landmark:req.body.lunch_landmark,
                house_no:req.body.lunch_house_no,
                addressLine1:req.body.dinner_addressLine1,
                addressLine2:req.body.dinner_addressLine2,
                landmark:req.body.dinner_landmark,
                house_no:req.body.dinner_house_no,
                repeat_on : req.body.repeat_on,
                nonveg_pre_d :req.body.nonveg_pre_d,
                unlike_foods : req.body.unlike_foods,

                extra_item: req.body.extra_item
               

            };

              console.log(con_info);
    
            userplanmodel.findByIdAndUpdate(_id, con_info , { new: true }, function( err,con_info )
              {
                if (err)
                {
                    console.log("err", err);
                    res.status(200).send({msg:'error'});
                } 
                else
                {
                  console.log("success");
                  res.send({msg: con_info });
                }
            });





          }










          //  res.send("ohg");
//           var data = req.body;

//         var userid=req.body.userid;
//         console.log(userid);

//         var plane_data=  await userplanmodel.findOne({userid:userid})
//         var _id = plane_data._id;
 
//         console.log(_id);
      

//         var  extra_item= req.body.extra_item
//         var repeat_on = req.body.repeat_on;
//         console.log(repeat_on)
    
//         var object = repeat_on.reduce( (obj, item) => Object.assign(obj, { [item.new_days]: item.name }), {});

//         console.log(object)

//          var nonveg_pre_d = req.body.nonveg_pre_d;
//          console.log(nonveg_pre_d);
//          var objectNonveg = nonveg_pre_d.reduce( (obj, item) => Object.assign(obj, { [item.new_days]: item.name }), {});

//          console.log(objectNonveg)

//         if(typeof object == object && typeof objectNonveg == object)
//         {
//                 var con_info =
//               {

//                 name: req.body.name,
//                 meal_time:req.body.meal_time,
//                 plan_days:req.body.plan_days,
//                 plantype : req.body.plantype,
//                 plan_price:req.body.plan_price,
//                 mealpreference : req.body.mealpreference,
//                 tiffintype:req.body.tiffintype,
//                 tiffin_price:req.body.tiffin_price,
//                 amount:req.body.amount,
//                 addressLine1:req.body.lunch_addressLine1,
//                 addressLine2:req.body.lunch_addressLine2,
//                 landmark:req.body.lunch_landmark,
//                 house_no:req.body.lunch_house_no,
//                 addressLine1:req.body.dinner_addressLine1,
//                 addressLine2:req.body.dinner_addressLine2,
//                 landmark:req.body.dinner_landmark,
//                 house_no:req.body.dinner_house_no,
//                 repeat_on : repeat_on,
//                 nonveg_pre_d :nonveg_pre_d,
//                 unlike_foods : req.body.unlike_foods,

//                 extra_item: extra_item
               

//             };

//             console.log(con_info+"line 372");
//         }
//         else
//         {
//                 var con_info =
//                 {
        
//                   name: req.body.name,
//                   meal_time:req.body.meal_time,
//                   plan_days:req.body.plan_days,
//                   plantype : req.body.plantype,
//                   plan_price:req.body.plan_price,
//                   mealpreference : req.body.mealpreference,
//                   tiffintype:req.body.tiffintype,
//                   tiffin_price:req.body.tiffin_price,
//                   amount:req.body.amount,
//                   addressLine1:req.body.lunch_addressLine1,
//                   // userAddress: {
//                   //   lunch_useraddress: {
//                   //     addressLine1 :req.body.lunch_addressLine1,

//                   //   }
//                   // },
//                   // req.body.useraddress.lunch_useraddress.addressLine1,
//                   addressLine2:req.body.lunch_addressLine2,
//                   landmark:req.body.lunch_landmark,
//                   house_no:req.body.lunch_house_no,
//                   addressLine1:req.body.dinner_addressLine1,
//                   addressLine2:req.body.dinner_addressLine2,
//                   landmark:req.body.dinner_landmark,
//                   house_no:req.body.dinner_house_no,
//                   repeat_on : object,
//                   nonveg_pre_d : objectNonveg,
//                   unlike_foods : req.body.unlike_foods
        
//               };

//               console.log("line 402");
//               console.log(con_info);
//         }


  
//       // var con_info =
//       //   {

//       //     name: req.body.name,
//       //     meal_time:req.body.meal_time,
//       //     plan_days:req.body.plan_days,
//       //     plantype : req.body.plantype,
//       //     plan_price:req.body.plan_price,
//       //     mealpreference : req.body.mealpreference,
//       //     tiffintype:req.body.tiffintype,
//       //     tiffin_price:req.body.tiffin_price,
//       //     amount:req.body.amount,
//       //     addressLine1:req.body.lunch_addressLine1,
//       //     addressLine2:req.body.lunch_addressLine2,
//       //     landmark:req.body.lunch_landmark,
//       //     house_no:req.body.lunch_house_no,
//       //     addressLine1:req.body.dinner_addressLine1,
//       //     addressLine2:req.body.dinner_addressLine2,
//       //     landmark:req.body.dinner_landmark,
//       //     house_no:req.body.dinner_house_no,
//       //     repeat_on : object

//       // };
      

// console.log("line 432");
// console.log(con_info);
      
//        userplanmodel.findByIdAndUpdate(_id, con_info , { new: true }, function( err,con_info )
//         {
//           if (err)
//           {
//               console.log("err", err);
//               res.status(200).send({msg:'error'});
//           } 
//           else
//           {
//             console.log("success");
//             res.send({msg: con_info });
//           }
//       });
      // console.log(result);




   exports.deleteExtraItem_Obj =async function(req,res)
   {
  
  
    const {item_name,_id} = req.body;
// =================================================

    // var dataId = await userplanmodel.find({ '_id' : _id  });

    // var Length = dataId[0].extra_item.length;
    //   console.log(dataId[0].extra_item.length)
    //   var item = [];


    //   for(var i =0; i<Length ;i++)
    //   {
    //       dataId[0].extra_item.forEach((e)=>{
    //       if(e.item_name == item_name)
    //       {
    //          item.push({"id":"1","item_name":e.item_name,"item_qty":e.item_qty,"item_price": e.item_price});
             
    //       }

    //    })  
    //    break;

    // }

    // userplanmodel.deleteOne({extra_item:{item_name:item[0].item_name, item_qty:item[0].item_qty, item_price:item[0].item_price}}).then(
    //           () => {
    //             res.status(200).json({
    //               msg: 'success'
    //             });
    //           }
    //         ).catch(
    //           (error) => {
    //             res.status(200).json({
    //               msg: 'failure'
    //             });
    //           }
    //         );

// ===================================================




    async function deletedata(params){
  
      var dataId = await userplanmodel.find({ '_id' : _id  });

  //     var dataId = await userplanmodel.find({ '_id' : _id  },{extra_item: {$elemMatch: {item_name:item_name}}})
  // console.log(dataId.extra_item);
      var Length = dataId[0].extra_item.length;
      console.log(dataId[0].extra_item.length)
      var item = [];


      for(var i =0; i<Length ;i++)
      {
         if(dataId[0].extra_item[i].item_name != item_name)
         {
            //  var item_qty = dataId[0].extra_item[i].item_qty;
            // var item_price = dataId[0].extra_item[i].item_price;

            // item.push(dataId[0].extra_item[i].item_name)
            // item.push(dataId[0].extra_item[i].item_qty)
            // item.push(dataId[0].extra_item[i].item_price)
            item.push(dataId[0].extra_item[i]);
            // console.log(dataId[0].extra_item[i].item_qty);
            // console.log(dataId[0].extra_item[i].item_price);
            console.log(typeof item);
            // userplanmodel.deleteOne({extra_item:dataId[0].extra_item[i]}).then(
            //         () => {
            //           res.status(200).json({
            //             msg: 'success'
            //           });
            //         }
            //       ).catch(
            //         (error) => {
            //           res.status(200).json({
            //             msg: 'failure'
            //           });
            //         }
            //       );


            // const indexOfObject = dataId[0].extra_item[i].findIndex(object => {
            //   return object.dataId[0].extra_item[i].item_name === item_name;
            // });
            
            // console.log(indexOfObject); // 👉️ 1
                     
                // break;
         }
         else
         {
            console.log("no");
         }

      }
console.log(item.length);

       userplanmodel.findByIdAndUpdate(_id, {extra_item:item} , { new: true }, function( err,doc ) 
        {
            
              if (err) 
              {
                  console.log("Something wrong when updating data!");
              }
          
              // console.log(doc);
              console.log("our data will be moved successfully");
                               
      });

    }
    deletedata();
  }
