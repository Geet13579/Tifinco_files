//// var Jimp = require('jimp');
// var fs = require('fs');
var userplanmodel = require('../../../model/fluttermodel/userplanmodel');
var allocated_tiffin_info_model = require('../../../model/fluttermodel/allocated_tiffin_info_model.js');
var Newallocated_tiffin_info_model = require('../../../model/fluttermodel/newAllocated_tiffin.js');
var addtiffinmodel = require('../../../model/adminmodel/deliverymodel/addtiffin_m');
var Menus_M = require('../../../model/adminmodel/kitchenmodel/Menus_M');
var plan_info = require('../../../model/adminmodel/plandetail/plantypemodel.js');
var tiffin_info = require('../../../model/adminmodel/deliverymodel/addtiffin_m.js')
// const schedule = require('node-schedule');
const cron = require('node-cron');
const fs = require('fs');
const { send } = require('process');
exports.get_userplaninfo = function(req, res)
 {


async function  getData(params) 
{

  console.log("deleted");
    var  Data = await allocated_tiffin_info_model.find( ).sort({_id:-1});
    // console.log(Data);
    Newallocated_tiffin_info_model.insertMany(Data).then(function(){
      console.log("successfully inserted");
    // res.send({msg:"success"});
    

      allocated_tiffin_info_model.deleteMany().then(function(){
        // res.send({msg:"successfully deleted"});
      console.log("successfully deleted");
      }).catch(function(e){ res.send({msg:e})})
  

    }).catch(function(e){

      res.send({msg:e});
    })

 

}

cron.schedule('37 17 * * *', function() {
  console.log("deleted successfully for lunch");
     getData(); 
  });
  

  cron.schedule('5 20 * * *', function() {
    console.log("deleted successfully for dinner");
       getData(); 
    });

}   

// // ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

//       // allocated_tiffin_info_model.findOne({ _id: _id })
//       //   .then(doc => {
//       //       console.log(doc);

//       //       Newallocated_tiffin_info_model.insertMany([doc])
//       //           .then(d => {
//       //             res.send([d]);
//       //           })
//       //           .catch(error => {
//       //               console.log(error);
//       //           })
            
//       //       // Removing doc from the source collection
//       //       allocated_tiffin_info_model.deleteOne({ _id: doc._id })
//       //           .then(d => {
//       //             // res.send([d]);
//       //               console.log("Removed succesfully");
//       //           })
//       //           .catch(error => {
//       //               console.log(error);
//       //           });
//       //   })
//       //   .catch(error => { console.log(error)})
            
//     } 
    
//     else
//     {
//           console.log("time is less than 3 PM");
//           res.send("time is less than 3 PM");
//     }
      
      
      

  exports.getsearchdata = function(req,res)
  {
    const {_id} = req.body;
    // console.log(_id);
  
    async function  getData(params) 
    {
        var  Data = await userplanmodel.find( );
        // console.log(Data);
        if(Data){
          res.send([Data]);
        }else
        {
          res.send({msg:"notfound"});
    
        }
    }
    getData();

  }




  exports.gettiffindata = function(req,res)
  {
 
    // res.send("gettiffindatacalled");

    const {_id} = req.body;
    console.log(_id);
  
    async function  getdata(params) 
    {
        var  data = await addtiffinmodel.find({_id :_id });
        // console.log(data);
        if(data){
          res.send(data);
          // console.log(data);
        
        }else
        {
          res.send({msg:"notfound"});
    
        }
      }
      getdata();
  
  }



    //Adding allocated tiffin data 
    exports.insert_tiffin_allocated_data = async function(req,res)
    {
      // console.log(req.body);userid   quantity
            const { userid, meal_pref, tiffintype, tiffin_no, sabji, extra_item, name, plantype}  = req.body;
     var time_stamp = new Date();

      async function adduserdata()
      {
          try {

                var  Data = await userplanmodel.findOne({userid:userid});
                var mealTime = Data.meal_time
                //  console.log(Data);
                console.log(mealTime)
                console.log(Data.useraddress);
                      
                const data = new allocated_tiffin_info_model({
                userid: userid,
                meal_pref: meal_pref,
                tiffintype: tiffintype,
                tiffin_no: tiffin_no,
                name : name,
                plantype: plantype,
                sabji: sabji,
                extra_item: extra_item,
                meal_time : mealTime,
                useraddress : Data.useraddress,
                time_stamp:time_stamp
                });
                console.log("DATA SAVED");
                console.log(data)


                data.save();

                res.status(200).send({msg:'success'});

            } catch(error) {

                console.log(error);
                res.status(200).send({msg:'error'});
                  // res.status(400).send(error.message);
              }
      }
  
     adduserdata();
  
   }

 
exports.get_tiffinno =  async function(req,res)
{
  // res.send("ok");  

  const  {meal_pref, tiffintype} = req.body;
  console.log("Hello I am Purnima");
  // console.log(req.body.mealpreference);
  // console.log(meal_pref);
  // console.log(tiffintype);

  var myTiffin = [];
  let indexArray = [];
  // var tiffin_no = await addtiffinmodel.find({$and: [{tiffin_cat:meal_pref,tiffin_type:tiffintype}]});
  var tiffin_no = await addtiffinmodel.find({tiffin_cat:meal_pref,tiffin_type:tiffintype});
  // console.log(req.body.meal_pref);
  // console.log(req.body.tiffintype);
  console.log("tiffin no "+ tiffin_no);
  // res.send(tiffin_no);
    if(tiffin_no){
      
      for(var i = 0 ; i< tiffin_no.length; i++ ){

        var new_tiffin  = await allocated_tiffin_info_model.findOne ({tiffin_no : tiffin_no[i].tiffin_no});
       

        if(new_tiffin){
          console.log("present");

        }
        else{
           console.log("absent");

           myTiffin.push({'tiffin_no':tiffin_no[i].tiffin_no});


        }
      }
      console.log("variable");
    console.log(myTiffin);
    res.send(myTiffin);


  }
  else{

    res.send("error");
  }
}


exports.get_userdata = async function(req, res)
 {
//   const  { meal_pref } = req.body;
//   const { tiffintype} = req.body;
  const { plantype } = req.body;
  console.log("google")
  // console.log(req.body);
  // console.log(req.body.meal_pref);
  // console.log(req.body.tiffintype);
// res.send(meal_pref+ tiffintype);
    console.log(req.body.plantype);
// console.log(meal_pref.tiffintype);
  // console.log(meal_pref.meal_pref);
  // console.log(meal_pref.tiffintype);

  var time = new Date();
  var Meal_time = "";
  var userlist ;
// time.getDate(); // returns value 1-31 for day of the month
// time.getDay(); //returns value 0-6 for day of the week
// time.getFullYear(); //returns a 4 digit value for the current year
// time.getHours(); //returns value 0-23 for the current hour
// time.getMinutes(); //returns value 0-59 for the current minute of the hour
// time.getSeconds(); //returns value 0-59 for current second of the minute
// time.getMilliseconds(); //returns value 0-999 for current ms of the second
// time.getTime(); //returns date as ms since Jan 1, 1970
// time.toDateString(); //returns a string (e.g. "Fri May 9 2020")
  //  var BenchmarkTime = 15:00:00;
  //  var date_info = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '');
  //  console.log(date_info);
// console.log( time.getDay());
//var myUser =[{userid:"",plantype:"",meal_time:"",mealpreference:"",starting_date:"",meal_days:"",repeat_on:[],nonveg_pre_d:[],tiffintype:"",unlike_foods:}];

async function getData() {
  var  Data = await userplanmodel.find();

//   const sweeterArray = Data.map(Item => {
//     return Item.repeat_on.m
// })
// console.log(sweeterArray);
  // if(Data){
  //   console.log(Data);
  // }else{
  //   console.log({msg:"notfound"});
  // }
}
getData();






var myUser =[];

    if(time.getHours() >=15 ){
      Meal_time="Dinner"
      console.log( Meal_time)
    }else
   { 
  Meal_time = "Lunch";
  console.log(Meal_time);
   }
  
 
  if(time.getDay() ==0)
  {
    userlist  = await userplanmodel.find({ $and:[{plantype:req.body.plantype},{  $or: [{meal_time:Meal_time},{meal_time:'Both'}]  },{ "repeat_on.sun":"1" } ] }  ); 
  }
  else if(time.getDay() == 1)
  {
    userlist  = await userplanmodel.find({ $and:[{plantype:req.body.plantype},{  $or: [{meal_time:Meal_time},{meal_time:'Both'}]  },{ "repeat_on.m":"1" } ] }  ); 
    console.log(userlist);
  }
  else if(time.getDay() ==2)
  {
   
    userlist  = await userplanmodel.find({ $and:[{plantype:req.body.plantype},{  $or: [{meal_time:Meal_time},{meal_time:'Both'}]  },{ "repeat_on.t":"1" } ] }); 
  console.log(userlist );
  }
  else if(time.getDay() ==3)
  {
    userlist  = await userplanmodel.find({ $and:[{plantype:req.body.plantype},{  $or: [{meal_time:Meal_time},{meal_time:'Both'}]  },{ "repeat_on.w":"1" } ] }  ); 
    console.log(userlist );
  }
  else if(time.getDay() ==4)
  {
    userlist  = await userplanmodel.find({ $and:[{plantype:req.body.plantype},{  $or: [{meal_time:Meal_time},{meal_time:'Both'}]  },{ "repeat_on.th":"1" } ] }); 
    console.log( userlist );
  }
  else if(time.getDay() ==5)
  {
    userlist  = await userplanmodel.find({ $and:[{plantype:req.body.plantype},{  $or: [{meal_time:Meal_time},{meal_time:'Both'}]  },{ "repeat_on.fr":"1" } ] }  ); 
  }
  else if(time.getDay() ==6)
  {
    userlist  = await userplanmodel.find({ $and:[{plantype:req.body.plantype},{  $or: [{meal_time:Meal_time},{meal_time:'Both'}]  },{ "repeat_on.sat":"1" } ] }  ); 
  }

    if(userlist){

      for(var i = 0 ; i< userlist.length; i++ ){
    
    var new_user  = await allocated_tiffin_info_model.findOne ({userid: userlist[i].userid});
  

    if(new_user){
      console.log("present");

    }
    else{
       myUser.push(
         {
           
          'userid':userlist[i].userid,
          'plantype':userlist[i].plantype,
          'meal_time':userlist[i].meal_time,
          'mealpreference':userlist[i].mealpreference,
          'starting_date':userlist[i].starting_date,
          'meal_days':userlist[i].plan_days,
          'repeat_on':userlist[i].repeat_on,
          'nonveg_pre_d':userlist[i].nonveg_pre_d,
          'tiffintype':userlist[i].tiffintype,
          'unlike_foods':userlist[i].unlike_foods,
          'name':userlist[i].name,
          'extra_item':userlist[i].extra_item,

        } );

     

    }
  }
  res.send(myUser);
}
 };


 exports.get_kitchen_menu =  function(req, res) 
 {

      Menus_M.find((error, data) => {
         if (error) 
        {
          res.json({category:error})
        }
        else 
        {
          res.json(data)
          // console.log(data.p_name);
          }


        // console.log(data.p_foodqr);

    }).sort({_id:-1})
};

exports.get_planInfo =  function(req, res) 
 {

     plan_info.find((error, data) => {
         if (error) 
        {
          res.json({category:error})
        }
        else 
        {
          res.json(data)
          }

    }).sort({_id:-1})
};


exports.get_tiffins=  function(req, res) 
 {

  tiffin_info.find((error, data) => {
         if (error) 
        {
          res.json({category:error})
        }
        else 
        {
          res.json(data)
          }

    }).sort({_id:-1})
};

exports.getTiffinAllocated_Users=  function(req, res) 
 {

  allocated_tiffin_info_model.find((error, data) => {
         if (error) 
        {
          res.json({category:error})
        }
        else 
        {
          res.json(data)
          }

    }).sort({_id:-1})
};































