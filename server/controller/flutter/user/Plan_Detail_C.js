
var userplanmodel = require('../../../model/fluttermodel/userplanmodel.js');
var Plandetail_model = require('../../../model/adminmodel/plandetail/Plandetail_model.js');
var plantypemodel = require('../../../model/adminmodel/plandetail/plantypemodel');

var planorder_id_M = require('../../../model/fluttermodel/planorder_id_M');
var pause_plan_M = require('../../../model/fluttermodel/pause_plan_M');





var plandaysmodel = require('../../../model/adminmodel/plandetail/plandaysmodel.js');
var userextrafoodmodel = require('../../../model/adminmodel/plandetail/userextrafoodmodel.js');
var usermodel = require('../../../model/fluttermodel/fluttermodelusers');
var updatePlan_img_m1 = require('../../../model/adminmodel/plandetail/updatePlan_img_m');
const axios = require('axios');
var generator = require('generate-serial-number');
const orderid = require('order-id')('key');
const schedule = require('node-schedule');
const cron = require('node-cron');
const { json } = require('stream/consumers');
const currentYear = require("current-year");
const { userInfo } = require('os');
var process = require('process');

exports.getPlans = function (req, res) {
  // res.send({msg:"success"});


  Plandetail_model.find((error, data) => {
    if (error) {
      res.json({ msg: error })
    } else {
      res.json(data)
    }
  }).sort({ _id: 1 })

}

exports.getplanday = function (req, res) {
  // res.send({msg:"success"});


  plantypemodel.find((error, data) => {
    if (error) {
      res.json({ msg: error })
    } else {
      res.json(data)
    }
  }).sort({ _id: 1 })

}

exports.insertuserplan = async function (req, res)
{
  
  
  const {
    userid, meal_time, plantype, mealpreference, nonveg_pre_d, tiffintype, starting_date, plan_days, repeat_on, unlike_foods,  useraddress, extra_item, plan_status, plan_price, payment_id,
    order_id,amount,
    tiffin_price, txn_id, cf_order_id, payment_method } = req.body;

    console.log(req.body);

  async function getuserid() 
  {
      console.log(userid)
      var userinfo = await usermodel.find({ token: userid });
      //  res.send(userinfo);

      console.log(userinfo);
      var name = userinfo[0].name;
      console.log(name);
      var mobile = userinfo[0].mobile;

      // fetch order id userplan info ------------------------+}}}}=====================

      var options = {  year: 'numeric'};
      var today = new Date();
      // console.log(today)
    
      // console.log(today.toLocaleDateString("en-US")); // 9/17/2016
      var a = today.toLocaleDateString("pt-PT", options); // Saturday, September 17, 2016
      // console.log(a);
      var tifinco="tifinco"
      let result = tifinco.concat("-",a);
      // console.log(result)
      
      var order_id=0;
    
      // var data = await  userplanmodel.find().sort({_id:-1}).limit(1);
      //   var checkorderid=data[0].order_id
      //   if({checkorderid:null})
      //   {
      //     var orderId=result+("-")+01;
      // console.log(orderId);
      //   }
      //   // console.log(data);
        // res.send(data[0].order_id);
      
      // else
      // {
      var data = await  userplanmodel.find()
      // console.log(data[data.length-1])
      if(data.length == 0)
      {
        var oderId = 1;
        var orderId=(result+"-"+oderId)
      }
      else
      {
        var userdata =  data[data.length-1];

        var OldOderId = userdata.order_id.split('-')[2];
      //   console.log(OldOderId)+1;
      // console.log(OldOderId );
        var parse=parseInt(OldOderId);
        var oderId =parse+1;
        
        console.log(oderId)
        var a=currentYear();
       console.log(a);
    // var orderId=result+("-")+(oderId)
       var orderId=(result+"-"+oderId);
    // res.send(orderId);
   // }
      }


      ///////////////////////////////////////////////////////
  if(meal_time == 'dinner' ||meal_time == 'Dinner')
  {

    var data = new userplanmodel({
      userid, meal_time, plantype, mealpreference, nonveg_pre_d, tiffintype, starting_date, plan_days, repeat_on, unlike_foods, useraddress, extra_item, plan_status, plan_price, payment_id,
      order_id:orderId, remainingPlanDay_dinner:plan_days,remainingPlanDay_lunch:"0", tiffin_price, txn_id,amount, cf_order_id, payment_method, name, day_off: "0", plan_pause: "0",
      tiffinDeliver_status:"1"
    });
  }
  else if( meal_time == 'lunch' ||meal_time == 'Lunch')
  {
    var data = new userplanmodel({
      userid, meal_time, plantype, mealpreference, nonveg_pre_d, tiffintype, starting_date, plan_days, repeat_on, unlike_foods, useraddress, extra_item, plan_status, plan_price, payment_id,
      order_id:orderId, remainingPlanDay_dinner:"0",remainingPlanDay_lunch:plan_days, tiffin_price, txn_id,amount, cf_order_id, payment_method, name, day_off: "0", plan_pause: "0",
      tiffinDeliver_status:"1"
    });
  }
  else
  {
    var data = new userplanmodel({
      userid, meal_time, plantype, mealpreference, nonveg_pre_d, tiffintype, starting_date, plan_days, repeat_on, unlike_foods, useraddress, extra_item, plan_status, plan_price, payment_id,
      order_id:orderId, remainingPlanDay_dinner:plan_days,remainingPlanDay_lunch:plan_days, tiffin_price, txn_id,amount, cf_order_id, payment_method, name, day_off: "0", plan_pause: "0",
      tiffinDeliver_status:"1"
    });
  }



    console.log(data.plantype);
    //     await data.save();
    //     res.status(200).send({ msg: 'success' });

    //   }
    console.log(data)

    var options = { day: 'numeric', month: 'numeric', year: 'numeric'};
    var today = new Date();
    // console.log(today)

    // console.log(today.toLocaleDateString("en-US")); // 9/17/2016
    var a = today.toLocaleDateString("pt-PT", options); // Saturday, September 17, 2016
    console.log(a);



    var url = 'https://api.textlocal.in/send/?apikey=NzU0ZTM0NGM1YTUzNzI3MjY1Mzc2OTQxNjU1YTVhNDU=&numbers=' + mobile + '&sender=TFINCO&message=' +
      encodeURIComponent('Dear '+name+ ', Thank you for subscribing to Tifinco. Your Plan is ' +data.plantype+ ', Starting from date '+a+ '.'+'\nEnjoy the best class tiffin service. - Tifinco');
    // var url = 'https://api.textlocal.in/send/?apikey=NzU0ZTM0NGM1YTUzNzI3MjY1Mzc2OTQxNjU1YTVhNDU=&numbers='+'6267392982'+'&sender=TFINCO&message='+
    // encodeURIComponent('Dear manisha, Thank you for subscribing to Tifinco. Your Plan is Eco, Starting from date today.'+'/nEnjoy the best class tiffin service. - Tifinco');
    // console.log(data.userid)
    // console.log(data.item)

    // res.send(data.item[0].name.substring(0,15)+'...'+ "& others")

    // await data.save()

    // plan insert and update wallet 

    data.save().then(function (userdata)
    {
        usermodel.findOne({ token: userdata.userid}).then(function (userinfo)
        {
          
       
          var wallet = parseInt(userinfo.wallet);

          var wallet = wallet+parseInt(userdata.tiffin_price);

          console.log(wallet);
  
          usermodel.findOneAndUpdate
            ({token: userinfo.token}, {$set:{wallet:wallet}}, {new: true}, (err, doc) =>
            {

                if (err) 
                {
                    console.log("Something wrong when updating data!");
                }
            
                console.log(doc);
            });

       }).catch((err) => { res.json({ msg: "failed" }) })

 

    })

    res.status(200).send({ msg: 'success' });
// geetanjali code 
    //   axios.get(url).then(function (resMsg) 
    //   {


    //     // console.log(resMsg);
    //     console.log(resMsg.data);
    //     // res.send(resMsg.data)

    //   if (resMsg.data['status'] == 'success')
    //    {

    //        // res.send(resMsg.data)
    //     res.status(200).send({ msg: 'success' });

    //     // usermodel

    //     }

    // })
    // // geetanjali code  end
  }
  getuserid();


}




exports.plan_Orderid=async function(req,res)
{
  var options = {  year: 'numeric'};
  var today = new Date();
  // console.log(today)

  // console.log(today.toLocaleDateString("en-US")); // 9/17/2016
  var a = today.toLocaleDateString("pt-PT", options); // Saturday, September 17, 2016
  // console.log(a);
  var tifinco="tifinco"
  let result = tifinco.concat("-",a);
  // console.log(result)
  
  var order_id=0;

  var data = await  userplanmodel.find().sort({_id:-1}).limit(1);
res.send(data);
//     var OldOderId = data[0].order_id.split('-')[2];
//     console.log(OldOderId)+1;
//   console.log(OldOderId );
//     var parse=parseInt(OldOderId);
//     var oderId =parse+1;
    
//     console.log(oderId)
//     var a=currentYear();
// console.log(a);
// // var orderId=result+("-")+(oderId)
// var orderId=(result+"-"+oderId);
// res.send(orderId);


}

exports.getPlan_imgInfo = function (req, res) {
  // res.send({msg:"success"});


  updatePlan_img_m1.find((error, data) => {
    if (error) {
      res.json({ msg: error })
    } else {

      res.json(data)
    }
  })

}
exports.show = function (req, res) {
  updatePlan_img_m1.find((error, data) => {
    if (error) {
      res.json({ updatePlan_img_m1: error })
    } else {
      res.json({ updatePlan_img_m1: data })
    }
  })
};


// exports.getPlan_bgimgInfo = function(req,res)
//  {
//   // res.send({msg:"success"});


//   updatePlan_img_m.find((error, data) => {
//   if (error) {
//     res.json({msg:error})
//   } else {
//     res.json(data)
//   }
// }).sort({_id:1})

// }


exports.showuserextrafoodlist = function (req, res) {

  userextrafoodmodel.find((error, data) => {
    if (error) {
      res.json({ msg: error })
    } else {
      res.json(data)
    }
  }).sort({ _id: 1 })

}




exports.getplandays = function (req, res) {

  plandaysmodel.find((error, data) => {
    if (error) {
      res.json({ msg: error })
    } else {
      res.json(data)
    }
  }).sort({ _id: 1 })

}



exports.plan_order_id = async function (req, res) {




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
        // res.send(xhr.responseText)
         var resp= JSON.parse(xhr.responseText);
        // res.status(200).send(resp);
        // resp.JSON
        var data ={resp,cf_orderId}
        // res.crea({resp},cf_orderId)
        res.status(200).json(data)
  
     }};

     const {userid} = req.body;
     const {orderAmount} =req.body;


var alphanumeric = require('alphanumeric-id');
 
var cf_orderId= alphanumeric(7);

console.log(cf_orderId)

  var data = {
   
    orderId:cf_orderId,
    orderAmount:orderAmount,
    orderCurrency:"INR"
  
  
   }
// console.log(data)
  
  xhr.send(JSON.stringify(data));


  
  

}



exports.checkuserplaninfo = async function (req, res) {

  // var { userid } = req.body;
   var userid = req.body.userid;
  console.log(userid);
  var userinfo = await userplanmodel.find({ userid: userid })

console.log(userinfo);

  if (userinfo[0]["meal_time"] == "Both") {



  
    console.log("both")
    // res.send(userinfo);

    let date = new Date();
    var day=date.getDay();
console.log(day)
// var b=(day==userinfo[0]["repeat_on"])
// console.log(b)cons
var a = userinfo[0]["repeat_on"]



Date.prototype.getWeekDay = function() {
  var weekday = ["m", "t", "w", "th", "fr", "sat","sun"];
  
  return weekday[this.getDay()];
}
var date1 = new Date();

console.log(a[date1.getWeekDay])
    var crrtime = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
    // res.send(crrtime);
    // let options1 = {
    //   weekday: "long", year: "numeric", month: "short",
    //   day: "numeric", hour: "2-digit", minute: "2-digit"
    // };
    // var crrdate = date.toLocaleTimeString("en-us", options1);

    if (crrtime.split(' ')[0] < "15:00") {
      
      res.send(userinfo)
      // res.send(userinfo[0]["meal_time"])
      if (userinfo[0]["meal_time"] == "Lunch") {
        console.log("lunch")
        res.send(userinfo);


      }
      else{
        console.log("")
      }
    }
    else {
      if (userinfo[0]["meal_time"] == "Dinner") {

        console.log("dinner")
        res.send(userinfo);

      }
      else{
        console.log("")
      }
    }
  }



  else{
    // res.send(msg"not found")
    console.log("not match");
  }



  if (userinfo[0]["meal_time"] == "Lunch") {
    console.log("lunch")
    res.send(userinfo);


  }
  if (userinfo[0]["meal_time"] == "Dinner") {

    console.log("dinner")
    res.send(userinfo);

  }

  //   function(meal_time)
  // {
  //   if(userinfo.meal_time==Dinner)
  //   {
  //     console.log("dinner")
  //   }
  //   else if(meal_time==Lunch)
  //   {
  //     console.log("Lunch")
  //   }
  //   else if(meal_time==Both)
  //   {
  //     console.log("both")
  //   }
  //   else{
  //     console.log("nothing")
  //   }

  // }



  //  res.stutus(200).send(userinfo);
  //  res.status(201).send({userinfo});
  // console.log(userinfo[0]."meal_time");

}


////////////////////////


//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! updateuser addresss!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
exports.Editplan=function(req,res)
{
  const {userid,_id} = req.body;
    const{plan_id} = req.body;;

  async function  getuser() {


    var add = {
  
      repeat_on:req.body.repeat_on,
      useraddress:req.body.useraddress,
      // house_no:req.body.house_no,
      // landmark:req.body.landmark,
      // lat:req.body.lat,
      // long:req.body.long,
  
    }

  
    userplanmodel.findOneAndUpdate({_id: _id}, {$set: add}, {upsert: true}, function(err,doc) {
      if (err) { throw err; }
      else { console.log("Updated"); 
    // res.send(doc)}
    res.status(200).send({ msg:'success',doc})};
    }); 
  
    }
  
    getuser()

}
////////////////////  plan pause ///////////////////////////////////////////////

exports.planpause=async function(req,res)
{
  
  const {
    userid, meal_time, plantype, starting_date, ending_date, dayscount, activation_date  } = req.body;
console.log(req.body);

  async function getuserid() {
    console.log(userid)
    var userinfo = await usermodel.find({ token: userid });

    //  res.send(userinfo);

    console.log(userinfo);
    var name = userinfo[0].name;
    console.log(name);
   

    var data = new pause_plan_M({
      userid, meal_time, plantype, starting_date, ending_date, dayscount, activation_date, name
    });
    // console.log(data.plantype);
        await data.save();
        res.send({ msg: 'success' });

      }

      // console.log(data)

// res.send(resMsg.data)

     



  getuserid();


}
exports.checkplan_pause=async function(req,res)

{

  var token=req.body.token;
  console.log(token);


var planpause=  await pause_plan_M.findOne({userid:token})

if(!planpause)
{
 res.send(" your plan is not paused" );
}

// const strdate = planpause[0].starting_date;
// console.log(strdate.slice(0, 10));
else
{
  // res.send(planpause.starting_date.slice(0, 10));
  // console.log(planpause[0].starting_date.slice(0, 10));
  // console.log(planpause[0].ending_date.slice(0, 10));
  // console.log(planpause[0].activation_date.slice(0, 10));
  
  
  var starting_date=planpause.starting_date.slice(0, 10);
  var ending_date= planpause.ending_date.slice(0, 10);
  var activation_date=planpause.activation_date.slice(0, 13)
  
  new Date().toISOString().slice(0,10);
  var currentdate= new Date().toISOString().slice(0,10)
  
   console.log(  new Date().toISOString().slice(0,10));
  
   if(starting_date>currentdate && currentdate<ending_date)
  {
   res.send({msg:"pause comming soon" , ending_date:ending_date,starting_date:starting_date});
   }
    else if(currentdate>starting_date&& currentdate>ending_date)
  {
    res.send("pause expired ");
  //  res.send("plan pause");
   }
   else if(currentdate>=starting_date && ending_date>=currentdate)
   {
      //  res.send(" plan date not match"); 
       res.send({pause: true, msg: "paused today" ,activation_date:activation_date,ending_date:ending_date});
   }
   else
   {
       res.send("not found");
   }


}



////////////////////////////////////////////////////////////////////////////////////////////////////////////



//   var d1="2022-08-31 00:00:00.000";
// console.log(d1.slice(0, 10));
// var date1=d1.slice(0, 10)
// console.log(date1)

//     new Date().toISOString().slice(0,10);
//    var date2= new Date().toISOString().slice(0,10)
   
//     console.log(  new Date().toISOString().slice(0,10));
//     console.log(date1===date2)
//     if(date1===date2)
//     {
//         console.log("plan pause");
//     }
//     else if(date1>date2)
//    {
//     console.log("comming pause");
//     }
//      else if(date1<date2)
//    {
//     console.log("plan pause");
//     }
//     else if(date1 !==date2)
//     {
//         console.log(" plan date not match"); 
//     }
//     else
//     {
//         console.log("not found");
//     }

}


exports.deletePausedPlan=async function(req,res)
{
// res.send("ok");

const {userid} =req.body;
 

  console.log(userid);


  pause_plan_M.findOne({ userid: userid })
    .then(doc => {
        console.log(doc);

         
        
        pause_plan_M.deleteOne({ userid: doc.userid })
            .then(d => {
              res.send([d]);
                console.log("Removed succesfully");
            })
            .catch(error => {
                console.log(error);
            });
    })
    .catch(error => {
        console.log(error);
})
}


exports.getuserplan_and_details=function(req,res){
  async function   check(params) {


  
    new Date().toISOString().slice(0,10);
    var currentdate= new Date().toISOString().slice(0,10)
    
    
    
    var userinfo=  await  userplanmodel.aggregate([
      { $lookup:
         {
           from: 'userinfos',
           localField: 'userid',
           foreignField: 'token',
           as: 'userdetails'
         }
       },
  
       { $lookup:
        {
          from: 'pauseplan_infos',
          localField: 'userid',
          foreignField: 'userid',
          as: 'planpause'
        }
      },
  
      ])
          // console.log(userinfo)
    var userdata=[];
    var usernot=[];
  
  
  
   var currentDate = new Date();
   var currentHour = currentDate.getHours();
   var currentMinute = currentDate.getMinutes();
   
  
  var currenttime  = currentHour + ":" + currentMinute;
  console.log(currenttime)
  
  
  new Date().toISOString().slice(0,10);
  var currentdate= new Date().toISOString().slice(0,10)
  
  
  
  
    for(var i=0;i<userinfo.length;i++){
  
   
    
      if(currentdate>=userinfo[i].starting_date){
      
      
  
  
        // if(time<"03:00 PM" ){
          if(currenttime<"15:00" ){
  
  
                    //  console.log("lunch")
                    if(userinfo[i].meal_time=="Lunch" && userinfo[i].remainingPlanDay_lunch!=0){
  
                      // console.log(userinfo[i].planpause=='')
                      // console.log(userinfo[i])
  
                      if(userinfo[i].planpause==''){
                        // userdata.push(userinfo[i])
  
  
                        switch (new Date().getDay()) {
                          case 0:
                            if(userinfo[i].repeat_on['s']==1){
    
                              userdata.push(userinfo[i])
    
                            }
                            break;
                          case 1:
                            
                            if(userinfo[i].repeat_on['m']==1){
    
                              userdata.push(userinfo[i])
    
                            }
                            break;
                          case 2:
                            
                            if(userinfo[i].repeat_on['t']==1){
    
                              userdata.push(userinfo[i])
    
                            }
                            break;
                          case 3:
    
                            if(userinfo[i].repeat_on['w']==1){
    
                              userdata.push(userinfo[i])
    
                            }
                            break;
                          case 4:
    
                            if(userinfo[i].repeat_on['th']==1){
    
                              userdata.push(userinfo[i])
    
                            }
                            break;
                          case 5:
    
                            if(userinfo[i].repeat_on['fr']==1){
    
                              userdata.push(userinfo[i])
                              console.log(userdata)
    
                            }
                            break;
                          case 6:
    
                            if(userinfo[i].repeat_on['sat']==1){
    
                              userdata.push(userinfo[i])
    
                            }
                        }
  
                      }
  
                      else{
  
                      for(var j=0;j<userinfo[i].planpause.length;j++){
                   
  
                         if(currentdate>userinfo[i].planpause[j].starting_date.slice(0, 10) && currentdate>userinfo[i].planpause[j].ending_date.slice(0, 10) ){
  
                          // userdata.push(userinfo[i])
  
                          switch (new Date().getDay()) {
                            case 0:
                              if(userinfo[i].repeat_on['s']==1){
      
                                userdata.push(userinfo[i])
      
                              }
                              break;
                            case 1:
                              
                              if(userinfo[i].repeat_on['m']==1){
      
                                userdata.push(userinfo[i])
      
                              }
                              break;
                            case 2:
                              
                              if(userinfo[i].repeat_on['t']==1){
      
                                userdata.push(userinfo[i])
      
                              }
                              break;
                            case 3:
      
                              if(userinfo[i].repeat_on['w']==1){
      
                                userdata.push(userinfo[i])
      
                              }
                              break;
                            case 4:
      
                              if(userinfo[i].repeat_on['th']==1){
      
                                userdata.push(userinfo[i])
      
                              }
                              break;
                            case 5:
      
                              if(userinfo[i].repeat_on['fr']==1){
      
                                userdata.push(userinfo[i])
                                console.log(userdata)
      
                              }
                              break;
                            case 6:
      
                              if(userinfo[i].repeat_on['sat']==1){
      
                                userdata.push(userinfo[i])
      
                              }
                          }
                         }
                        
                         else if(currentdate<userinfo[i].planpause[j].starting_date.slice(0, 10) && currentdate<userinfo[i].planpause[j].ending_date.slice(0, 10) ){
  
                          // userdata.push(userinfo[i])
  
  
                          switch (new Date().getDay()) {
                            case 0:
                              if(userinfo[i].repeat_on['s']==1){
      
                                userdata.push(userinfo[i])
      
                              }
                              break;
                            case 1:
                              
                              if(userinfo[i].repeat_on['m']==1){
      
                                userdata.push(userinfo[i])
      
                              }
                              break;
                            case 2:
                              
                              if(userinfo[i].repeat_on['t']==1){
      
                                userdata.push(userinfo[i])
      
                              }
                              break;
                            case 3:
      
                              if(userinfo[i].repeat_on['w']==1){
      
                                userdata.push(userinfo[i])
      
                              }
                              break;
                            case 4:
      
                              if(userinfo[i].repeat_on['th']==1){
      
                                userdata.push(userinfo[i])
      
                              }
                              break;
                            case 5:
      
                              if(userinfo[i].repeat_on['fr']==1){
      
                                userdata.push(userinfo[i])
                                console.log(userdata)
      
                              }
                              break;
                            case 6:
      
                              if(userinfo[i].repeat_on['sat']==1){
      
                                userdata.push(userinfo[i])
      
                              }
                          }
  
                         }
                      
  
                        }
                      
      
                      }
                
  
                    }
                    else if(userinfo[i].meal_time=="Both" && (userinfo[i].remainingPlanDay_lunch!=0 )){
  
                      if(userinfo[i].planpause==''){
                        // userdata.push(userinfo[i])
      
      
                        switch (new Date().getDay()) {
                          case 0:
                            if(userinfo[i].repeat_on['s']==1){
      
                              userdata.push(userinfo[i])
      
                            }
                            break;
                          case 1:
                            
                            if(userinfo[i].repeat_on['m']==1){
      
                              userdata.push(userinfo[i])
      
                            }
                            break;
                          case 2:
                            
                            if(userinfo[i].repeat_on['t']==1){
      
                              userdata.push(userinfo[i])
      
                            }
                            break;
                          case 3:
      
                            if(userinfo[i].repeat_on['w']==1){
      
                              userdata.push(userinfo[i])
      
                            }
                            break;
                          case 4:
      
                            if(userinfo[i].repeat_on['th']==1){
      
                              userdata.push(userinfo[i])
      
                            }
                            break;
                          case 5:
      
                            if(userinfo[i].repeat_on['fr']==1){
      
                              userdata.push(userinfo[i])
                              console.log(userdata)
      
                            }
                            break;
                          case 6:
      
                            if(userinfo[i].repeat_on['sat']==1){
      
                              userdata.push(userinfo[i])
      
                            }
                        }
      
                      }
      
                      else{
      
                      for(var j=0;j<userinfo[i].planpause.length;j++){
                   
      
                         if(currentdate>userinfo[i].planpause[j].starting_date.slice(0, 10) && currentdate>userinfo[i].planpause[j].ending_date.slice(0, 10) ){
      
                          // userdata.push(userinfo[i])
      
                          switch (new Date().getDay()) {
                            case 0:
                              if(userinfo[i].repeat_on['s']==1){
      
                                userdata.push(userinfo[i])
      
                              }
                              break;
                            case 1:
                              
                              if(userinfo[i].repeat_on['m']==1){
      
                                userdata.push(userinfo[i])
      
                              }
                              break;
                            case 2:
                              
                              if(userinfo[i].repeat_on['t']==1){
      
                                userdata.push(userinfo[i])
      
                              }
                              break;
                            case 3:
      
                              if(userinfo[i].repeat_on['w']==1){
      
                                userdata.push(userinfo[i])
      
                              }
                              break;
                            case 4:
      
                              if(userinfo[i].repeat_on['th']==1){
      
                                userdata.push(userinfo[i])
      
                              }
                              break;
                            case 5:
      
                              if(userinfo[i].repeat_on['fr']==1){
      
                                userdata.push(userinfo[i])
                                console.log(userdata)
      
                              }
                              break;
                            case 6:
      
                              if(userinfo[i].repeat_on['sat']==1){
      
                                userdata.push(userinfo[i])
      
                              }
                          }
                         }
                        
                         else if(currentdate<userinfo[i].planpause[j].starting_date.slice(0, 10) && currentdate<userinfo[i].planpause[j].ending_date.slice(0, 10) ){
      
                          // userdata.push(userinfo[i])
      
      
                          switch (new Date().getDay()) {
                            case 0:
                              if(userinfo[i].repeat_on['s']==1){
      
                                userdata.push(userinfo[i])
      
                              }
                              break;
                            case 1:
                              
                              if(userinfo[i].repeat_on['m']==1){
      
                                userdata.push(userinfo[i])
      
                              }
                              break;
                            case 2:
                              
                              if(userinfo[i].repeat_on['t']==1){
      
                                userdata.push(userinfo[i])
      
                              }
                              break;
                            case 3:
      
                              if(userinfo[i].repeat_on['w']==1){
      
                                userdata.push(userinfo[i])
      
                              }
                              break;
                            case 4:
      
                              if(userinfo[i].repeat_on['th']==1){
      
                                userdata.push(userinfo[i])
      
                              }
                              break;
                            case 5:
      
                              if(userinfo[i].repeat_on['fr']==1){
      
                                userdata.push(userinfo[i])
                                console.log(userdata)
      
                              }
                              break;
                            case 6:
      
                              if(userinfo[i].repeat_on['sat']==1){
      
                                userdata.push(userinfo[i])
      
                              }
                          }
      
                         }
                      
      
                        }
                      
      
                      }
                    }
  
                 
        
        }
        else{
  
                 console.log("dinner")
  
                if(userinfo[i].meal_time=="Dinner" && userinfo[i].remainingPlanDay_dinner!=0){
  
                  if(userinfo[i].planpause==''){
                    // userdata.push(userinfo[i])
  
  
                    switch (new Date().getDay()) {
                      case 0:
                        if(userinfo[i].repeat_on['s']==1){
  
                          userdata.push(userinfo[i])
  
                        }
                        break;
                      case 1:
                        
                        if(userinfo[i].repeat_on['m']==1){
  
                          userdata.push(userinfo[i])
  
                        }
                        break;
                      case 2:
                        
                        if(userinfo[i].repeat_on['t']==1){
  
                          userdata.push(userinfo[i])
  
                        }
                        break;
                      case 3:
  
                        if(userinfo[i].repeat_on['w']==1){
  
                          userdata.push(userinfo[i])
  
                        }
                        break;
                      case 4:
  
                        if(userinfo[i].repeat_on['th']==1){
  
                          userdata.push(userinfo[i])
  
                        }
                        break;
                      case 5:
  
                        if(userinfo[i].repeat_on['fr']==1){
  
                          userdata.push(userinfo[i])
                          console.log(userdata)
  
                        }
                        break;
                      case 6:
  
                        if(userinfo[i].repeat_on['sat']==1){
  
                          userdata.push(userinfo[i])
  
                        }
                    }
  
                  }
  
                  else{
  
                  for(var j=0;j<userinfo[i].planpause.length;j++){
               
  
                     if(currentdate>userinfo[i].planpause[j].starting_date.slice(0, 10) && currentdate>userinfo[i].planpause[j].ending_date.slice(0, 10) ){
  
                      // userdata.push(userinfo[i])
  
                      switch (new Date().getDay()) {
                        case 0:
                          if(userinfo[i].repeat_on['s']==1){
  
                            userdata.push(userinfo[i])
  
                          }
                          break;
                        case 1:
                          
                          if(userinfo[i].repeat_on['m']==1){
  
                            userdata.push(userinfo[i])
  
                          }
                          break;
                        case 2:
                          
                          if(userinfo[i].repeat_on['t']==1){
  
                            userdata.push(userinfo[i])
  
                          }
                          break;
                        case 3:
  
                          if(userinfo[i].repeat_on['w']==1){
  
                            userdata.push(userinfo[i])
  
                          }
                          break;
                        case 4:
  
                          if(userinfo[i].repeat_on['th']==1){
  
                            userdata.push(userinfo[i])
  
                          }
                          break;
                        case 5:
  
                          if(userinfo[i].repeat_on['fr']==1){
  
                            userdata.push(userinfo[i])
                            console.log(userdata)
  
                          }
                          break;
                        case 6:
  
                          if(userinfo[i].repeat_on['sat']==1){
  
                            userdata.push(userinfo[i])
  
                          }
                      }
                     }
                    
                     else if(currentdate<userinfo[i].planpause[j].starting_date.slice(0, 10) && currentdate<userinfo[i].planpause[j].ending_date.slice(0, 10) ){
  
                      // userdata.push(userinfo[i])
  
  
                      switch (new Date().getDay()) {
                        case 0:
                          if(userinfo[i].repeat_on['s']==1){
  
                            userdata.push(userinfo[i])
  
                          }
                          break;
                        case 1:
                          
                          if(userinfo[i].repeat_on['m']==1){
  
                            userdata.push(userinfo[i])
  
                          }
                          break;
                        case 2:
                          
                          if(userinfo[i].repeat_on['t']==1){
  
                            userdata.push(userinfo[i])
  
                          }
                          break;
                        case 3:
  
                          if(userinfo[i].repeat_on['w']==1){
  
                            userdata.push(userinfo[i])
  
                          }
                          break;
                        case 4:
  
                          if(userinfo[i].repeat_on['th']==1){
  
                            userdata.push(userinfo[i])
  
                          }
                          break;
                        case 5:
  
                          if(userinfo[i].repeat_on['fr']==1){
  
                            userdata.push(userinfo[i])
                            console.log(userdata)
  
                          }
                          break;
                        case 6:
  
                          if(userinfo[i].repeat_on['sat']==1){
  
                            userdata.push(userinfo[i])
  
                          }
                      }
  
                     }
                  
  
                    }
                  
  
                  }
  
                
                }
                else if(userinfo[i].meal_time=="Both" && (userinfo[i].remainingPlanDay_dinner!=0)){
  
                  if(userinfo[i].planpause==''){
                    // userdata.push(userinfo[i])
    
    
                    switch (new Date().getDay()) {
                      case 0:
                        if(userinfo[i].repeat_on['s']==1){
    
                          userdata.push(userinfo[i])
    
                        }
                        break;
                      case 1:
                        
                        if(userinfo[i].repeat_on['m']==1){
    
                          userdata.push(userinfo[i])
    
                        }
                        break;
                      case 2:
                        
                        if(userinfo[i].repeat_on['t']==1){
    
                          userdata.push(userinfo[i])
    
                        }
                        break;
                      case 3:
    
                        if(userinfo[i].repeat_on['w']==1){
    
                          userdata.push(userinfo[i])
    
                        }
                        break;
                      case 4:
    
                        if(userinfo[i].repeat_on['th']==1){
    
                          userdata.push(userinfo[i])
    
                        }
                        break;
                      case 5:
    
                        if(userinfo[i].repeat_on['fr']==1){
    
                          userdata.push(userinfo[i])
                          console.log(userdata)
    
                        }
                        break;
                      case 6:
    
                        if(userinfo[i].repeat_on['sat']==1){
    
                          userdata.push(userinfo[i])
    
                        }
                    }
    
                  }
    
                  else{
    
                  for(var j=0;j<userinfo[i].planpause.length;j++){
               
    
                     if(currentdate>userinfo[i].planpause[j].starting_date.slice(0, 10) && currentdate>userinfo[i].planpause[j].ending_date.slice(0, 10) ){
    
                      // userdata.push(userinfo[i])
    
                      switch (new Date().getDay()) {
                        case 0:
                          if(userinfo[i].repeat_on['s']==1){
    
                            userdata.push(userinfo[i])
    
                          }
                          break;
                        case 1:
                          
                          if(userinfo[i].repeat_on['m']==1){
    
                            userdata.push(userinfo[i])
    
                          }
                          break;
                        case 2:
                          
                          if(userinfo[i].repeat_on['t']==1){
    
                            userdata.push(userinfo[i])
    
                          }
                          break;
                        case 3:
    
                          if(userinfo[i].repeat_on['w']==1){
    
                            userdata.push(userinfo[i])
    
                          }
                          break;
                        case 4:
    
                          if(userinfo[i].repeat_on['th']==1){
    
                            userdata.push(userinfo[i])
    
                          }
                          break;
                        case 5:
    
                          if(userinfo[i].repeat_on['fr']==1){
    
                            userdata.push(userinfo[i])
                            console.log(userdata)
    
                          }
                          break;
                        case 6:
    
                          if(userinfo[i].repeat_on['sat']==1){
    
                            userdata.push(userinfo[i])
    
                          }
                      }
                     }
                    
                     else if(currentdate<userinfo[i].planpause[j].starting_date.slice(0, 10) && currentdate<userinfo[i].planpause[j].ending_date.slice(0, 10) ){
    
                      // userdata.push(userinfo[i])
    
    
                      switch (new Date().getDay()) {
                        case 0:
                          if(userinfo[i].repeat_on['s']==1){
    
                            userdata.push(userinfo[i])
    
                          }
                          break;
                        case 1:
                          
                          if(userinfo[i].repeat_on['m']==1){
    
                            userdata.push(userinfo[i])
    
                          }
                          break;
                        case 2:
                          
                          if(userinfo[i].repeat_on['t']==1){
    
                            userdata.push(userinfo[i])
    
                          }
                          break;
                        case 3:
    
                          if(userinfo[i].repeat_on['w']==1){
    
                            userdata.push(userinfo[i])
    
                          }
                          break;
                        case 4:
    
                          if(userinfo[i].repeat_on['th']==1){
    
                            userdata.push(userinfo[i])
    
                          }
                          break;
                        case 5:
    
                          if(userinfo[i].repeat_on['fr']==1){
    
                            userdata.push(userinfo[i])
                            console.log(userdata)
    
                          }
                          break;
                        case 6:
    
                          if(userinfo[i].repeat_on['sat']==1){
    
                            userdata.push(userinfo[i])
    
                          }
                      }
    
                     }
                  
    
                    }
                  
    
                  }
                }
  
             
          
        }
  
  
  
    
    
      }
      else{
        usernot.push(userinfo[i])
      }
    
    
    }
  
  
    res.send(userdata)
  
  
    
    



      
     }
 check()
}



exports.getuserplandetail_WithActivationDate= async function(req,res)
{
   const {userid}= req.body;
   console.log(userid);
   
  //  const tiffinDeliver_status = req.body.tiffinDeliver_status ;
      
      // console.log(tiffinDeliver_status);

      // const renewDate = req.body.renewDate;
      // console.log("2022-09-15:"+renewDate);
    // let today = new Date().toISOString().slice(0, 10);
    // console.log(today);


    // userplanmodel.findOne({ userid: userid }).sort({ _id:-1 })
    // .then(doc => {
    //     console.log(doc);
    //     var sliced_data =  parseInt(doc.starting_date.slice(0,8));
    //     console.log("sliced_data:"+sliced_data);
    //     var ending_date = parseInt(doc.starting_date.slice(8,10));  
    //     console.log("ending_date:"+ending_date); //2022-8-22 = 22;
    //     var plan_days = parseInt(doc.plan_days);
    //     console.log(parseInt(doc.starting_date.slice(8,10))+parseInt(doc.plan_days));
    //     var totaladd = parseInt(doc.starting_date.slice(8,10))+parseInt(doc.plan_days); 
    //     var final_activationDate = sliced_data+'-'+totaladd;
    //     console.log(final_activationDate);
       
    // }
    // )

  
    
    

            var  userinfo = await userplanmodel.findOne({userid: userid}).sort({ _id:-1 });

            // var Len = Object.keys(userinfo).length;
            // console.log(Len);
            //  console.log( userinfo)

            //  console.log("your plan is exist ");
            if(userinfo == null )
            {
                console.log("you don't have any previous plan for renew");
                res.send("Welcome To  our Tiffin Service!!! You Can Purchase Your Favorite Plan ");
            }
            // res.send(userinfo);

            else
            {
console.log("htrhgewfgterwfgrewgrewgerwfg")
              // here i am only checking the paused plan for perticular user 

                  var _id = userinfo._id;
                  var plantype = userinfo.plantype;
                  var starting_date = userinfo.starting_date;
                  var plan_repeat_on = userinfo.repeat_on;
                  var meal_time = userinfo.meal_time;
                  var plan_days = userinfo.plan_days;
                  var remainingPlanDay_lunch = userinfo.remainingPlanDay_lunch.split(" ")[0];
                  var remainingPlanDay_dinner = userinfo.remainingPlanDay_dinner.split(" ")[0];
                  // var tiffinDeliver_status = userinfo.tiffinDeliver_status;
                  
                  if(meal_time == "Dinner" || meal_time == "Both")
                  {
                    var userdinnerAdd1 = userinfo.useraddress.dinner_useraddress.addressLine1;
                    var userdinnerAdd2 = userinfo.useraddress.dinner_useraddress.addressLine2;
                    var dinner_houseNo = userinfo.useraddress.dinner_useraddress.house_no;
                    var dinner_landmark = userinfo.useraddress.dinner_useraddress.landmark;
                    var dinner_addresstype = userinfo.useraddress.dinner_useraddress.addresstype;
                  }
                  else
                  {
                    var userlunchAdd1 = userinfo.useraddress.lunch_useraddress.addressLine1;
                    var userlunchAdd2 = userinfo.useraddress.lunch_useraddress.addressLine2;
                    var lunch_houseNo = userinfo.useraddress.lunch_useraddress.house_no;
                    var lunch_landmark = userinfo.useraddress.lunch_useraddress.landmark;
                    var lunch_addresstype = userinfo.useraddress.lunch_useraddress.addresstype;
                  }

                  // console.log( lunch_houseNo);
                  // console.log(lunch_landmark);
                  // console.log( dinner_houseNo);
                  // console.log(dinner_landmark);
                
                  // console.log(plan_repeat_on.sun);
                  // console.log(plan_repeat_on.m);
                  // console.log(plan_repeat_on.t);
                  // console.log(plan_repeat_on.w);
                  // console.log(plan_repeat_on.th);
                  // console.log(plan_repeat_on.fr);
                  // console.log(plan_repeat_on.sat);
                  
                  // console.log(remainingPlanDay_lunch);
                  // console.log(remainingPlanDay_dinner);
                  // console.log(_id );
                  // console.log(meal_time);
                  // console.log(tiffinDeliver_status);
                  // console.log(userlunchAdd1);
                  // console.log(userlunchAdd2);
      
                  // console.log(userdinnerAdd1);
      
                  // console.log(userdinnerAdd2);
      
      
                var today = new Date();
                  console.log(today.getDay());
                  var CurrentDate= new Date().toISOString().slice(0,10);
                  console.log(CurrentDate)
                  var Current_time = new Date().toLocaleTimeString('en-US');
                  console.log(Current_time);

                  // var {plan_days} = req.body; 
                  // var renewplanStatus = 0;
                  // if(plan_days == undefined ) // there is no any plan for renew
      
                  //   {
                  //        console.log("there is no any plan for renew");
                  //        if(meal_time =='Dinner'&& remainingPlanDay_dinner == 0 )
                  //        {
                  //          console.log(" Oops!! your plan is expired you will not receive your Dinner meal from tomorrow");
                  //          process.exit(0);
                  //        }
                  //        else if(meal_time == 'lunch' && remainingPlanDay_lunch == 0 )
                  //        {
                  //           console.log(" Oops!! your plan is expired you will not receive your Lunch meal from tomorrow");
                  //           process.exit(0);
                  //        }
                  //        else if(remainingPlanDay_lunch == 0 && remainingPlanDay_dinner == 0 )
                  //        {
                  //         console.log(" Oops!! your plan is expired you will not receive your meal from tomorrow");
                  //         process.exit(0);
                  //        } 
                  //   }
                  //   else
                  //   {
                  //      console.log(plan_days); //from req.body not from table     /// If user wants to renew their plan
                  //      var plan_daysarr = [];
                  //      plan_daysarr.push(plan_days);
                  //      console.log(plan_daysarr);  //  it returns [ '7 Days' ]
                       
                  //        renewplan_days =plan_daysarr.pop() ;

                  //        console.log("renewPlan  days  is :"+parseInt(renewplan_days));

                  //        var  userinfo_RENEW = await userplanmodel.findOne({  userid: userid}).sort({ _id:-1 });
                  //        var remainingPlanDay_lunch = userinfo_RENEW.remainingPlanDay_lunch;
                  //        var remainingPlanDay_dinner = userinfo_RENEW.remainingPlanDay_dinner;
                  //        var meal_time = userinfo_RENEW.meal_time;

                  //        var remainingPlanDay_lunch = userinfo_RENEW.remainingPlanDay_lunch;
                  //        console.log("remainingPlanDay_lunch :"+remainingPlanDay_lunch );
                  //        console.log("remainingPlanDay_dinner :"+remainingPlanDay_dinner );
                  //        console.log("meal_time:"+meal_time);

                  //        if(meal_time == 'lunch'||meal_time =='Lunch')
                  //        {
                  //               const data =
                  //               {
                  //                 plan_days:parseInt(renewplan_days),
                  //                 remainingPlanDay_lunch : parseInt(renewplan_days)+ parseInt(remainingPlanDay_lunch)
                  //               }
        
                  //             userplanmodel.findByIdAndUpdate(_id, data , { new: true }, function( err,doc ) 
                  //             {
            
                  //                   if (err) 
                  //                   {
                  //                       console.log("Something wrong when updating data!");
                  //                   }
                                
                  //                   // console.log(doc);
                  //                   console.log("our plan for lunch is renewed successfully");
                               
                  //             });
                  //        }
                  //        else if(meal_time == 'dinner'||meal_time =='Dinner')
                  //        {
                  //               const data =
                  //               {
                  //                 plan_days:parseInt(renewplan_days),
                  //                 remainingPlanDay_dinner : parseInt(renewplan_days)+ parseInt(remainingPlanDay_dinner)
                  //               }
        
                  //             userplanmodel.findByIdAndUpdate(_id, data , { new: true }, function( err,doc ) 
                  //             {
            
                  //                   if (err) 
                  //                   {
                  //                       console.log("Something wrong when updating data!");
                  //                   }
                                
                  //                   // console.log(doc);
                  //                   console.log("our plan for dinner is renewed successfully");
                              
                  //             });

                  //        }
                  //        else if(meal_time == 'both'||meal_time =='Both')
                  //        {
                  //               const data =
                  //               {
                  //                 plan_days:parseInt(renewplan_days),
                  //                 remainingPlanDay_lunch : parseInt(renewplan_days)+ parseInt(remainingPlanDay_lunch),
                  //                 remainingPlanDay_dinner : parseInt(renewplan_days)+ parseInt(remainingPlanDay_dinner)
                  //               }
        
                  //             userplanmodel.findByIdAndUpdate(_id, data , { new: true }, function( err,doc ) 
                  //             {
            
                  //                   if (err) 
                  //                   {
                  //                       console.log("Something wrong when updating data!");
                  //                   }
                                
                  //                   // console.log(doc);
                  //                   console.log("our plan for  lunch and dinner is renewed successfully");
                              
                  //             });
                  //        }
                  //        else
                  //        {
                  //          console.log("no plan for renew");
                  //        }

                      
                      
                  //     // var renewplanStatus = 1;

                  //   }     /// end of If user wants to renew their plan 

  // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++my new code ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  
  
              userplanmodel.aggregate([
                { $lookup:
                  {
                    from: 'pauseplan_infos',
                    localField: 'userid',
                    foreignField: 'userid',
                    as: 'plandetai'
                  }
                }
                ]).then(function(data) {
         
                    var PauseStartingDate =data[0].plandetai[0].starting_date;
                    var PauseEndingDate = data[0].plandetai[0].ending_date;
                  
                    console.log("ghaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasdv");
                    var Delivery_TimeLunch = "1:00-2:00";
                    var Delivery_TimeDinner = "8:00-9:00"
            if(CurrentDate >= starting_date || CurrentDate > PauseEndingDate)
            {
              // console.log("first");
              if(remainingPlanDay_lunch >0 && meal_time == "Lunch" )
              {
                console.log("first")
                  if(plan_repeat_on.sun =="1" && today.getDay()=='0')
                  {
                   
                      if(today.getHours()<15)
                      {
                        console.log("response ke upar")
                       
                         res.send({msg:"success", Your_Upcoming_Meal: "Lunch", Delivery_Time: Delivery_TimeLunch, remainingPlanDay_lunch:remainingPlanDay_lunch, plan_days:plan_days, 
                      plantype:plantype, Lunch_address1 :userlunchAdd1, Lunch_address2 : userlunchAdd2, HouseNo:lunch_houseNo, Landmark : lunch_landmark, Addresstype : lunch_addresstype})
                      }
                      else
                      {
                         res.send("No Delivery till tommorrow");
                      }
                  }
                  if(plan_repeat_on.sun =="0" && today.getDay()=='0')
                  {
                      res.send("Your Plan Is Not Recommended For Sunday")
                  }

                  if(plan_repeat_on.m =="1" && today.getDay()=='1')
                  {
                      if(today.getHours()<15)
                      {
                        res.send({msg:"success", Your_Upcoming_Meal: "Lunch", Delivery_Time: Delivery_TimeLunch, remainingPlanDay_lunch:remainingPlanDay_lunch, plan_days:plan_days, 
                      plantype:plantype, Lunch_address1 :userlunchAdd1, Lunch_address2 : userlunchAdd2, HouseNo:lunch_houseNo, Landmark : lunch_landmark, Addresstype : lunch_addresstype})
                      }
                      else
                      {
                        res.send("No Delivery till tommorrow");
                      }
                  }
                  if(plan_repeat_on.m =="0" && today.getDay()=='1')
                  {
                      res.send("Your Plan Is Not Recommended For Monday")
                  }

                  if(plan_repeat_on.t =="1" && today.getDay()=='2')
                  {
                      if(today.getHours()<15)
                      {
                        res.send({msg:"success", Your_Upcoming_Meal: "Lunch", Delivery_Time: Delivery_TimeLunch, remainingPlanDay_lunch:remainingPlanDay_lunch, plan_days:plan_days, 
                      plantype:plantype, Lunch_address1 :userlunchAdd1, Lunch_address2 : userlunchAdd2, HouseNo:lunch_houseNo, Landmark : lunch_landmark, Addresstype : lunch_addresstype})
                      }
                      else
                      {
                        res.send("No Delivery till tommorrow");
                      } 
                  }
                  if(plan_repeat_on.t =="0" && today.getDay()=='2')
                  {
                      res.send("Your Plan Is Not Recommended For Tuesday")
                  }

                  if(plan_repeat_on.w =="1" && today.getDay()=='3')
                  {
                      if(today.getHours()<15)
                      {
                        res.send({msg:"success", Your_Upcoming_Meal: "Lunch", Delivery_Time: Delivery_TimeLunch, remainingPlanDay_lunch:remainingPlanDay_lunch, plan_days:plan_days, 
                      plantype:plantype, Lunch_address1 :userlunchAdd1, Lunch_address2 : userlunchAdd2, HouseNo:lunch_houseNo, Landmark : lunch_landmark, Addresstype : lunch_addresstype})
                      }
                      else
                      {
                        res.send("No Delivery till tommorrow");
                      }
                  }
                  if(plan_repeat_on.w =="0" && today.getDay()=='3')
                  {
                        res.send("Your Plan Is Not Recommended For Wednesday")
                  }

                  if(plan_repeat_on.th =="1" && today.getDay()=='4')
                  {
                      if(today.getHours()<15)
                      {
                        res.send({msg:"success", Your_Upcoming_Meal: "Lunch", Delivery_Time: Delivery_TimeLunch, remainingPlanDay_lunch:remainingPlanDay_lunch, plan_days:plan_days, 
                      plantype:plantype, Lunch_address1 :userlunchAdd1, Lunch_address2 : userlunchAdd2, HouseNo:lunch_houseNo, Landmark : lunch_landmark, Addresstype : lunch_addresstype})
                      }
                      else
                      {
                        res.send("No Delivery till tommorrow");
                      }
                  }
                  if(plan_repeat_on.th =="0" && today.getDay()=='4')
                  {
                        res.send("Your Plan Is Not Recommended For Thursday")
                  }

                  if(plan_repeat_on.fr =="1" && today.getDay()=='5')
                  {
                      if(today.getHours()<15)
                      {
                        res.send({msg:"success", Your_Upcoming_Meal: "Lunch", Delivery_Time: Delivery_TimeLunch, remainingPlanDay_lunch:remainingPlanDay_lunch, plan_days:plan_days, 
                      plantype:plantype, Lunch_address1 :userlunchAdd1, Lunch_address2 : userlunchAdd2, HouseNo:lunch_houseNo, Landmark : lunch_landmark, Addresstype : lunch_addresstype})
                      }
                      else
                      {
                        res.send("No Delivery till tommorrow");
                      }
                  }
                  if(plan_repeat_on.fr =="0" && today.getDay()=='5')
                  {
                        res.send("Your Plan Is Not Recommended For Friday")
                  }

                  if(plan_repeat_on.sat =="1" && today.getDay()=='6')
                  {
                      if(today.getHours()<15)
                      {
                        res.send({msg:"success", Your_Upcoming_Meal: "Lunch", Delivery_Time: Delivery_TimeLunch, remainingPlanDay_lunch:remainingPlanDay_lunch, plan_days:plan_days, 
                      plantype:plantype, Lunch_address1 :userlunchAdd1, Lunch_address2 : userlunchAdd2, HouseNo:lunch_houseNo, Landmark : lunch_landmark, Addresstype : lunch_addresstype})
                      }
                      else
                      {
                        res.send("No Delivery till tommorrow");
                      } 
                  }
                  if(plan_repeat_on.sat =="0" && today.getDay()=='6')
                  {
                        res.send("Your Plan Is Not Recommended For saturday")
                  }

              }   
              //  ///////////////////////////////////////////////////////////---------------------Dinner Time-------------------------------/////////////////////////////////
              if(remainingPlanDay_dinner >0 && meal_time == "Dinner" )
              {
                console.log("dinner");
                   if(plan_repeat_on.s =="1" && today.getDay()=='0')
                   {
                       if(today.getHours()<21)
                       {
                          res.send({msg:"success",Your_Upcoming_Meal: "Dinner", Delivery_Time: Delivery_TimeDinner, remainingPlanDay_dinner:remainingPlanDay_dinner, plan_days:plan_days, 
                      plantype:plantype,Dinner_address1 : userdinnerAdd1, Dinner_address2: userdinnerAdd2, HouseNo:dinner_houseNo, Landmark:dinner_landmark, Addresstype:dinner_addresstype})
                       }
                       else
                       {
                          res.send("No Delivery till tommorrow");
                       }
                   }
                   if(plan_repeat_on.s =="0" && today.getDay()=='0')
                    {
                        res.send("Your Plan Is Not Recommended For Sunday")
                    }

                   if(plan_repeat_on.m =="1" && today.getDay()=='1')
                   {
                           if(today.getHours()<21)
                           {
                             res.send({msg:"success",Your_Upcoming_Meal: "Dinner", Delivery_Time: Delivery_TimeDinner, remainingPlanDay_dinner:remainingPlanDay_dinner, plan_days:plan_days, 
                      plantype:plantype,Dinner_address1 : userdinnerAdd1, Dinner_address2: userdinnerAdd2, HouseNo:dinner_houseNo, Landmark:dinner_landmark, Addresstype:dinner_addresstype})
                           }
                            else
                            {
                              res.send("No Delivery till tommorrow");
                            }
                    
                   }
                   if(plan_repeat_on.m =="0" && today.getDay()=='1')
                   {
                        res.send("Your Plan Is Not Recommended For Monday")
                   }

                   if(plan_repeat_on.t =="1" && today.getDay()=='2')
                   {
                           if(today.getHours()<21)
                           {
                             res.send({msg:"success",Your_Upcoming_Meal: "Dinner", Delivery_Time: Delivery_TimeDinner, remainingPlanDay_dinner:remainingPlanDay_dinner, plan_days:plan_days, 
                      plantype:plantype,Dinner_address1 : userdinnerAdd1, Dinner_address2: userdinnerAdd2, HouseNo:dinner_houseNo, Landmark:dinner_landmark, Addresstype:dinner_addresstype})
                           }
                            else
                            {
                              res.send("No Delivery till tommorrow");
                            } 
                    
                   }
                   if(plan_repeat_on.t =="0" && today.getDay()=='2')
                   {
                        res.send("Your Plan Is Not Recommended For Tuesday")
                   }

                   if(plan_repeat_on.w =="1" && today.getDay()=='3')
                   {
                           if(today.getHours()<21)
                           {
                             res.send({msg:"success",Your_Upcoming_Meal: "Dinner", Delivery_Time: Delivery_TimeDinner, remainingPlanDay_dinner:remainingPlanDay_dinner, plan_days:plan_days, 
                      plantype:plantype,Dinner_address1 : userdinnerAdd1, Dinner_address2: userdinnerAdd2, HouseNo:dinner_houseNo, Landmark:dinner_landmark, Addresstype:dinner_addresstype})
                           }
                            else
                            {
                              res.send("No Delivery till tommorrow");
                            }
                    
                   }
                   if(plan_repeat_on.w =="0" && today.getDay()=='3')
                   {
                        res.send("Your Plan Is Not Recommended For Wednesday")
                   }
                    
                   if(plan_repeat_on.th =="1" && today.getDay()=='4')
                   {
                           if(today.getHours()<21)
                           {
                             res.send({msg:"success",Your_Upcoming_Meal: "Dinner", Delivery_Time: Delivery_TimeDinner, remainingPlanDay_dinner:remainingPlanDay_dinner, plan_days:plan_days, 
                      plantype:plantype,Dinner_address1 : userdinnerAdd1, Dinner_address2: userdinnerAdd2, HouseNo:dinner_houseNo, Landmark:dinner_landmark, Addresstype :dinner_addresstype })
                           }
                            else
                            {
                              res.send("No Delivery till tommorrow");
                            }
                    
                   }
                   if(plan_repeat_on.th =="0" && today.getDay()=='4')
                   {
                        res.send("Your Plan Is Not Recommended For Thursday")
                   }

                   if(plan_repeat_on.fr =="1" && today.getDay()=='5')
                   {
                           if(today.getHours()<21)
                           {
                             res.send({msg:"success",Your_Upcoming_Meal: "Dinner", Delivery_Time: Delivery_TimeDinner, remainingPlanDay_dinner:remainingPlanDay_dinner, plan_days:plan_days, 
                      plantype:plantype,Dinner_address1 : userdinnerAdd1, Dinner_address2: userdinnerAdd2, HouseNo:dinner_houseNo, landmark:dinner_landmark})
                           }
                            else
                            {
                              res.send("No Delivery till tommorrow");
                            }
                    
                   }
                   if(plan_repeat_on.fr =="0" && today.getDay()=='5')
                   {
                        res.send("Your Plan Is Not Recommended For Friday")
                   }

                   if(plan_repeat_on.sat =="1" && today.getDay()=='6')
                   {
                           if(today.getHours()<21)
                           {
                             res.send({msg:"success",Your_Upcoming_Meal: "Dinner", Delivery_Time: Delivery_TimeDinner, remainingPlanDay_dinner:remainingPlanDay_dinner, plan_days:plan_days, 
                      plantype:plantype,Dinner_address1 : userdinnerAdd1, Dinner_address2: userdinnerAdd2, HouseNo:dinner_houseNo, landmark:dinner_landmark})
                           }
                            else
                            {
                              res.send("No Delivery till tommorrow");
                            } 
                    
                   }
                   if(plan_repeat_on.sat =="0" && today.getDay()=='6')
                   {
                        res.send("Your Plan Is Not Recommended For Saturday")
                   }

              }

  //----------------------------------------------------- Meal Time Is BOTH -------------------------------------------------------------------------------------------

              else if( ((remainingPlanDay_lunch >0) || (remainingPlanDay_dinner >0 )) && (meal_time == "Both"))
              {
                console.log(remainingPlanDay_lunch +"mbvjghvbyityyyyyyyyyyyyyyyyyyyyyyyyyyyyyybv");
                 if(plan_repeat_on.sun =="1" && today.getDay()=='0')
                 {
                    if(today.getHours()<15)
                    {

                      console.log("response ke upar")
                      res.send({msg:"success", Your_Upcoming_Meal: "Lunch", Delivery_Time: Delivery_TimeLunch, remainingPlanDay_lunch:remainingPlanDay_lunch, plan_days:plan_days, 
                      plantype:plantype, Lunch_address1 :userlunchAdd1, Lunch_address2 : userlunchAdd2, HouseNo:lunch_houseNo, landmark : lunch_landmark, Addresstype : lunch_addresstype })
                    }
                    else if(today.getHours()<21)
                    {
                      res.send({msg:"success",Your_Upcoming_Meal: "Dinner", Delivery_Time: Delivery_TimeDinner, remainingPlanDay_dinner:remainingPlanDay_dinner, plan_days:plan_days, 
                      plantype:plantype,Dinner_address1 : userdinnerAdd1, Dinner_address2: userdinnerAdd2, HouseNo:dinner_houseNo, Landmark:dinner_landmark, Addresstype:dinner_addresstype})
                    }
                    else
                    {
                      res.send("No Delivery till tommorrow");
                    }
                 }
                 if(plan_repeat_on.sun =="0" && today.getDay()=='0')
                 {
                    res.send("Your Plan Is Not Recommended For Sunday")
                 }

                 if(plan_repeat_on.m =="1" && today.getDay()=='1')
                 {
                    if(today.getHours()<15)
                    {
                      res.send({msg:"success", Your_Upcoming_Meal: "Lunch", Delivery_Time: Delivery_TimeLunch, remainingPlanDay_lunch:remainingPlanDay_lunch, plan_days:plan_days, 
                      plantype:plantype, Lunch_address1 :userlunchAdd1, Lunch_address2 : userlunchAdd2, HouseNo:lunch_houseNo, landmark : lunch_landmark, Addresstype : lunch_addresstype })
                    }
                    else if(today.getHours()<21)
                    {
                      res.send({msg:"success",Your_Upcoming_Meal: "Dinner", Delivery_Time: Delivery_TimeDinner, remainingPlanDay_dinner:remainingPlanDay_dinner, plan_days:plan_days, 
                      plantype:plantype,Dinner_address1 : userdinnerAdd1, Dinner_address2: userdinnerAdd2, HouseNo:dinner_houseNo, Landmark:dinner_landmark, Addresstype:dinner_addresstype})
                    }
                    else
                    {
                      res.send("No Delivery till tommorrow");
                    }
                 }
                 if(plan_repeat_on.m =="0" && today.getDay()=='1')
                 {
                    res.send("Your Plan Is Not Recommended For Monday")
                 }

                 if(plan_repeat_on.t =="1" && today.getDay()=='2')
                 {
                    if(today.getHours()<15)
                    {
                      res.send({msg:"success", Your_Upcoming_Meal: "Lunch", Delivery_Time: Delivery_TimeLunch, remainingPlanDay_lunch:remainingPlanDay_lunch, plan_days:plan_days, 
                      plantype:plantype, Lunch_address1 :userlunchAdd1, Lunch_address2 : userlunchAdd2, HouseNo:lunch_houseNo, landmark : lunch_landmark, Addresstype : lunch_addresstype })
                    }
                    else if(today.getHours()<21)
                    {
                      res.send({msg:"success",Your_Upcoming_Meal: "Dinner", Delivery_Time: Delivery_TimeDinner, remainingPlanDay_dinner:remainingPlanDay_dinner, plan_days:plan_days, 
                      plantype:plantype,Dinner_address1 : userdinnerAdd1, Dinner_address2: userdinnerAdd2, HouseNo:dinner_houseNo, Landmark:dinner_landmark, Addresstype:dinner_addresstype})
                    }
                    else
                    {
                      res.send("No Delivery till tommorrow");
                    }
                 }
                 if(plan_repeat_on.t =="0" && today.getDay()=='2')
                 {
                     res.send("Your Plan Is Not Recommended For Tuesday")
                 }

                 if(plan_repeat_on.w =="1" && today.getDay()=='3')
                 {
                    if(today.getHours()<15)
                    {
                      res.send({msg:"success", Your_Upcoming_Meal: "Lunch", Delivery_Time: Delivery_TimeLunch, remainingPlanDay_lunch:remainingPlanDay_lunch, plan_days:plan_days, 
                      plantype:plantype, Lunch_address1 :userlunchAdd1, Lunch_address2 : userlunchAdd2, HouseNo:lunch_houseNo, landmark : lunch_landmark, Addresstype : lunch_addresstype })
                    }
                    else if(today.getHours()<21)
                    {
                      console.log("hhhhhhhhhhhhhhiiiiiiiiiiiiiiiii")
                      res.send({msg:"success",Your_Upcoming_Meal: "Dinner", Delivery_Time: Delivery_TimeDinner, remainingPlanDay_dinner:remainingPlanDay_dinner, plan_days:plan_days, 
                      plantype:plantype,Dinner_address1 : userdinnerAdd1, Dinner_address2: userdinnerAdd2, HouseNo:dinner_houseNo, Landmark:dinner_landmark, Addresstype:dinner_addresstype})
                    }
                    else
                    {
                      res.send("No Delivery till tommorrow");
                    }
                 }
                 if(plan_repeat_on.w =="0" && today.getDay()=='3')
                 {
                     res.send("Your Plan Is Not Recommended For Wednesday")
                 }

                 if(plan_repeat_on.th =="1" && today.getDay()=='4')
                 {
                    if(today.getHours()<15)
                    {
                      res.send({msg:"success", Your_Upcoming_Meal: "Lunch", Delivery_Time: Delivery_TimeLunch, remainingPlanDay_lunch:remainingPlanDay_lunch, plan_days:plan_days, 
                      plantype:plantype, Lunch_address1 :userlunchAdd1, Lunch_address2 : userlunchAdd2, HouseNo:lunch_houseNo, landmark : lunch_landmark, Addresstype : lunch_addresstype })
                    }
                    else if(today.getHours()<21)
                    {
                      res.send({msg:"success",Your_Upcoming_Meal: "Dinner", Delivery_Time: Delivery_TimeDinner, remainingPlanDay_dinner:remainingPlanDay_dinner, plan_days:plan_days, 
                      plantype:plantype,Dinner_address1 : userdinnerAdd1, Dinner_address2: userdinnerAdd2, HouseNo:dinner_houseNo, landmark:dinner_landmark ,Addresstype:dinner_addresstype })
                    }
                    else
                    {
                      res.send("No Delivery till tommorrow");
                    }
                 }
                 if(plan_repeat_on.th =="0" && today.getDay()=='4')
                 {
                     res.send("Your Plan Is Not Recommended For Thursday")
                 }

                 if(plan_repeat_on.fr =="1" && today.getDay()=='5')
                 {
                    if(today.getHours()<15)
                    {
                      res.send({msg:"success", Your_Upcoming_Meal: "Lunch", Delivery_Time: Delivery_TimeLunch, remainingPlanDay_lunch:remainingPlanDay_lunch, plan_days:plan_days, 
                      plantype:plantype, Lunch_address1 :userlunchAdd1, Lunch_address2 : userlunchAdd2, HouseNo:lunch_houseNo, landmark : lunch_landmark, Addresstype : lunch_addresstype })
                    }
                    else if(today.getHours()<21)
                    {
                      res.send({msg:"success",Your_Upcoming_Meal: "Dinner", Delivery_Time: Delivery_TimeDinner, remainingPlanDay_dinner:remainingPlanDay_dinner, plan_days:plan_days, 
                      plantype:plantype,Dinner_address1 : userdinnerAdd1, Dinner_address2: userdinnerAdd2, HouseNo:dinner_houseNo, Landmark:dinner_landmark, Addresstype:dinner_addresstype})
                    }
                    else
                    {
                      res.send("No Delivery till tommorrow");
                    }
                 }
                 if(plan_repeat_on.fr =="0" && today.getDay()=='5')
                  {
                      res.send("Your Plan Is Not Recommended For Friday")
                  }

                 if(plan_repeat_on.sat =="1" && today.getDay()=='6')
                 {
                    if(today.getHours()<15)
                    {
                      res.send({msg:"success", Your_Upcoming_Meal: "Lunch", Delivery_Time: Delivery_TimeLunch, remainingPlanDay_lunch:remainingPlanDay_lunch, plan_days:plan_days, 
                      plantype:plantype, Lunch_address1 :userlunchAdd1, Lunch_address2 : userlunchAdd2, HouseNo:lunch_houseNo, landmark : lunch_landmark, Addresstype : lunch_addresstype })
                    }
                    else if(today.getHours()<21)
                    {
                      res.send({msg:"success",Your_Upcoming_Meal: "Dinner", Delivery_Time: Delivery_TimeDinner, remainingPlanDay_dinner:remainingPlanDay_dinner, plan_days:plan_days, 
                      plantype:plantype,Dinner_address1 : userdinnerAdd1, Dinner_address2: userdinnerAdd2, HouseNo:dinner_houseNo, Landmark:dinner_landmark, Addresstype:dinner_addresstype})
                    }
                    else
                    {
                      res.send("No Delivery till tommorrow"); 
                    }
                 }
                 if(plan_repeat_on.sat =="0" && today.getDay()=='6')
                 {
                     res.send("Your Plan Is Not Recommended For Saturday")
                 }
              }else{
                console.log("elseeeeeeeeeeee")
              }
            }       
            else if((CurrentDate >= PauseStartingDate) && (CurrentDate <= PauseEndingDate ))
            {
                res.send({msg :"Your plan is Paused today", remainingPlanDay_lunch:remainingPlanDay_lunch, remainingPlanDay_dinner:remainingPlanDay_dinner, plan_days:plan_days, userlunchAdd1:userlunchAdd1, 
                userlunchAdd2:userlunchAdd2,userdinnerAdd1:userdinnerAdd1, userdinnerAdd2:userdinnerAdd2, plantype:plantype, ActivationDate :PauseEndingDate+1
                      })
            }



            
        //     else if(CurrentDate > PauseEndingDate )
        //     {
        
        //         if(tiffinDeliver_status == 1 && plan_pause == 0)
        //         {
        //             if((today.getHours()>8 && today.getHours()<15) && (meal_time =='lunch' || meal_time == 'both'))
        //             {
        //                    var remaining_PlanDay_lunch = parseInt(remainingPlanDay_lunch)-1;

        //                    console.log("remaining_PlanDay_lunch :"+" "+remaining_PlanDay_lunch);

        //                         if(remainingPlanDay_lunch<0)
        //                         {
        //                             process.exit(0);
        //                         }
                           
        //                             const data =
        //                             {
        //                                   remainingPlanDay_lunch:remaining_PlanDay_lunch
        //                             }
            
        //                           userplanmodel.findByIdAndUpdate(_id, data , { new: true }, function( err,doc ) 
        //                           {
                
        //                                 if (err) 
        //                                 {
        //                                     console.log("Something wrong when updating data!");
        //                                 }
                                    
        //                                 console.log(doc);
        //                                 res.send({msg: 'Today lunch meal is delivered successfully',remainingPlanDay_lunch:remaining_PlanDay_lunch, plantype:plantype, userlunchAdd1:userlunchAdd1, userlunchAdd2:userlunchAdd2});
        //                           });              
        //             }


        //               else if((today.getHours()>=15 && today.getHours()< 24) && (meal_time =='Dinner' || meal_time == 'both'))
        //               {
                                 
        //                   var remaining_PlanDay_dinner =parseInt(remainingPlanDay_dinner)-1;

        //                   console.log("remaining_PlanDay_dinner:"+remaining_PlanDay_dinner);

        //                   if(remainingPlanDay_dinner<0)
        //                   {
        //                       process.exit(0);
        //                   }      
                
        //                   const data =
        //                   {
        //                       remainingPlanDay_dinner:remaining_PlanDay_dinner
        //                   }
              
        //                     userplanmodel.findByIdAndUpdate(_id, data , { new: true }, function( err,doc ) 
        //                     {
              
        //                       if (err) 
        //                       {
        //                          console.log("Something went wrong when updating data!");
        //                       }
                                  
        //                           console.log(doc);
        //                           res.send({msg: 'Today dinner meal is delivered successfully',remainingPlanDay_dinner:remainingPlanDay_dinner, plantype:plantype,userdinnerAdd1:userdinnerAdd1, userdinnerAdd2:userdinnerAdd2})
        //                     });           
        //               }
                            
        //         }
        //         else
        //         {

        //             console.log("your plan is paused today, your meal will Deliver from tomorrow");
        //             res.send({msg: 'success',renewPlanDays:plan_days,remainingPlanDay_lunch:remainingPlanDay_lunch, remainingPlanDay_dinner:remainingPlanDay_dinner, plantype:plantype, userlunchAdd1:userlunchAdd1, userlunchAdd2:userlunchAdd2,
        //             userdinnerAdd1:userdinnerAdd1, userdinnerAdd2:userdinnerAdd2, BG1_color:planDetailInfo.bg1_color, BG2_color:planDetailInfo.bg2_color, meal_time:meal_time});
           
        //         }

        //  }
         else
         {
            res.send("you have not paused your plan");
         } 
      });

    }
      
  }

  exports.getbgcolor = async function(req,res)
  {


    const {userid}= req.body;
    console.log(userid);
    
    var  userinfo = await userplanmodel.findOne({userid: userid}).sort({ _id:-1 });
   var planType = userinfo.plantype;
   var plan_days =userinfo.plan_days;
   var meal_time =userinfo.meal_time;
   var remaingdays_Lunch = userinfo.remainingPlanDay_lunch;
   var remaingdays_Dinner = userinfo.remainingPlanDay_dinner;
    async function getuserplandetal() 
    {
      // console.log(plantype);
      var planDetailInfo =  await Plandetail_model.findOne({plan_name:planType}).sort({ _id:-1 })
      res.send({msg:"success",plan_name:planType,bg_color1: planDetailInfo.bg1_color, bg_color2: planDetailInfo.bg2_color, plan_days:plan_days, meal_time:meal_time,
       remaingdays_Lunch:remaingdays_Lunch, remaingdays_Dinner:remaingdays_Dinner});
    }
    getuserplandetal();


  }