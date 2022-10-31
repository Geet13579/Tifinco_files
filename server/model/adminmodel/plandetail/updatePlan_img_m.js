const mongoose = require('mongoose');
const updatePlanimageSchema = new mongoose.Schema
({
      planBg_image:
      {
        type: String
      },
      planBg_image2:
      {
        type:String
      }
      
    
    
});



const updatePlan_imgInfo = mongoose.model('PlanBgImage_info', updatePlanimageSchema);
module.exports = updatePlan_imgInfo;
