// slider_infos

let mongoose = require('mongoose'),

  express = require('express'),
  router = express.Router();

// category Model
var Preregistration_M = require('../../../model/fluttermodel/Preregistration_M');


exports.Preregistration = function(req, res) {
 
    console.log(req.body) 
    const {name,email,mobile,address, devicetoken,whatsapp} =req.body;
    
    Preregistration_M.findOne({mobile:mobile},(err,user)=>{
        if(user){
            res.send({message:"user already exist"})
        }else {
            const user = new Preregistration_M({name,email,mobile,address, devicetoken,whatsapp} )
            user.save(err=>{
                if(err){
                    res.send(err)
                }else{
                    res.send({message:"sucessfull"})
                }
            })
        }
    })
   
};