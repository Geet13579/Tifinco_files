var suggestion_model = require('../../../model/fluttermodel/Suggestion_M.js');

exports.insert_Suggestion = async function(req,res)
{
      var suggestion = req.body.suggestion;

   
        var suggestion_data = new suggestion_model({suggestion});
                
         suggestion_data.save().then(function (userdata)
         {        
             res.send({msg:"success"});
         }).catch((err) => {
            res.send({ msg: "failed" }) 
           })

    // res.send("hellohiiiiiiiiiiiiiiiiiiiii");
}