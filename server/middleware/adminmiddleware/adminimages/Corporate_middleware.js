var multer  = require('multer');
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/corporate_image/')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now()+file.originalname)
    }
  });

  const fileFilter=(req, file, cb)=>{
    if(file.mimetype ==='image/jpeg' || file.mimetype ==='image/jpg' || file.mimetype ==='image/png'){
        cb(null,true);
    }else{
        cb(null, false);
    }
 
   }
 
 var cor_image = multer({ 
     storage:storage,
    //  limits:{
    //      fileSize: 1024 * 1024 * 100
    //  },
    // fileFilter:fileFilter
  });

module.exports = cor_image