
var Jimp = require('jimp');
var fs = require('fs');
// var slider_model = require('../../model/adminmodel/Slider_Model');
var k_model = require('../../../model/adminmodel/kitchenmodel/K_contactus_M');
var addrawmaterial_m = require('../../../model/adminmodel/kitchenmodel/Addrawmaterial_M');
var RandomNoG_M = require('../../../model/adminmodel/kitchenmodel/RandomNoG_M');
var Menus_M = require('../../../model/adminmodel/kitchenmodel/Menus_M');
var OldRawmaterialhistory = require('../../../model/adminmodel/kitchenmodel/OldRawmaterialhistory');
var userplanmodel = require('../../../model/fluttermodel/userplanmodel');

const cron = require('node-cron');
const shell = require('shelljs');
const schedule = require('node-schedule');
exports.getRandomfoodMaterial_tommorrow = function(req,res){

  res.send("ok");
}


exports.getRandomfoodMaterial= async function(req,res){
  // setInterval(async  () => {
//     async function  getData(params) 
//     {
    
//     // do something every 5 seconds
  

//     var array_f =[];
//     var array_f2 =[];
//   var now = new Date();
//   now.setMinutes(now.getMinutes() +1440); // timestamp
//   now = new Date(now); // Date object
 

//  var data = await  RandomNoG_M.find({$and:[{day:"today"},{date_r:{ $lt: now }},]});
//  if(data.length!=0){
//   res.send({msg:"exists"});

//  }else{
  
//   var data = await  RandomNoG_M.find({day:"today"});

//   for(var i=0;i<data.length;i++){

//     const OldRawmaterial = new OldRawmaterialhistory({

//                   RM1:data[i].RM1,
//                   RM2:data[i].RM2,
//                   RM3:data[i].RM3,
//                   date_r:data[i].date_r,
  
//                });
//                OldRawmaterial.save().then(

//                ).catch((err) => {  });

//   }




// //for today

// var data_tommorrow = await  RandomNoG_M.find({day:"tommorrow"});



//   var nowDate = new Date();

//   RandomNoG_M.update({ _id: "6295cca0f58b7d038fb15dac"}, {date_r:nowDate, RM1:data_tommorrow[0].RM1,
//     RM2:data_tommorrow[0].RM2,
//     RM3:data_tommorrow[0].RM3,
//     }, function (err, result) {

//     RandomNoG_M.update({ _id: "6295cd47f58b7d038fb15dad"}, {date_r:nowDate, RM1:data_tommorrow[1].RM1,
//       RM2:data_tommorrow[1].RM2,
//       RM3:data_tommorrow[1].RM3,
//      },function (err, result) {

          
//     })
    
//   });//copied tommorows daTA IN TODAY

// // algorithim start 


// /////////////


// function duplicatesArr(arr){
//     var obj = {}
//     for(var i = 0; i < arr.length; i++){
//         obj[arr[i]] = [];
//         for(var x = 0; x < arr.length; x++){
//             (arr[i] == arr[x]) ? obj[arr[i]].push(x) : '';
//         }
//         obj[arr[i]] = obj[arr[i]].length;
//     }
//    // console.log(obj);
//     return obj;
// }
// //list of raw material


// //  --------------------------------------------------------- array of user unliked food----------------------------------------------
// //  --------------------------------------------------------- array of user unliked food----------------------------------------------
// userplanmodel.find(  )
// .then(doc => {


// var arr_unlike = doc.map(function(obj) {
// return obj.unlike_foods;

// });
// console.log("unlike food")
// console.log(arr_unlike);


// const usersCollection = [].concat(...arr_unlike)

// var arr_unlike = usersCollection.map(function(obj) {
// // return obj.veg;
// });

// //call function and pass your array, function will return an object with array values as keys and their count as the key values.
// var map_unlike = duplicatesArr(arr_unlike);
// //console.log(map_unlike);
// console.log(map_unlike);
// var sorted_keys = Object.keys(map_unlike).sort(function(a,b) { return map_unlike[a] - map_unlike[b]; });
// //console.log(sorted_keys);
// //splitting sorted array to get most unliked food
// const half = Math.ceil(sorted_keys.length / 2);
// const firstHalf = sorted_keys.slice(0, half)
// const secondHalf = sorted_keys.slice(-half)
// //console.log(firstHalf);
// //for unlike food
// // array which holds all values
// ///////////////////
// // //----------------------------------------------raw materials------------------------------------------------- 
// // array which holds all values
// addrawmaterial_m.find(  )
// .then(doc => {

// // console.log(doc)
// var arr_raw = doc.map(function(obj) {
// return obj.p_name;
// });


// console.log("Raw Material List");
// console.log(arr_raw);
// OldRawmaterialhistory.find().then(doc=>{

//   // res.send(doc);
  
//   var currentDate = new Date();
  
//   currentDate.setDate(currentDate.getDate() -2);
  
//   threedaysago = currentDate.toLocaleString()
  
//   var arr_3days = doc.reduce((arr_3days, thing) => {
//   if (threedaysago<thing.date_r.toLocaleString()) {
//     arr_3days.push(thing.RM1,thing.RM2,thing.RM3);
//   }
//   return arr_3days;
//   }, []);

// console.log("menu 3 day s")
// console.log(arr_3days);

// const namesToDeleteSet = new Set(arr_3days);

// const newArr = arr_raw.filter((name) => {

//   return !namesToDeleteSet.has(name);
// });

// const nameTodeleteSet_forunlikefood = new Set(firstHalf);
// const final_arraytoselectmenu = arr_raw.filter((name) => {

//   return !nameTodeleteSet_forunlikefood.has(name);
// });

// console.log(firstHalf);
// console.log("Final value");

// var arr = [];
// while(arr.length < 3){
//     var r = Math.floor(Math.random() * final_arraytoselectmenu.length-1) + 1;
//     if(arr.indexOf(r) === -1) arr.push(r);
// }
// console.log(arr);
// for(var k=0;k<3;k++){
//      array_f[k] = arr_raw[arr[k]] ;
// }
// console.log(array_f);


// var arr1 = [];
// while(arr1.length < 3){
//   var r = Math.floor(Math.random() * final_arraytoselectmenu.length-1) + 1;
//   if(arr1.indexOf(r) === -1) arr1.push(r);
// }
// console.log(arr1);
// for(var j=0;j<3;j++){
//      array_f2[j] = arr_raw[arr1[j]] ;
// }



// // algorithm applied

// RandomNoG_M.update({ _id: "6295ce15f58b7d038fb15dae"}, {date_r:now, RM1:array_f[0],
//   RM2:array_f[1],
//   RM3:array_f[2],
//   }, function (err, result) {

//   RandomNoG_M.update({ _id: "6295ce23f58b7d038fb15daf"}, {date_r:now,RM1:array_f2[0],
//     RM2:array_f2[1],
//     RM3:array_f2[2],
//    },function (err, result) {

//    // res.send({msg:"success"});
        
//   })
  
// });


// });
// });
// });
//  }
// // }, 86400);

//     }



    // ...
//59 23
// Backup a database at 11:59 PM every day.
// cron.schedule('* * * * * *', function() {
//   console.log('---------------------');
//   console.log('Running Cron Job');
//   // if (shell.exec  (getData()).code !== 0) {
//   //   shell.exit(1);
//   // }
//   // else {
//   //   shell.echo(' Successfully change');
//   // }
// });

// cron.schedule(' * * * * * *', function() {
//   console.log("deleted successfully for lunch");
//      getData(); 
//   });



  const job =  schedule.scheduleJob(' 59 23  * * * *', async  function(){
  
    var array_f =[];
    var array_f2 =[];
  var now = new Date();
   now.setMinutes(now.getMinutes() + 1440); // timestamp

  now1 = new Date(now); // Date object
  console.log(now1);

 var data = await  RandomNoG_M.find({$and:[{day:"today"},{date_r:{ $lt: now1 }},]});
 if(data.length==0){
  // res.send({msg:"exists"});

 }else{
  
  var data = await  RandomNoG_M.find({day:"today"});

  for(var i=1;i<data.length;i++){

    const OldRawmaterial = new OldRawmaterialhistory({

                  RM1:data[i].RM1,
                  RM2:data[i].RM2,
                  RM3:data[i].RM3,
                  date_r:data[i].date_r,
  
               });
               OldRawmaterial.save().then(

               ).catch((err) => {  });

  }

//push today data into history


//for today

var data_tommorrow = await  RandomNoG_M.find({day:"tommorrow"});



  var nowDate = new Date();

  RandomNoG_M.update({ _id: "6295cca0f58b7d038fb15dac"}, {date_r:nowDate, RM1:data_tommorrow[0].RM1,
    RM2:data_tommorrow[0].RM2,
    RM3:data_tommorrow[0].RM3,
    }, function (err, result) {

    RandomNoG_M.update({ _id: "6295cd47f58b7d038fb15dad"}, {date_r:nowDate, RM1:data_tommorrow[1].RM1,
      RM2:data_tommorrow[1].RM2,
      RM3:data_tommorrow[1].RM3,
     },function (err, result) {

          
    })
    
  });//copied tommorows daTA IN TODAY

// algorithim start 


/////////////


function duplicatesArr(arr){
    var obj = {}
    for(var i = 0; i < arr.length; i++){
        obj[arr[i]] = [];
        for(var x = 0; x < arr.length; x++){
            (arr[i] == arr[x]) ? obj[arr[i]].push(x) : '';
        }
        obj[arr[i]] = obj[arr[i]].length;
    }
   // console.log(obj);
    return obj;
}
//list of raw material


//  --------------------------------------------------------- array of user unliked food----------------------------------------------
//  --------------------------------------------------------- array of user unliked food----------------------------------------------
userplanmodel.find(  )
.then(doc => {


var arr_unlike = doc.map(function(obj) {
return obj.unlike_foods;

});
console.log("unlike food")
console.log(arr_unlike);


const usersCollection = [].concat(...arr_unlike)

var arr_unlike = usersCollection.map(function(obj) {
// return obj.veg;
});

//call function and pass your array, function will return an object with array values as keys and their count as the key values.
var map_unlike = duplicatesArr(arr_unlike);
//console.log(map_unlike);
console.log(map_unlike);
var sorted_keys = Object.keys(map_unlike).sort(function(a,b) { return map_unlike[a] - map_unlike[b]; });
//console.log(sorted_keys);
//splitting sorted array to get most unliked food
const half = Math.ceil(sorted_keys.length / 2);
const firstHalf = sorted_keys.slice(0, half)
const secondHalf = sorted_keys.slice(-half)
//console.log(firstHalf);
//for unlike food
// array which holds all values
///////////////////
// //----------------------------------------------raw materials------------------------------------------------- 
// array which holds all values
addrawmaterial_m.find(  )
.then(doc => {

// console.log(doc)
var arr_raw = doc.map(function(obj) {
return obj.p_name;
});


console.log("Raw Material List");
console.log(arr_raw);
OldRawmaterialhistory.find().then(doc=>{

  // res.send(doc);
  
  var currentDate = new Date();
  
  currentDate.setDate(currentDate.getDate() -2);
  
  threedaysago = currentDate.toLocaleString()
  
  var arr_3days = doc.reduce((arr_3days, thing) => {
  if (threedaysago<thing.date_r.toLocaleString()) {
    arr_3days.push(thing.RM1,thing.RM2,thing.RM3);
  }
  return arr_3days;
  }, []);

console.log("menu 3 day s")
console.log(arr_3days);

const namesToDeleteSet = new Set(arr_3days);

const newArr = arr_raw.filter((name) => {

  return !namesToDeleteSet.has(name);
});

const nameTodeleteSet_forunlikefood = new Set(firstHalf);
const final_arraytoselectmenu = arr_raw.filter((name) => {

  return !nameTodeleteSet_forunlikefood.has(name);
});

console.log(firstHalf);
console.log("Final value");

var arr = [];
while(arr.length < 3){
    var r = Math.floor(Math.random() * final_arraytoselectmenu.length-1) + 1;
    if(arr.indexOf(r) === -1) arr.push(r);
}
console.log(arr);
for(var k=0;k<3;k++){
     array_f[k] = arr_raw[arr[k]] ;
}
console.log(array_f);


var arr1 = [];
while(arr1.length < 3){
  var r = Math.floor(Math.random() * final_arraytoselectmenu.length-1) + 1;
  if(arr1.indexOf(r) === -1) arr1.push(r);
}
console.log(arr1);
for(var j=0;j<3;j++){
     array_f2[j] = arr_raw[arr1[j]] ;
}



// algorithm applied

RandomNoG_M.update({ _id: "6295ce15f58b7d038fb15dae"}, {date_r:now, RM1:array_f[0],
  RM2:array_f[1],
  RM3:array_f[2],
  }, function (err, result) {

  RandomNoG_M.update({ _id: "6295ce23f58b7d038fb15daf"}, {date_r:now,RM1:array_f2[0],
    RM2:array_f2[1],
    RM3:array_f2[2],
   },function (err, result) {

  //now1.send({msg:"success"});
        
  })
  
});


});
});
});
 }
    // console.log('The answer to life, the universe, and everything!');


 });
 }

 exports.updatecontact = function(req, res) {

  console.log("req.body", req.body);
// inserting a new inventory
var _id = req.body._id;
var con_info = {

  name:req.body.name,
  mobile:req.body.mobile,
  email:req.body.email,
  address:req.body.address
  
};

k_model.findByIdAndUpdate(_id, con_info , { new: true }, function(
  err,
  con_info 
) {
  if (err) {
    console.log("err", err);
  now1.status(200).send({msg:'error'});
  } else {
    console.log("success");
    res.send({msg: con_info });
  }
});

};


 exports.find = async function(req,res){
  console.log("get con");
    var getContacts = await k_model.find();
    res.send(getContacts);
 

 };

// ######################################### TODAY MENU    ######################################################

 exports.Todaylunch= async function(req, res) {

  var data = await  RandomNoG_M.find({$and:[{day:"today"},{ meal_time: "lunch" },]});
  res.send(data);
 }
 exports.TodayDinner= async function(req, res) {

  var data = await  RandomNoG_M.find({$and:[{day:"today"},{ meal_time: "dinner" },]});
  res.send(data);
 }


// ######################################## TOMORROW MENU ########################################################

exports.Tomorrowlunch= async function(req, res) {

  var data = await  RandomNoG_M.find({$and:[{day:"tommorrow"},{ meal_time: "lunch" },]});
  res.send(data);
 }
 exports.TomorrowDinner= async function(req, res) {

  var data = await  RandomNoG_M.find({$and:[{day:"tommorrow"},{ meal_time: "dinner" },]});
  res.send(data);
 }




 exports.UpdateTodaylunch = function(req, res) {

  console.log("req.body",req.body);
// inserting a new inventory
var _id = req.body._id;
console.log( req.body._id)
console.log(req.body.RM1)
console.log(req.body.RM2)
console.log(req.body.RM3)
var con_info = {

  RM1:req.body.RM1,
  RM2:req.body.RM2,
  RM3:req.body.RM3,
 
  


// console.log(RM2)

// console.log(RM3)
};

RandomNoG_M.findByIdAndUpdate(_id, con_info , { new: true }, function(
  err,
  con_info 
) {
  if (err) {
    console.log("err", err);
    res.status(200).send({msg:'error'});
  } else {
    console.log("success");
    res.send({msg: con_info });
  }
});

};

exports.UpdateTodaydinner = function(req, res) {

  console.log("req.body",req.body);
// inserting a new inventory
var _id = req.body._id;
console.log( req.body._id)
console.log(req.body.RM1)
console.log(req.body.RM2)
console.log(req.body.RM3)
var con_info = {

  RM1:req.body.RM1,
  RM2:req.body.RM2,
  RM3:req.body.RM3,
 
  


// console.log(RM2)

// console.log(RM3)
};

RandomNoG_M.findByIdAndUpdate(_id, con_info , { new: true }, function(
  err,
  con_info 
) {
  if (err) {
    console.log("err", err);
    res.status(200).send({msg:'error'});
  } else {
    console.log("success");
    res.send({msg: con_info });
  }
});

};

// ######################################################  TODAY LUNCH REFRESH ###########################################################

 exports.Todaylunchref= async function(req,res){


  var array_f =[];
  function duplicatesArr(arr){
      var obj = {}
      for(var i = 0; i < arr.length; i++){
          obj[arr[i]] = [];
          for(var x = 0; x < arr.length; x++){
              (arr[i] == arr[x]) ? obj[arr[i]].push(x) : '';
          }
          obj[arr[i]] = obj[arr[i]].length;
      }
     // console.log(obj);
      return obj;
  }
  //list of raw material


  //  --------------------------------------------------------- array of user unliked food----------------------------------------------
//  --------------------------------------------------------- array of user unliked food----------------------------------------------
userplanmodel.find(  )
.then(doc => {


var arr_unlike = doc.map(function(obj) {
return obj.unlike_foods;

});
console.log("unlike food")
console.log(arr_unlike);


const usersCollection = [].concat(...arr_unlike)

var arr_unlike = usersCollection.map(function(obj) {
// return obj.veg;
});
 
  //call function and pass your array, function will return an object with array values as keys and their count as the key values.
  var map_unlike = duplicatesArr(arr_unlike);
  //console.log(map_unlike);
  console.log(map_unlike);
  var sorted_keys = Object.keys(map_unlike).sort(function(a,b) { return map_unlike[a] - map_unlike[b]; });
  //console.log(sorted_keys);
  //splitting sorted array to get most unliked food
  const half = Math.ceil(sorted_keys.length / 2);
  const firstHalf = sorted_keys.slice(0, half)
  const secondHalf = sorted_keys.slice(-half)
  //console.log(firstHalf);
  //for unlike food
  // array which holds all values
  ///////////////////
  // //----------------------------------------------raw materials------------------------------------------------- 
// array which holds all values
addrawmaterial_m.find(  )
.then(doc => {

// console.log(doc)
var arr_raw = doc.map(function(obj) {
return obj.p_name;
});


  console.log("Raw Material List");
  console.log(arr_raw);
  OldRawmaterialhistory.find().then(doc=>{

    // res.send(doc);
    
    var currentDate = new Date();
    
    currentDate.setDate(currentDate.getDate() -2);
    
    threedaysago = currentDate.toLocaleString()
    
    var arr_3days = doc.reduce((arr_3days, thing) => {
    if (threedaysago<thing.date_r.toLocaleString()) {
      arr_3days.push(thing.RM1,thing.RM2,thing.RM3);
    }
    return arr_3days;
    }, []);
 
  console.log("menu 3 day s")
  console.log(arr_3days);

  const namesToDeleteSet = new Set(arr_3days);
 
  const newArr = arr_raw.filter((name) => {

    return !namesToDeleteSet.has(name);
  });

  const nameTodeleteSet_forunlikefood = new Set(firstHalf);
  const final_arraytoselectmenu = arr_raw.filter((name) => {
 
    return !nameTodeleteSet_forunlikefood.has(name);
  });

  console.log(firstHalf);
  console.log("Final value");
 
  var arr = [];
  while(arr.length < 3){
      var r = Math.floor(Math.random() * final_arraytoselectmenu.length-1) + 1;
      if(arr.indexOf(r) === -1) arr.push(r);
  }
  console.log(arr);
  for(var k=0;k<3;k++){
       array_f[k] = arr_raw[arr[k]] ;
  }

  
 console.log(array_f);
//  res.send(array_f[0]);

 var _id = req.body._id;
 console.log( req.body._id)
 console.log(req.body.RM1)
 console.log(req.body.RM2)
 console.log(req.body.RM3)
 var con_info = {
 
   RM1:array_f[0],
   RM2:array_f[1],
   RM3:array_f[2],
  
   
 
 
 // console.log(RM2)
 
 // console.log(RM3)
 };
 
 RandomNoG_M.findByIdAndUpdate(_id, con_info , { new: true }, function(
   err,
   con_info 
 ) {
   if (err) {
     console.log("err", err);
     res.status(200).send({msg:'error'});
   } else {
     console.log("success");
     res.send({msg: con_info });
   }
 });
 

});
});
});

 }


//  ########################################################### TODAY DINNER REFRESH##############################################################

exports.Todaydinnerref= async function(req,res){


  var array_f =[];
  function duplicatesArr(arr){
      var obj = {}
      for(var i = 0; i < arr.length; i++){
          obj[arr[i]] = [];
          for(var x = 0; x < arr.length; x++){
              (arr[i] == arr[x]) ? obj[arr[i]].push(x) : '';
          }
          obj[arr[i]] = obj[arr[i]].length;
      }
     // console.log(obj);
      return obj;
  }
  //list of raw material


  //  --------------------------------------------------------- array of user unliked food----------------------------------------------
//  --------------------------------------------------------- array of user unliked food----------------------------------------------
userplanmodel.find(  )
.then(doc => {


var arr_unlike = doc.map(function(obj) {
return obj.unlike_foods;

});
console.log("unlike food")
console.log(arr_unlike);


const usersCollection = [].concat(...arr_unlike)

var arr_unlike = usersCollection.map(function(obj) {
// return obj.veg;
});
 
  //call function and pass your array, function will return an object with array values as keys and their count as the key values.
  var map_unlike = duplicatesArr(arr_unlike);
  //console.log(map_unlike);
  console.log(map_unlike);
  var sorted_keys = Object.keys(map_unlike).sort(function(a,b) { return map_unlike[a] - map_unlike[b]; });
  //console.log(sorted_keys);
  //splitting sorted array to get most unliked food
  const half = Math.ceil(sorted_keys.length / 2);
  const firstHalf = sorted_keys.slice(0, half)
  const secondHalf = sorted_keys.slice(-half)
  //console.log(firstHalf);
  //for unlike food
  // array which holds all values
  ///////////////////
  // //----------------------------------------------raw materials------------------------------------------------- 
// array which holds all values
addrawmaterial_m.find(  )
.then(doc => {

// console.log(doc)
var arr_raw = doc.map(function(obj) {
return obj.p_name;
});


  console.log("Raw Material List");
  console.log(arr_raw);
  OldRawmaterialhistory.find().then(doc=>{

    // res.send(doc);
    
    var currentDate = new Date();
    
    currentDate.setDate(currentDate.getDate() -3);
    
    threedaysago = currentDate.toLocaleString()
    
    var arr_3days = doc.reduce((arr_3days, thing) => {
    if (threedaysago<thing.date_r.toLocaleString()) {
      arr_3days.push(thing.RM1,thing.RM2,thing.RM3);
    }
    return arr_3days;
    }, []);
 
  console.log("menu 3 day s")
  console.log(arr_3days);

  const namesToDeleteSet = new Set(arr_3days);
 
  const newArr = arr_raw.filter((name) => {

    return !namesToDeleteSet.has(name);
  });

  const nameTodeleteSet_forunlikefood = new Set(firstHalf);
  const final_arraytoselectmenu = arr_raw.filter((name) => {
 
    return !nameTodeleteSet_forunlikefood.has(name);
  });

  console.log(firstHalf);
  console.log("Final value");
 
  var arr = [];
  while(arr.length < 3){
      var r = Math.floor(Math.random() * final_arraytoselectmenu.length-1) + 1;
      if(arr.indexOf(r) === -1) arr.push(r);
  }
  console.log(arr);
  for(var k=0;k<3;k++){
       array_f[k] = arr_raw[arr[k]] ;
  }

  
 console.log(array_f);
//  res.send(array_f[0]);

 var todaydinner_id = req.body.todaydinner_id;

 var con_info = {
 
   RM1:array_f[0],
   RM2:array_f[1],
   RM3:array_f[2],
  
   
 
 
 // console.log(RM2)
 
 // console.log(RM3)
 };
 
 RandomNoG_M.findByIdAndUpdate(todaydinner_id, con_info , { new: true }, function(
   err,
   con_info 
 ) {
   if (err) {
     console.log("err", err);
     res.status(200).send({msg:'error'});
   } else {
     console.log("success");
     res.send({msg: con_info });
   }
 });
 

});
});
});

 }


//  ########################################################### TOMORROW LUNCH REFRESH   ##############################################################

exports.Tomorrowlunchref= async function(req,res){


  var array_f =[];
  function duplicatesArr(arr){
      var obj = {}
      for(var i = 0; i < arr.length; i++){
          obj[arr[i]] = [];
          for(var x = 0; x < arr.length; x++){
              (arr[i] == arr[x]) ? obj[arr[i]].push(x) : '';
          }
          obj[arr[i]] = obj[arr[i]].length;
      }
     // console.log(obj);
      return obj;
  }
  //list of raw material


  //  --------------------------------------------------------- array of user unliked food----------------------------------------------
//  --------------------------------------------------------- array of user unliked food----------------------------------------------
userplanmodel.find(  )
.then(doc => {


var arr_unlike = doc.map(function(obj) {
return obj.unlike_foods;

});
console.log("unlike food")
console.log(arr_unlike);


const usersCollection = [].concat(...arr_unlike)

var arr_unlike = usersCollection.map(function(obj) {
// return obj.veg;
});
 
  //call function and pass your array, function will return an object with array values as keys and their count as the key values.
  var map_unlike = duplicatesArr(arr_unlike);
  //console.log(map_unlike);
  console.log(map_unlike);
  var sorted_keys = Object.keys(map_unlike).sort(function(a,b) { return map_unlike[a] - map_unlike[b]; });
  //console.log(sorted_keys);
  //splitting sorted array to get most unliked food
  const half = Math.ceil(sorted_keys.length / 2);
  const firstHalf = sorted_keys.slice(0, half)
  const secondHalf = sorted_keys.slice(-half)
  //console.log(firstHalf);
  //for unlike food
  // array which holds all values
  ///////////////////
  // //----------------------------------------------raw materials------------------------------------------------- 
// array which holds all values
addrawmaterial_m.find(  )
.then(doc => {

// console.log(doc)
var arr_raw = doc.map(function(obj) {
return obj.p_name;
});


  console.log("Raw Material List");
  console.log(arr_raw);
  OldRawmaterialhistory.find().then(doc=>{

    // res.send(doc);
    
    var currentDate = new Date();
    
    currentDate.setDate(currentDate.getDate() -2);
    
    threedaysago = currentDate.toLocaleString()
    
    var arr_3days = doc.reduce((arr_3days, thing) => {
    if (threedaysago<thing.date_r.toLocaleString()) {
      arr_3days.push(thing.RM1,thing.RM2,thing.RM3);
    }
    return arr_3days;
    }, []);
 
  console.log("menu 3 day s")
  console.log(arr_3days);

  const namesToDeleteSet = new Set(arr_3days);
 
  const newArr = arr_raw.filter((name) => {

    return !namesToDeleteSet.has(name);
  });

  const nameTodeleteSet_forunlikefood = new Set(firstHalf);
  const final_arraytoselectmenu = arr_raw.filter((name) => {
 
    return !nameTodeleteSet_forunlikefood.has(name);
  });

  console.log(firstHalf);
  console.log("Final value");
 
  var arr = [];
  while(arr.length < 3){
      var r = Math.floor(Math.random() * final_arraytoselectmenu.length-1) + 1;
      if(arr.indexOf(r) === -1) arr.push(r);
  }
  console.log(arr);
  for(var k=0;k<3;k++){
       array_f[k] = arr_raw[arr[k]] ;
  }

  
 console.log(array_f);
//  res.send(array_f[0]);

 var tomorrowlunch_id = req.body.tomorrowlunch_id;

 var con_info = {
 
   RM1:array_f[0],
   RM2:array_f[1],
   RM3:array_f[2],
  
   
 
 
 // console.log(RM2)
 
 // console.log(RM3)
 };
 
 RandomNoG_M.findByIdAndUpdate(tomorrowlunch_id, con_info , { new: true }, function(
   err,
   con_info 
 ) {
   if (err) {
     console.log("err", err);
     res.status(200).send({msg:'error'});
   } else {
     console.log("success");
     res.send({msg: con_info });
   }
 });
 

});
});
});

 }




//  ########################################################### TOMORROW DINNER REFRESH##############################################################

exports.Tomorrowdinnerref= async function(req,res){


  var array_f =[];
  function duplicatesArr(arr){
      var obj = {}
      for(var i = 0; i < arr.length; i++){
          obj[arr[i]] = [];
          for(var x = 0; x < arr.length; x++){
              (arr[i] == arr[x]) ? obj[arr[i]].push(x) : '';
          }
          obj[arr[i]] = obj[arr[i]].length;
      }
     // console.log(obj);
      return obj;
  }
  //list of raw material


  //  --------------------------------------------------------- array of user unliked food----------------------------------------------
//  --------------------------------------------------------- array of user unliked food----------------------------------------------
userplanmodel.find(  )
.then(doc => {


var arr_unlike = doc.map(function(obj) {
return obj.unlike_foods;

});
console.log("unlike food")
console.log(arr_unlike);


const usersCollection = [].concat(...arr_unlike)

var arr_unlike = usersCollection.map(function(obj) {
// return obj.veg;
});
 
  //call function and pass your array, function will return an object with array values as keys and their count as the key values.
  var map_unlike = duplicatesArr(arr_unlike);
  //console.log(map_unlike);
  console.log(map_unlike);
  var sorted_keys = Object.keys(map_unlike).sort(function(a,b) { return map_unlike[a] - map_unlike[b]; });
  //console.log(sorted_keys);
  //splitting sorted array to get most unliked food
  const half = Math.ceil(sorted_keys.length / 2);
  const firstHalf = sorted_keys.slice(0, half)
  const secondHalf = sorted_keys.slice(-half)
  //console.log(firstHalf);
  //for unlike food
  // array which holds all values
  ///////////////////
  // //----------------------------------------------raw materials------------------------------------------------- 
// array which holds all values
addrawmaterial_m.find(  )
.then(doc => {

// console.log(doc)
var arr_raw = doc.map(function(obj) {
return obj.p_name;
});


  console.log("Raw Material List");
  console.log(arr_raw);
  OldRawmaterialhistory.find().then(doc=>{

    // res.send(doc);
    
    var currentDate = new Date();
    
    currentDate.setDate(currentDate.getDate() -3);
    
    threedaysago = currentDate.toLocaleString()
    
    var arr_3days = doc.reduce((arr_3days, thing) => {
    if (threedaysago<thing.date_r.toLocaleString()) {
      arr_3days.push(thing.RM1,thing.RM2,thing.RM3);
    }
    return arr_3days;
    }, []);
 
  console.log("menu 3 day s")
  console.log(arr_3days);

  const namesToDeleteSet = new Set(arr_3days);
 
  const newArr = arr_raw.filter((name) => {

    return !namesToDeleteSet.has(name);
  });

  const nameTodeleteSet_forunlikefood = new Set(firstHalf);
  const final_arraytoselectmenu = arr_raw.filter((name) => {
 
    return !nameTodeleteSet_forunlikefood.has(name);
  });

  console.log(firstHalf);
  console.log("Final value");
 
  var arr = [];
  while(arr.length < 3){
      var r = Math.floor(Math.random() * final_arraytoselectmenu.length-1) + 1;
      if(arr.indexOf(r) === -1) arr.push(r);
  }
  console.log(arr);
  for(var k=0;k<3;k++){
       array_f[k] = arr_raw[arr[k]] ;
  }

  
 console.log(array_f);
//  res.send(array_f[0]);

 var tomorrowdinner_id = req.body.tomorrowdinner_id;

 var con_info = {
 
   RM1:array_f[0],
   RM2:array_f[1],
   RM3:array_f[2],
  
   
 
 
 // console.log(RM2)
 
 // console.log(RM3)
 };
 
 RandomNoG_M.findByIdAndUpdate(tomorrowdinner_id, con_info , { new: true }, function(
   err,
   con_info 
 ) {
   if (err) {
     console.log("err", err);
     res.status(200).send({msg:'error'});
   } else {
     console.log("success");
     res.send({msg: con_info });
   }
 });
 

});
});
});

 }




///////////////////////////////////////////// preminum  customer count /////////////////
exports. PremiumCustomercountveg= async function(req, res) {

  var now = new Date();
  now.setDate(now.getDate() - 1); // timestamp
// console.log(b);

 var currentDate= new Date(); // Date object
    // console.log(now1);
    // let chktime = await Menus_M.find({$or:[ {time:{ $gt: now }},{time:{ $gt: currentDate }},]})
    // res.send(chktime)


  var data = await  userplanmodel.find( {$and:[{plantype:"Premium"},{mealpreference:"veg"}]});
  res.send(data);
 }

 exports.PremiumCustomercountnonveg= async function(req, res) {
  var now = new Date();
  now.setDate(now.getDate() - 1); // timestamp
// console.log(b);

 var currentDate= new Date(); // Date object

  var data = await  userplanmodel.find( {$and:[{plantype:"Premium"},{mealpreference:"nonveg"}]});
  res.send(data);
 }

//################################    Eco plan ###########################################

exports.EcoCustomercountveg= async function(req, res) {

  var now = new Date();
  now.setDate(now.getDate() - 1); // timestamp
// console.log(b);

 var currentDate= new Date(); // Date object
    // console.log(now1);
    // let chktime = await Menus_M.find({$or:[ {time:{ $gt: now }},{time:{ $gt: currentDate }},]})
    // res.send(chktime)


  var data = await  userplanmodel.find( {$and:[{plantype:"Eco"},{mealpreference:"veg"}]});
  res.send(data);
 }
exports.EcoCustomercountnonveg =async function(req, res) {

  var now = new Date();
  now.setDate(now.getDate() - 1); // timestamp
// console.log(b);

 var currentDate= new Date(); // Date object
    // console.log(now1);
    // let chktime = await Menus_M.find({$or:[ {time:{ $gt: now }},{time:{ $gt: currentDate }},]})
    // res.send(chktime)


  var data = await  userplanmodel.find( {$and:[{plantype:"Eco"},{mealpreference:"nonveg"}]} );
  res.send(data);
 }
/////@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@  Excutive plan @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

exports.ExcutiveCustomercountveg =async function(req, res) {

  var now = new Date();
  now.setDate(now.getDate() - 1); // timestamp
// console.log(b);

 var currentDate= new Date(); // Date object
    // console.log(now1);
    // let chktime = await Menus_M.find({$or:[ {time:{ $gt: now }},{time:{ $gt: currentDate }},]})
    // res.send(chktime)


  var data = await  userplanmodel.find( {$and:[{plantype:"Executive"},{mealpreference:"veg"}]});
  res.send(data);
 }
 exports.ExcutiveCustomercountnonveg =async function(req, res) {

  var now = new Date();
  now.setDate(now.getDate() - 1); // timestamp
// console.log(b);

 var currentDate= new Date(); // Date object
    // console.log(now1);
    // let chktime = await Menus_M.find({$or:[ {time:{ $gt: now }},{time:{ $gt: currentDate }},]})
    // res.send(chktime)


  var data = await  userplanmodel.find( {$and:[{plantype:"Executive"},{mealpreference:"nonveg"}]});
  res.send(data);
 }



 /////////////// Tiffin count ***********************************************************

 exports. Tiffinlunchcount = async  function(req, res) {

  var data = await  userplanmodel.find( {$or:[{meal_time:"Lunch"},{meal_time:"Both"}]});
  res.send(data);
  
  
  // userplanmodel.find((error, data) => {
  //     if (error) {
  //       res.json({category:error})
  //     } else {
  //       res.json(data)
  //     }
  //   }).sort({_id:-1}).count()
  };

  exports.Tiffindinnercount=async function(req,res)
  {
    var data =await userplanmodel.find({$or:[{meal_time:"Dinner"},{meal_time:"Both"}]});
    res.send(data);
  }

  exports. Tiffinlunchroticount = function(req, res) {
    
  
    userplanmodel.find((error, data) => {
        if (error) {
          res.json({category:error})
        } else {
          res.json(data*3)
        }
      }).sort({_id:-1}).count();
    };
  exports.Tiffindinnerroticount=function(req,res)
  {
    userplanmodel.find((error, data) => {
      if (error) {
        res.json({category:error})
      } else {
        res.json(data*3)
      }
    }).sort({_id:-1}).count();

  }


////@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@