
var Jimp = require('jimp');
var fs = require('fs');
var Master_menu = require('../../../model/adminmodel/kitchenmodel/Master_menu');
var addrawmaterial_m = require('../../../model/adminmodel/kitchenmodel/Addrawmaterial_M');
////////////////////////////// Master menu //////////////////
var userplanmodel = require('../../../model/fluttermodel/userplanmodel');

var Menus_M = require('../../../model/adminmodel/kitchenmodel/Menus_M');
var unlike = require('../../../model/adminmodel/kitchenmodel/Masterunlikefood');
var RandomNoG_M = require('../../../model/adminmodel/kitchenmodel/RandomNoG_M');

exports.Mastermenu = function(req, res) {


 

    var p_name= req.body.p_name;
    var dateTime = require('node-datetime');
    var dt = dateTime.create();
    var formatted = dt.format('Y-m-d H:M:S');
    console.log(formatted);
    
      async function   check(params) {
        console.log(p_name );
        var  p_name_data  = await Master_menu.findOne({ p_name: p_name });
  
        if(p_name_data){
         
               res.send({msg:"exist"});
       
   
        }else{
  
             const Menus_Mobj = new Master_menu({
            
              p_name: p_name,
           
              p_date:formatted
                     });
        
            
                     Menus_Mobj.save().then(res.json({ msg: "success" })).catch((err) => { res.json({ msg: "failed" }) });
       
        }
      }
  
      check();
  
   
  }

  ////////////////////// master list show 
  
  
  exports.Masterlistshow = function(req, res) {
    
    Master_menu.find((error, data) => {
        if (error) {
          res.json({category:error})
        } else {
          res.json(data)
        }
      }).sort({_id :1})
    };
  


    ////////////////////search bar 
    exports.Filtermenu =  function(req,res){

        const {limit_val} = req.body;
        console.log(limit_val);
        if (limit_val === 'all'){
          Master_menu.find((error, data) => {
            if (error) {
              res.json({category:error})
            } else {
              res.json(data)
            }
          }).sort({_id:-1})
        }else{
       
      
          Master_menu.find((error, data) => {
            if (error) {
              res.json({category:error})
            } else {
              res.json(data)
            }
          }).limit(10).skip(limit_val).sort({_id:-1});
          // res.send("limit");
        }
      }
    
    
    exports.getsearchmastermenu = function(req,res){
     
    
    
      const {_id} = req.body;
      console.log(_id);
    
      async function   getData(params) {
        var  pData = await Master_menu.find({ p_name:{ $regex : '.*'+ _id + '.*' }});
    
        if(pData){
          res.send(pData);
        }else{
          res.send({msg:"notfound"});
    
        }}
      getData();
    
    }
    
    
   
    
    exports.delete_mastermenu = function(req,res){
      const { _id } = req.body;
      
      
      Master_menu.deleteOne({_id: _id}).then(
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

    //////////////////////// insert unlike food 

    exports.filterunlikefood = function(req, res) {


      function duplicatesArr(arr){
        var obj = {}
        for(var i = 0; i < arr.length; i++){
            obj[arr[i]] = [];
            for(var x = 0; x < arr.length; x++){
                (arr[i] == arr[x]) ? obj[arr[i]].push(x) : '';
            }
            obj[arr[i]] = obj[arr[i]].length;
        }
       console.log(obj);
        return obj;
    }


//  --------------------------------------------------------- array of user unliked food----------------------------------------------
userplanmodel.find(  )
.then(doc => {
 

  var arr_unlike = doc.map(function(obj) {
    return obj.unlike_foods;
});

const usersCollection = [].concat(...arr_unlike)

var arr_unlike = usersCollection.map(function(obj) {
  // return obj.veg;
});
// res.send(arr_unlike);

var map_unlike = duplicatesArr(arr_unlike);
// console.log(map_unlike);
var sorted_keys = Object.keys(map_unlike).sort(function(a,b) { return map_unlike[a] - map_unlike[b]; });
// console.log(sorted_keys);

//splitting sorted array to get most unliked food
const half = Math.ceil(sorted_keys.length / 2);   
const firstHalf = sorted_keys.slice(0, half)
const secondHalf = sorted_keys.slice(-half)
console.log(firstHalf);




// //----------------------------------------------raw materials------------------------------------------------- 
// array which holds all values
addrawmaterial_m.find(  )
.then(doc => {

// console.log(doc)
var arr_raw = doc.map(function(obj) {
  return obj.p_name;
});

// console.log("row material"+arr_raw);

Menus_M.find().then(doc=>{

  // res.send(doc);
  
  var currentDate = new Date();
  
  currentDate.setDate(currentDate.getDate() - 3);
  
  threedaysago = currentDate.toLocaleString()
  
  var arr_3days = doc.reduce((arr_3days, thing) => {
    if (threedaysago<thing.p_date.toLocaleString()) {
      arr_3days.push(thing.food_rawmaterial);
    }
    return arr_3days;
  }, []);
  
  // res.send(ids)
  
  console.log("Menu Of  Last 3 days");
  console.log(arr_3days);
  // make a Set to hold values from namesToDeleteArr
  const namesToDeleteSet = new Set(arr_3days);
  
  console.log(namesToDeleteSet);
  // use filter() method
  // to filter only those elements
  // that need not to be deleted from the array
  
  const newArr = arr_raw.filter((name) => {
    // return those elements not in the namesToDeleteSet
    return !namesToDeleteSet.has(name);
  });


  console.log(newArr);
  // for most unlike food




  
  const nameTodeleteSet_forunlikefood = new Set(firstHalf);
  const final_arraytoselectmenu = arr_raw.filter((name) => {
  
    return !nameTodeleteSet_forunlikefood.has(name);
  });
  console.log(final_arraytoselectmenu);


  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min+2) + min); //The maximum is exclusive and the minimum is inclusive
 
  }
  console.log("Most Unlike Food");
  console.log(firstHalf);
  console.log("Final value");




  var arr = [];
for( let i=0;i<=2;i++){

  arr.push(arr_raw[getRandomInt(0,final_arraytoselectmenu.length-1) ])

}

res.send(arr);




  
 })
})

// // ------------------------------------------------3 days compair---------------------------------------------------



    })



// -----------------------------------------------------------------------------------------------------------------------------


















   


}
/////////////////////////////////////////////////////////////////////////////////////////////

exports.InserRandomfood =function(request,response)
{

  var  {Randomfood} = request.body;
  // var {Randomfood1} = request.body;
  // var {Randomfood2} = request.body;
  var {demo}=request.body;
  console.log("hii");
  console.log(Randomfood)
  // console.log(Randomfood1)
  // console.log(Randomfood2)

  // const newUser = new RandomNoG_M(Randomfood);
  // try{
  //     await newUser.save();
  //     response.status(201).json(newUser);
  // } catch (error){
  //     response.status(409).json({ message: error.message});     
  // }
  

  let add = new RandomNoG_M({
    Randomfood:Randomfood,
    // Randomfood1:Randomfood1,
    // Randomfood2:Randomfood2,
    // demo:demo


});

add.save().then(response.json( { msg: "success" })).catch((err) => { response.json({ msg: "failed" }) });
console.log("success")
}



