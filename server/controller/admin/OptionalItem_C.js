var optionalitem_m= require('../../model/adminmodel/foodproduct/Optionalitem_M');

exports.addoptional=function(req,res){

    const {optionals} =req.body;
    const {title} =req.body;
    const {tiffintype} =req.body;


   
    async function   check(params) {
    
  
           let add = new optionalitem_m({
               tiffintype:tiffintype,
               title:title,
               optionals:optionals
           
       
           });
     
           add.save().then(res.json( { msg: "success" })).catch((err) => { res.json({ msg: "failed" }) });
           console.log("success")
         

        }
      
       
   check()

};



exports.getOptionalitems = function(req,res){

// res.send("ok")
optionalitem_m.find((error, data) => {
        if (error) {
          res.json({plandata:error})
        } else {
          res.json(data)
        }
      }).sort({_id:1});
  
  
  }


  exports.deleteoptionalitems = function(req,res){
    // res.send("ok")

  const {_id} =req.body;
 

  console.log(_id);


  optionalitem_m.findOne({ _id: _id })
    .then(doc => {
        console.log(doc);

         
        
        optionalitem_m.deleteOne({ _id: doc._id })
            .then(d => {
              res.send([d]);
                console.log("Removed succesfully");
            })
            .catch(error => {
                console.log(error);
            });
    })
    .catch(error => {
        console.log(error);
})
  }

  exports.updateoptionalitems=function(req,res){

    async function   check(params) {
    
  
  const {title,tiffintype,optionals,_id}  = req.body;
  const update_data = {
    tiffintype: tiffintype,
    title:title,
    optionals:optionals
   
};

optionalitem_m.findByIdAndUpdate(_id,update_data, { new: true }, function(err, plan_inf) {
  if (err) {
    console.log("err", err);
    res.status(200).send({msg:'error'});
  } else {
    console.log(plan_inf)
    res.send({msg: "success"});
  }
});

}
  

        
      
       
   check()

};