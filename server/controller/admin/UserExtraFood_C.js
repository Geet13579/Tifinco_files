var Jimp = require('jimp');
var fs = require('fs');
var userextrafoodmodel = require('../../model/adminmodel/plandetail/userextrafoodmodel');

 
exports.insert_user_extrafood = function(req, res) {

    const { filename, path } = req.file;

    var item_name= req.body.item_name;
    var item_price= req.body.item_price;
    
      async function   check(params) {
        var  Dataextrafood = await userextrafoodmodel.findOne({ item_name: item_name});

        if(Dataextrafood){
         
       let strC =   "./public/userextrafood/"+filename;

     if (fs.existsSync(strC)) {
         fs.unlinkSync(strC)
          res.send({msg:"exist"});
       }else{
        res.send({msg:"exist"});
       }
   
        }else{

          Jimp.read('https://tifinco.com:5000/public/userextrafood/'+filename, (err, photo) => {
            if (err) throw err;
             photo.resize(70,70) ;
             photo.quality(10) ;// set JPEG quality
             // photo.greyscale() ;
             photo.write('./public/userextrafood/'+filename); // save
            
             
             const userextrafood = new userextrafoodmodel({
            
              item_image: 'https://tifinco.com:5000/public/userextrafood/'+filename,
              item_name: item_name,
              item_price:item_price,
              });
        
            
              userextrafood.save().then(res.json({ msg: "success" })).catch((err) => { res.json({ msg: "failed" }) });
            
            });



        }
      }

      check();

   
}

exports.show_user_extrafood = function(req, res) {
  
    userextrafoodmodel.find((error, data) => {
      if (error) {
        res.json({userextra_food:error})
      } else {
        res.json(data)
      }
    }).sort({_id:-1})
  };



exports.delete_user_extrafood = function(req,res){
  const { _id } = req.body;

  async function removePhoto(params) {
     var  getcat = await userextrafoodmodel.findOne({ _id: _id });

    if(getcat){

    let strC =   getcat.item_image.replace("https://tifinco.com:5000", ".");

      if (fs.existsSync(strC)) {
      
          fs.unlinkSync(strC)
          

          userextrafoodmodel.deleteOne({_id: _id}).then(
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
        
                
            userextrafoodmodel.deleteOne({_id: _id}).then(
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