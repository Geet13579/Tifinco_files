var Jimp = require('jimp');

const AdminUser = require("../../model/adminmodel/Adminusermodel");
var fs = require('fs');

var multer = require('multer');

const sha1 = require('sha1');



exports.create = function(req,res){
   
    const { filename, path } = req.file;

    var email= req.body.email;
    var password=req.body.password
      async function   check(params) {
        var  pdata = await AdminUser.findOne({ email:req.body.email});

        if(pdata){
         
       let strC =   "./public/profileImage/"+filename;
      console.log(strC );

     if (fs.existsSync(strC)) {
          console.log("if");
         fs.unlinkSync(strC)
          res.send({msg:"exist"});
       }else{
        console.log("else");
        res.send({msg:"exist"});
       }
   
        }else{

          Jimp.read('https://tifinco.com:5000/public/profileImage/'+filename, (err, photo) => {
            if (err) throw err;
             photo.resize(700, 700) ;
             photo.quality(60) ;// set JPEG quality
             // photo.greyscale() ;
             photo.write('./public/profileImage/'+filename); // save
            
             
             const formdata = new AdminUser({
            
              profileImage: 'https://tifinco.com:5000/public/profileImage/'+filename,
              email: email,
              password:sha1(password),
              admintype:req.body.admintype,
              name:req.body.name,
              token:req.body.token,
            //   p_foodtype:req.body.p_foodtype,
             
              });
        
            
              formdata.save().then(res.json({ msg: "success" })).catch((err) => { res.json({ msg: "failed" }) });
            
            });



        }
      }

      check();
    // req.send("hii");
    // console.log("hii");
}


exports.SHOW = function(req, res) {
  
    AdminUser.find((error, data) => {
      if (error) {
        res.json({slider:error})
      } else {
        res.json(data)
      }
    }).sort({_id:-1})
  };



  
exports.Delete = function(req,res){
  const { _id } = req.body;

  async function removePhoto(params) {
     var  getproduct = await AdminUser.findOne({ _id: _id });

    if(getproduct){

  
      console.log( getproduct.profileImage);
    let strC =  getproduct.profileImage.replace("https://tifinco.com:5000", ".");
       console.log(strC );

      if (fs.existsSync(strC)) {
      
          fs.unlinkSync(strC)
          

          AdminUser.deleteOne({_id: _id}).then(
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

        }else{
        
                
          AdminUser.deleteOne({_id: _id}).then(
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

    }
  }

  removePhoto();

}

