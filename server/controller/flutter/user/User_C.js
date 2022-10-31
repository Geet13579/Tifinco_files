
var useraddressmodel = require('../../../model/fluttermodel/useraddressmodel');
var userplanmodel = require('../../../model/fluttermodel/userplanmodel.js');
var userfoodordermodel = require('../../../model/fluttermodel/userfoodordermodel');
var usermodel = require('../../../model/fluttermodel/fluttermodelusers');
var MenuProfileimage = require('../../../model/fluttermodel/MenuProfileimage');

var pause_plan_M = require('../../../model/fluttermodel/pause_plan_M');

var mongoose = require('mongoose');
const { isDataView } = require('util/types');



exports.storeaddress = function(req,res){

    const {address1, address2,house_no,landmark,addresstype,lat,long,userid} = req.body;
   //New User created
   const newAddress = new useraddressmodel({
    address1, 
    address2,
    house_no,
    landmark,
    addresstype,
    lat,
    long,
    userid
});

newAddress.save().then(res.json({ msg: "success" })).catch((err) => { res.json({ msg: "failed" }) });
}

exports.placeorder = function(req,res){


    const {name, cust_id,pay_id,order_id,amount,status,address1, address2,house_no,landmark,addresstype,lat,long,fooditem} = req.body;

    if(status=='1'){

        const newOrder = new userfoodordermodel({name, cust_id,pay_id,order_id,amount,status ,address1, address2,house_no,landmark,addresstype,lat,long,fooditem});
 
        newOrder.save().then(res.json({ msg: "success" })).catch((err) => { res.json({ msg: "failed" }) });
    }else{
        //no pay id included
        const newOrder = new userfoodordermodel({name, cust_id,order_id,amount,status,address1, address2,house_no,landmark,addresstype,lat,long,fooditem });
 
        newOrder.save().then(res.json({ msg: "success" })).catch((err) => { res.json({ msg: "failed" }) });

    }
    //New User created
 
}


exports.show_UserAddress  = function(req,res)
{ 
  const {userid} = req.body;
  console.log(userid);

  async function  getuserAddress() {
    var userAddress = await useraddressmodel.find({ userid:userid});

    if(userAddress){
      res.send([userAddress]);
    }
    else
    {
      res.send("not found");

    }}
  getuserAddress();
}


exports.showprofile = function(req,res){
  const {userid} = req.body;
  console.log(userid);

  async function  getuser() {
    var user = await usermodel.find({ token:userid});

    if(user){
      res.send(user);
    }
    else
    {
      res.send({msg:"notfound"});

    }}
  getuser();
}

exports.updateuseraddr = function(req,res){

  

  async function  getuser() {


  var add = {

    address1:req.body.address1,
    address2:req.body.address2,
    house_no:req.body.house_no,
    landmark:req.body.landmark,
    lat:req.body.lat,
    long:req.body.long,

  }
// const {userid} = req.body;
//   const{addresstype} = req.body;
const id = req.body;

let _id = mongoose.Types.ObjectId(id);

  // useraddressmodel.findOneAndUpdate({addresstype:addresstype,userid:userid}, {$set: add}, {upsert: true}, function(err,doc) {
    useraddressmodel.findOneAndUpdate({_id:_id}, {$set: add}, {upsert: true}, function(err,doc) {
    if (err) { throw err; }
    else { console.log("Updated"); 
  // res.send(doc)}
  res.status(200).send({ msg:'success',doc})};
  }); 

  }

  getuser()
  
}

///////   user address delete  ////////////////////////

exports.useraddressDelete = async function(req,res,next){





  const { id ,userid } = req.body;


  let _id = mongoose.Types.ObjectId(id);
  // console.log(id.isValid());
  // console.log(JSON.stringify(id));

// const _id = JSON.stringify(id);
  
    
   const product = await useraddressmodel.findById({_id:_id});
  
    if (!product) {
      // return next(("Address not found", 404));
    res.status(404).send({msg : "Address not found"})
    // console.log("address not found",404)
   
    }
    else{


  useraddressmodel.findOneAndDelete({_id:_id}).then(
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






  exports.updatename =  async function(req,res){
  

  

      async function  getuser() {
    
    
      var add = {
    
        name:req.body.name,
        email : req.body.email
    
      }
    const {mobile} = req.body;
    //  const{email} = req.body;
    //  console.log(email);
    
    usermodel.findOneAndUpdate({mobile:mobile}, {$set: add}, {upsert: true}, function(err,doc) {
        if (err) { throw err; }
        else { console.log("Updated"); 
      // res.status(201).send({msg:"successfully updated"},doc)}
      console.log(doc)
      res.status(200).send({ msg: 'successfully updated ',doc})};
      }); 
    
      }
    
      getuser()
      
    }




 





  exports.plandetal_show = function(req,res){

    const {token} = req.body;
    console.log(token)
  
    async function   getData(params) {
      var  pData = await userplanmodel.findOne({userid:token });
  
      if(pData){
        res.send([pData]);
      }else{
        res.send([{msg:"not found"}]);
  
      }}
    getData();
  };



 
exports.updateprofile = function(req,res){

  var name= req.body.name;
  var userid= req.body.userid;



  console.log(name);
  
    async function   check(params) {

      var  product_data = await usermodel.findOne({ token:userid });
      if(product_data){

        //  if(product_data['email'] == name){

         
         
         if(req.file){
           console.log("image found");
           console.log(product_data['profileimage']);
          let strC =  product_data['profileimage'].replace("https://tifinco.com:5000", ".");
          console.log(strC );
   
         if (fs.existsSync(strC)) {
         
             fs.unlinkSync(strC)
         }//closing of photo remove

          const { filename, path } = req.file;
         Jimp.read('https://tifinco.com:5000/public/flutteruser/userprofile/'+filename, (err, photo) => {
                  if (err) throw err;
                   photo.resize(300, 300) ;
                   photo.quality(60) ;// set JPEG quality
                   // photo.greyscale() ;
                   photo.write('./public/flutteruser/userprofile/'+filename); // save
                  
                   
                   var foodprodata = {
                  
                    profileimage: 'https://tifinco.com:5000/public/flutteruser/userprofile/'+filename,
                    name: name,
                    email:req.body.email,
                    mobile:req.body.mobile,
                 
                 
                    };
              
                    usermodel.findByIdAndUpdate(userid,foodprodata, { new: true }, function(err, food_inf) {
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
                  
                    // profileimage: req.body.profileimage,
                    name: name,
                    email:req.body.email,
                    mobile:req.body.mobile,
                  
                    };
              
                    usermodel.findByIdAndUpdate(userid,foodprodata, { new: true }, function(err, food_inf) {
                      if (err) {
                        console.log("err", err);
                        res.status(200).send({msg:'error'});
                      } else {
                        console.log("success");
                        res.send({msg: "success"});
                      }
                    });



                }//checking for image


      //    }else{

      //     var  pData = await usermodel.findOne({ name: req.body.name });

      //     if(pData){
      //      if(req.file){
      //    let strC =   "./public/flutteruser/userprofile/"+filename;
      //   console.log(strC );
    
      //  if (fs.existsSync(strC)) {
      //       console.log("if");
      //      fs.unlinkSync(strC)
      //       res.send({msg:"exist"});
      //    }else{
      //     console.log("else");
      //     res.send({msg:"exist"});
      //    }
      //   }else{
      //     res.send({msg:"exist"});

      //   }//checking for image 
      //     }else{
    
      //       if(req.file){
      //         const { filename, path } = req.file;
      //        Jimp.read('https://tifinco.com:5000/public/flutteruser/userprofile/'+filename, (err, photo) => {
      //                 if (err) throw err;
      //                  photo.resize(300, 300) ;
      //                  photo.quality(60) ;// set JPEG quality
      //                  // photo.greyscale() ;
      //                  photo.write('./public/flutteruser/userprofile/'+filename); // save
                      
                       
      //                  var foodprodata = {
                      
      //                   profileimage: 'https://tifinco.com:5000/public/flutteruser/userprofile/'+filename,
      //                   name: name,
      //                   email:req.body.email,
      //                   mobile:req.body.mobile,
                     
      //                   };
                  
      //                   usermodel.findByIdAndUpdate(userid,foodprodata, { new: true }, function(err, food_inf) {
      //                     if (err) {
      //                       console.log("err", err);
      //                       res.status(200).send({msg:'error'});
      //                     } else {
      //                       console.log("success");
      //                       res.send({msg: "success"});
      //                     }
      //                   });
                      
      //                   //foodprodata.save().then(res.json({ msg: "success" })).catch((err) => { res.json({ msg: "failed" }) });
                      
      //                 });
    
      //               }else{
                        
      //                 console.log("image id not there");
      //                 var foodprodata = {
                      
      //                   profileimage: req.body.profileimage,
      //                   name: name,
      //                   email:req.body.email,
      //                   mobile:req.body.mobile,
                
      //                   };
                  
      //                   usermodel.findByIdAndUpdate(userid,foodprodata, { new: true }, function(err, food_inf) {
      //                     if (err) {
      //                       console.log("err", err);
      //                       res.status(200).send({msg:'error'});
      //                     } else {
      //                       console.log("success");
      //                       res.send({msg: "success"});
      //                     }
      //                   });
    
    
    
      //               }//checking for image
    
    
      //     }//closing of else



       //  }//closing of else   



      }//closing of product_data
      

 
    }//closing of chk fun

    check();




 }
 ////////////////////////////////////////////////// update profile


 exports.updateprofile1 = function(req,res){

  var name= req.body.name;
  var userid= req.body.userid;
  async function   check(params) {

    var  product_data = await usermodel.findOne({ token:userid });
  res.send(product_data);
    // if(product_data){


    // }
  }

    check();
  }



  exports.getmenuprofileimageSHOW= async function(req,res){

    var MenuProfileimagenow = await MenuProfileimage.find();
    res.send(MenuProfileimagenow);
   
   };


  //  exports.updateuserwallet=function(req,res){

  //   var plan_price= req.body.plan_price;
  //   var 

  // // var userid= req.body.userid;
  // async function   check(params) {



  // //   var  product_data = await usermodel.findOne({ token:userid });
  // // res.send(product_data);
  // //   if(product_data){


  // //   }
  

  // }

  //   check();

  //   //  res.send("ok");

  //  }

  exports.fatchwallet = function(req,res){

    const {userid} = req.body;
    console.log(userid);
  
    async function  getuserwallet() {
      var userwallet = await usermodel.findOne({ token:userid});

      
  
      if(userwallet){
        res.send({wallet:userwallet['wallet']});
      }
     
    }
      getuserwallet();
  }


