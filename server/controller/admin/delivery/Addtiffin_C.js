var jimp = require('jimp');
var addtiffin_m = require('../../../model/adminmodel/deliverymodel/addtiffin_m');
var discardtiffin_m = require('../../../model/adminmodel/deliverymodel/movediscardtiffin_m');

// var admin_model = require('../../../model/adminmodel/Adminusermodel');

// var tokenstore_m = require('../../../model/adminmodel/tokenstore_m');


// const nodemailer = require("nodemailer");

// const bcrypt = require('bcrypt');

// var md5 = require("md5");
// var crypto = require('crypto');

exports.insertnewtiffin= function(req, res) {

    
        // res.send("done");
        // // const {filename , path } = req.file;
     const {tiffin_no} =req.body;
     const {tiffin_cat} =req.body;
     const {tiffin_type} =req.body;


    
     async function   check(params) {
       var tiffinData = await addtiffin_m.findOne({ tiffin_no: tiffin_no});



      if(tiffinData){
        res.send({msg:"exist"});
        console.log("exist")
      }

      else{    
            let add = new addtiffin_m({
                tiffin_no:tiffin_no,
                tiffin_cat:tiffin_cat,
                tiffin_type:tiffin_type
            
        
            });
      
            add.save().then(res.json( { msg: "success" })).catch((err) => { res.json({ msg: "failed" }) });
            console.log("success")
          }

            
        }
    check()

};

exports.showtiffins=function(req,res){

    // res.send("done");

    addtiffin_m.find((error,data)=>{
        
        
        if (error) {
            res.json({slider:error})
          } else {
            res.json(data)
            // console.log(data)
          }
        }).sort({"tiffin_no" : 1}).collation( { locale: "en_US", numericOrdering: true });

   
  
    }

    exports.showlasttiffinsno=function(req,res){

      // res.send("done");
  
      // addtiffin_m.find((error,data)=>{
          
          
      //     if (error) {
      //         res.json({slider:error})
      //       } else {
      //         // res.json(data[data.length - 1])
      //         res.send(data)
      //       }
      //     })

      const {tiffin_cat} =req.body;
      const {tiffin_type} =req.body;

      // console.log(_id);
   
      async function   check(params) {
     var lasttiffin = await addtiffin_m.find({tiffin_cat:tiffin_cat,tiffin_type:tiffin_type});
 

     if(lasttiffin==''){

      res.send("empty");
     
    }
 
       else{    
        var tiffin_no = lasttiffin[lasttiffin.length - 1].tiffin_no
      //  res.send(tiffin_no)
      var tiffin = tiffin_no.split("-")[1]
      var lastno = tiffin_no.split("-")[1].replace(0,'')

      if(tiffin.split("")[0] ==0){
      res.send((lastno));
      }
      else{
        res.send();
      }
      // console.log(tiffindata)
           }
 
       
         }
     check();
     
    
      }


exports.searchtiffins=function(req,res){

    // res.send("done");
    const {_id} = req.body;
    // console.log(_id);

    async function   getData(params) {
        var  tiffindata = await addtiffin_m.find({ $or: [{ tiffin_no :{ $regex : '.*'+ _id + '.*' }} ,{ tiffin_cat :{ $regex : '.*'+ _id + '.*' }} ,{ tiffin_type :{ $regex : '.*'+ _id + '.*' }} ]});


        // find({ $and: [ { $or: [{title: regex },{description: regex}] }, {category: value.category}, {city:value.city} ] })
    
        if(tiffindata){
          res.send(tiffindata);
        }else{
          res.send({msg:"notfound"});
    
        }}
      getData();

    // res.send(_id)
    
}



exports.getOnetiffin = function(req,res){


        const {_id} =req.body;
        // console.log(_id);
     
        async function   check(params) {
       var tiffindata = await addtiffin_m.findOne({_id:_id});
   
   
       if(tiffindata){
        res.send([tiffindata]);
        // console.log(tiffindata)
      }
   
         else{    
            
               console.log("failed")
             }
   
               
           }
       check();
     
};








exports.disscardOnetiffin= function(req,res){

  const {_id} =req.body;
 

  console.log(_id);


addtiffin_m.findOne({ _id: _id })
    .then(doc => {
        console.log(doc);

        discardtiffin_m.insertMany([doc])
            .then(d => {
              res.send([d]);
            })
            .catch(error => {
                console.log(error);
            })
         
        // Removing doc from the source collection
        addtiffin_m.deleteOne({ _id: doc._id })
            .then(d => {
              // res.send([d]);
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


  exports.showdiscardtiffin=function(req,res){

    discardtiffin_m.find((error,data)=>{
        
        
      if (error) {
          res.json({slider:error})
        } else {
          res.json(data)
          // console.log(data)
        }
      }).sort({"tiffin_no" : 1}).collation( { locale: "en_US", numericOrdering: true });

 

  }

  
exports.searchdiscardtiffins=function(req,res){

  // res.send("done");
  const {_id} = req.body;
  console.log(_id);

  async function   getData(params) {
      var  tiffindata = await discardtiffin_m.find({ $or: [{ tiffin_no :{ $regex : '.*'+ _id + '.*' }} ,{ tiffin_cat :{ $regex : '.*'+ _id + '.*' }} ,{ tiffin_type :{ $regex : '.*'+ _id + '.*' }} ]});

      // var  tiffindata = await discardtiffin_m.find()
      // find({ $and: [ { $or: [{title: regex },{description: regex}] }, {category: value.category}, {city:value.city} ] })
  
      if(tiffindata){
        res.send(tiffindata);
        // console.log(tiffindata);
      }else{
        res.send({msg:"notfound"});
  
      }}
    getData();

  // res.send(_id)
  
}




exports.deleteOnedistiffin=function(req,res){
  const {_id} = req.body;
  // console.log(_id);

  async function deletedata(params){

    var dataId = await  discardtiffin_m.find({_id : _id});

    if(dataId){

      discardtiffin_m.deleteOne({_id: _id}).then(
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
    else{

      // res.send("no");
    }
    
  }

  deletedata();

}
exports.deleteMuldistiffin=function(req,res){

  const {_id} = req.body;
  const ids =  _id ;
  console.log(ids)



  async function deletedata(params){
  var dataId = await await discardtiffin_m.find({ '_id' : ids  });

  // res.send(dataId);

  if(dataId){

    discardtiffin_m.deleteMany({_id: ids}).then(
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
  else{

    res.send("no");
  }

}
deletedata();
  }
