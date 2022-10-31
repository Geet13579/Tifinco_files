var Jimp = require('jimp');

const Paymentsucessmsg_M = require("../../../model/adminmodel/Paymentsucessmsg_M");

var usermodel = require('../../../model/fluttermodel/fluttermodelusers');

var staticPaymentsucessmsg_M=require("../../../model/adminmodel/staticPaymentsucessmsg_M");











  exports.paymentmsg_Show = function(req,res){

    const {token} = req.body;
    console.log(token);
  
    async function   getData(params) {
     
      var userinfo = await usermodel.find ({token: token });
      for(var i=0;i<userinfo.length;i++)
      {
        var referral=userinfo[i].referral
      }
      console.log(referral);


      // var pData = await usermodel.find({ token: token });

      var  pData = await Paymentsucessmsg_M.find({ refrralcode: referral });
//   console.log(pData)
      if(pData){
        res.send(pData);
      }else{
        res.send("not found");
  
      }}
    getData();
  };



  exports.statiPaymentsuccessmsg_show=function(req,res)
  {
    const {token} = req.body;
    console.log(token);
  
    async function   getData(params) {
     
      var userinfo = await usermodel.find ({token: token });
      for(var i=0;i<userinfo.length;i++)
      {
        var referral=userinfo[i].referral
      }
      console.log(referral);


      // var pData = await usermodel.find({ token: token });

      var  pData = await staticPaymentsucessmsg_M.find();
//   console.log(pData)
      if(pData){
        // res.send(pData , referral);


        res.status(200).json({
          status: 'Success',
        
            pData,
            referral
          
      })
      }else{
        res.send("not found");
  
      }}
    getData();
  }