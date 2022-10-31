
var usermodel = require('../../../model/fluttermodel/fluttermodelusers');
exports.getuserdata  = function(req,res){
    // cat_model.find((error, data) => {
    //     if (error) {
    //       res.json({category:error})
    //     } else {
    //       res.json(data)
    //     }
    //   }).sort({_id:-1})
    usermodel.find((err,data)=>{
        if(err){
            res.send({msg:"error"});
        }else{
            res.send({msg:data});

        }

    });
}