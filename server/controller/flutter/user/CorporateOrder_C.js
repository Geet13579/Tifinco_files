
var corporate_orders_model = require('../../../model/fluttermodel/corporate_order_model.js');


const Corporate_M = require('../../../model/adminmodel/dashboard/corporate_m');
exports.insertcorporate_orders =  async function(req,res){
    const {
        institute_name,
         institute_address,
         total_tiffin,
         typeof_tiffin,
         timeof_delivery,
         food_pref,
        food_info,
       
       } = req.body;
    
    var data = new corporate_orders_model( {
        institute_name,
        institute_address,
        total_tiffin,
        typeof_tiffin,
        timeof_delivery,
        food_pref,
       food_info,
      
    });

    await data.save();
    res.status(200).send({msg:'success'});
}


// exports.show_CorporateOrder  = function(req,res)
// { 
//   const {_id} = req.body;
//   console.log(_id);

//   async function   getCorporateData() {
//     var CorporateData = await corporate_orders_model.findOne({ _id:_id});

//     if(CorporateData){
//       res.send([CorporateData]);
//     }
//     else
//     {
//       res.send("not found");

//     }}
//   getCorporateData();


//     // corporate_orders_model.find((err,data)=>
//     // {
//     //     if(err)
//     //     {
//     //         res.send({msg:"error"});
//     //     }
//     //     else
//     //     {
//     //         res.send({msg:data});
//     //     }

//     // });

// }

exports.show_CorporateOrder = function(req, res) {
  Corporate_M.find((error, data) => {
    if (error) {
      res.json({Corporate_M:error})
    } else {
      res.json({Corporate_M:data})
    }
  })
};