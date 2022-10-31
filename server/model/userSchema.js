const mongoose = require('mongoose');
const bcrypt = require ('bcryptjs');
const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
       },
phone:{
    type: Number,
    required: true
    },
email:{
    type: String,
    required: true
   },
password:{
    type: String,
    required: true
    }
});

// hashing the poassword

userSchema.pre('save', async function(next){
    console.log("hii from inside");
      if(this.isModified('password')){
          this.password = bcrypt.hash(this.password, 12);
      }
      next();
})


const User = mongoose.model('users', userSchema);
module.exports = User;


