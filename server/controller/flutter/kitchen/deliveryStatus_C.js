var tiffinDeliveryStatus_Model = require("../../../model/fluttermodel/tiffinDeliveryStatus.js")
var tiffinPreparing_Model = require("../../../model/fluttermodel/tiffinPreparing_M.js")
var tiffinDispatch_Model = require("../../../model/fluttermodel/tiffinDispatch_M.js")

exports.getdeliveryStatus = async function(req,res)
{
    var data =  await tiffinDeliveryStatus_Model.find()
    var time = new Date();
    let hour = time.getHours();
    if(hour < 15)
    {
        res.send({msg:"Your Lunch is Preparing", image:data[0].delivery_image});
    }
    else
    {
        res.send({msg:"Your Dinner is Preparing", image:data[0].delivery_image});
    }
}

exports.tiffinPreparing_info = async function(req,res)
{
    var data =  await tiffinPreparing_Model.find()
    var time = new Date();
    let hour = time.getHours();
    if(hour < 15)
    {
        res.send({msg:"Your Lunch is Prepared", image:data[0].preparing_icon});
    }
    else
    {
        res.send({msg:"Your Dinner is Prepared", image:data[0].preparing_icon});
    }
}

exports.tiffinDispatch_info = async function(req,res)
{
    var data =  await tiffinDispatch_Model.find()
    var time = new Date();
    let hour = time.getHours();
    if(hour < 15)
    {
        res.send({msg:"Your Lunch is Dispatched", image:data[0].dispatch_icon});
    }
    else
    {
        res.send({msg:"Your Dinner is Dispatched", image:data[0].dispatch_icon});
    }
}


