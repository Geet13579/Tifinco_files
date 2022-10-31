// slider_infos

let mongoose = require('mongoose'),

  express = require('express'),
  router = express.Router();

// category Model
var category_m = require('../../../model/adminmodel/Category/Category_model');

//products model
var foodproduct_model = require('../../../model/adminmodel/foodproduct/foodproduct_model');
var foodoffermodel= require('../../../model/adminmodel/foodproduct/foodoffermodel');


exports.show_category = function(req, res) {
    category_m.find((error, data) => {
    if (error) {
      res.json({category:error})
    } else {
      res.json({category:data})
    }
  })
};

exports.show_products = function(req,res){

  foodproduct_model.find((error, data) => {
    if (error) {
      res.json({product:error})
    } else {
      res.json({foodproduct:data})
    }
  })

}

exports.foodprefwise_productlist = async function(req,res){

  var get_foodprefwise_productlist = await foodproduct_model.find({p_foodtype:req.body.p_foodtype});

  if (get_foodprefwise_productlist) {
    res.json({product:get_foodprefwise_productlist})
  } else {
    res.json({foodproduct:'error'})
  }


}

exports.categorywise_product = async function(req,res){

  var get_categorywiseproducts = await foodproduct_model.find({p_category:req.body.p_category});

  if (get_categorywiseproducts) {
    res.json({product:get_categorywiseproducts})
  } else {
    res.json({foodproduct:'error'})
  }

}


exports.getfood_with_foodpref_and_catgeory = async function(req,res){
  //{p_category:req.body.p_category}
  

  var get_data = await foodproduct_model.find({$and:[ { p_category :req.body.p_category},{p_foodtype: req.body.p_foodtype }  ]});

  if (get_data) {
    res.json({product:get_data})
  } else {
    res.json({foodproduct:'error'})
  }

}


exports.getproductoffertag = function(req, res) {
  
  foodoffermodel.find((error, data) => {
      if (error) {
        res.json(error)
      } else {
        res.json(data)
      }
    })
  };


  exports.productlistfilter = function(req,res){
  //console.log("hello bhai");
    //console.log(req.body);
       if(req.body.filtertype==='cost'){
       
        if(req.body.filterval ==='HTL'){

          foodproduct_model.find((error, data) => {
            if (error) {
              res.json({product:error})
            } else {
              res.json({foodproduct:data})
            }
          }).sort({p_price:1})
      

        }else if(req.body.filterval ==='LTH'){

          foodproduct_model.find((error, data) => {
            if (error) {
              res.json({product:error})
            } else {
              res.json({foodproduct:data})
            }
          }).sort({p_price:-1})

        }


       }else if(req.body.filtertype==='rating'){


        if(req.body.filterval ==='HTL'){

          foodproduct_model.find((error, data) => {
            if (error) {
              res.json({product:error})
            } else {
              res.json({foodproduct:data})
            }
          }).sort({p_rating:1})
      

        }else if(req.body.filterval ==='LTH'){

          foodproduct_model.find((error, data) => {
            if (error) {
              res.json({product:error})
            } else {
              res.json({foodproduct:data})
            }
          }).sort({p_rating:-1})

        }


       }

  
  }