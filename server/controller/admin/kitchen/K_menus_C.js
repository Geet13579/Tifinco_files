
var Jimp = require('jimp');
var fs = require('fs');

var Menus_M = require('../../../model/adminmodel/kitchenmodel/Menus_M');

const qr = require("qrcode");


exports.insertmenu = async (req, res) => {
 
  var p_name= req.body.p_name;


var date1 = new Date();


  /////////////////////////////////////qr genrator code ////////////////////////////

// Require the package
const QRCode = require('qrcode')

// Creating the data
let data = {

  p_name:req.body.p_name,

}
//////////////////
// const generateQR = async text => {
//   try {
//     console.log(await QRCode.toDataURL(text))
//   } catch (err) {
//     console.error(err)
//   }


//////////////////
// Converting the data into String format
let stringdata = JSON.stringify(data)

// console.log("p_name" + stringdata);

// Print the QR code to terminal
QRCode.toString(stringdata,{type:'terminal'},
					function (err, QRcode) {

	if(err) return console.log("error occurred")

	// Printing the generated code
	// console.log(QRcode)
})

// Converting the data into base64
QRCode.toDataURL(stringdata, function (err, code) {
	if(err) return console.log("error occurred")

	// Printing the code
	// console.log("mycode" + code)
  // res.send({code});
  const Menus_Mobj = new Menus_M({


    //   var input_text = req.body.text;
     
    
      p_name: p_name,
      p_foodqr:code,
      p_foodtype:req.body.p_foodtype,
      food_date:req.body.food_date,
      // code:code
      p_date:date1,
      food_rawmaterial:req.body.food_rawmaterial,

             });

    
             Menus_Mobj.save().then(res.json({ msg: "success" })).catch((err) => { res.json({ msg: "failed" }) });
})


     


 
}


///////////////////////////////////////////////////////


exports.find = function(req, res) {
  
  Menus_M.find((error, data) => {
      if (error) {
        res.json({category:error})
      } else {
        res.json(data)
      }
    }).sort({_id:-1})
  };

 
  ///////////////////////////////////////////// today menu fetch 

  exports.Todaymenu=async function(req,res)
  {
    var now = new Date();
  now.setDate(now.getDate() - 1); // timestamp
// console.log(b);

currentDate= new Date(); // Date object
    // console.log(now1);
    let chktime = await Menus_M.find({$or:[ {time:{ $gt: now }},{time:{ $gt: currentDate }},]})
    res.send(chktime)
  }






  exports.getOnefood = function(req,res){

    const {_id} = req.body;
    console.log(_id);
  
    async function   getData(params) {
      var  pData = await Menus_M.findOne({ _id: _id });
  
      if(pData){
        res.send([pData]);
      }else{
        res.send("not found");
  
      }}
    getData();
  };










  exports.Filter =  function(req,res){

    const {limit_val} = req.body;
    console.log(limit_val);
    if (limit_val === 'all'){
      Menus_M.find((error, data) => {
        if (error) {
          res.json({category:error})
        } else {
          res.json(data)
        }
      }).sort({_id:-1})
    }else{
   
  
      Menus_M.find((error, data) => {
        if (error) {
          res.json({category:error})
        } else {
          res.json(data)
        }
      }).limit(10).skip(limit_val).sort({_id:-1});
      // res.send("limit");
    }
  }


exports.getsearch = function(req,res){
 


  const {_id} = req.body;
  console.log(_id);

  async function   getData(params) {
    var  pData = await Menus_M.find({ p_name:{ $regex : '.*'+ _id + '.*' }});

    if(pData){
      res.send(pData);
    }else{
      res.send({msg:"notfound"});

    }}
  getData();

}





exports.delete_Product = function(req,res){
  const { _id } = req.body;
  
  
  Menus_M.deleteOne({_id: _id}).then(
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





 