const { compare } = require('bcryptjs');
const e = require('express');
const express = require('express');
const router = express.Router();

//database connection 
require('../db/conn');
const User =  require("../modal/userSchema");

router.get('/getData',(req,res) => {

    User.find()
    .then((todo) => {
      console.log({ todo });
      res.json(todo);
    })
    .catch((err) => {
      res
        .status(404)
        .json({ message: "There isnt any todo available", error: err.message });
    });


    // res.send('Hello world from server router js');
});

//using promises--------------------
{
// router.post('/register',(req,res) => {
//     console.log(req.body);

//     const { name, phone, email, password} = req.body;      ///object destructuring 

//     if(!name ||!phone || !email || !password){
//         return res.status(422).json({ error : " Fill all required fields properly"});
//     }

//     User.findOne({ email : email })
//     .then((userExist) => {
//         if(userExist){
//             return res.status(422).json({ error : "email already exist"});
//         }

//         const user = new User({name, phone, email, password});

//         user.save().then(() => {
//             res.status(201).json({message:"User Registered Successfully"});
//         }).catch((err) => res.status(500).json({error : "failed to Register"}));
//     }).catch(err => { console.log(err); });
    
// });
}
//++++++++++++++++++ using async await +++++++++++++++++++//

    router.post('/register', async (req,res) => {
    console.log(req.body);
    const { email, password} = req.body; 
    res.status(201).json({ message:email});

//     const { name, phone, email, password} = req.body;      ///object destructuring 

//     if(!name ||!phone || !email || !password){
//         return res.status(422).json({ error : " Fill all required fields properly"});
//     }
// try
//   {
//      const userExist = await User.findOne({ email : email });
   
//         if(userExist){
//             return res.status(422).json({ error : "email already exist"});
//         }

//         const user = new User({name, phone, email, password});
//          await user.save();
//          res.status(201).json({ message:"User Registered Successfully"});
//         }
       
//   catch(err) 
//    {
//       console.log(err); 
//     }
    
});

/// logqin route to check login

router.post('/signin', async(req, res) => 
{
    // console.log(req.body);
    // res.json({message:"awqesome"});

    try{
            const { email, password } =req.body;

            // const email,any
            if(!email || !password)
            {
                return res.status(400).json({error:"please fill the all data"});
            }

            const userLogin = await User.findOne({ email: email});
            
            console.log(email  +password);

            if(userLogin){
               var  isMatch = false;
                if(userLogin.password === password){
                    isMatch = true;
                }else{
                    isMatch = false;
                }
               // await compare(password, userLogin.password);
                if(!isMatch){
                    res.status(200) .json({message:"failure"});
                }
                else{
                    res.json({message:"success"});
                }
            }
            else{
                   res.status(200).json({message:"failure"});
                 }
                    
        }catch(err) {
            console.log(err);
        }
});

module.exports = router;