var usermodel = require('../../../model/fluttermodel/fluttermodelusers');
var ORDER_M = require('../../../model/fluttermodel/ORDER_M');
var Order_id_M = require('../../../model/fluttermodel/Order_id_M');
const idAutoIncrement = require("id-auto-increment");
var generator = require('generate-serial-number');
const orderid = require('order-id')('key');
const currentYear = require("current-year");
const axios = require('axios');
exports.Insertoreder = async function (req, res) {


const{token}=req.body;
console.log(token);
// const {userid}=req.body;
console.log("userid");
    const {  userid, item, address, paymentid, paymentmethod, finalprice, coupon, totalPrice, orderStatus,txn_time,cf_orderid,deliveryCharges, tax, Orderid  } = req.body;

const refund = 0

    async function getuserid() 
    {
        console.log(userid)
        var userinfo = await usermodel.find({ token: userid });
        console.log(userinfo);

        console.log(userinfo);
        var name = userinfo[0].name;
        console.log(name);
        var mobile = userinfo[0].mobile;
        // res.send(mobile);

      
        //   const id = orderid.generate();
        //   // 3016-734428-7759
          
        // var a=  orderid.getTime(id);
        // console.log(a);
// ---------------------------------------------------------------------MY CODE -----------------------------------------------------------------------------

      var options = {  year: 'numeric'};
      var today = new Date();

        console.log(today)

        console.log(today.toLocaleDateString("en-US")); // 9/17/2016
        var current_year = today.toLocaleDateString("pt-PT", options); // Saturday, September 17, 2016
        console.log(current_year);
        var tifinco="tifinco"
        let result = tifinco.concat("-",current_year);
        console.log(result)

        var data = await ORDER_M.find().sort({_id:-1})

        if(data.length == 0)
        {
            var newOrder_value = 1;
            var Orderid = result.concat("-",newOrder_value);
            console.log("fgsdfgsdf"+Orderid);
        }
        else
        {
            var order_id = data[0].Orderid;
            // console.log(typeof order_id);
            var prevYear =  order_id.slice(8, -2);  // prevYear is String type  2022

            if( current_year == parseInt(prevYear))
            {
                var PrevOrder_value = order_id.substr(13)  // it's give last no of orderid like 6 , 7 , ...
                var newOrder_value = parseInt(PrevOrder_value)+1;
                var Orderid = result.concat("-",newOrder_value);
            }
            else
            {
              var new_value = 1;
              let neworderid = tifinco.concat("-",current_year);
              var Orderid = neworderid.concat("-",new_value);

            }
            console.log(prevYear);
            // console.log("hhhhhhhhhhhhhhhhhhhelse"+Orderid);
        }

        console.log("hhhhhhhhhhhhhhhhhhhelse"+Orderid);

// ---------------------------------------------------------------END OF MY CODE ----------------------------------------------------------------------------
        var data = new ORDER_M({
            userid, item, address, paymentid, paymentmethod, finalprice, coupon, totalPrice, orderStatus,txn_time,
            Orderid, name,cf_orderid,refund, deliveryCharges, tax, mobile
            //  location:
            //  {
            //     type:"Points",
            //     coordinates:[parseFloat(req.body.lat),parseFloat(req.body.latitude)]

            //  }


        });


        if(data.item.length>1)
        {
            if(data.item[0].name.length > 20)
            {
               var str = data.item[0].name.substring(0,15)+'...'+"  & other";
            }
            else
            {
               var str = data.item[0].name.substring(0,15)+'...'+"  & other";
            }
        }
        else
        {
           if(data.item[0].name.length > 20)
           {
              var str = data.item[0].name.substring(0,15)+'...'+"  & other";
           }
           else
           {
               var str = data.item[0].name.substring(0,15);
           }

        }
//  for converting first small letter to capital letter

        const toTitleCase = (phrase) => 
        {
          return phrase
            .toLowerCase()
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
        };
        
        let capitalName = toTitleCase(name);
        console.log(capitalName);



        var url = 'https://api.textlocal.in/send/?apikey=NzU0ZTM0NGM1YTUzNzI3MjY1Mzc2OTQxNjU1YTVhNDU=&numbers='+mobile+'&sender=TFINCO&message='+
        encodeURIComponent('Dear '+capitalName+', Your order for '+str+' has been received and is being prepared now. Please check your app for further information.'+
        '\nThank You - Tifinco');
// console.log(data.userid)
// console.log(data.item)


// res.send(data.item[0].name.substring(0,15)+'...'+ "& others")
      
  await data.save()
          // axios.get(url).then(function (resMsg) {
          

          //   // console.log(resMsg);
          //   console.log(resMsg.data);
         

          //   if(resMsg.data['status']=='success'){
          //     // res.status(200).send({ msg: 'success'});
          //  }
          
          // })
          
         

    }
    getuserid();




}







    
exports.Order_id_Insert= async function(req, res) 
{
      // var options = {  year: 'numeric'};
      // var today = new Date();

      //   console.log(today)

      //   console.log(today.toLocaleDateString("en-US")); // 9/17/2016
      //   var a = today.toLocaleDateString("pt-PT", options); // Saturday, September 17, 2016
      //   console.log(a);
      //   var tifinco="tifinco"
      //   let result = tifinco.concat("-",a);
      //   console.log(result)

      //   var data = await ORDER_M.find().sort({_id:-1})
      //   if(data.length == 0)
      //   {
      //        var order_id = data.Orderid;
      //        console.log(order_id);
      //   }
      //   else
      //   {
      //     var order_id = data[0].Orderid
      //     console.log(order_id);
      //     var PrevOrder_value = order_id.substr(13)
      //     var newOrder_value = parseInt(PrevOrder_value)+1;
      //     console.log(result.concat("-",newOrder_value));
     
      //   }
    
// -=====================================================================Manisha Ma'am coding =============================================================================
        var options = {  year: 'numeric'};
        var today = new Date();
        // console.log(today)

        // console.log(today.toLocaleDateString("en-US")); // 9/17/2016
        var a = today.toLocaleDateString("pt-PT", options); // Saturday, September 17, 2016
        // console.log(a);
        var tifinco="tifinco"
        let result = tifinco.concat("-",a);
        console.log(result)
        
        var Order_id=0;

        var data = await  Order_id_M.find()
        

          var OldOderId = data[0].Order_id.split('-')[2];
          // console.log(OldOderId)+1;
        console.log(OldOderId );
          var parse=parseInt(OldOderId);
          var oderId =parse+1;
          
          console.log(oderId)
          var a=currentYear();
      console.log(a);
      // var orderId=result+("-")+(oderId)
      var orderId=(result+"-"+oderId);
      var newData = {

      
        "Order_id": orderId,
      }


      try{

          Order_id_M.findByIdAndUpdate({_id: "62e3b07c5a4f6275eccddf8f"} , newData,{ new: true }, function(
              err,
              oderId,
        
          
            ) {
              if (err) {
                console.log("err", err);
                res.status(200).send({msg:'error'});
              } else {
                console.log("success");
                // res.send({msg:oderId});
                res.status(201).send({msg:orderId});
              }
            });

          }catch(e){
            console.log(e)
          }
// -===================================================================== end Of Manisha Ma'am coding ===============================================================================
    }


exports.Fetchperticulerorder=async function(req,res)
{
   var {userid}=req.body;
  var userinfo = await ORDER_M.find({userid :userid})
  {
  res.send(userinfo)

  }


}


exports.getExtraItems_Byuserid=async function(req,res)
{
   var {userid}=req.body;
   var {_id} = req.body;
   console.log(_id);
  var userinfo = await ORDER_M.find({userid :userid, _id:_id});
  {

    // var itemLength = userinfo[0].item.length;
    // for(var i = 0;i<itemLength;i++)
    // {
    //   var itemId = userinfo[0].item[i]._id;
    //   // console.log(itemId);
    //   if(_id == itemId)
    //   {
    //     res.send(userinfo[0].item[i]);
    //   }
    // }
    res.send(userinfo);

  }


}













      