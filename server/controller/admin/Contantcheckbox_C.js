var Jimp = require('jimp');
const Contantcheckbox_M = require("../../model/adminmodel/Contantcheckbox_M");
const Contantcheckmeals_M = require("../../model/adminmodel/Contantcheckmeals_M");
var fs = require('fs');

var multer = require('multer');

const sha1 = require('sha1');



exports.create =  async function(req,res){





  const thing = {

    singlemeal: req.body.singlemeal,
    corporate: req.body.corporate,
   
  }
  Contantcheckbox_M.update({_id: "62bc0c6e82c618e75ab1cb6b"}, thing).then(
    () => {
      res.status(201).json({
        message: 'Thing updated successfully!'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
  


// // client = new Client( data_in );
//     const Contantcheckbox = new Contantcheckbox_M(data_in)


//     try{
//         await Contantcheckbox.save()
//         res.status(201).json({
//             status: 'Success',
//             data : {
//                 Contantcheckbox
//             }
//         })
//     }catch(err){
//         res.status(500).json({
//             status: 'Failed',
//             message : err
//         })
//     }
}
// exports.createmeals=async function(req,res)
// {

  


// //   var data_in = req.body.addmeals;
// // if( data_in.addmeals ){
// //   data_in.addmeals = true;
// // }
// // else{
// //   data_in.addmeals = false;

// // } 


// var {addmeals}=req.body;
// console.log(addmeals);
// let addmealarray= [];
// async function addmeal(){

// addmealarray = JSON.parse(addmeals);

//   const addmeal = new Contantcheckmeals_M({
    
//     addmeals:addmealarray
//   });
//     try{
//         await addmeal.save()
//         res.status(201).json({
//             status: 'Success',
//             data : {
//               addmeal
//             }
//         })
//     }catch(err){
//         res.status(500).json({
//             status: 'Failed',
//             message : err
//         })
//     }
//   }
//     addmeal()
// }


exports.createmeals=function(req,res){


  const {addmeals} =req.body;
//    var data_in = req.body.addmeals;
// if( data_in.addmeals ){
//   data_in.addmeals = true;
// }
// else{
//   data_in.addmeals = false;

// } 


 
  async function   check(params) {
  

         let add = new Contantcheckmeals_M({
          
             addmeals:addmeals
         
     
         });
   
         add.save().then(res.json( { msg: "success" })).catch((err) => { res.json({ msg: "failed" }) });
         console.log("success")
       

      }
    
     
 check()

};

exports.SHOW = function(req, res) {
  
    Contantcheckbox_M.find((error, data) => {
        if (error) {
          res.json({Contantcheckbox_M:error})
        } else {
          res.json(data)
        }
      }).sort({_id:1})
    };
  



  exports.Delete = function(req,res){
    const { _id } = req.body;
    
    
    Contantcheckbox_M.deleteOne({_id: _id}).then(
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
          var  pData = await Contantcheckbox_M.find({ singlemeal :{ $regex : '.*'+ _id + '.*' }});
      
          if(pData){
            res.send(pData);
          }else{
            res.send({msg:"notfound"});
      
          }}
        getData();
      
      }
  