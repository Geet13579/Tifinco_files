

  var admin_model = require('../../model/adminmodel/Adminusermodel');

  var tokenstore_m = require('../../model/adminmodel/tokenstore_m');
  
  
  const nodemailer = require("nodemailer");
  
  const bcrypt = require('bcrypt');
  
  var md5 = require("md5");
  var crypto = require('crypto');
  
  
  exports.forgotPassword=function(req,res){
  
  //   var _id = req.body._id;
  let pass = {password:req.body.password,};
  
  let token = {token: req.body.token };
  
  let linkaccess = {link:req.body.link};
  
  
  
  
  
  
  
  async function   check(params) {
  
  
       
    const exptime = await tokenstore_m.findOne({ token: req.body.token }).sort( { _id: -1 } );
    // console.log(exptime)
  
    const user = await admin_model.findOne({ token: req.body.token });
  
  
  
    // let resettoken= { token: crypto.randomBytes(20).toString('hex') }
    if (!user){
  
      return res.status(200).send({ message: "Invalid Link" });
  
    }
    else{
  
  
  var expires = exptime.exptime;
  
  
  var currentDate = Date(Date.now());
  
  currtime = currentDate.toString()
  
  console.log(expires)
  console.log(currtime)
  
  if(expires<=currtime)
  {
  
  
  res.send({error:"invalidtime"});
  
  
  }
  
  else{
  
    var path = "https://tifinco.com/forgotPassword/token="+user.token;
  
  
  
    // console.log(path);
  
    // console.log(linkaccess.link===path)
  
    if(linkaccess.link===path){
  
  
     admin_model.findOneAndUpdate(token, pass, function(err){
    if(err){
      console.log(err);
      return;
    } else {
     console.log("success");
     res.send({error:"success"});
    //  console.log(user.token)
  
  
  
    }
  });
  
  
  }
  else{
    console.log("invalid link");
    res.send({error:"unauthorized"});
  
  }
    console.log("not expired")
  }
    
    
  
    }
  
    }
  
  
    check();
  
  
  }
  
  
  
  
exports.linkExpaired=function(req,res){


  async function   check(params) {
  
  
       
    const exptime = await tokenstore_m.findOne({ token: req.body.token }).sort( { _id: -1 } );
    console.log(exptime)
  
  
    var expires = exptime.exptime;
  
  
    var currentDate = Date(Date.now());
    
    currtime = currentDate.toString()
    
    console.log(expires)
    console.log(currtime)
    
    if(expires<=currtime)
    {
      res.send({mgs:"invalidlink"})
    }
    else
    {
      res.send({mgs:"valid"})
    }
  
  }
  
  
    check();
  
  
  }