
var usermodel = require('../../../model/fluttermodel/fluttermodelusers');

var Jimp = require('jimp');
var fs = require('fs');
// var slider_model = require('../../model/adminmodel/Slider_Model');
var Order_M = require('../../../model/adminmodel/kitchenmodel/Order_M');
var ORDER_M = require('../../../model/fluttermodel/ORDER_M');

exports.show = function(req, res) {
  
  usermodel.find((error, data) => {
        if (error) {
          res.json({usermodel:error})
        } else {
          res.json(data)
        }
      }).sort({_id:-1})
    };
  



    exports.fetch_PerticulerOrder=async function(req,res)

{

    var {token}=req.body;
  //   var userinfo=await usermodel.findOne(token)
  //   console.log(userinfo);
  // var userid=userinfo.token;
  // console.log(userid);

var order=  await ORDER_M.find({userid:token})
res.send(order);
   
}
    exports.currentorder = async function(req, res) {''



    var now = new Date();
    now.setDate(now.getDate() -1); // timestamp
  // console.log(b);
   var currentDate = new Date();
      // now1 = new Date(now); // Date object
      // console.log(now1);
      let chktime = await ORDER_M.find( {$or:[ {time:{ $gt: now }},{time:{ $gt: currentDate }},]})
      res.send(chktime)
    
    
       
      };


      exports. Countorder = function(req, res) {
  
        Order_M.find((error, data) => {
            if (error) {
              res.json({category:error})
            } else {
              res.json(data)
            }
          }).sort({_id:-1}).count();
        };

  // deleting data of Order_M from the database
// exports.deleteorder = async (req, res) => {
//     try{
//         await Order_M.deleteOne({_id: req.params.id});
//         res.status(201).json("Order_M deleted Successfully");
//     } catch (error){
//         res.status(409).json({ message: error.message});     
//     }
// }


// exports.delete = async (request, response) => {

//     try{
//         await Order_M.deleteOne({_id: request.params.id});
//         response.status(201).json("MultipleloginInfo deleted Successfully");
//     } catch (error){
//         response.status(409).json({ message: error.message});     
//     }
//   }
  exports.delete = function(req,res){
    const { _id } = req.body;
    ORDER_M.deleteOne({_id: _id}).then(
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


  exports.Filterorder =  function(req,res){

    const {limit_val} = req.body;
    console.log(limit_val);
    if (limit_val === 'all'){
      Order_M.find((error, data) => {
        if (error) {
          res.json({category:error})
        } else {
          res.json(data)
        }
      }).sort({_id:-1})
    }else{
   
  
      Order_M.find((error, data) => {
        if (error) {
          res.json({category:error})
        } else {
          res.json(data)
        }
      }).limit(10).skip(limit_val).sort({_id:-1});
      // res.send("limit");
    }
  }


  // Save data of the Order_M in database
exports.addOrder = async (request, response) => {
 
    const user = request.body;
    console.log("inside")

    const newOrder_M = new Order_M(user);
    try{
        await newOrder_M.save();
        response.status(201).json(newOrder_M);
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
}


// // Save data of the user in database
// export const addUser = async (request, response) => {
//     // retreive the info of user from frontend
//     const user = request.body;
//     console.log("inside")

//     const newUser = new User(user);
//     try{
//         await newUser.save();
//         response.status(201).json(newUser);
//     } catch (error){
//         response.status(409).json({ message: error.message});     
//     }
// }
