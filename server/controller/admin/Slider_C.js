var Jimp = require('jimp');
var fs = require('fs');
//var slider_model = require('../../model/adminmodel/Slider_Model');
var slider = require('../../model/fluttermodel/slider_model');
 

exports.showslider = function(req, res) {
  
    slider.find((error, data) => {
      if (error) {
        res.json({slider:error})
      } else {
        res.json(data)
      }
    }).sort({_id:-1})
  };


exports.insertsliders = function(req, res) 
{
  
  const { filename, path } = req.file;

// var _id = req.body._id;
  console.log(filename);
Jimp.read('https://tifinco.com:5000/public/appsliders/'+filename, (err, photo) => {
if (err) throw err;
 photo.resize(700, 700) ;
 photo.quality(90) ;// set JPEG quality
 // photo.greyscale() ;
 photo.write('./public/appsliders/'+filename); // save

 const sliderimages = new slider({

  image: 'https://tifinco.com:5000/public/appsliders/'+filename
  });

  sliderimages.save().then(res.json({ msg: "success" })).catch((err) => { res.json({ msg: "failed" }) });

});

};


exports.delete_sliders = function(req,res){
  const { _id } = req.body;

  async function removePhoto(params) {
     var  getslider = await slider.findOne({ _id: _id });

    if(getslider){

  
      console.log(getslider.image);
    let strC =   getslider.image.replace("https://tifinco.com:5000", ".");
       console.log(strC );

      if (fs.existsSync(strC)) {
      
          fs.unlinkSync(strC)
          

          slider.deleteOne({_id: _id}).then(
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
        
                
        slider.deleteOne({_id: _id}).then(
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