var Jimp = require('jimp');
var fs = require('fs');
var slider_model = require('../../model/adminmodel/Slider_Model');
var contactus_model = require('../../model/adminmodel/dashboard/contactus_m');
var subscribenow_m = require('../../model/adminmodel/dashboard/subscribenow_m');
var  socialinfos = require('../../model/adminmodel/dashboard/SocilaLink_M');
const Corporate_M = require('../../model/adminmodel/dashboard/corporate_m');
var MenuProfileimage = require('../../model/fluttermodel/MenuProfileimage');
var tiffinPrice_m = require('../../model/adminmodel/tiffinprice_M');
var appbarimages_M = require('../../model/adminmodel/dashboard/app_bgimage_M.js');
exports.slider_insert = function(req, res) {
    // res.send(req.body);
   const { image } = req.body;
   const images = new slider_model({

        image_name: image
        });

        images.save().then(res.json({ msg: "success" })).catch((err) => { res.json({ msg: "failed" }) });
 
 };

 exports.uploadImage = function(req, res) {
 console.log(req.file);
    res.send({msg:"success"});

 
 };

 exports.contactus = function(req, res) {

    console.log("req.body", req.body);
  // inserting a new inventory
  var _id = req.body._id;
  var con_info = {

    cname:req.body.cname,
    mobile:req.body.mobile,
    email:req.body.email,
    address:req.body.address
    
  };

  contactus_model.findByIdAndUpdate(_id, con_info , { new: true }, function(
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
 
 };


 exports.get_contactus_info = async function(req,res){
  console.log("get con");
    var getContacts = await contactus_model.find();
    res.send(getContacts);
 

 };


 exports.get_subscribenowimage = function(req,res)
 {

        
       const { filename, path } = req.file;
       var _id = req.body._id;
       console.log(filename);
      Jimp.read('https://tifinco.com:5000/public/subscribenowimage/'+filename, (err, photo) => 
      {
          if (err) throw err;
          photo.resize(700, 700) ;
          photo.quality(90) ;// set JPEG quality
          // photo.greyscale() ;
          photo.write('./public/subscribenowimage/'+filename); // save
        
          async function removePhoto(params) 
          {
            console.log("remove");
            var  getsubscribenow = await subscribenow_m.findOne({ _id: _id });

            if(getsubscribenow)
            {
                console.log("removedata");
                console.log(getsubscribenow.subs_image);
                let strC =   getsubscribenow.subs_image.replace("https://tifinco.com:5000", ".");
                console.log(strC );

              if (fs.existsSync(strC)) 
              {
                  console.log("removedataexist");
                  fs.unlinkSync(strC)

               
                  var subs_info = {
                
                    subs_image:'https://tifinco.com:5000/public/subscribenowimage/'+filename
                    
                  };
                
                  subscribenow_m.findByIdAndUpdate(_id, subs_info , { new: true }, function( err, subs_info ) 
                  {
                      if (err)
                      {
                        console.log("err", err);
                        res.status(200).send({msg:'error'});
                      } 
                      else 
                      {
                
                          console.log("success");
                          res.send({msg:'success'});
                      }
                  });
               }
                else
                {
                    var subs_info = {
          
                      subs_image:'https://tifinco.com:5000/public/subscribenowimage/'+filename
                      
                    };
                  
                    subscribenow_m.findByIdAndUpdate(_id, subs_info , { new: true }, function(  err,  subs_info ) 
                    {
                        if (err) 
                        {
                          console.log("err", err);
                          res.status(200).send({msg:'error'});
                        } 
                        else
                        {
                            console.log("success");
                            res.send({msg:'success'});
                        }
                   });
                }
  
          }
      }

      removePhoto();
    
     
  });


 };

 exports.get_subscribenow_info = async function(req,res){

    var getsubscribenow = await subscribenow_m.find();
    res.send(getsubscribenow);
 

 };


 exports.SocialUpdate = function(req, res) 
 {
  //  alert("jsabms smnsw ");
      console.log("req.body", req.body);
    // inserting a new inventory
    var _id = req.body._id;

    var  con_info =  {
       facebook:req.body.facebook,
      instagram:req.body.instagram,
      twitter:req.body.twitter,
      linkedin:req.body.linkedin
  };
    socialinfos.findByIdAndUpdate(_id, con_info , { new: true }, function(
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
   
   };

 exports.get_social_info = async function(req,res){
    var getContacts = await socialinfos.find();
    res.send(getContacts);
 }

 /////////////////////////////////////// corporate image

exports.corporateinsert = function(req,res)
{
    
    const { filename, path } = req.file;
    var _id = req.body._id;
    console.log(filename);
Jimp.read('https://tifinco.com:5000/public/corporate_image/'+filename, (err, photo) => {
 if (err) throw err;
   photo.resize(700, 700) ;
   photo.quality(60) ;// set JPEG quality
   // photo.greyscale() ;
   photo.write('../../public/corporate_image/'+filename); // save
  
   async function removePhoto(params) {
     console.log("remove");
    //  console.log(_id);
     var  getsubscribenow = await Corporate_M.findOne({ _id: _id });
     console.log(getsubscribenow);
     if(getsubscribenow){
       console.log("removedata");
       console.log(getsubscribenow.corporate_image);
     let strC =  getsubscribenow.corporate_image.replace("https://tifinco.com:5000", ".");
        console.log(strC );
       if (fs.existsSync(strC)) {
         console.log("removedataexist");
           fs.unlinkSync(strC)

            
   var subs_info = {
 
      corporate_image:'https://tifinco.com:5000/public/corporate_image/'+filename
     
   };
 
   Corporate_M.findByIdAndUpdate(_id, subs_info, { new: true }, function(
     err,
     subs_info
   ) {
     if (err) {
       console.log("err", err);
       res.status(200).send({msg:'error'});
     } else {
      
       console.log("success");
       res.send({msg:'success'});
     }
   });
         }else{
           var subs_info = {
 
              corporate_image:'https://tifinco.com:5000/public/corporate_image/'+filename
             
           };
         
           Corporate_M.findByIdAndUpdate(_id, subs_info , { new: true }, function(
             err,
             subs_info
           ) {
             if (err) {
               console.log("err", err);
               res.status(200).send({msg:'error'});
             } else {
     
              
               console.log("success");
               res.send({msg:'success'});
             }
           });
         }

     }
   }

   removePhoto();
 
  
});

};



exports.corporateinsert1 = function(req,res){
    
  const { filename, path } = req.file;
  var _id = req.body._id;
  console.log(filename);
Jimp.read('https://tifinco.com:5000/public/corporate_image/'+filename, (err, photo) => {
if (err) throw err;
 photo.resize(700, 700) ;
 photo.quality(60) ;// set JPEG quality
 // photo.greyscale() ;
 photo.write('../../public/corporate_image/'+filename); // save

 async function removePhoto(params) {
   console.log("remove");
  //  console.log(_id);
   var  getsubscribenow = await Corporate_M.findOne({ _id: _id });
   console.log(getsubscribenow);
   if(getsubscribenow){
     console.log("removedata");
     console.log(getsubscribenow.corporate_image2);
   let strC =  getsubscribenow.corporate_image2.replace("https://tifinco.com:5000", ".");
      console.log(strC );
     if (fs.existsSync(strC)) {
       console.log("removedataexist");
         fs.unlinkSync(strC)

          
 var subs_info = {

    corporate_image2:'https://tifinco.com:5000/public/corporate_image/'+filename
   
 };

 Corporate_M.findByIdAndUpdate(_id, subs_info, { new: true }, function(
   err,
   subs_info
 ) {
   if (err) {
     console.log("err", err);
     res.status(200).send({msg:'error'});
   } else {
    
     console.log("success");
     res.send({msg:'success'});
   }
 });
       }else{
         var subs_info = {

          corporate_image2:'https://tifinco.com:5000/public/corporate_image/'+filename
           
         };
       
         Corporate_M.findByIdAndUpdate(_id, subs_info , { new: true }, function(
           err,
           subs_info
         ) {
           if (err) {
             console.log("err", err);
             res.status(200).send({msg:'error'});
           } else {
   
            
             console.log("success");
             res.send({msg:'success'});
           }
         });
       }

   }
 }

 removePhoto();


});

};

exports.get_corporate_info = async function(req,res){

 var getsubscribenow = await Corporate_M.find();
 res.send(getsubscribenow);

};
// exports.get_corporate_info1 = async function(req,res){

//   var getsubscribenow = await Corporate_M.find();
//   res.send(getsubscribenow).lim;
 
//  };
 exports.get_corporate_info1 = function(req, res) {
  
  Corporate_M.find((error, data) => {
      if (error) {
        res.json({Corporate_M:error})
      } else {
        res.json(data)
      }
    }).sort({_id:1}).limit(1)
  };



exports.getmenuprofileimageINSERT = function(req,res){
  console.log("hii")

      
  const { filename, path } = req.file;
  var _id = req.body._id;
  console.log(filename);
Jimp.read('https://tifinco.com:5000/public/menuprofile/'+filename, (err, photo) => {
if (err) throw err;
 photo.resize(700, 700) ;
 photo.quality(60) ;// set JPEG quality
 // photo.greyscale() ;
 photo.write('./public/menuprofile/'+filename); // save

 async function removePhoto(params) {
   console.log("remove");
   var  getsubscribenow = await MenuProfileimage.findOne({ _id: _id });

   if(getsubscribenow){
     console.log("removedata");
     console.log(getsubscribenow.image);
   let strC =   getsubscribenow.image.replace("https://tifinco.com:5000", ".");
      console.log(strC );
     if (fs.existsSync(strC)) {
       console.log("removedataexist");
         fs.unlinkSync(strC)

          
 var subs_info = {

   image:'https://tifinco.com:5000/public/menuprofile/'+filename
   
 };

 MenuProfileimage.findByIdAndUpdate(_id, subs_info , { new: true }, function(
   err,
   subs_info
 ) {
   if (err) {
     console.log("err", err);
     res.status(200).send({msg:'error'});
   } else {

    
     console.log("success");
     res.send({msg:'success'});
   }
 });
       }else{
         var subs_info = {

           image:'https://tifinco.com:5000/public/menuprofile/'+filename
           
         };
       
         MenuProfileimage.findByIdAndUpdate(_id, subs_info , { new: true }, function(
           err,
           subs_info
         ) {
           if (err) {
             console.log("err", err);
             res.status(200).send({msg:'error'});
           } else {
   
            
             console.log("success");
             res.send({msg:'success'});
           }
         });
       }

   }
 }

 removePhoto();


});


};



exports.getmenuprofileimage= async function(req,res){

  var MenuProfileimagenow = await MenuProfileimage.find();
  res.send(MenuProfileimagenow);
 
 };
 


 exports.update_TiffinPrice = function(req, res) 
 {
 
     console.log("req.body", req.body);
     // inserting a new inventory
     var _id = req.body._id;
     var price_info = {
   
       Heatable:req.body.Heatable,
       NonHeatable:req.body.NonHeatable,
       Tax : req.body.Tax
       
     };
   
     tiffinPrice_m.findByIdAndUpdate(_id, price_info , { new: true }, function(
       err,
       price_info 
     ) {
       if (err) {
         console.log("err", err);
         res.status(200).send({msg:'error'});
       } else {
         console.log("success");
         res.send({msg: "success" });
       }
     });
    
   }
 
   exports.get_TiffinPrice =  async function(req,res)
   {
 // res.send("get connected")
     console.log("get connected");
     var getPrice = await tiffinPrice_m.find();
     res.send(getPrice);
 
   }
 
   exports.delete_TiffinPrice = function(req,res)
   {
     const { _id } = req.body;
 
 
     tiffinPrice_m.deleteOne({_id: _id}).then(
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


  //   app background image

 exports.insertImg_For_Appbar = function(req,res)
{
          console.log("files occured");
          console.log(req.files);
          var appbar_bgimage = req.files.appbar_bgimage[0].filename;
     
          var appbar_icon = req.files.appbar_icon[0].filename;

            console.log(appbar_bgimage);
            console.log(appbar_icon);

          async function check(params) 
          {
            // var  pData = await appbarimages_M.findOne({ appbar_bgimage:appbar_bgimage });

            // // console.log( pData );
    
            // if(pData)
            // {
             
            //     let appbar_bgimg =   "./public/app_bgimage/"+appbar_bgimage;
               
            //     let appbaricon =   "./public/app_bgimage/"+appbar_icon;
                
               
          
            //       if (fs.existsSync(appbar_bgimg) && fs.existsSync(appbaricon) ) 
            //       {
            //           console.log("if exist");
            //           fs.unlinkSync(appbar_bgimg);
            //           fs.unlinkSync(appbaricon);
                     
            //           res.send({msg:"exist"});
            //       }
            //       else
            //       {
            //           console.log("else");
            //           res.send({msg:"exist"});
            //       }
       
            //  }
            //  else
            //  {
             
              Jimp.read('https://tifinco.com:5000/public/app_bgimage/'+appbar_bgimage, (err, photo) => {
                if (err) throw err;
                 photo.resize(700, 700) ;
                 photo.quality(60) ;// set JPEG quality
                 // photo.greyscale() ;
                 photo.write('./public/app_bgimage/'+appbar_bgimage); // save

                 
                 Jimp.read('https://tifinco.com:5000/public/app_bgimage/'+appbar_icon, (err, photo) => {
                  if (err) throw err;
                   photo.resize(700, 700) ;
                   photo.quality(60) ;// set JPEG quality
                   // photo.greyscale() ;
                  
                 photo.write('./public/app_bgimage/'+appbar_icon); // save
               
                 const data = new appbarimages_M({
              
                  
                  appbar_bgimage: 'https://tifinco.com:5000/public/app_bgimage/'+appbar_bgimage,
                  appbar_icon: 'https://tifinco.com:5000/public/app_bgimage/'+appbar_icon,
                  
                  });
            
                
                  data.save().then(res.json({ msg: "success" }))
                 

                })
                .catch((err) => { res.json({ msg: "failed" }) });
                }) 
                
    
    
    
            // }
          }
    
          check();

};
exports.show_appbarImages = function(req,res)
{
  appbarimages_M.find((error, data) => {
    if (error) {
      res.json({appbar_images:error})
    } else {
      res.json(data)
    }
  })
}

exports.update_appbarImages = async function(req,res)
{
  
    var _id = req.body._id;
    console.log(_id);
  
    var  pData = await appbarimages_M.findOne({ _id: _id });
    console.log(pData);
    console.log(pData.appbar_bgimage);
    console.log(pData.appbar_icon);

   var link = "https://tifinco.com:5000/public/app_bgimage/";

   if(link.concat(req.body.appbar_icon) == pData.appbar_icon)
   {
        console.log("table data (Icon Image not changed)");
        var appbar_bgimage = req.files.appbar_bgimage[0].filename;
        var appbar_icon = req.body.appbar_icon;
        console.log(appbar_bgimage);
        console.log(appbar_icon);

        // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++there is data for testing purpose ++++++++++++++++++++++++++++++++++++++++++
        
         
      Jimp.read('https://tifinco.com:5000/public/app_bgimage/'+appbar_bgimage, (err, photo) => 
      {
          if (err) throw err;
          photo.resize(700, 700) ;
          photo.quality(90) ;// set JPEG quality
          // photo.greyscale() ;
          photo.write('./public/app_bgimage/'+appbar_bgimage); // save
        
          async function removePhoto(params) 
          {
            console.log("remove");
            var  getsubscribenow = await appbarimages_M.findOne({ _id: _id });

            if(getsubscribenow)
            {
                console.log("removedata");
                console.log(getsubscribenow.appbar_bgimage);
                let strC =   getsubscribenow.appbar_bgimage.replace("https://tifinco.com:5000", ".");
                console.log(strC );

              if (fs.existsSync(strC)) 
              {
                  console.log("removedataexist");
                  fs.unlinkSync(strC)

               
                  var subs_info = {
                
                    appbar_bgimage:'https://tifinco.com:5000/public/app_bgimage/'+appbar_bgimage
                    
                  };
                
                  appbarimages_M.findByIdAndUpdate(_id, subs_info , { new: true }, function( err, subs_info ) 
                  {
                      if (err)
                      {
                        console.log("err", err);
                        res.status(200).send({msg:'error'});
                      } 
                      else 
                      {
                
                          console.log("success");
                          res.send({msg:'success'});
                      }
                  });
               }
                else
                {
                    var subs_info = {
          
                      appbar_bgimage:'https://tifinco.com:5000/public/app_bgimage/'+appbar_bgimage
                      
                    };
                  
                    appbarimages_M.findByIdAndUpdate(_id, subs_info , { new: true }, function(  err,  subs_info ) 
                    {
                        if (err) 
                        {
                          console.log("err", err);
                          res.status(200).send({msg:'error'});
                        } 
                        else
                        {
                            console.log("success");
                            res.send({msg:'success'});
                        }
                   });
                }
  
          }
      }

      removePhoto();
    
     
  });

        // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ few data are awailable here++++++++++++++++++++++++++++++++++++++++++++++++

   }
   else if(link.concat(req.body.appbar_bgimage) == pData.appbar_bgimage)
   {
        console.log("table data (Appbar Image not changed)");
        var appbar_bgimage = req.body.appbar_bgimage
        var appbar_icon = req.files.appbar_icon[0].filename;
  
        console.log(appbar_bgimage);
        console.log(appbar_icon);

        // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++there is data for testing purpose ++++++++++++++++++++++++++++++++++++++++++
        
         
      Jimp.read('https://tifinco.com:5000/public/app_bgimage/'+appbar_icon, (err, photo) => 
      {
          if (err) throw err;
          photo.resize(700, 700) ;
          photo.quality(90) ;// set JPEG quality
          // photo.greyscale() ;
          photo.write('./public/app_bgimage/'+appbar_icon); // save
        
          async function removePhoto(params) 
          {
            console.log("remove");
            var  getsubscribenow = await appbarimages_M.findOne({ _id: _id });

            if(getsubscribenow)
            {
                console.log("removedata");
                console.log(getsubscribenow.appbar_icon);
                let strC =   getsubscribenow.appbar_icon.replace("https://tifinco.com:5000", ".");
                console.log(strC );

              if (fs.existsSync(strC)) 
              {
                  console.log("removedataexist");
                  fs.unlinkSync(strC)

               
                  var subs_info = {
                
                    appbar_icon:'https://tifinco.com:5000/public/app_bgimage/'+appbar_icon
                    
                  };
                
                  appbarimages_M.findByIdAndUpdate(_id, subs_info , { new: true }, function( err, subs_info ) 
                  {
                      if (err)
                      {
                        console.log("err", err);
                        res.status(200).send({msg:'error'});
                      } 
                      else 
                      {
                
                          console.log("success");
                          res.send({msg:'success'});
                      }
                  });
               }
                else
                {
                    var subs_info = {
          
                      appbar_icon:'https://tifinco.com:5000/public/app_bgimage/'+appbar_icon
                      
                    };
                  
                    appbarimages_M.findByIdAndUpdate(_id, subs_info , { new: true }, function(  err,  subs_info ) 
                    {
                        if (err) 
                        {
                          console.log("err", err);
                          res.status(200).send({msg:'error'});
                        } 
                        else
                        {
                            console.log("success");
                            res.send({msg:'success'});
                        }
                   });
                }
  
          }
      }

      removePhoto();
    
     
  });

        // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ few data are awailable here++++++++++++++++++++++++++++++++++++++++++++++++

   }
   else
   {
    var appbar_bgimage = req.files.appbar_bgimage[0].filename;
      
      var appbar_icon = req.files.appbar_icon[0].filename;
  
        console.log(appbar_bgimage);
        console.log(appbar_icon);
        console.log("_id is "+_id);


        Jimp.read('https://tifinco.com:5000/public/app_bgimage/'+appbar_bgimage, (err, photo) => {
          if (err) throw err;
          //  photo.resize(700, 700) ;
           photo.quality(90) ;// set JPEG quality
           // photo.greyscale() ;
           photo.write('./public/app_bgimage/'+appbar_bgimage); // save

           
           Jimp.read('https://tifinco.com:5000/public/app_bgimage/'+appbar_icon, (err, photo) => {
            if (err) throw err;
            //  photo.resize(700, 700) ;
             photo.quality(90) ;// set JPEG quality
             // photo.greyscale() ;
            
           photo.write('./public/app_bgimage/'+appbar_icon); // save
      
              async function removePhoto(params) 
              {

                    console.log("remove");
                    var  pData = await appbarimages_M.findOne({ _id: _id });
                    console.log(pData);
                  
                    if(pData)
                    {
                        console.log("removedata");
                        console.log(pData.appbar_bgimage);
                        console.log(pData.appbar_icon);
                        let strC = pData.appbar_bgimage.replace("https://tifinco.com:5000", ".");
                        let strC_icon = pData.appbar_icon.replace("https://tifinco.com:5000", ".");
                        console.log(strC );
                        console.log(strC_icon );

                  if (fs.existsSync(strC) || fs.existsSync(strC_icon)) 
                  {
                      console.log("removedataexist");
                      fs.unlinkSync(strC)
                      fs.unlinkSync(strC_icon)
                    
                      var image_info = {
                    
                        appbar_bgimage:'https://tifinco.com:5000/public/app_bgimage/'+appbar_bgimage,
                        appbar_icon : 'https://tifinco.com:5000/public/app_bgimage/'+appbar_icon
                        
                      };
                    
                     appbarimages_M.findByIdAndUpdate(_id, image_info , { new: true }, function( err, image_info ) 
                      {
                          if (err)
                          {
                            console.log("err", err);
                            res.status(200).send({msg:'error'});
                          } 
                          else 
                          {
                    
                              console.log("success");
                              res.send({msg:'success'});
                          }
                      });
                    }
                    else
                    {
                        var image_info = 
                        {
                          appbar_bgimage:'https://tifinco.com:5000/public/app_bgimage/'+appbar_bgimage,
                          appbar_icon : 'https://tifinco.com:5000/public/app_bgimage/'+appbar_icon
                        };
                      
                       appbarimages_M.findByIdAndUpdate(_id, image_info , { new: true }, function(  err,  image_info ) 
                        {
                            if (err) 
                            {
                              console.log("err", err);
                              res.status(200).send({msg:'error'});
                            } 
                            else
                            {
                                console.log("success");
                                res.send({msg:'success'});
                            }
                        });
                    }

                 }
               }

   removePhoto();
           

          }) // INTERNAL Jimp
          
          
        }) // FIRST Jimp 
  }  /// closing of else


}