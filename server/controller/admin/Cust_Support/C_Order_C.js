
var ORDER_M = require('../../../model/fluttermodel/ORDER_M');
var usermodel = require('../../../model/fluttermodel/fluttermodelusers');
// singleOrder_M.js
const { PaymentGateway } = require('@cashfreepayments/cashfree-sdk');

const pg = new PaymentGateway({

  env: 'TEST',


  appId: '1846232d4b3e663a55577d0f14326481',

  secretKey: 'TEST1451ccbd914027999926b907662a624765f20215',

});

exports.fetch_Order=async function(req,res)

{

    // var userinfo=await usermodel.findOne()
    // console.log();
    usermodel.find((error, data) => {
        if (error) {
          res.json({ msg: error })
        } else {
          res.json(data)
        }
      }).sort({ _id: 1 })

}
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


 //############################ Order Initiate Refund  //////////////////////////////////


 exports.Order_initial_Refund= function(req,res)
 {
 
    const  {orderId,refund_amount}  = req.body;


 
  const sdk = require('api')('@cashfreedocs-new/v2#81hwwj1pl78py09z');
  sdk.server('https://sandbox.cashfree.com/pg');
  sdk.Createrefund({
    refund_amount: refund_amount,
    refund_id: orderId+1,
    refund_note: 'thank you so much'
  }, {
    order_id: orderId,
    'x-client-id': '1846232d4b3e663a55577d0f14326481',
    'x-client-secret': 'TEST1451ccbd914027999926b907662a624765f20215',
    'x-api-version': '2022-01-01'
  })
    .then(function(data){

      res.send({msg:"Refund"});
      console.log(data)
    })
    .catch(function(err){ 
     
      res.send({msg:"err"})
      ORDER_M.update({cf_orderid:orderId},{$set:{refund:1}},
      function (err, docs) {
if (err){
console.log(err)
}
else{
console.log("Updated User : ", docs);
}
});

 })
}

 exports.fatch_single_refund= function(req,res){

  res.send("ok")
  // pg.refunds

  // .fetchSingleRefund({

  //   refundId: 'refund_123',

  //   merchantRefundId: '1', // Provide refundId or merchantRefundId to get refund status

  // })

  // .then((data) => res.send(data))

  // .catch((error) => console.error(error));

 }

 exports.showsingleorder = function(req,res){
  //  res.send("ok");
  async function   check(params) {

    ORDER_M.aggregate([
      { $lookup:
         {
           from: 'userinfos',
           localField: 'userid',
           foreignField: 'token',
           as: 'orderdetails'
         }
       }
      ]).then(function(data) {
    
    res.send(data)
    
    });

      
     }
 check()





 }

 exports.showsinglemealcustomerdetails = function(req,res){
  //  res.send("ok");
  const {_id} = req.body
  async function   check(params) {


 ORDER_M.findOne({_id:_id}).then(function(data) {
      res.json(data)
   
      
      });

      
     }
 check()





 }

 exports.showuserprofile = function(req,res){
  //  res.send("ok");
  const {userid} = req.body
  async function   check(params) {


 usermodel.findOne({token:userid}).then(function(data) {
      res.json(data)
   
      
      });

      
     }
 check()

 }



exports.searchsinglemealsuser=function(req,res){

  // res.send("done");
  const {_id} = req.body;
  // console.log(_id);

     usermodel.findOne({ $or: [{ name :{ $regex : '.*'+ _id + '.*' }}  ]}).then(function(data) {
    

      ORDER_M.find({userid:data.token}).then(function(users){
       
        console.log(data)
        var data1=[]
        data1.push(users)
        var data2=[]
        data2.push({orderdetails:data})
        // data1.push({data2})
        data1.concat({d:data2})

        var combineJsonArray = [...data1 , ...data2];
        res.send(combineJsonArray)
      })

    })

    // ORDER_M.aggregate([
    //   { $lookup:
    //      {
    //        from: 'userinfos',
    //        localField: 'userid',
    //        foreignField: 'token',
    //        as: 'orderdetails'
    //      }
    //    }
    //   ]).then(function(data) {

    //     data.findOne({ $or: [{ name :{ $regex : '.*'+ _id + '.*' }}  ]}).then(function(data) {


    

    //     })
    
    //     // data.findOne({ $or: [{ name :{ $regex : '.*'+ _id + '.*' }}  ]}).then(function(data) {

    //     // })
    //     // res.send(data[0].orderdetails)
    //     // for(var i=0;i<data.length;i++){
    //     //   console.log(data[i].orderdetails.name==='Nidhi')
    //     // }
    // // res.send(data)
    
    // });
        
        
        

   

      // var  userdata = await usermodel.find({'name': {'$regex': 'Nidhi'}})


      // find({ $and: [ { $or: [{title: regex },{description: regex}] }, {category: value.category}, {city:value.city} ] })
  
      // if(userdata){

      //  res.send(userdata)
        


  // res.send(_id)


}


