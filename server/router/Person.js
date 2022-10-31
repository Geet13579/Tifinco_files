const e = require('express');
const express = require('express');
const router = express.Router();

//database connection 
require('../db/conn');
const User =  require("../modal/userSchema");

router.get('/showData',(req,res) => {

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
