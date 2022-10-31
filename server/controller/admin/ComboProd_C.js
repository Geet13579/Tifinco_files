var Jimp = require('jimp');
var fs = require('fs');
var comboproduct_m= require('../../model/adminmodel/Category/ComboProduct_infomodel.js');


exports.insertComboProd = function(req,res)
{

    // res.send("hello done");
   
    const { filename, path } = req.file;

    var p_name= req.body.p_name;
     console.log(p_name);
      async function  check(params) {
        var  pData = await comboproduct_m.findOne({ p_name: req.body.p_name });

        if(pData){
         
       let strC =   "./public/comboproduct/"+filename;
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

          Jimp.read('https://tifinco.com:5000/public/comboproduct/'+filename, (err, photo) => {
            if (err) throw err;
             photo.resize(700, 700) ;
             photo.quality(60) ;// set JPEG quality
             // photo.greyscale() ;
             photo.write('./public/comboroduct/'+filename); // save
            
             
             const foodprodata = new comboproduct_m({
            
              p_image: 'https://tifinco.com:5000/public/comboproduct/'+filename,
              p_name: p_name,
              p_category:req.body.p_category,
              p_price:req.body.p_price,
              p_description:req.body.p_description,
              p_rating:req.body.p_rating,
              p_foodtype:req.body.p_foodtype,
              offer:req.body.offer,
              extra:req.body.extra,
              p_combotype:req.body.p_combotype,
              tifinco_special:req.body.tifinco_special,
              });
        
            
              foodprodata.save().then(res.json({ msg: "success" })).catch((err) => { res.json({ msg: "failed" }) });
            
            });



        }
      }

      check();
}


exports.findComboProd = function(req, res) {
  
  comboproduct_m.find((error, data) => {
      if (error) {
        res.json({category:error})
      } else {
        res.json(data)
      }
    }).sort({_id:-1})
  };


  exports.getfilterdata =  function(req,res){

    const {limit_val} = req.body;
    console.log(limit_val);
    if (limit_val === 'all'){
       comboproduct_m.find((error, data) => {
        if (error) {
          res.json({msg:error})
        } else {
          console.log(data);
          res.json(data)
        }
      }).sort({_id:-1})
    }else{
   
  
       comboproduct_m.find((error, data) => {
        if (error) {
          res.json({msg:error})
        } else {
          res.json(data)
        }
      }).limit(10).skip(limit_val).sort({_id:-1});
      // res.send("limit");
    }
  
  }
  exports.getsearchdata = function(req,res)
  {
   
    const {_id} = req.body;
    console.log(_id);
  
      async function   getData(params) {
      var  pData = await  comboproduct_m.find({ p_name :{ $regex : '.*'+ _id + '.*' }});
     console.log( pData);
      if(pData)
      {
        res.send(pData);
      }
      else
      {
        res.send({msg:"notfound"});
  
      }}
    getData();
  
  }

exports.delete_ComboProduct = function(req,res)
{
  const { _id } = req.body;

   async function removePhoto(params)
   {
     var  getproduct = await comboproduct_m.findOne({ _id: _id });

     if(getproduct)
     {

  
          console.log( getproduct.p_image);
          let strC =  getproduct.p_image.replace("https://tifinco.com:5000", ".");
          console.log(strC );

        if (fs.existsSync(strC))
        {
        
          fs.unlinkSync(strC)
          
          comboproduct_m.deleteOne({_id: _id}).then(
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
        else
        {
            comboproduct_m.deleteOne({_id: _id}).then(
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


exports.updateproduct = function(req,res)
{
      var p_name= req.body.p_name;
      var p_id= req.body.p_id;

      console.log(p_name);
      
      async function  check(params) 
      {
          var  product_data = await comboproduct_m.findOne({ _id: p_id });
          if(product_data)
          {

             if(product_data['p_name'] == p_name)
             {
         
                  if(req.file)
                  {
                    console.log("image found");
                    console.log(product_data['p_image']);
                    let strC =  product_data['p_image'].replace("https://tifinco.com:5000", ".");
                    console.log(strC );
            
                  if (fs.existsSync(strC)) 
                  {
                  
                      fs.unlinkSync(strC)
                  }//closing of photo remove

                    const { filename, path } = req.file;
                  Jimp.read('https://tifinco.com:5000/public/comboproduct/'+filename, (err, photo) => {
                            if (err) throw err;
                            photo.resize(300, 300) ;
                            photo.quality(60) ;// set JPEG quality
                            // photo.greyscale() ;
                            photo.write('./public/comboproduct/'+filename); // save
                            
                            
                            var foodprodata = {
                            
                              p_image: 'https://tifinco.com:5000/public/comboproduct/'+filename,
                              p_name: p_name,
                              p_category:req.body.p_category,
                              p_price:req.body.p_price,
                              p_description:req.body.p_description,
                              p_combotype:req.body.p_combotype,
                              // p_foodtype:req.body.p_foodtype,
                              offer:req.body.offer,
                              extra:req.body.extra,
                              tifinco_special:req.body.tifinco_special,
                              };
                              console.log(foodprodata);
                              comboproduct_m.findByIdAndUpdate(p_id,foodprodata, { new: true }, function(err, food_inf) {
                                if (err) {
                                  console.log("err", err);
                                  res.status(200).send({msg:'error'});
                                } else {
                                  console.log("success");
                                  res.send({msg: "success"});
                                }
                              });
                            
                              //foodprodata.save().then(res.json({ msg: "success" })).catch((err) => { res.json({ msg: "failed" }) });
                            
                            });

                          }
                          else
                          {
                              
                            console.log("image id not there");
                            var foodprodata = {
                            
                              p_image: req.body.p_image,
                              p_name: p_name,
                              p_category:req.body.p_category,
                              p_price:req.body.p_price,
                              p_description:req.body.p_description,
                              p_rating:req.body.p_rating,
                              p_foodtype:req.body.p_foodtype,
                              offer:req.body.offer,
                              extra:req.body.extra,
                              tifinco_special:req.body.tifinco_special,
                              };
                         console.log(foodprodata);
                              comboproduct_m.findByIdAndUpdate(p_id,foodprodata, { new: true }, function(err, food_inf) {
                                if (err) {
                                  console.log("err", err);
                                  res.status(200).send({msg:'error'});
                                } else {
                                  console.log("success");
                                  res.send({msg: "success"});
                                }
                              });
                          }//checking for image
         }
         
         else
         {

              var  pData = await comboproduct_m.findOne({ p_name: req.body.p_name });

              if(pData)
              {
                  if(req.file)
                  {
                      let strC =   "./public/comboproduct/"+filename;
                      console.log(strC );
            
                        if (fs.existsSync(strC)) 
                        {
                            console.log("if");
                          fs.unlinkSync(strC)
                            res.send({msg:"exist"});
                        }
                        else
                        {
                          console.log("else");
                          res.send({msg:"exist"});
                        }
                    }
                else
                {
                    res.send({msg:"exist"});
                }//checking for image 
              }
              else
              {
        
                      if(req.file)
                      {
                          const { filename, path } = req.file;
                          Jimp.read('https://tifinco.com:5000/public/comboproduct/'+filename, (err, photo) => {
                              if (err) throw err;
                              photo.resize(300, 300) ;
                              photo.quality(60) ;// set JPEG quality
                              // photo.greyscale() ;
                              photo.write('./public/comboproduct/'+filename); // save
                              
                              
                              var foodprodata = {
                              
                                p_image: 'https://tifinco.com:5000/public/comboproduct/'+filename,
                                p_name: p_name,
                                p_category:req.body.p_category,
                                p_price:req.body.p_price,
                                p_description:req.body.p_description,
                                p_rating:req.body.p_rating,
                                p_foodtype:req.body.p_foodtype,
                                offer:req.body.offer,
                                extra:req.body.extra,
                                tifinco_special:req.body.tifinco_special,
                                };
                                console.log(foodprodata);
                                comboproduct_m.findByIdAndUpdate(p_id,foodprodata, { new: true }, function(err, food_inf) {
                                  if (err) {
                                    console.log("err", err);
                                    res.status(200).send({msg:'error'});
                                  } else {
                                    console.log("success");
                                    res.send({msg: "success"});
                                  }
                                });
                              
                                //foodprodata.save().then(res.json({ msg: "success" })).catch((err) => { res.json({ msg: "failed" }) });
                              
                              });
            
                      }
                      else
                      {
                                
                                console.log("image id not there");
                                var foodprodata = {
                              
                                p_image: req.body.p_image,
                                p_name: p_name,
                                p_category:req.body.p_category,
                                p_price:req.body.p_price,
                                p_description:req.body.p_description,
                                p_rating:req.body.p_rating,
                                p_foodtype:req.body.p_foodtype,
                                offer:req.body.offer,
                                extra:req.body.extra,
                                tifinco_special:req.body.tifinco_special,
                                };
                                console.log(foodprodata);
                                comboproduct_m.findByIdAndUpdate(p_id,foodprodata, { new: true }, function(err, food_inf) {
                                  if (err) {
                                    console.log("err", err);
                                    res.status(200).send({msg:'error'});
                                  } else {
                                    console.log("success");
                                    res.send({msg: "success"});
                                  }
                                });
            
            
            
                      }//checking for image
            
            
              }//closing of else



         }//closing of else   



      }//closing of product_data
      

 
    }//closing of chk fun

    check();




 }
 exports.getOneproduct = function(req,res){
  //  res.send("done");

  const {_id} = req.body;
  console.log(_id);

  async function   getData(params) {
    var  pData = await comboproduct_m.findOne({ _id: _id });

    if(pData){
      res.send([pData]);
    }else{
      res.send("not found");

    }}
  getData();
};
