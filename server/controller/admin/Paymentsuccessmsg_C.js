var Jimp = require('jimp');
// var usermodel = require('../../../model/fluttermodel/fluttermodelusers');

var usermodel = require('../../model/fluttermodel/fluttermodelusers');
// var usermodel = require('../../../model/fluttermodel/fluttermodelusers.js');
const Paymentsucessmsg_M = require("../../model/adminmodel/Paymentsucessmsg_M");
var staticPaymentsucessmsg_M=require("../../model/adminmodel/staticPaymentsucessmsg_M");
var fs = require('fs');

var multer = require('multer');

const sha1 = require('sha1');



exports.Paymentsuccessmsg_INSERT =  async function(req,res){

var email=req.body;
console.log(email);
var {paragraph1,paragraph2,invitationmsg,email ,refrralcode}=req.body;

  var userinfo = await usermodel.find ({email: email });
  for(var i=0;i<userinfo.length;i++)
  {
    var referral=userinfo[i].referral
  }
  console.log(referral);
    // const user = new Paymentsucessmsg_M(req.body)
    // try{
    //     await user.save()
    //     res.status(201).json({
    //         status: 'Success',
    //         data : {
    //             user,
    //             refrralcode:referral
    //         }
    //     })
    // }catch(err){
    //     res.status(500).json({
    //         status: 'Failed',
    //         message : err
    //     })
    // }

    let add = new Paymentsucessmsg_M({
      paragraph1:paragraph1,
      paragraph2:paragraph2,
      invitationmsg:invitationmsg,
      refrralcode:referral
  

  });

  add.save().then(res.json( { msg: "success" })).catch((err) => { res.json({ msg: "failed" }) });
  console.log("success")


}






exports.paymsg_show= function(req, res) {
  
  Paymentsucessmsg_M.find((error, data) => {
      if (error) {
        res.json({Paymentsucessmsg_M:error})
      } else {
        res.json(data)
      }
    }).sort({_id:1})
  };

  exports. SHOW = async  function(req, res) {

 
    
    var userinfo = await usermodel.find();
  res.send(userinfo);

  
    };

  

  exports.paymentsucmsg_Delete = function(req,res){
    const { _id } = req.body;
    
    
    Paymentsucessmsg_M.deleteOne({_id: _id}).then(
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


    exports.getsearchdata = function(req,res){
 


      const {_id} = req.body;
      console.log(_id);
    
      async function   getData(params) {
        var  pData = await FAQ_M.find({ question :{ $regex : '.*'+ _id + '.*' }});
    
        if(pData){
          res.send(pData);
        }else{
          res.send({msg:"notfound"});
    
        }}
      getData();
    
    }



    exports.paymentsucmsggetoneid = function(req,res){

      const {_id} = req.body;
      console.log(_id);
    
      async function   getData(params) {
        var  pData = await Paymentsucessmsg_M.findOne({ _id: _id });
    
        if(pData){
          res.send([pData]);
        }else{
          res.send("not found");
    
        }}
      getData();
    };
  
    exports.paymentsucmsgupdate=  function(req,res)
    {
  



    var _id = req.body._id;
var con_info = {

  question:req.body.question,
  answer:req.body.answer,

  paragraph1:req.body.paragraph1,
  paragraph2:req.body.paragraph2,
  invitationmsg:req.body.invitationmsg,
 
};

Paymentsucessmsg_M.findByIdAndUpdate(_id, con_info , { new: true }, function(
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
    }



    exports.Staticpaymentmsg = function(req, res) {

      console.log("req.body", req.body);
    // inserting a new inventory
    var _id = req.body._id;
    var con_info = {
  
      paragraph1:req.body.paragraph1,
      paragraph2:req.body.paragraph2,
      invitationmsg:req.body.invitationmsg,
    
      
    };
  
    staticPaymentsucessmsg_M.findByIdAndUpdate(_id, con_info , { new: true }, function(
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


  //  exports.get_Staticpaymentmsg_info = async function(req,res){
  //   console.log("get con");
  //     var staticPaymentsucessmsg_M = await staticPaymentsucessmsg_M .find();
  //     res.send(staticPaymentsucessmsg_M);
   
  
  //  };
  

   exports.get_Staticpaymentmsg_info= function(req, res) {
  
    staticPaymentsucessmsg_M.find((error, data) => {
        if (error) {
          res.json({staticPaymentsucessmsg_M:error})
        } else {
          res.json(data)
        }
      }).sort({_id:1})
    };
  