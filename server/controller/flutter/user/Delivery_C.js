var allocateTiffinmodel = require('../../../model/fluttermodel/allocated_tiffin_info_model.js');
var deliveryRegistration_model = require('../../../model/adminmodel/deliverymodel/DeliveryBoy_Reg_Model.js');
var Temp_deliveryUser_model = require('../../../model/adminmodel/deliverymodel/DelUserInfo_temp_M.js');
var Mon_Del_status_model = require('../../../model/adminmodel/deliverymodel/Mon_Del_status.js');
var Tues_Del_status_model = require('../../../model/adminmodel/deliverymodel/Tues_Del_status.js');
var Wed_Del_status_model = require('../../../model/adminmodel/deliverymodel/Wed_Del_status.js');
var Thurs_Del_status_model = require('../../../model/adminmodel/deliverymodel/Thurs_Del_status.js');
var Fri_Del_status_model = require('../../../model/adminmodel/deliverymodel/Fri_Del_status.js');
var Sat_Del_status_model = require('../../../model/adminmodel/deliverymodel/Sat_Del_status.js');
var Sun_Del_status_model = require('../../../model/adminmodel/deliverymodel/Sun_Del_status.js');


const bcrypt = require("bcryptjs");

var login_M = require('../../../model/adminmodel/deliverymodel/Login_M.js')



exports.get_DeliveryInfo= async function(req,res)
{

//   var userinfo = await allocateTiffinmodel.find();
//   {
    allocateTiffinmodel.aggregate([
        { $lookup:
          {
            from: 'userinfos',
            let: { name: "$name", userid: "$userid" },
            pipeline: [
               { $match:
                  { $expr:
                     { $and:
                        [
                          { $eq: [ "$name",  "$$name" ] },
                          { $eq: [ "$token",  "$$userid" ] }
                        //   { $gte: [ "$instock", "$$order_qty" ] }
                        ]
                     }
                  }
               },
               { $project: { stock_item: 0, _id: 0 } }
            ],
            as: 'user_detail'
          }
        }
        ]).then(function(data) {
          console.log(data.length);
          const date = new Date();
            
            console.log(date.getHours());
          
          // res.send(typeof(data[1].user_detail[0]));
          // var user_detail_size = Object.keys(data[1].user_detail[0]).length;
          // console.log(data);
          // console.log(data[0].user_detail[0].email);
          // console.log(data[1].user_detail[0].email);
          // console.log(data[2].user_detail[0].email);
          // console.log(user_detail_size); //8
          var size = Object.keys(data).length;
          // console.log(size);
          // console.log(data[1].name);
          // console.log(data[1].user_detail[0].email)
        //  res.send({data0 : data[0], data1 :data[1]} );

        if(size>0 || data.length>0)
        {
          var User_data = [];
            for(var i =0; i<size; i++)
            {
              if(data[i].meal_time == 'Lunch' && date.getHours() <= 15)
              {
                  User_data.push({"Name" : data[i].name, "Userid":data[i].userid, "Email":data[i].user_detail[0].email, "Mobile": data[i].user_detail[0].mobile , "UserAddress":data[i].useraddress.lunch_useraddress,
                  "plantype": data[i].plantype, "tiffintype" : data[i].tiffintype, "extra_item": data[i].extra_item, "meal_time":data[i].meal_time, "meal_pref": data[i].meal_pref,
                    "sabji":data[i].sabji , "tiffin_no" : data[i].tiffin_no})  
              }
              else if(data[i].meal_time == 'Dinner' && date.getHours()<= 21)
              {
                 User_data.push({"Name" : data[i].name, "Userid":data[i].userid, "Email":data[i].user_detail[0].email, "Mobile": data[i].user_detail[0].mobile , "UserAddress":data[i].useraddress.dinner_useraddress,
                "plantype": data[i].plantype, "tiffintype" : data[i].tiffintype, "extra_item": data[i].extra_item, "meal_time":data[i].meal_time, "meal_pref": data[i].meal_pref, 
                "sabji":data[i].sabji , "tiffin_no" : data[i].tiffin_no});
              }
              else
              {
                if(date.getHours() <= 15)
                {
                  User_data.push({"Name" : data[i].name, "Userid":data[i].userid, "Email":data[i].user_detail[0].email, "Mobile": data[i].user_detail[0].mobile , "UserAddress":data[i].useraddress.lunch_useraddress,
                  "plantype": data[i].plantype, "tiffintype" : data[i].tiffintype, "extra_item": data[i].extra_item, "meal_time":data[i].meal_time, "meal_pref": data[i].meal_pref,
                    "sabji":data[i].sabji , "tiffin_no" : data[i].tiffin_no}) 
                }
                else
                {
                  User_data.push({"Name" : data[i].name, "Userid":data[i].userid, "Email":data[i].user_detail[0].email, "Mobile": data[i].user_detail[0].mobile , "UserAddress":data[i].useraddress.dinner_useraddress,
                  "plantype": data[i].plantype, "tiffintype" : data[i].tiffintype, "extra_item": data[i].extra_item, "meal_time":data[i].meal_time, "meal_pref": data[i].meal_pref, 
                  "sabji":data[i].sabji , "tiffin_no" : data[i].tiffin_no});
                }
              }

            }

            res.send({data:User_data,msg:"success"});
        }
        else
        {
          res.send({data:[],msg:"Delivery Not Possible"});
        }
            

          
        })


//   }
// res.send("hrkkk");

}

exports.get_RegistrationInfo= async function(req,res)
{

   
  const {username} = req.body
  login_M.findOne({ username:username}).then(function (userinfo)
   { 
   

       res.send(userinfo);

  }).catch((err) => { res.json({ msg: "failed" }) })
  
  // const {username, name, date_of_birth, mobile, email, address, adhaar_card, adhaar_image, pan_card, pan_image,Profile_image,password, date} = req.body;

  //  async function getuserid() 
  //  {
  //      var RegistrationInfo = new deliveryRegistration_model({username, name, date_of_birth, mobile, email, address, adhaar_card, adhaar_image, pan_card,
  //        pan_image,Profile_image,password, date});

  //      RegistrationInfo.save().then(function (userdata)
  //      {        
  //          res.send(userdata)
  //      }).catch((err) => { res.json({ msg: "failed" }) })

 

  //   }
  //   getuserid();


}

exports.get_deliveryLoginInfo= async function(req,res)
{
  const {username, password} = req.body
  console.log(username);
  console.log(password);

// 
 


  login_M.findOne({username:username, password:password}).then(async function (userinfo)
  { 

   
    if(userinfo == null )
    {
      res.send({msg:"failure"});
    }
    else
    {
      console.log(userinfo);
      res.send({msg:"success",mobileNo:userinfo.mobile });
    }
     

 }).catch((err) => { res.json({ msg: "failed" }) })

// res.send("jhghj")
}



exports.get_UserInfo_ForDeliver = async function(req,res)
{
    
  var UserDataInfo = await Temp_deliveryUser_model.find();
  console.log(UserDataInfo.length);

  const date = new Date();
  // var currentTime = date.toLocaleTimeString();
  var current_hour = date.getHours();
  var current_min = date.getMinutes();
  var current_sec = date.getSeconds();
  var currentTime = current_hour+":"+current_min+":"+current_sec;
  console.log(currentTime);
  // console.log(date.toLocaleTimeString());

if(UserDataInfo.length == 0)
{
  allocateTiffinmodel.aggregate([
    { $lookup:
      {
        from: 'userinfos',
        let: { name: "$name", userid: "$userid" },
        pipeline: [
           { $match:
              { $expr:
                 { $and:
                    [
                      { $eq: [ "$name",  "$$name" ] },
                      { $eq: [ "$token",  "$$userid" ] }
                    //   { $gte: [ "$instock", "$$order_qty" ] }
                    ]
                 }
              }
           },
           { $project: { stock_item: 0, _id: 0 } }
        ],
        as: 'user_detail'
      }
    }
    ]).then(function(data) {

      var size = Object.keys(data).length;

    if(size>0 || data.length>0)
    {
        for(var i = 0;i<data.length ; i++)    /// storing data to Temp_deliveryUser_model
        {
            var userid = data[i].userid;
            var name = data[i].name;
            var mobile = data[i].user_detail[0].mobile;
            var email = data[i].user_detail[0].email;
            var address = data[i].useraddress;
            var tiffin_no = data[i].tiffin_no;
            var tiffintype = data[i].tiffintype; 
            var meal_time = data[i].meal_time;
            var meal_pref = data[i].meal_pref; 
            var updated_time = currentTime; 
            var status = data[i]. status;
            console.log("helloooooo");
            console.log(address);


              var DeliveryInfo = new Temp_deliveryUser_model({userid, name, tiffin_no, tiffintype, meal_time,meal_pref, mobile, email, address, updated_time, status });

              DeliveryInfo.save().then(function (userdata)
              {        
                  console.log(userdata);
              }).catch((err) => {
                  console.log({ msg: "failed" }) 
                })
        }

        setTimeout(function() 
        {   
            // getuserid();
            Temp_deliveryUser_model.find((error, Userdata) =>
           {
              if (error) 
              {
                res.send({ msg: error })
              }
              else 
              {
                res.send(Userdata)
              }
          })
        }, 1000);  

    }
    else
    {     
      res.send({data:[],msg:"User Not found"});
    }

    })
  }

  else
  {
      if(date.getHours()<=15)
      {
        var User = await Temp_deliveryUser_model.find().sort({_id:-1});

        if(currentTime > User[0].updated_time)
        {
           res.send(User);
        }
        else
        {
            Temp_deliveryUser_model.deleteMany().then(function()
            {
                console.log("successfully deleted");
            }).catch(function(e){ res.send({msg:e})})

            var UserDataInfo = await Temp_deliveryUser_model.find();
            console.log(UserDataInfo.length);
  
            if(UserDataInfo.length == 0)
            {
                allocateTiffinmodel.aggregate([
                  { $lookup:
                    {
                      from: 'userinfos',
                      let: { name: "$name", userid: "$userid" },
                      pipeline: [
                        { $match:
                            { $expr:
                              { $and:
                                  [
                                    { $eq: [ "$name",  "$$name" ] },
                                    { $eq: [ "$token",  "$$userid" ] }
                                  //   { $gte: [ "$instock", "$$order_qty" ] }
                                  ]
                              }
                            }
                        },
                        { $project: { stock_item: 0, _id: 0 } }
                      ],
                      as: 'user_detail'
                    }
                  }
                  ]).then(function(data) {
                    
                    var size = Object.keys(data).length;
            
                    if(size>0 || data.length>0)
                    {
                        for(var i = 0;i<data.length ; i++)    /// storing data to Temp_deliveryUser_model
                        {
                            var userid = data[i].userid;
                            var name = data[i].name;
                            var mobile = data[i].user_detail[0].mobile;
                            var email = data[i].user_detail[0].email;
                            var address = data[i].useraddress;
                            var tiffin_no = data[i].tiffin_no;
                            var tiffintype = data[i].tiffintype; 
                            var meal_time = data[i].meal_time;
                            var meal_pref = data[i].meal_pref; 
                            var updated_time = currentTime; 
                            var status = data[i]. status;
                            console.log("helloooooo");
                            console.log(address);

              
                            var DeliveryInfo = new Temp_deliveryUser_model({userid, name, tiffin_no, tiffintype, meal_time,meal_pref, mobile, email, address, updated_time, status });
              
                            DeliveryInfo.save().then(function (userdata)
                            {        
                                console.log(userdata);
                            }).catch((err) => {
                                console.log({ msg: "failed" }) 
                              })
              
                          }
              
                          setTimeout(function() 
                          {      
                              Temp_deliveryUser_model.find((error, Userdata) =>
                              {
                                if (error) 
                                {
                                  res.send({ msg: error })
                                }
                                else 
                                {
                                  res.send(Userdata)
                                }
                              })
                          }, 1000);  
              
                    }
                    else
                    {     
                      res.send({data:[],msg:"User Not found"});
                    }
              
                  })
                }
        }
      
      }
    
      else if(date.getHours()>15 && date.getHours()<=22)
      {
          var UserDataInfo = await Temp_deliveryUser_model.find().sort({_id:-1});
          console.log(UserDataInfo);
          console.log(UserDataInfo[0].updated_time);

          if(UserDataInfo.length >0)
          {
            if(UserDataInfo[0].updated_time <= "15:0:0")
            {
                Temp_deliveryUser_model.deleteMany().then(function()
                {
                    console.log("successfully deleted");
                }).catch(function(e){ res.send({msg:e})})
    
                var UserDataInfo = await Temp_deliveryUser_model.find();
                console.log(UserDataInfo.length);
      
                if(UserDataInfo.length == 0)
                {
                  allocateTiffinmodel.aggregate([
                    { $lookup:
                      {
                        from: 'userinfos',
                        let: { name: "$name", userid: "$userid" },
                        pipeline: [
                          { $match:
                              { $expr:
                                { $and:
                                    [
                                      { $eq: [ "$name",  "$$name" ] },
                                      { $eq: [ "$token",  "$$userid" ] }
                                    ]
                                }
                              }
                          },
                          { $project: { stock_item: 0, _id: 0 } }
                        ],
                        as: 'user_detail'
                      }
                    }
                    ]).then(function(data) {
                
                      var size = Object.keys(data).length;
              
                      if(size>0 || data.length>0)
                      {
                          for(var i = 0;i<data.length ; i++)    /// storing data to Temp_deliveryUser_model
                          {
                              var userid = data[i].userid;
                              var name = data[i].name;
                              var mobile = data[i].user_detail[0].mobile;
                              var email = data[i].user_detail[0].email;
                              var address = data[i].useraddress;
                              var tiffin_no = data[i].tiffin_no;
                              var tiffintype = data[i].tiffintype; 
                              var meal_time = data[i].meal_time;
                              var meal_pref = data[i].meal_pref; 
                              var updated_time = currentTime; 
                              var status = data[i]. status;

                              console.log("helloooooo");
                              console.log(address);

                
                              var DeliveryInfo = new Temp_deliveryUser_model({userid, name, tiffin_no, tiffintype, meal_time,meal_pref, mobile, email, address, updated_time, status });
                
                              DeliveryInfo.save().then(function (userdata)
                              {        
                                  console.log(userdata);
                              }).catch((err) => {
                                  console.log({ msg: "failed" }) 
                                })
                
                            }
                
                            setTimeout(function() 
                            {      
                                Temp_deliveryUser_model.find((error, Userdata) =>
                                {
                                  if (error) 
                                  {
                                    res.send({ msg: error })
                                  }
                                  else 
                                  {
                                    res.send(Userdata)
                                  }
                                })
                            }, 1000);  
                
                      }
                      else
                      {     
                        res.send({data:[],msg:"User Not found"});
                      }
                
                    })
                }
           
               
            }
            else if(currentTime > UserDataInfo[0].updated_time)
            {
              console.log("current time is greater than update time");
                Temp_deliveryUser_model.find((error, Userdata) =>
                {
                  if (error) 
                  {
                    res.send({ msg: error })
                  }
                  else 
                  {
                    console.log(Userdata[0].address);
                    res.send(Userdata)
                  }
              })
            }
          }
          else
          {
            res.send("user not Found");
          }
    }

    else 
    {
       res.send({msg:"Tiffins Allocated "});
    }

  }
  

}




exports.getDeliverStatus = async function(req,res)
{
  const {userid} = req.body;
  const {status}  = req.body;
  console.log(userid+status)
  const date = new Date();
  // var currentTime = date.toLocaleTimeString();
  var current_hour = date.getHours();
  var current_min = date.getMinutes();
  var current_sec = date.getSeconds();
  var currentTime = current_hour+":"+current_min+":"+current_sec;

  console.log(currentTime);
  
  Temp_deliveryUser_model.findOne({userid:userid}).then(async function (userinfo)
  { 

    if(userinfo == null )
    {
      res.send({msg:"failure"});
    }
    else
    {
      var userid = req.body.userid;
      var name = userinfo.name;
      var mobile = userinfo.mobile;
      var email = userinfo.email;
      var address = userinfo.useraddress;
      var tiffin_no = userinfo.tiffin_no;
      var tiffintype = userinfo.tiffintype; 
      var meal_time = userinfo.meal_time;
      var meal_pref = userinfo.meal_pref; 
      var delivery_time = currentTime; 
      var status = req.body.status;

      if(date.getDay()==0)
      {
        var DeliveryInfo_Sun = new Sun_Del_status_model({userid, name, tiffin_no, tiffintype, meal_time,meal_pref, mobile, email, address, delivery_time, status });
                
         DeliveryInfo_Sun.save().then(function (userdata)
         {        
             console.log(userdata);
         }).catch((err) => {
             console.log({ msg: "failed" }) 
           })

           setTimeout(function() 
           {      
               Sun_Del_status_model.findOne({userid:userid},(error, Userdata) =>
               {
                 if (error) 
                 {
                   res.send({ msg: error })
                 }
                 else 
                 {
                  //  res.send({status:Userdata.status})
                   res.send({ msg: "success" ,name:Userdata.name, status:Userdata.status ,delivery_time:Userdata.delivery_time })
                 }
               }).sort({_id:-1})
           }, 1000);
      }
      else if(date.getDay() == 1)
      {
        var DeliveryInfo_Mon = new Mon_Del_status_model({userid, name, tiffin_no, tiffintype, meal_time,meal_pref, mobile, email, address, delivery_time, status });
                
        DeliveryInfo_Mon.save().then(function (userdata)
        {        
            console.log(userdata);
        }).catch((err) => {
            console.log({ msg: "failed" }) 
          })

          setTimeout(function() 
          {      
              Mon_Del_status_model.findOne({userid:userid},(error, Userdata) =>
              {
                if (error) 
                {
                  res.send({ msg: error })
                }
                else 
                {
                 //  res.send({status:Userdata.status})
                  res.send({ msg: "success" ,name:Userdata.name, status:Userdata.status ,delivery_time:Userdata.delivery_time })
                }
              }).sort({_id:-1})
          }, 1000);
      }
      else if(date.getDay() == 2)
      {
        var DeliveryInfo_Tues = new Tues_Del_status_model({userid, name, tiffin_no, tiffintype, meal_time,meal_pref, mobile, email, address, delivery_time, status });
                
        DeliveryInfo_Tues.save().then(function (userdata)
        {        
            console.log(userdata);
        }).catch((err) => {
            console.log({ msg: "failed" }) 
          })

          setTimeout(function() 
          {      
              Tues_Del_status_model.findOne({userid:userid},(error, Userdata) =>
              {
                if (error) 
                {
                  res.send({ msg: error })
                }
                else 
                {
                 //  res.send({status:Userdata.status})
                  res.send({ msg: "success" ,name:Userdata.name, status:Userdata.status ,delivery_time:Userdata.delivery_time })
                }
              }).sort({_id:-1})
          }, 1000);
      }
      else if(date.getDay() == 3)
      {
        var DeliveryInfo_Wed = new Wed_Del_status_model({userid, name, tiffin_no, tiffintype, meal_time,meal_pref, mobile, email, address, delivery_time, status });
                
        DeliveryInfo_Wed.save().then(function (userdata)
        {        
            console.log(userdata);
        }).catch((err) => {
            console.log({ msg: "failed" }) 
          })

          setTimeout(function() 
          {      
              Wed_Del_status_model.findOne({userid:userid},(error, Userdata) =>
              {
                if (error) 
                {
                  res.send({ msg: error })
                }
                else 
                {
                 //  res.send({status:Userdata.status})
                  res.send({ msg: "success" ,name:Userdata.name, status:Userdata.status ,delivery_time:Userdata.delivery_time })
                }
              }).sort({_id:-1})
          }, 1000);
      }
      else if(date.getDay() == 4)
      {
        var DeliveryInfo_Thurs = new Thurs_Del_status_model({userid, name, tiffin_no, tiffintype, meal_time,meal_pref, mobile, email, address, delivery_time, status });
                
        DeliveryInfo_Thurs.save().then(function (userdata)
        {        
            console.log(userdata);
        }).catch((err) => {
            console.log({ msg: "failed" }) 
          })

          setTimeout(function() 
          {      
              Thurs_Del_status_model.findOne({userid:userid},(error, Userdata) =>
              {
                if (error) 
                {
                  res.send({ msg: error })
                }
                else 
                {
                 //  res.send({status:Userdata.status})
                  res.send({ msg: "success" ,name:Userdata.name, status:Userdata.status ,delivery_time:Userdata.delivery_time })
                }
              }).sort({_id:-1})
          }, 1000);
      }
      else if(date.getDay() == 5)
      {
        var DeliveryInfo_Fri = new Fri_Del_status_model({userid, name, tiffin_no, tiffintype, meal_time,meal_pref, mobile, email, address, delivery_time, status });
                
        DeliveryInfo_Fri.save().then(function (userdata)
        {        
            console.log(userdata);
        }).catch((err) => {
            console.log({ msg: "failed" }) 
          })

          setTimeout(function() 
          {      
              Fri_Del_status_model.findOne({userid:userid},(error, Userdata) =>
              {
                if (error) 
                {
                  res.send({ msg: error })
                }
                else 
                {
                 //  res.send({status:Userdata.status})
                  res.send({ msg: "success" ,name:Userdata.name, status:Userdata.status ,delivery_time:Userdata.delivery_time })
                }
              }).sort({_id:-1})
          }, 1000);
      }   
      else if(date.getDay() == 6)
      {
        var DeliveryInfo_Sat = new Sat_Del_status_model({userid, name, tiffin_no, tiffintype, meal_time,meal_pref, mobile, email, address, delivery_time, status });
                
        DeliveryInfo_Sat.save().then(function (userdata)
        {        
            console.log(userdata);
        }).catch((err) => {
            console.log({ msg: "failed" }) 
          })

          setTimeout(function() 
          {      
              Sat_Del_status_model.findOne({userid:userid},(error, Userdata) =>
              {
                if (error) 
                {
                  res.send({ msg: error })
                }
                else 
                {
                 //  res.send({status:Userdata.status})
                  res.send({ msg: "success" ,name:Userdata.name, status:Userdata.status ,delivery_time:Userdata.delivery_time })
                }
              }).sort({_id:-1})
          }, 1000);
      }    
        
    }
     

 }).catch((err) => { res.json({ msg: "failed Again" }) })
}