var Jimp = require('jimp');
var fs = require('fs');
var plantype_infos= require('../../model/adminmodel/plandetail/plantypemodel.js');
var Plandetail_model= require('../../model/adminmodel/plandetail/Plandetail_model.js');
var plandaysmodel= require('../../model/adminmodel/plandetail/plandaysmodel.js');

var updatePlan_img_m = require('../../model/adminmodel/plandetail/updatePlan_img_m');


//opening of plan days


 
exports.plandaysinsert = function(req, res) {



  var plandays= req.body.plandays;
  
    async function   check(params) {
      console.log(plandays );
      var  plandays_data  = await plandaysmodel.findOne({ plandays: plandays });

      if(plandays_data){
       
             res.send({msg:"exist"});
     
 
      }else{

           const plandaysmodel_obj = new plandaysmodel({
          
            plandays: plandays,
                   });
      
          
                   plandaysmodel_obj.save().then(res.json({ msg: "success" })).catch((err) => { res.json({ msg: "failed" }) });
     
      }
    }

    check();

 
}

exports.showplandays = function(req, res) {

  plandaysmodel.find((error, data) => {
    if (error) {
      res.json({plandays:error})
    } else {
      res.json(data)
    }
  }).sort({_id:-1})
};



exports.plandaysdelete = function(req,res){
const { _id } = req.body;


plandaysmodel.deleteOne({_id: _id}).then(
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

//closing of plan days

exports.getplantype = function(req,res){


  plantype_infos.find((error, data) => {
      if (error) {
        res.json({msg:error})
      } else {
        res.json(data)
      }
    }).sort({_id:-1})

};


 exports.addplan = function(req,res){

  const{plan_name, plan_type, vegstrikethrough_price,plan_vegCount,vegpermeal_price,vegpermonth_price,vegdiscount, plan_pref, nonvegstrikethrough_price,Vegdecriptionsum,nonVegdecriptionsum, vegplan_item,nonvegpermeal_price,nonvegpermonth_price,nonvegdiscount,nonvegplan_item,plan_feature,nonveg_days}=req.body;
    // const {plan_type,plan_strikethrough_price,permeal_price,permonth_price, discount,plan_description,plan_item,plan_pref}  = req.body;
    // let vegplan_item=[];
    
    let plan_itemJson = [];
    let nonvegplan_itemJson=[];
    // // let plan_itemJson = [];
    // // let plan_descriptionJson=[];
    // let nonVegdecriptionsum=[];
    // let Vegdecriptionsum=[];
    let filesArray = [];
    let nonvegfilesArray = [];
    var link = "";
    var nonveglink = "";
    var count =1;
    var count2=1;
    var bg_image ="";
    var bg_image1 ="";
    async function addPlaninfo(){
  try {
    
    req.files.forEach(element => {
        //reduce quality of image
        Jimp.read('https://tifinco.com:5000/'+element.path, (err, photo) => {
                      if (err) throw err;
                       photo.resize(50, 50) ;
                       photo.quality(60) ;// set JPEG quality
                       // photo.greyscale() ;
                       photo.write('./'+element.path); // save
                      
                                          
                      });
         link = 'https://tifinco.com:5000/'+element.path;

        filesArray.push(link);
    });

    bg_image = filesArray[0];


    plan_itemJson = JSON.parse(vegplan_item);
   //  count = plan_itemJson.length;
     //console.log(count);
   plan_itemJson.map(function(a,i) {
     a.item_image = filesArray[count]
     count++;
    })

    bg_image1 = nonvegfilesArray[0];


    req.files.forEach(element => {
      //reduce quality of image
      Jimp.read('https://tifinco.com:5000/'+element.path, (err, photo) => {
                    if (err) throw err;
                     photo.resize(50, 50) ;
                     photo.quality(60) ;// set JPEG quality
                     // photo.greyscale() ;
                     photo.write('./'+element.path); // save
                    
                                        
                    });
                    nonveglink = 'https://tifinco.com:5000/'+element.path;

      nonvegfilesArray.push(nonveglink);
  });
 



  nonvegplan_itemJson  = JSON.parse(nonvegplan_item);
    //  count = plan_itemJson.length;
      //console.log(count);
      nonvegplan_itemJson .map(function(b,i) {
      b.item_image2 = nonvegfilesArray[count]
      count++;
     })
 
let plan_type1 = await plantype_infos.find({plan_name:plan_name});
console.log(plan_type1.nonveg_days)
console.log(plan_type1.plan_vegCount)

    const Plandetail_model_obj = new Plandetail_model({
        plan_name: plan_type,
        vegstrikethrough_price:vegstrikethrough_price,
        vegpermeal_price:vegpermeal_price,
        vegpermonth_price:vegpermonth_price,
        vegdiscount:vegdiscount,
        nonvegstrikethrough_price:nonvegstrikethrough_price,
        nonvegpermeal_price:nonvegpermeal_price,
        nonvegpermonth_price:nonvegpermonth_price,
        nonvegdiscount:nonvegdiscount,
        // nonvegplan_item:nonvegplan_item,
        plan_feature:plan_feature,
        // plan_vegCount:plan_vegCount,
        // nonveg_days:nonveg_days,
        
        // nonVegdecriptionsum:nonVegdecriptionsum,
        // Vegdecriptionsum:Vegdecriptionsum,
        vegplan_item :plan_itemJson,
        nonvegplan_item :nonvegplan_itemJson,
        vegdecription1:req.body.vegdecription1,
        vegdecription2:req.body.vegdecription2,
        vegdecription3:req.body.vegdecription3,
        nonvegdescription1:req.body.nonvegdescription1,
        nonvegdescription2:req.body.nonvegdescription2,
        nonvegdescription3:req.body.nonvegdescription3,
        plan_vegCount:req.body.plan_vegCount,
        nonveg_days:req.body.nonveg_days,
        bg_image:bg_image,
        bg1_color:req.body.bg1_color,
        bg2_color:req.body.bg2_color,
        lb1_color:req.body.lb1_color,
        lb2_color:req.body.lb2_color,

        // nonveg_days:plan_type1.nonveg_days,
        // plan_vegCount:plan_type1.plan_vegCount
        // plan_vegCount:plan_pref,

    });

    await Plandetail_model_obj.save();
    res.status(200).send({msg:'success'});
}catch(error) {
    console.log(error);
    res.status(200).send({msg:'error'});
   // res.status(400).send(error.message);
}
    }

   addPlaninfo();

 }//closing of add plan





 exports.updateplan = function(req,res)
 {

    console.log(req.body);
    // const{plan_name, plan_type, vegstrikethrough_price,vegpermeal_price,vegpermonth_price,vegdiscount,nonvegstrikethrough_price,Vegdecriptionsum,nonVegdecriptionsum, vegplan_item,nonvegpermeal_price,nonvegpermonth_price,nonvegdiscount,nonvegplan_item,plan_feature,nonveg_days}=req.body;
    const{plan_name,prebg_image, plan_type, vegstrikethrough_price,vegpermeal_price,vegpermonth_price,vegdiscount,nonvegstrikethrough_price,_id,files,Vegdecriptionsum,nonVegdecriptionsum, image_array,vegplan_item,nonvegpermeal_price,nonvegpermonth_price,nonvegdiscount,nonvegplan_item,plan_feature,nonveg_days}=req.body;
      // const {plan_type,plan_strikethrough_price,permeal_price,permonth_price, discount,plan_description,plan_item,plan_pref}  = req.body;

    // const {plan_type,plan_strikethrough_price,permeal_price,permonth_price, discount,plan_description,plan_item,files,_id,image_array,plan_pref}  = req.body;
    let image_arrayJson =[];
    // let plan_itemJson = [];
    // let plan_descriptionJson=[];
    // let nonvegplan_itemJson = [];
    // var link = "";
    // var count =1;



    let plan_itemJson = [];
    let nonvegplan_itemJson=[];

    let filesArray = [];
    let nonvegfilesArray = [];
    var link = "";
    var nonveglink = "";
    var count =1;
    var count1=1;
    var bg_image ="";
    // conter_update =0;
    // conter_update2=0;
    var bg_image ="";
    var bg_image1 ="";

 
  function updatePlaninfo()
  {
     try {
            req.files.forEach(element => {
              //reduce quality of image
              Jimp.read('https://tifinco.com:5000/'+element.path, (err, photo) =>
              {
                  if (err) throw err;
                   photo.resize(50, 50) ;
                   photo.quality(60) ;// set JPEG quality
                   // photo.greyscale() ;
                   photo.write('./'+element.path); // save                    
              });
     link = 'https://tifinco.com:5000/'+element.path;

    filesArray.push(link);
    }); // End Of ForEach

    console.log("files Array");
    console.log(filesArray);
    bg_image = filesArray[0];


    plan_itemJson = JSON.parse(vegplan_item);
    //  count = plan_itemJson.length;
    //console.log(count);
    plan_itemJson.map(function(a,i)
    {
    a.item_image = filesArray[count]
    count++;
    })

    console.log("nonvegfilesArray");
    console.log(nonvegfilesArray);
    bg_image1 = nonvegfilesArray[0];


    req.files.forEach(element => 
    {
          //reduce quality of image
          Jimp.read('https://tifinco.com:5000/'+element.path, (err, photo) => 
          {
             if (err) throw err;
               photo.resize(50, 50) ;
               photo.quality(60) ;// set JPEG quality
                 // photo.greyscale() ;
               photo.write('./'+element.path); // save
                
          });
         nonveglink = 'https://tifinco.com:5000/'+element.path;

         nonvegfilesArray.push(nonveglink);
    }); // END OF FOREACH


    nonvegplan_itemJson  = JSON.parse(nonvegplan_item);
    //  count = plan_itemJson.length;
    console.log("nonvegplan_itemJson");
    console.log(nonvegplan_itemJson);
      //console.log(count);
      nonvegplan_itemJson .map(function(b,i)
      {
          b.item_image2 = nonvegfilesArray[count]
          count++;
      })

    //       files.forEach((ele)=>{

    //         if(ele ==='nodata'){
    //           var path_name=req.files[conter_update]['path'];     
    //         //  console.log(path_name);

    //  // reduce quality of image
    //   Jimp.read('https://tifinco.com:5000/'+path_name, (err, photo) => {
    //                 if (err) throw err;
    //                  photo.resize(50, 50) ;
    //                  photo.quality(60) ;// set JPEG quality
    //                  // photo.greyscale() ;
    //                  photo.write('./'+path_name); // save
                    
    //                               });

    //                 link = 'https://tifinco.com:5000/'+path_name;

    //                filesArray.push(link);


    //         }else{

    

    //                       filesArray.push(JSON.parse(ele));

    //         }

    //       });

   

   



    
   

//    bg_image = filesArray[0]; 




//  plan_itemJson = JSON.parse(vegplan_item);
//  //  count = plan_itemJson.length;
//    //console.log(count);
//  plan_itemJson.map(function(a,i) {
//    a.item_image = filesArray[count]
//    count++;
//   })
//   plan_itemJson = JSON.parse(nonvegplan_item);
//    //  count = plan_itemJson.length;
//      //console.log(count);
//    plan_itemJson.map(function(a,i) {
//      a.item_image2 = filesArray[count]
//      count++;
//     })
   
// req.files.forEach(element => {
//   //reduce quality of image
//   Jimp.read('https://tifinco.com:5000/'+element.path, (err, photo) => {
//                 if (err) throw err;
//                  photo.resize(50, 50) ;
//                  photo.quality(60) ;// set JPEG quality
//                  // photo.greyscale() ;
//                  photo.write('./'+element.path); // save
                
                                    
//                 });
//    link = 'https://tifinco.com:5000/'+element.path;

//   filesArray.push(link);
// });

// bg_image = filesArray[0];


// plan_itemJson = JSON.parse(vegplan_item);
// //  count = plan_itemJson.length;
// //console.log(count);
// plan_itemJson.map(function(a,i) {
// a.item_image = filesArray[count]
// count++;
// })

// bg_image1 = nonvegfilesArray[0];


// req.files.forEach(element => {
// //reduce quality of image
// Jimp.read('https://tifinco.com:5000/'+element.path, (err, photo) => {
//               if (err) throw err;
//                photo.resize(50, 50) ;
//                photo.quality(60) ;// set JPEG quality
//                // photo.greyscale() ;
//                photo.write('./'+element.path); // save
              
                                  
//               });
//               nonveglink = 'https://tifinco.com:5000/'+element.path;

// nonvegfilesArray.push(nonveglink);
// });




// nonvegplan_itemJson  = JSON.parse(nonvegplan_item);
// //  count = plan_itemJson.length;
// //console.log(count);
// nonvegplan_itemJson .map(function(a,i) {
// a.item_image2 = nonvegfilesArray[count]
// count++;
// })

  const update_data = {
      // plan_name: plan_type,
      // strikethrough_price: plan_strikethrough_price, 
      // permeal_price:permeal_price,
      // permonth_price:permonth_price,
      // discount:discount,
      // plan_description:JSON.parse(plan_description),
      // plan_item:plan_itemJson,
      // bg_image : bg_image ,
      // bg1_color:req.body.bg1_color,
      // bg2_color:req.body.bg2_color,
      // lb1_color:req.body.lb1_color,
      // lb2_color:req.body.lb2_color,
      // plan_pref:plan_pref,
      plan_name: plan_type,
      vegstrikethrough_price:vegstrikethrough_price,
      vegpermeal_price:vegpermeal_price,
      vegpermonth_price:vegpermonth_price,
      vegdiscount:vegdiscount,
      nonvegstrikethrough_price:nonvegstrikethrough_price,
      nonvegpermeal_price:nonvegpermeal_price,
      nonvegpermonth_price:nonvegpermonth_price,
      nonvegdiscount:nonvegdiscount,
      // nonvegplan_item:nonvegplan_item,
      plan_feature:plan_feature,
      // nonVegdecriptionsum:nonVegdecriptionsum,
      // Vegdecriptionsum:Vegdecriptionsum,
      vegplan_item :plan_itemJson,
      nonvegplan_item :nonvegplan_itemJson,
      vegdecription1:req.body.vegdecription1,
      vegdecription2:req.body.vegdecription2,
      vegdecription3:req.body.vegdecription3,
      nonvegdescription1:req.body.nonvegdescription1,
      nonvegdescription2:req.body.nonvegdescription2,
      nonvegdescription3:req.body.nonvegdescription3,
      bg_image:bg_image,
      bg1_color:req.body.bg1_color,
      bg2_color:req.body.bg2_color,
      lb1_color:req.body.lb1_color,
      lb2_color:req.body.lb2_color,
      // nonveg_days:plan_type1.nonveg_days,



      ////////////////////////

      // plan_name: plan_type,
      // vegstrikethrough_price:vegstrikethrough_price,
      // vegpermeal_price:vegpermeal_price,
      // vegpermonth_price:vegpermonth_price,
      // vegdiscount:vegdiscount,
      // nonvegstrikethrough_price:nonvegstrikethrough_price,
      // nonvegpermeal_price:nonvegpermeal_price,
      // nonvegpermonth_price:nonvegpermonth_price,
      // nonvegdiscount:nonvegdiscount,
      // // nonvegplan_item:nonvegplan_item,
      // plan_feature:plan_feature,
      // // nonVegdecriptionsum:nonVegdecriptionsum,
      // // Vegdecriptionsum:Vegdecriptionsum,
      // // vegplan_item:vegplan_item,
      // vegplan_item :plan_itemJson,
      // nonvegplan_item :nonvegplan_itemJson,
      // vegdecription1:req.body.vegdecription1,
      // vegdecription2:req.body.vegdecription2,
      // vegdecription3:req.body.vegdecription3,
      // nonvegdescription1:req.body.nonvegdescription1,
      // nonvegdescription2:req.body.nonvegdescription2,
      // nonvegdescription3:req.body.nonvegdescription3,
      // bg_image:bg_image,
      // bg1_color:req.body.bg1_color,
      // bg2_color:req.body.bg2_color,
      // lb1_color:req.body.lb1_color,
      // lb2_color:req.body.lb2_color,

      ////////////////////////////////////
      



      ////////////////////////////////////////

      // nonveg_days:plan_type.nonveg_days,
  };

  console.log("update_data");
 console.log(update_data);

  Plandetail_model.findByIdAndUpdate(_id,update_data, { new: true }, function(err, plan_name)
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

}catch(error) 
{
  console.log(error);
  res.status(200).send({msg:'error'});
}
  }



 updatePlaninfo();

}//closing of update






exports.chkplan = function(req,res){
               console.log( req.body.plan_name);
  async function   check_plan(params) {
            var  pData = await Plandetail_model.findOne({$and:[{plan_name: req.body.plan_name },{plan_pref: req.body.planpref }]});
    
            if(pData){
               console.log(pData);
              res.send({msg:'exist'});
            }else{
              res.send({msg:'success'});

            }

          }

          check_plan();


}


exports.chkplanforupdate = function(req,res){
  console.log( req.body.plan_name);
async function   check_plan(params) {
var  pData = await Plandetail_model.findOne({$and:[{plan_name: req.body.plan_name },{plan_pref: req.body.planpref }]});

if(pData){
          
    if(pData['plan_name']==req.body.plan_name && pData['plan_pref']==req.body.planpref ){

      res.send({msg:"success"});
    }else{
      var  pDataInner = await Plandetail_model.findOne({$and:[{plan_name: req.body.plan_name },{plan_pref: req.body.planpref }]});
            if(pDataInner){
              res.send({msg:"exist"});

            }else{

              res.send({msg:"success"});
            }


    }


}

}

check_plan();


}



exports.getplandetail = function(req,res){


  Plandetail_model.find((error, data) => {
      if (error) {
        res.json({plandata:error})
      } else {
        res.json(data)
      }
    }).sort({_id:1});


}



exports.getoneplan = function(req,res){

  const {_id} = req.body;
  console.log(_id);

  async function   getData(params) {
    var  pData = await Plandetail_model.findOne({ _id: _id });

    if(pData){
      res.send([pData]);
    }else{
      res.send("not found");

    }}
  getData();
};
//get filter data

exports.getfilter =  function(req,res){

  const {limit_val} = req.body;
  console.log(limit_val);
  if (limit_val === 'all'){
    Plandetail_model.find((error, data) => {
      if (error) {
        res.json({plan:error})
      } else {
        res.json(data)
      }
    }).sort({_id:-1})
  }else{
 

    Plandetail_model.find((error, data) => {
      if (error) {
        res.json({plan:error})
      } else {
        res.json(data)
      }
    }).limit(10).skip(limit_val).sort({_id:-1});
    // res.send("limit");
  }
//   async function   getData(params) {
//     var  pData = await foodproduct_m.find({ p_image : { $gt :  limit_val, $lt : 20}});

//     if(pData){
//       res.send(pData);
//     }else{
//       res.send({msg:"notfound"});

//     }}
//  getData();

//   }

}
exports.getsearch = function(req,res){
 


  const {_id} = req.body;
  console.log(_id);

  async function   getData(params) {
    var  pData = await Plandetail_model.find({ plan_name :{ $regex : '.*'+ _id + '.*' }});

    if(pData){
      res.send(pData);
    }else{
      res.send({msg:"notfound"});

    }}
  getData();

}


exports.plandelete = function(req,res){
  const { _id } = req.body;
  console.log(_id);
  async function removePhoto(params) {
     var  getplan = await Plandetail_model.findOne({ _id: _id });

    if(getplan){

      console.log(getplan.plan_item);
     

      if(getplan.bg_image){

        let strC =  getplan.bg_image.replace("https://tifinco.com:5000", ".");
        console.log(strC );
        if(fs.existsSync(strC)){
         fs.unlinkSync(strC);
        }

      }
           
      if(getplan.plan_item){

        getplan.plan_item.map(
           function(val,i){
            let strC =  val.item_image.replace("https://tifinco.com:5000", ".");
               console.log(strC );
               if(fs.existsSync(strC)){
                fs.unlinkSync(strC);
               }
           }
         )

          }//for item


 

             Plandetail_model.deleteOne({_id: _id}).then(
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

  removePhoto();

}


// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
exports.addPlan_imgInfo = function(req,res)
 {
  // res.send("ok");

  const { filename, path } = req.file;
       var _id = req.body._id;
       console.log(filename);
        Jimp.read('https://tifinco.com:5000/public/plandetail/'+filename, (err, photo) => {
        if (err) 
        throw err;
          photo.resize(700, 700) ;
          photo.quality(60) ;// set JPEG quality
          // photo.greyscale() ;
          photo.write('./public/plandetail/'+filename); // save
     
         async function removePhoto(params) 
         {
              console.log("remove");
              var  getplan_imgnow = await updatePlan_img_m.findOne({ _id: _id });

              if(getplan_imgnow)
              {
                  console.log("removedata");
                  console.log(getplan_imgnow.planBg_image);
                  let strC =   getplan_imgnow.planBg_image.replace("https://tifinco.com:5000", ".");
                  console.log(strC );
                if (fs.existsSync(strC)) 
                {
                    console.log("removedataexist");
                    fs.unlinkSync(strC)

                    
                    var planimg_info = {planBg_image:'https://tifinco.com:5000/public/plandetail/'+filename};
    
                  updatePlan_img_m.findByIdAndUpdate(_id, planimg_info , { new: true }, function( err,  planimg_info )
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
                   var planimg_info = { planBg_image:'https://tifinco.com:5000/public/plandetail/'+filename };
                  
                    updatePlan_img_m.findByIdAndUpdate(_id, planimg_info , { new: true }, function(err, planimg_info ) 
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


 }
 

 exports.addPlan_imgInfo1 = function(req,res)
 {
  // res.send("ok");

  const { filename, path } = req.file;
       var _id = req.body._id;
       console.log(filename);
        Jimp.read('https://tifinco.com:5000/public/plandetail/'+filename, (err, photo) => {
        if (err) 
        throw err;
          photo.resize(700, 700) ;
          photo.quality(60) ;// set JPEG quality
          // photo.greyscale() ;
          photo.write('./public/plandetail/'+filename); // save
     
         async function removePhoto(params) 
         {
              console.log("remove");
              var  getplan_imgnow = await updatePlan_img_m.findOne({ _id: _id });

              if(getplan_imgnow)
              {
                  console.log("removedata");
                  console.log(getplan_imgnow.planBg_image2);
                  let strC =   getplan_imgnow.planBg_image2.replace("https://tifinco.com:5000", ".");
                  console.log(strC );
                if (fs.existsSync(strC)) 
                {
                    console.log("removedataexist");
                    fs.unlinkSync(strC)

                    
                    var planimg_info = {planBg_image2:'https://tifinco.com:5000/public/plandetail/'+filename};
    
                  updatePlan_img_m.findByIdAndUpdate(_id, planimg_info , { new: true }, function( err,  planimg_info )
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
                   var planimg_info = { planBg_image2:'https://tifinco.com:5000/public/plandetail/'+filename };
                  
                    updatePlan_img_m.findByIdAndUpdate(_id, planimg_info , { new: true }, function(err, planimg_info ) 
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


 }



//  exports.getPlan_imgInfo = async function(req,res)
//  {

//     var getplan_imgnow = await updatePlan_img_m.find();
//     res.send(getplan_imgnow);
 

//  };
 exports.getPlan_imgInfo = function(req,res){


  updatePlan_img_m.find((error, data) => {
      if (error) {
        res.json({updatePlan_img_m:error})
      } else {
        res.json(data)
      }
    }).sort({_id:1}).limit(1)


}

 exports.getPlan_imgInfo1 = function(req,res){


  updatePlan_img_m.find((error, data) => {
      if (error) {
        res.json({updatePlan_img_m:error})
      } else {
        res.json(data)
      }
    }).sort({_id:-1}).limit(1)


}