var Jimp = require('jimp');
var fs = require('fs');
//var slider_model = require('../../model/adminmodel/Slider_Model');
var insertOrder = require('../../model/adminmodel/Orderslider_M');
 

exports.find = function(req, res) {
  
    insertOrder.find((error, data) => {
      if (error) {
        res.json({insertOrder:error})
      } else {
        res.json(data)
      }
    }).sort({_id:-1}).limit(4);
  };


exports.insertOrder = function(req, res) {
  
  const { filename, path } = req.file;

// var _id = req.body._id;
  console.log(filename);
Jimp.read('https://tifinco.com:5000/public/ordernowslider/'+filename, (err, photo) => {
if (err) throw err;
 photo.resize(700, 700) ;
 photo.quality(60) ;// set JPEG quality
 // photo.greyscale() ;
 photo.write('./public/ordernowslider/'+filename); // save

 const Orderimages = new insertOrder({

    odernow_image: 'https://tifinco.com:5000/public/ordernowslider/'+filename,
    name:req.body.name,
  });

  Orderimages.save().then(res.json({ msg: "success" })).catch((err) => { res.json({ msg: "failed" }) });

});

};




exports.deleteorder = function(req,res){
  const { _id } = req.body;

  async function removePhoto(params) {
     var  getorderslider = await insertOrder.findOne({ _id: _id });

    if(getorderslider){

  
      console.log(getorderslider.image_name);
    let strC =   getorderslider.odernow_image.replace("https://tifinco.com:5000", ".");
       console.log(strC );

      if (fs.existsSync(strC)) {
      
          fs.unlinkSync(strC)
          

          insertOrder.deleteOne({_id: _id}).then(
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
        
                
            insertOrder.deleteOne({_id: _id}).then(
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