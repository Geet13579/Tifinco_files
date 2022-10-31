// slider_infos

let mongoose = require('mongoose'),

  express = require('express'),
  router = express.Router();

// category Model
var profile_update_m = require('../../../model/fluttermodel/profile_update_m');

var usermodel = require('../../../model/fluttermodel/fluttermodelusers');
exports.profile_update = function(req, res) {
 

    const {name,email,mobile} =req.body;
    
    profile_update_m.findOne({mobile:mobile},(err,user)=>{
        if(user){
            res.send({message:"user already exist"})
        }else {
            const user = new profile_update_m({name,email,mobile} )
            user.save(err=>{
                if(err){
                    res.send(err)
                }else{
                    res.send({message:"sucessfull"})
                }
            })
        }
    })
   
};


// exports.profile_show = function(req, res) {
  
//   usermodel.find((error, data) => {
//       if (error) {
//         res.json({usermodel:error})
//       } else {
//         res.json(data)
//       }
//     }).sort({_id:1})
//   };


  exports.profile_show = function(req,res){

    const {token} = req.body;
    console.log(token);
  
    async function   getData(params) {
      var  pData = await usermodel.findOne({ token: token });
  
      if(pData){
        res.send([pData]);
      }else{
        res.send([{msg:"not found"}]);
  
      }}
    getData();
  };

  exports.update=  async function(req,res)
  {



    // const {userid} = req.body;
  var token = req.body.token;
  console.log(token);
var con_info = {

name:req.body.name,
email:req.body.email,
mobile:req.body.mobile,


};
var user = await usermodel.find({ token:token});


usermodel.findByIdAndUpdate(user, con_info , { new: true }, function(
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

  // exports.updateprofile = function(req,res){

  //   var name= req.body.name;
  //   var token= req.body.token;
  
  
  
  //   console.log(name);
    
  //     async function   check(params) {
  
  //       var  product_data = await usermodel.findOne({ token: req.body.token});
  //       if(product_data){
  
  //         //  if(product_data['email'] == name){
  
           
           
  //          if(req.file){
  //            console.log("image found");
  //            console.log(product_data['profileimage']);
  //           let strC =  product_data['profileimage'].replace("https://tifinco.com:5000", ".");
  //           console.log(strC );
     
  //          if (fs.existsSync(strC)) {
           
  //              fs.unlinkSync(strC)
  //          }//closing of photo remove
  
  //           const { filename, path } = req.file;
  //          Jimp.read('https://tifinco.com:5000/public/flutteruser/userprofile/'+filename, (err, photo) => {
  //                   if (err) throw err;
  //                    photo.resize(300, 300) ;
  //                    photo.quality(60) ;// set JPEG quality
  //                    // photo.greyscale() ;
  //                    photo.write('./public/flutteruser/userprofile/'+filename); // save
                    
                     
  //                    var foodprodata = {
                    
  //                     profileimage: 'https://tifinco.com:5000/public/flutteruser/userprofile/'+filename,
  //                     name: name,
  //                     email:req.body.email,
  //                     mobile:req.body.mobile,
                   
  //                     };
                
  //                     usermodel.findByIdAndUpdate(token,foodprodata, { new: true }, function(err, food_inf) {
  //                       if (err) {
  //                         console.log("err", err);
  //                         res.status(200).send({msg:'error'});
  //                       } else {
  //                         console.log("success");
  //                         res.send({msg: "success"});
  //                       }
  //                     });
                    
  //                     //foodprodata.save().then(res.json({ msg: "success" })).catch((err) => { res.json({ msg: "failed" }) });
                    
  //                   });
  
  //                 }else{
                      
  //                   console.log("image id not there");
  //                   var foodprodata = {
                    
  //                     profileimage: req.body.profileimage,
  //                     name: name,
  //                     email:req.body.email,
  //                     mobile:req.body.mobile,
                    
  //                     };
                
  //                     usermodel.findByIdAndUpdate(token,foodprodata, { new: true }, function(err, food_inf) {
  //                       if (err) {
  //                         console.log("err", err);
  //                         res.status(200).send({msg:'error'});
  //                       } else {
  //                         console.log("success");
  //                         res.send({msg: "success"});
  //                       }
  //                     });
  
  
  
  //                 }//checking for image
  
  
  //          }else{
  
  //           var  pData = await usermodel.findOne({ token: req.body.token });
  
  //           if(pData){
  //            if(req.file){
  //          let strC =   "./public/flutteruser/userprofile/"+filename;
  //         console.log(strC );
      
  //        if (fs.existsSync(strC)) {
  //             console.log("if");
  //            fs.unlinkSync(strC)
  //             res.send({msg:"exist"});
  //          }else{
  //           console.log("else");
  //           res.send({msg:"exist"});
  //          }
  //         }else{
  //           res.send({msg:"exist"});
  
  //         }//checking for image 
  //           }else{
      
  //             if(req.file){
  //               const { filename, path } = req.file;
  //              Jimp.read('https://tifinco.com:5000/public/flutteruser/userprofile/'+filename, (err, photo) => {
  //                       if (err) throw err;
  //                        photo.resize(300, 300) ;
  //                        photo.quality(60) ;// set JPEG quality
  //                        // photo.greyscale() ;
  //                        photo.write('./public/flutteruser/userprofile/'+filename); // save
                        
                         
  //                        var foodprodata = {
                        
  //                         profileimage: 'https://tifinco.com:5000/public/flutteruser/userprofile/'+filename,
  //                         name: name,
  //                         email:req.body.email,
  //                         mobile:req.body.mobile,
                       
  //                         };
                    
  //                         usermodel.findByIdAndUpdate(token,foodprodata, { new: true }, function(err, food_inf) {
  //                           if (err) {
  //                             console.log("err", err);
  //                             res.status(200).send({msg:'error'});
  //                           } else {
  //                             console.log("success");
  //                             res.send({msg: "success"});
  //                           }
  //                         });
                        
  //                         //foodprodata.save().then(res.json({ msg: "success" })).catch((err) => { res.json({ msg: "failed" }) });
                        
  //                       });
      
  //                     }else{
                          
  //                       console.log("image id not there");
  //                       var foodprodata = {
                        
  //                         profileimage: req.body.profileimage,
  //                         name: name,
  //                         email:req.body.email,
  //                         mobile:req.body.mobile,
                  
  //                         };
                    
  //                         usermodel.findByIdAndUpdate(token,foodprodata, { new: true }, function(err, food_inf) {
  //                           if (err) {
  //                             console.log("err", err);
  //                             res.status(200).send({msg:'error'});
  //                           } else {
  //                             console.log("success");
  //                             res.send({msg: "success"});
  //                           }
  //                         });
      
      
      
  //                     }//checking for image
      
      
  //           }//closing of else
  
  
  
  //         }//closing of else   
  
  
  
  //       }//closing of product_data
        
  //       check();
   
  //     }//closing of chk fun
  
  
  
  
  // ////////////////////////////////////////// update 
  
   