var userorder_model = require('../../model/fluttermodel/userorder_M');
exports.inserttexes  = function(req,res){
//    res.send("hi")


    
     async function   check(params) {
     
         
            var _id = req.body._id;

            var add = {
          
                texesandcharges:req.body.texesandcharges,
              deliveryfee:req.body.deliveryfee,
              
              
            };
          
            userorder_model.findByIdAndUpdate(_id, add , { new: true }, function(
              err,
              add
            ) {
              if (err) {
                console.log("err", err);
                res.status(200).send({msg:'error'});
              } else {
                console.log("success");
                res.send({msg: add });
              }
            });
        
            
            
        }
    check()



};

exports.showstex = function(req, res) {
  
    userorder_model.find((error, data) => {
      if (error) {
        res.json({userorder_model:error})
      } else {
        res.json(data)
      }
    })
    // res.send("hii")
  };