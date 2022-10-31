// const mongoose = require("mongoose");

// const Login_M = new mongoose.Schema({
//   name: {
//     type: String,
//     required: false
//   },
//   email: {
//     type: String,
//     required: false
//   },
//   password: {
//     type: String,
//     required: false
//   },
//   date: {
//     type: Date,
//     default: Date.now
//   }
// });

// const DeliveryLogin = mongoose.model("DeliveryLogin", Login_M);

// module.exports = DeliveryLogin;


const crypto = require("crypto");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Login_M = new mongoose.Schema({

  username: 
  {
    type: String,
    required: [true, "Please provide username"],
  },

  email:
  {
      type: String,
      required: [true, "Please provide email address"],
      unique: true,
      match: [
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          "Please provide a valid email",
       ],
  },

  password: 
  {
    type: String,
    required: [true, "Please add a password"],
    minlength: 6,
    select: false,
  },
    resetPasswordToken: String,
    resetPasswordExpire: Date,
    
    name:
    {
        type: String,
         required: true
    },
    
    date_of_birth:
    {
         type: Date,
          required: true
    },

    mobile:
    {
        type : String,
         required: true
    },

   address:
     {
         type: String,
          required: true
     },

    adhaar_card :
    {
        type: String,
         required: true   
    },

    adhaar_image:
    {
     type: String
    },

    pan_image:
    {
     type: String
    },
    
    profile_image:
    {
     type: String
    },

    pan_card:
    {
        type:String,
        required: true 
    },
 
    date:
    {
         type: Date,
         default: Date.now
    },
    joining_date :
    {
      type: Date,
      required : true
    }



});

// Encryption  password =============================================



// Login_M.pre("save", async function (next) 
// {
//     if (!this.isModified("password")) 
//     {
//       next();
//     }

//     const salt = await bcrypt.genSalt(10);
//     this.password = await bcrypt.hash(this.password, salt);
//     next();
// });

// Login_M.methods.matchPassword = async function (password)
// {
//     return await bcrypt.compare(password, this.password);
// };

// Login_M.methods.getSignedJwtToken = function () 
// {
//     return jwt.sign({ id: this._id }, process.env.JWT_SECRET,
//     {
//         expiresIn: process.env.JWT_EXPIRE,
//     });
// };

// Login_M.methods.getResetPasswordToken = function () 
// {
//     const resetToken = crypto.randomBytes(20).toString("hex");

//     // Hash token (private key) and save to database
//     this.resetPasswordToken = crypto
//       .createHash("sha256")
//       .update(resetToken)
//       .digest("hex");

//          // Set token expire date
//     this.resetPasswordExpire = Date.now() + 10 * (60 * 1000); // Ten Minutes

//     return resetToken;
// };
 
//encryption password===============================================


const User = mongoose.model("DeliveryLogin_infos", Login_M);

module.exports = User;
