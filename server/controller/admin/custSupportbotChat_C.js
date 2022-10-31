var usermodel = require('../../model/fluttermodel/fluttermodelusers.js');
var userinfomodel = require('../../model/fluttermodel/userplanmodel.js');



exports.finduseredetails = function (req, res) {
// res.send("ok")
// usermodel.find((error,data)=>{
        
        
    // if (error) {
    //     res.json({slider:error})
    //   } else {
    //     res.json(data)
    //     // console.log(data)
    //   }
    // })




// };

const {email} =req.body;


// console.log(_id);

async function   check(params) {
var userinfo = await usermodel.findOne({email:email});


if(userinfo){
    users = await userinfomodel.findOne({userid:userinfo.token});
    res.send(users);

}
else{
    res.send({mgs:"not find"})
}

 
   }
check();


}


