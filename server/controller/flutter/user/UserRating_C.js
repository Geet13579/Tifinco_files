var userratingmodel = require('../../../model/fluttermodel/userRating_M.js');


exports.insert_rating = function (req, res) 
{

    var userid = req.body.userid;
    var delivery_rating = req.body.delivery_rating;
    var foodTaste_rating = req.body.foodTaste_rating;
    var feedback = req.body.feedback;



    let today = new Date().toISOString().slice(0, 10);
    
    // console.log(today)
  
    async function insert(params) 
    {
        console.log(userid );

        var  rating_data  = await userratingmodel.findOne({ userid: userid, current_date:today });

      if(rating_data )
      {
              var delivery_ratingdata = rating_data.delivery_rating;
              var foodTaste_ratingdata = rating_data.foodTaste_rating;
              var feedbackdata = rating_data.feedback; 
              // console.log(delivery_ratingdata);
              // console.log(foodTaste_ratingdata);
              // console.log(feedbackdata);
                res.send({msg:"exist" ,delivery_rating:delivery_ratingdata, foodTaste_rating:foodTaste_ratingdata, feedback:feedbackdata });  
 
      }
      else
      {
        const userrating_model = new userratingmodel ({  userid: userid,  delivery_rating : delivery_rating ,foodTaste_rating :foodTaste_rating ,feedback:feedback , boolean_rating:"1" ,
        current_date:today });
      
          
        userrating_model.save().then(res.json({ msg: "success" })).catch((err) => { res.json({ msg: "failed" }) });
      }
     
  
    }

    insert();
  
  }