
var Jimp = require('jimp');
var fs = require('fs');
// var slider_model = require('../../model/adminmodel/Slider_Model');
var addrawmaterial_m = require('../../../model/adminmodel/kitchenmodel/Addrawmaterial_M');
var RandomNoG_M = require('../../../model/adminmodel/kitchenmodel/RandomNoG_M');



exports.insertmaterial = function(req, res) {


  // var p_name= req.body.p_name;
  var p_name= req.body.p_name;
  var dateTime = require('node-datetime');
  var dt = dateTime.create();
  var formatted = dt.format('Y-m-d H:M:S');
  console.log(formatted);
  
    async function   check(params) {
      console.log(p_name );
      var  p_name_data  = await addrawmaterial_m.findOne({ p_name: p_name });

      if(p_name_data){
       
             res.send({msg:"exist"});
     
 
      }else{

           const addrawmaterial_m_obj = new addrawmaterial_m({
          
            p_name: p_name,
            p_foodtype:req.body.p_foodtype,
            p_date:formatted
                   });
      
          
                   addrawmaterial_m_obj.save().then(res.json({ msg: "success" })).catch((err) => { res.json({ msg: "failed" }) });
     
      }
    }

    check();

 
}


exports.show = function(req, res) {
  
  addrawmaterial_m.find((error, data) => {
      if (error) {
        res.json({category:error})
      } else {
        res.json(data)
      }
    }).sort({_id:-1})
  };


  exports.getoneid = function(req,res){

    const {_id} = req.body;
    console.log(_id);
  
    async function   getData(params) {
      var  pData = await addrawmaterial_m.findOne({ _id: _id });
  
      if(pData){
        res.send([pData]);
      }else{
        res.send("not found");
  
      }}
    getData();
  };



//   exports.getoneid = async (req, res) => {
//     try{
//         const addrawmaterial_m1 = await addrawmaterial_m.findById(req.body.id);
//         res.status(200).json(addrawmaterial_m1);
//     }catch( error ){
//         res.status(404).json({ message: error.message })
//     }
// }



  //get filter data

exports.getfilterdata =  function(req,res){

  const {limit_val} = req.body;
  console.log(limit_val);
  if (limit_val === 'all'){
    addrawmaterial_m.find((error, data) => {
      if (error) {
        res.json({category:error})
      } else {
        res.json(data)
      }
    }).sort({_id:1})
  }else{
 

    addrawmaterial_m.find((error, data) => {
      if (error) {
        res.json({category:error})
      } else {
        res.json(data)
      }
    }).limit(10).skip(limit_val).sort({_id:1});
    // res.send("limit");
  }
//   async function   getData(params) {
//     var  pData = await addrawmaterial_m.find({ p_image : { $gt :  limit_val, $lt : 20}});

//     if(pData){
//       res.send(pData);
//     }else{
//       res.send({msg:"notfound"});

//     }}
//  getData();

//   }

}
// exports.getsearchdata = function(req,res){
 


//   const {_id} = req.body;
//   console.log(_id);

//   async function   getData(params) {
//     var  pData = await addrawmaterial_m.find({ p_name :{ $regex : '.*'+ _id + '.*' }});

//     if(pData){
//       res.send(pData);
//     }else{
//       res.send({msg:"notfound"});

//     }}
//   getData();

// }





exports.getsearchdata = function(req,res){
 


  const {_id} = req.body;
  console.log(_id);

  async function   getData(params) {
    var  pData = await addrawmaterial_m.find({ plan_name :{ $regex : '.*'+ _id + '.*' }});

    if(pData){
      res.send(pData);
    }else{
      res.send({msg:"notfound"});

    }}
  getData();

}

// exports.delete_FoodProduct = function(req,res){
//   const { _id } = req.body;

//   async function removePhoto(params) {
//      var  getproduct = await addrawmaterial_m.findOne({ _id: _id });

//     if(getproduct){

  
//       console.log( getproduct.p_image);
//     let strC =  getproduct.p_image.replace("https://tifinco.com:5000", ".");
//        console.log(strC );

//       if (fs.existsSync(strC)) {
      
//           fs.unlinkSync(strC)
          

//           addrawmaterial_m.deleteOne({_id: _id}).then(
//             () => {
//               res.status(200).json({
//                 msg: 'success'
//               });
//             }
//           ).catch(
//             (error) => {
//               res.status(200).json({
//                 msg: 'failure'
//               });
//             }
//           );  

//         }else{
        
                
//           addrawmaterial_m.deleteOne({_id: _id}).then(
//            () => {
//              res.status(200).json({
//                msg: 'success'
//              });
//            }
//          ).catch(
//            (error) => {
//              res.status(200).json({
//                msg: 'failure'
//              });
//            }
//          );

//         }

//     }
//   }

//   removePhoto();

// }




exports.delete_FoodProduct = function(req,res){
  const { _id } = req.body;
  
  
  addrawmaterial_m.deleteOne({_id: _id}).then(
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

exports.lastrow_rawmaterial = async(req, res)=> {
 
  
  
  // addrawmaterial_m.find((error, data) => {
  //     if (error) {
  //       res.json({category:error})
  //     } else {
  //       res.json(data)
  //     }
  //   }).sort({'_id':-1})


 
      var now = new Date();
    now.setDate(now.getDate() -1); // timestamp
  // console.log(b);
   var currentDate = new Date();
      // now1 = new Date(now); // Date object
      // console.log(now1);
      let chktime = await addrawmaterial_m.find( {$or:[ {time:{ $gt: now }},{time:{ $gt: currentDate }},]})
      res.send(chktime)
    
    


  

}





  // exports.count = function(req, res) {
  
  //   addrawmaterial_m.find((error, data) => {
  //       if (error) {
  //         res.json({category:error})
  //       } else {
  //         res.json(data)
  //       }
  //     }).sort({_id:-1}).count();
  //   };




exports.update = function(req,res){

  var p_name= req.body.p_name;
  var p_id= req.body.p_id;



  console.log(p_name);
  
    async function   check(params) {

      var  product_data = await addrawmaterial_m.findOne({ _id: p_id });
      if(product_data){

         if(product_data['p_name'] == p_name){

         
         
         if(req.file){
           console.log("image found");
           console.log(product_data['p_image']);
          let strC =  product_data['p_image'].replace("https://tifinco.com:5000", ".");
          console.log(strC );
   
         if (fs.existsSync(strC)) {
         
             fs.unlinkSync(strC)
         }//closing of photo remove

          const { filename, path } = req.file;
         Jimp.read('https://tifinco.com:5000/public/foodrawmaterial/'+filename, (err, photo) => {
                  if (err) throw err;
                   photo.resize(300, 300) ;
                   photo.quality(60) ;// set JPEG quality
                   // photo.greyscale() ;
                   photo.write('./public/foodrawmaterial/'+filename); // save
                  
                   
                   var foodprodata = {
                  
                    p_image: 'https://tifinco.com:5000/public/foodrawmaterial/'+filename,
                    p_name: p_name,
                    p_quantity:req.body.p_quantity,
                    p_price:req.body.p_price,
                    p_rawmaterial:req.body.p_rawmaterial,
                    // p_rating:req.body.p_rating,
                    p_foodtype:req.body.p_foodtype
                    };
              
                    addrawmaterial_m.findByIdAndUpdate(p_id,foodprodata, { new: true }, function(err, food_inf) {
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

                }else{
                    
                  console.log("image id not there");
                  var foodprodata = {
                  
                    p_image: req.body.p_image,
                    p_name: p_name,
                    p_quantity:req.body.p_quantity,
                    p_price:req.body.p_price,
                    p_rawmaterial:req.body.p_rawmaterial,
                    // p_rating:req.body.p_rating,
                    p_foodtype:req.body.p_foodtype
                    };
              
                    addrawmaterial_m.findByIdAndUpdate(p_id,foodprodata, { new: true }, function(err, food_inf) {
                      if (err) {
                        console.log("err", err);
                        res.status(200).send({msg:'error'});
                      } else {
                        console.log("success");
                        res.send({msg: "success"});
                      }
                    });



                }//checking for image


         }else{

          var  pData = await addrawmaterial_m.findOne({ p_name: req.body.p_name });

          if(pData){
           if(req.file){
         let strC =   "./public/foodrawmaterial/"+filename;
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
          res.send({msg:"exist"});

        }//checking for image 
          }else{
    
            if(req.file){
              const { filename, path } = req.file;
             Jimp.read('https://tifinco.com:5000/public/foodrawmaterial/'+filename, (err, photo) => {
                      if (err) throw err;
                       photo.resize(300, 300) ;
                       photo.quality(60) ;// set JPEG quality
                       // photo.greyscale() ;
                       photo.write('./public/foodrawmaterial/'+filename); // save
                      
                       
                       var foodprodata = {
                      
                        p_image: 'https://tifinco.com:5000/public/foodrawmaterial/'+filename,
                        p_name: p_name,
                        p_quantity:req.body.p_quantity,
                        p_price:req.body.p_price,
                        p_rawmaterial:req.body.p_rawmaterial,
                        // p_rating:req.body.p_rating,
                        p_foodtype:req.body.p_foodtype
                        };
                  
                        addrawmaterial_m.findByIdAndUpdate(p_id,foodprodata, { new: true }, function(err, food_inf) {
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
    
                    }else{
                        
                      console.log("image id not there");
                      var foodprodata = {
                      
                        p_image: req.body.p_image,
                        p_name: p_name,
                        p_quantity:req.body.p_quantity,
                        p_price:req.body.p_price,
                        p_rawmaterial:req.body.p_rawmaterial,
                        // p_rating:req.body.p_rating,
                        p_foodtype:req.body.p_foodtype
                        };
                  
                        addrawmaterial_m.findByIdAndUpdate(p_id,foodprodata, { new: true }, function(err, food_inf) {
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


 exports.K_Todaylunch= async function(req, res) {

  let date = new Date();  


var crrtime = date.getHours()+':'+date.getMinutes()+':'+date.getSeconds(); 
 
let options1 = {  
    weekday: "long", year: "numeric", month: "short",  
    day: "numeric", hour: "2-digit", minute: "2-digit"  
};  

var crrdate = date.toLocaleTimeString("en-us", options1); 
if(crrtime.split(' ')[0] <"15:00" )
{
  var data = await  RandomNoG_M.find({$and:[{day:"today"},{ meal_time: "lunch" },]});
  res.send(data);

 }
 else{
  var data = await  RandomNoG_M.find({$and:[{day:"today"},{ meal_time: "dinner" },]});
  res.send(data);
    
}
}
//  exports.K_TodayDinner= async function(req, res) {

//   var data = await  RandomNoG_M.find({$and:[{day:"today"},{ meal_time: "dinner" },]});
//   res.send(data);
//  }
