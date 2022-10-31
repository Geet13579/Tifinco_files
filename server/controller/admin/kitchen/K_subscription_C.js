
var Jimp = require('jimp');
var fs = require('fs');
// var slider_model = require('../../model/adminmodel/Slider_Model');
var Subscription_M = require('../../../model/adminmodel/kitchenmodel/Subscription_M');


//  exports.show = async function(req,res){
//     console.log("get con");
//       var Subscription_M = await Subscription_M.find();
//       res.send(Subscription_M);
   
  
//    };
   // exports.show = (req, res)=>{

   //    if(req.query.id){
   //        const id = req.query.id;
    
   //        Subscription_M.findById(id)
   //            .then(data =>{
   //                if(!data){
   //                    res.status(404).send({ message : "Not found user with id "+ id})
   //                }else{
   //                    res.send(data)
   //                }
   //            })
   //            .catch(err =>{
   //                res.status(500).send({ message: "Erro retrieving user with id " + id})
   //            })
    
   //    }else{
   //        Subscription_M.find()
   //            .then(user => {
   //                res.send(user)
   //            })
   //            .catch(err => {
   //                res.status(500).send({ message : err.message || "Error Occurred while retriving user information" })
   //            })
   //    }
    
      
   //  }
    exports.show = async (request, response) => {
      // Step -1 // Test API
      // response.send('Code for Interview');
      try{
          // finding something inside a model is time taking, so we need to add await
          const Subscription_Ms = await Subscription_M.find();
          response.status(200).json(Subscription_Ms);
      }catch( error ){
          response.status(404).json({ message: error.message })
      }
  }
    