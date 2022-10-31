var Jimp = require('jimp');
var fs = require('fs');

var WEbsiteImageModel = require('../../model/adminmodel/Website_Image.js');

exports.get_Website_Bg_Image= function(req, res)
 {

    WEbsiteImageModel.find((error, data) => {
      if (error) {
        res.json({WEbsiteImageModel:error})
      } else {
        res.json(data)
      }
    }).sort({_id:-1})
  };

  exports.getOneImage =function(req,res)
  {
    const {_id} = req.body;
  
    async function  getData(params) {
      var  pData = await WEbsiteImageModel.findOne({ _id: _id });
  
      if(pData){
        res.send([pData]);
      }else{
        res.send("not found");
  
      }}
    getData();
  }

  exports.insertWebsite_Bg_Image = function(req,res)
  {

    var name = req.body.name;
    var _id = req.body._id;
    // var image = req.body.image;
    // console.log(image);
    // console.log(id);

    async function removePhoto(params)
    {

      var  data = await WEbsiteImageModel.findOne({ _id: _id });
    
      if(data)
      {
          console.log(req.file);
          if(data['name'] == name)
          {

             if(req.file)
             {
                    console.log("image found");
                    console.log(data['image']);
                    let strC =  data['image'].replace("https://tifinco.com:5000", ".");
                    console.log(strC );
      
                    if (fs.existsSync(strC)) 
                    {
                  
                      fs.unlinkSync(strC)
                    }//closing of photo remove

                    const { filename, path } = req.file;
                    Jimp.read('https://tifinco.com:5000/public/websiteimage/'+filename, (err, photo) => {
                    
                      if (err) throw err;

                      photo.resize(300, 300) ;
                      photo.quality(60) ;// set JPEG quality
                      // photo.greyscale() ;
                      photo.write('./public/websiteimage/'+filename); // save
                      
                      
                      var websitedata =
                      {
                        image: 'https://tifinco.com:5000/public/websiteimage/'+filename,
                        name: name,
                        };
                  
                        WEbsiteImageModel.findByIdAndUpdate(_id,websitedata, { new: true }, function(err, image_info)
                      {
                          if (err) 
                          {
                              console.log("err", err);
                              res.status(200).send({msg:'error'});
                          } 
                          else
                        {
                            console.log("success");
                            res.send({msg: "success"});
                          }
                        });
                      
                      });

                }
                else
                {
                    
                    console.log("image id not there");
                    console.log(_id+"id isuue");
                    console.log(req.body.image);
                    var websitedata = {
                  
                    image: req.body.image,
                    name: name
                    };
              
                    WEbsiteImageModel.findByIdAndUpdate(_id,websitedata, { new: true }, function(err, image_info) 
                    {
                      if (err)
                      {
                          console.log("err", err);
                          res.status(200).send({msg:'error'});
                      } 
                      else 
                      {
                        console.log("success");
                        res.send({msg: "success"});
                      }
                    });



                }//checking for image


         }
         else
         {
              var  pData = await WEbsiteImageModel.findOne({ name: req.body.name });
              console.log(req.body.name);
              console.log(pData);
              if(pData)
              {
                  if(req.file)
                  {
                      let strC =   "./public/websiteimage/"+filename;
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
                      Jimp.read('https://tifinco.com:5000/public/websiteimage/'+filename, (err, photo) => {
                      
                      if (err) throw err;
                      
                       photo.resize(300, 300) ;
                       photo.quality(60) ;// set JPEG quality
                       // photo.greyscale() ;
                       photo.write('./public/websiteimage/'+filename); // save
                      
                       
                       var websitedata = 
                       {
                      
                        image: 'https://tifinco.com:5000/public/websiteimage/'+filename,
                        name: name
                        };
                  
                          WEbsiteImageModel.findByIdAndUpdate(_id,websitedata, { new: true }, function(err, image_info) 
                          {
                              if (err) 
                              {
                                  console.log("err", err);
                                  res.status(200).send({msg:'error'});
                              }
                            else
                              {
                                console.log("success");
                                res.send({msg: "success"});
                              }
                        });

                      });
    
                    }
                    else
                    {
                        console.log(req.body.image); // image is null i.e not coming ^^^^^^^^^^^^^^^^^^^^ 
                        console.log(name);
                          console.log("image id not there");
                          console.log("there is id issue");
                          console.log(_id);
                          var websitedata =
                          {
                            image: req.body.image,
                            name: name
                          };
                    console.log(websitedata);
                 
                          WEbsiteImageModel.findByIdAndUpdate(_id,websitedata, { new: true }, function(err, image_info) 
                          {
                              if (err)
                              {
                                  console.log("err", err);
                                  res.status(200).send({msg:'error'});
                              } 
                              else
                              {
                                  console.log("success");
                                  res.send({msg: "success"});
                              }
                          });
    
    
    
                    }//checking for image
    
    
          }//closing of else



         }//closing of else   



      }//closing of data
      

 
    }

    removePhoto();
  
  }




  
