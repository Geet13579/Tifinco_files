var Jimp = require('jimp');

const FAQ_M = require("../../model/adminmodel/FAQ_M");
var fs = require('fs');

var multer = require('multer');

const sha1 = require('sha1');



exports.create =  async function(req,res){
    const FAQ = new FAQ_M(req.body)
    try{
        await FAQ.save()
        res.status(201).json({
            status: 'Success',
            data : {
                FAQ
            }
        })
    }catch(err){
        res.status(500).json({
            status: 'Failed',
            message : err
        })
    }
}






exports.SHOW = function(req, res) {
  
  FAQ_M.find((error, data) => {
      if (error) {
        res.json({FAQ_M:error})
      } else {
        res.json(data)
      }
    }).sort({_id:1})
  };



  

  exports.Delete = function(req,res){
    const { _id } = req.body;
    
    
    FAQ_M.deleteOne({_id: _id}).then(
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



    exports.getoneid = function(req,res){

      const {_id} = req.body;
      console.log(_id);
    
      async function   getData(params) {
        var  pData = await FAQ_M.findOne({ _id: _id });
    
        if(pData){
          res.send([pData]);
        }else{
          res.send("not found");
    
        }}
      getData();
    };
  
    exports.update=  function(req,res)
    {
  



    var _id = req.body._id;
var con_info = {

  question:req.body.question,
  answer:req.body.answer,

  
};

FAQ_M.findByIdAndUpdate(_id, con_info , { new: true }, function(
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