var multer  = require('multer');
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/deliveryRegistration/')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now()+file.originalname)
    }
  });
 
 var upload = multer({ 
     storage:storage,

  })

  // var uploadMultiple = upload.fields([ { name: 'pan_image' }, { name: 'adhaar_image' }, { name: 'profile_image' }])
  // .fields([{name: "adhaar_image", maxCount: 1}, {name: "pan_image", maxCount: 1}, , {name: "profile_image" , maxCount: 1}]);;

module.exports = upload