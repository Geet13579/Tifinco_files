const jwt = require('jsonwebtoken');
const UserInfo =  require("../../model/usermodel/User_Info");
// const secrettoken = process.env.TOKEN_SECRET;
// exports.showdata = function(req, res) {
//    // res.send('NOT IMPLEMENTED: Site Home Page');
//     User.find()
//     .then((todo) => {
//       console.log({ todo });
//       res.json(todo);
//     })
//     .catch((err) => {
//       res
//         .status(404)
//         .json({ message: "There isnt any todo available", error: err.message });
//     });

// };

exports.signin =  function(req, res) {

     // Get token value to the json body
    //  const token = req.body.token;
 
     // If the token is present
    //  if(token){
  
    //      // Verify the token using jwt.verify method
    //      const decode = jwt.verify(token, process.env.TOKEN_SECRET);
  
    //      //  Return response with decode data
    //      res.json({
    //          login: true,
    //          data: decode
    //      });
    //  }else{
  
    //      // Return response with error
    //      res.json({
    //          login: false,
    //          data: 'error'
    //      });
    //  }
//       console.log(req.body);
res.send(req.body);
  
   // const token = jwt.sign({ userid: username }, process.env.TOKEN_SECRET);
    //res.send(token);
                //   const { userid, logintype } =req.body;
                //   console.log(req.body);

                    // if(logintype=='mobile'){
                    //     console.log("mobile");
                    // }else if(logintype=='mail'){
                    //     console.log("mail");
                    // }else if(logintype=='fb'){
                    //     console.log("fb");

                    // }
 
//   try{
//     const { userid, logintype } =req.body;

//     // const email,any
//     if(!email || !password)
//     {
//         return res.status(400).json({error:"please fill the all data"});
//     }

//     const userLogin = await User.findOne({ email: email});
    

//     if(userLogin){
//        var  isMatch = false;
//         if(userLogin.password === password){
//             isMatch = true;
//         }else{
//             isMatch = false;
//         }
//        // await compare(password, userLogin.password);
//         if(!isMatch){
//             res.status(200) .json({message:"failure"});
//         }
//         else{
//             res.json({message:"success"});
//         }
//     }
//     else{
//            res.status(200).json({message:"failure"});
//          }
            
// }catch(err) {
//     console.log(err);
// }

};

