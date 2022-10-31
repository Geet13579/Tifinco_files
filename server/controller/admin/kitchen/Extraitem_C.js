

var userplanmodel = require('../../../model/fluttermodel/userplanmodel');


// exports.EXtraitem= async function(req,res)
// {

//   await  userplanmodel.find(  )
// .then(doc => {

// // console.log(doc)
// var arr_raw = doc.map(function(obj ){
//     return obj.extra_item


  
// });
// res.send(arr_raw)

// })


// }

exports.EXtraitem =  function(req, res) 
{

    userplanmodel.find((error, data) => {
        if (error) 
       {
         res.json({userplanmodel:error})
       }
       else 
       {
         res.json(data)
         // console.log(data.p_name);
         }


       // console.log(data.p_foodqr);

   }).sort({_id:-1})
};


 // update Order Status -- Admin
 exports.UpdateEXtraitem = async (req, res, next) => {
  const Userplanmodel = await userplanmodel.findById(req.body);
  if(!Userplanmodel)
  {
    return next(new ("Order not found with this Id", 404));

  }

 
  if (Userplanmodel.orderStatus === "Delivered") {
    return next(new ("You have already delivered this order", 400));
  }

  if (req.body.status === "Shipped") {
    Userplanmodel.orderItems.forEach(async (o) => {
      await updateStock(o.EXtraitem);
    });
  }
  Userplanmodel.orderStatus = req.body.status;

  if (req.body.status === "Delivered") {
    Userplanmodel.deliveredAt = Date.now();
  }

  await Userplanmodel.save({ validateBeforeSave: false });
  res.status(200).json({
    success: true,
  });
};
