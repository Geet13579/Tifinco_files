





var Jimp = require('jimp');
var fs = require('fs');
var Master_menu = require('../../../model/adminmodel/kitchenmodel/Master_menu');
////////////////////////////// Master menu //////////////////
var userplanmodel = require('../../../model/fluttermodel/userplanmodel');

var Menus_M = require('../../../model/adminmodel/kitchenmodel/Menus_M');
var unlike = require('../../../model/adminmodel/kitchenmodel/Masterunlikefood');

exports.addUnlikefood = function(req, res) {


 
    
      userplanmodel.find(  )
      .then(doc => {
          console.log(doc);
  
          unlike.insertMany(doc)
              .then(d => {
                res.send([d]);
              })
  
  
  
              .catch(error => {
                  console.log(error);
              })
            })

    
 

  
   
  }
