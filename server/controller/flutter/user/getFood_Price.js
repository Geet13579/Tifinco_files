var foodproduct_M = require('../../../model/adminmodel/foodproduct/foodproduct_model.js');
var optionalInfo_M = require('../../../model/adminmodel/foodproduct/Optionalitem_M.js')

exports.getFoodPrice= async function(req,res)
{
   
      const {p_name} = req.body;

      var options = req.body.options;
      console.log(options);
      console.log(p_name);

      var  MyArray = [];

      for(var i = 0;i<p_name.length;i++)
      {
         var food_price =  await foodproduct_M.find({p_name:p_name[i]})
         // console.log(food_price[0].p_name)

         food_price.forEach((food)=>
         {
            // if(food_price[0].p_name == p_name[i])
            // {
            //    MyArray.push({"name":food_price[0].p_name , "price":food_price[0].p_price});
            //    console.log(food_price[0].p_name );
            //    console.log(food_price[0].p_price)
            // }

            if(food.p_name == p_name[i])
            {
               // console.log("hello");
               MyArray.push({"name":food.p_name, "price":food.p_price});

            }
            console.log(food.p_name);
            console.log(food.p_price);
     

         })
      }
      console.log( MyArray);
      

        
  
   
      var Opt_Array = [];


      for(var i =0 ; i<options.length ; i++)
      {
         var optionalInfo =  await optionalInfo_M.find({ optionals : { $elemMatch : { options : options[i]  } }})
   
         optionalInfo[0].optionals.forEach((e)=>{
            if(e.options == options[i])
            {
               Opt_Array.push({"name":e.options,"price": e.price});
            }

         })  

      }
      console.log(Opt_Array);

      res.send({FoodProduct:MyArray, OptionalItem:Opt_Array});

   
    //  __________________________________________________MY PREVIOUS  CODE _________________________________________________________________ 
   
   //    var p_name=req.body.p_name;
   //    var options = req.body.options;

   //    console.log(options);
   //    console.log(p_name);

   //    var food_price =  await foodproduct_M.findOne({p_name:p_name})
   //    // console.log(food_price);
   //    if(food_price)
   //    {
   //       var price = food_price.p_price;

   //       // res.send( price);
   //    }
   //    else
   //    {
   //       // const text1 = failure;
   //       // console.log("ghfdgc");
   //    }
    

   //    var optionalInfo =  await optionalInfo_M.find({ optionals : { $elemMatch : { options : options  } }})
   //    // console.log(optionalInfo.length);

   //    // console.log(optionalInfo[0].optionals.length)
   //    if(optionalInfo.length>0)
   //    {
   //       for(var i = 0;i<optionalInfo[0].optionals.length;i++)
   //       {

   //          if((optionalInfo[0].optionals[i].options == options ))
   //          {
   //             var optional_price = optionalInfo[0].optionals[i].price;

   //          }

   //          else
   //          {
   //             // console.log("Not Found");
   //          }
    
   //      }
   //    }

      

   //    async function getuserid() 
   //    { 
        
   //          if (food_price == null && optionalInfo.length == 0)
   //          {
   //             res.send({msg:"failure" , optional_price:"Optional Food Name not Found",Food_price:"Food Name not Found"});
   //          }
   //          else if(food_price == null)
   //          {
   //             res.send({msg:"success" , optional_price:optional_price,Food_price:"Food Name not Found"});
   //          }
   //          else if (optionalInfo.length == 0)
   //          {
   //             res.send({msg:"success" , optional_price:"Optional Food Name not Found",Food_price:price});
   //          }
   //          else 
   //          {
   //             res.send({msg:"success" , optional_price:optional_price,Food_price:price});
   //          }
           
   //   }

   //   getuserid();


};