var Jimp = require('jimp');
var fs = require('fs');
//var slider_model = require('../../model/adminmodel/Slider_Model');
var insertOffer = require('../../model/adminmodel/Offers_Model');
var foodproduct_model = require('../../model/adminmodel/foodproduct/foodproduct_model.js');
 

exports.find = function(req, res) {
  
    insertOffer.find((error, data) => {
      if (error) {
        res.json({insertOffer:error})
      } else {
        res.json(data)
      }
    }).sort({_id:-1})
  };


exports.insertOffer = function(req, res) {
  
  const { filename, path } = req.file;
   
  var price=0;
  var prevprice=0;

  async function price_cal(params) {
    var  getproduct = await foodproduct_model.findOne({ p_name: req.body.p_name });

   if(getproduct){

    prevprice = getproduct.p_price;

      var temp  = (parseInt(prevprice)*parseInt(req.body.discount))/100;
      price = parseInt(prevprice) - temp;
     console.log(getproduct.p_price);
    
  }}

  price_cal();
// var _id = req.body._id;
  console.log(filename);
Jimp.read('https://tifinco.com:5000/public/offerslider/'+filename, (err, photo) => {
if (err) throw err;
 photo.resize(700, 700) ;
 photo.quality(60) ;// set JPEG quality
 // photo.greyscale() ;
 photo.write('./public/offerslider/'+filename); // save

 const Offerimages = new insertOffer({

    image_name: 'https://tifinco.com:5000/public/offerslider/'+filename,
    p_name:req.body.p_name,
    discount:req.body.discount,
    price: price,
    prevprice:prevprice
  });

  Offerimages.save().then(res.json({ msg: "success" })).catch((err) => { res.json({ msg: "failed" }) });

});

};




exports.delete = function(req,res){
  const { _id } = req.body;

  async function removePhoto(params) {
     var  getofferslider = await insertOffer.findOne({ _id: _id });

    if(getofferslider){

  
      console.log(getofferslider.image_name);
    let strC =   getofferslider.image_name.replace("https://tifinco.com:5000", ".");
       console.log(strC );

      if (fs.existsSync(strC)) {
      
          fs.unlinkSync(strC)
          

          insertOffer.deleteOne({_id: _id}).then(
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
        
                
        insertOffer.deleteOne({_id: _id}).then(
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