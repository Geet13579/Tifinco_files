import React, { Component } from 'react'
import Header from '../C_Header';
import Footer from '../C_Footer'
import axios from 'axios';
import { Route, Switch, Link } from 'react-router-dom';
import ReactLoading from "react-loading";
import {GET_CUSTOMERSUPPORTBY_ID, GETEXTRA_FOODINFO, DELETE_EXTRAITEM_OBJ, UPDATECUST_DATA } from '../../../../Components/admincomponent/links/CustomerSupportLink.js'
// import {GET_CUSTOMERSUPPORTBY_ID, GETEXTRA_FOODINFO, DELETE_EXTRAITEM_OBJ, UPDATECUST_DATA } from '../../links/CustomerSupportLink.js' // it's also a good approach

export class ViewOneCustProfile extends Component {

  state = 
  {
    usr_plan :[],
    plantype_data:[],
    nonveg_arr:[],
    repeatOn_arr :[],
    unlike_arr:[],
    useraddress_arr:[],
    extraItem_arr:[],
    newUnlike_arr:'',
    finalUnlike_arr:[],
    values: [],
    preextraFood:[],
    rows: [{}],
    lunch_addressLine1:'',
    lunch_addressLine2:'',
    lunch_house_no:'',
    lunch_landmark:'',
    dinner_addressLine1:'',
    dinner_addressLine2:'',
    dinner_house_no:'',
    dinner_landmark:'',
    Load:false,
    item_name:'',
    item_price:'',
    item_qty:1,
    total_price:'',
    name:'',
    plantype:'',
    meal_time:'',
    mealpreference:'',
    nonveg_pre_d:'',
    tiffintype:'',
    plan_days:'',
    repeat_on:'',
    unlike_foods:'',
    useraddress:'',
    extra_item:'',
    plan_status:'',
    plan_price:'',
    day_off:'',
    plan_pause:'',
    amount :'',
    userid:'',
    ischeck:[],
    ischeckNonveg : [],
    getselected:[{}],
    total_price:[{}],
    getitemname:'',
    item_qauntity:1

  }

 componentDidMount=(event) =>
 {
     this.setState
     ({
     Load:true,
     })

     


          console.log(this.props.match.params.token);
    fetch( GET_CUSTOMERSUPPORTBY_ID,
    {
        method: 'POST',
        headers: 
          {
          'Content-Type': 'application/json',
          },
        body: JSON.stringify
        ({
          userid: sessionStorage.getItem('userid'),
          token:this.props.match.params.token // Use your own property name / key
        }),
   })
       .then((res) => res.json()).then((json) => { console.log(json);
          // alert(json);
      
          this.setState
          ({
              usr_plan :json
           });
           console.log(json);


           var nonveg_arr =this.state.usr_plan.nonveg_pre_d;
           console.log(nonveg_arr);
           var repeatOn_arr =this.state.usr_plan.repeat_on;
           var unlike_arr =this.state.usr_plan.unlike_foods;
           var useraddress_arr =this.state.usr_plan.useraddress;
           var extraItem_arr =this.state.usr_plan.extra_item;



          for(var i=0;i<extraItem_arr.length;i++)
          {
 
              
            extraItem_arr[i]['total_price'] = (extraItem_arr[i]['item_qyt'])*extraItem_arr[i]['item_price']
              
          }

          console.log(extraItem_arr)

          var arr = [];
          
          arr.push(repeatOn_arr.s,repeatOn_arr.m,repeatOn_arr.t,repeatOn_arr.w,repeatOn_arr.th,repeatOn_arr.fr,repeatOn_arr.sat)
          
          console.log(arr)

          var days=[]

          days.push("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
          var new_days = [];
          new_days.push("s","m","t","w","th","fr","sat");

   
          arr.map((data,index)=>{
            
            this.setState(prevState => ({ ischeck: [...prevState.ischeck,{ name:data, checked:false,days:days[index] ,new_days:new_days[index]} ]}))

          });

          console.log(this.state.ischeck)
          for(var i=0;i<this.state.ischeck.length;i++){

         
            if(this.state.ischeck[i].name==1){
              this.state.ischeck[i].checked = true
            }
            else{
              this.state.ischeck[i].checked = false
            }
          }

          // this.state.ischeck.push({days:days})
          console.log(this.state.ischeck)


          var nonveg_array = [];
          nonveg_array.push(nonveg_arr.s, nonveg_arr.m, nonveg_arr.t, nonveg_arr.w, nonveg_arr.th ,nonveg_arr.fr ,nonveg_arr.sat)
          console.log(nonveg_array);


          nonveg_array.map((d,index)=>{
            
            this.setState(prevState => ({ ischeckNonveg: [...prevState.ischeckNonveg,{ name:d, checked:false,days:days[index] ,new_days:new_days[index]} ]}))

          });

          console.log(this.state.ischeckNonveg);

          for(var i=0;i<this.state.ischeckNonveg.length;i++)
          {
 
              if(this.state.ischeckNonveg[i].name==1)
              {
                this.state.ischeckNonveg[i].checked = true
              }
              else
              {
                this.state.ischeckNonveg[i].checked = false
              }
          }
          console.log(this.state.ischeckNonveg);


          

        
         if(this.state.usr_plan.meal_time == "Lunch")
         {
            var lunch_addressLine1 =useraddress_arr.lunch_useraddress.addressLine1;
            var lunch_addressLine2 =useraddress_arr.lunch_useraddress.addressLine2;
            var lunch_landmark =useraddress_arr.lunch_useraddress.landmark;
            var lunch_house_no =useraddress_arr.lunch_useraddress.house_no;
         }
         else if(this.state.usr_plan.meal_time == "Dinner")
         {
            var dinner_addressLine1 =useraddress_arr.dinner_useraddress.addressLine1;
            var dinner_addressLine2 =useraddress_arr.dinner_useraddress.addressLine2;
            var dinner_landmark =useraddress_arr.dinner_useraddress.landmark;
            var dinner_house_no =useraddress_arr.dinner_useraddress.house_no;
         }
         else
         {
            var lunch_addressLine1 =useraddress_arr.lunch_useraddress.addressLine1;
            var lunch_addressLine2 =useraddress_arr.lunch_useraddress.addressLine2;
            var lunch_landmark =useraddress_arr.lunch_useraddress.landmark;
            var lunch_house_no =useraddress_arr.lunch_useraddress.house_no;

            var dinner_addressLine1 =useraddress_arr.dinner_useraddress.addressLine1;
            var dinner_addressLine2 =useraddress_arr.dinner_useraddress.addressLine2;
            var dinner_landmark =useraddress_arr.dinner_useraddress.landmark;
            var dinner_house_no =useraddress_arr.dinner_useraddress.house_no;
         }
           
           
           var name = this.state.usr_plan.name;
           var plantype = this.state.usr_plan.plantype;
           var tiffin_price = this.state.usr_plan.tiffin_price;
           var tiffintype = this.state.usr_plan.tiffintype;
           var meal_time = this.state.usr_plan.meal_time;
           var mealpreference = this.state.usr_plan.mealpreference;
           var amount =this.state.usr_plan.amount;
           var plan_price = this.state.usr_plan.plan_price;
           var plan_days = this.state.usr_plan.plan_days;
           var userid = this.state.usr_plan.userid;
           console.log(userid);
          //  console.log(this.state.stockdata_arr.stockdata);


          //  var lunch_addressLine1 = this.state.usr_plan.lunch_addressLine1;
          //  var lunch_addressLine2 = this.state.usr_plan.lunch_addressLine2 ;
          //  var lunch_landmark = this.state.usr_plan.lunch_landmark;
          //  var lunch_house_no = this.state.usr_plan.lunch_house_no;
          //  var dinner_addressLine1 = this.state.usr_plan.dinner_addressLine1;
          //  var dinner_addressLine2 = this.state.usr_plan.dinner_addressLine2 ;
          //  var dinner_landmark = this.state.usr_plan.dinner_landmark;
          //  var dinner_house_no = this.state.usr_plan.dinner_house_no;


          extraItem_arr.map(data=>
         {

             console.log(data);

            this.setState
            ({
                //  name :data.name,
                //  plantype:data.plantype,
                //  meal_time :data.meal_time,
                //  mealpreference:data.mealpreference,
                 item_name:data.item_name,
                 item_price:data.item_price,
                 item_qty:data.item_qty,
                 
                //  starting_date:data.starting_date,
                //  plan_days:data.plan_days,
                //  repeat_on:data.repeat_on,
                //  unlike_foods :data.unlike.foods,
                //  useraddress : data.useraddress,
                //  extra_item: data.extra_item,
                //  plan_status : data.plan_status,
                //  plan_price :data.plan_price,
                //  day_off :data.day_off,
                //  plan_pause: data.plan_pause,
                //  amount :data.amount
                // item_name :plan.item_name,
                //  item_qty : plan.item_qty,
                //  item_price : plan.item_price
                      
            });
          });

       
         


        



        this.setState
        ({
          nonveg_arr, repeatOn_arr, useraddress_arr, unlike_arr , extraItem_arr,  lunch_addressLine1, lunch_addressLine2, lunch_house_no, lunch_landmark, dinner_addressLine1,
           dinner_addressLine2, dinner_house_no, dinner_landmark,name,plantype, tiffin_price, tiffintype, meal_time, mealpreference, amount, plan_price, plan_days,userid
          //  , stockdata_arr
        });
      

        fetch( GETEXTRA_FOODINFO,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userid: sessionStorage.getItem('userid'), // Use your own property name / key
      }),
    })
        .then((res) => res.json())
        .then((json) => {
        console.log(json);
      
    
// filter items
        const res = json.filter(({item_name:a}) => !extraItem_arr.some(({item_name:b}) => a === b));
         console.log(res);


         this.setState({
          preextraFood :res
         });


         this.setState(prevState => ({ getselected: [...prevState.getselected,{}]}))

          console.log(this.state.getselected)
    
            this.setState
            ({
               Load:false,
             });
           

            })//CLOSING OF FIRST FETCH


            fetch("https://tifinco.com:5000/admin/getplantype",{
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                userid: sessionStorage.getItem('userid'), // Use your own property name / key
              }),
            })
                .then((res) => res.json())
                .then((json) => {
              //  console.log(json);
                 this.setState({
                  plantype_data :json
                 });
                })

            this.setState
            ({
               Load:false,
             });
       });//CLOSING OF SECOND FETCH

     

 }
 
    cust_nameinput = event => 
    {
      this.setState({ name: event.target.value});
      console.log(this.state.name);
    }

    plan_typeinput = event => 
    {
      this.setState({plantype : event.target.value});
      console.log(this.state.plantype);
    }

    meal_timeinput = event => 
    {
      this.setState({meal_time : event.target.value});
      console.log(this.state.meal_time);
    }

    meal_prefinput = event => 
    {
      this.setState({mealpreference : event.target.value});
      console.log(this.state.mealpreference);
    }

    tifin_typeinput = event => 
    {
      this.setState({tiffintype : event.target.value})
      console.log(this.state.tiffintype);
    }

    tifin_priceinput=(event)=> 
    {
      // const re = /^[0-9\b]+$/;
      // if (event.target.value === '' || re.test(event.target.value)) 
      // {
      //  console.log("hello");
      this.setState({tiffin_price : event.target.value})
      console.log(this.state.tiffin_price);
      // }
    }

    plan_daysinput = event => 
    {
      this.setState({plan_days : event.target.value})
      console.log(this.state.plan_days);
    }

    plan_priceinput = event => 
    {
      this.setState({plan_price : event.target.value})
      console.log(this.state.plan_price);
    }

    paid_amountinput = event => 
    {
      this.setState({amount : event.target.value})
      console.log(this.state.amount);
    }

    lunchAdd1_input = event => 
    {
      this.setState({lunch_addressLine1 : event.target.value})
      console.log(this.state.lunch_addressLine1);
    }

    lunchAdd2_input = event => 
    {
      this.setState({lunch_addressLine2 : event.target.value})
      console.log(this.state.lunch_addressLine2);
    }

    lunchAdd_landmarkinput = event => 
    {
      this.setState({lunch_landmark : event.target.value})
      console.log(this.state.lunch_landmark);
    }

    lunchAddHouse_noinput = event => 
    {
      this.setState({lunch_house_no : event.target.value})
      console.log(this.state.lunch_house_no);
    }

    dinnerAdd1_input = event => 
    {
      this.setState({dinner_addressLine1 : event.target.value})
      console.log(this.state.dinner_addressLine1);
    }

    dinnerAdd2_input = event => 
    {
      this.setState({dinner_addressLine2 : event.target.value})
      console.log(this.state.dinner_addressLine2);
    }

    dinnerAdd_landmarkinput = event => 
    {
      this.setState({dinner_landmark : event.target.value})
      console.log(this.state.dinner_landmark);
    }

    dinnerAddHouse_noinput = event => 
    {
      this.setState({dinner_house_no : event.target.value})
      console.log(this.state.dinner_house_no);
    }

    extraFood_input = event =>
    {
        this.setState({extra_item : event.target.value})
        console.log(this.state.extra_item); 


        for(var i =0; i<this.state.extraItem_arr.length;i++)
         {
              var item_name = this.state.extraItem_arr[i].item_name;
              var item_qty = this.state.extraItem_arr[i].item_qty;
              var item_price = this.state.extraItem_arr[i].item_price;

              console.log(item_name);
              console.log(item_qty);
              console.log(item_price);

         }
    }

 inputCheckboxrepeat_on = (index) =>
 {

     console.log("data clicked"+this.state.ischeck[index]['checked']);
                                                  
      if(this.state.ischeck[index]['checked'])
      {
         let a = this.state.ischeck.slice(); //creates the clone of the state
         a[index]['checked'] = false;
         a[index]['name']="0"

          this.setState({ischeck: a});
          var data = [];
         console.log(this.state.ischeck)                               
      }

      else
      {

        let a = this.state.ischeck.slice(); //creates the clone of the state
                                                        
         a[index]['checked'] = true;
          a[index]['name'] = "1"
          this.setState({ischeck: a});
                                       
          console.log(this.state.ischeck)

      }
                    
  }
   inputCheckboxNonveg = (index) =>
  {
    console.log("data clicked"+this.state.ischeckNonveg[index]['checked']);
                                                  
      if(this.state.ischeckNonveg[index]['checked'])
      {
         let a = this.state.ischeckNonveg.slice(); //creates the clone of the state
         a[index]['checked'] = false;
         a[index]['name']="0"

          this.setState({ischeckNonveg: a});
          var data = [];
         console.log(this.state.ischeckNonveg)                               
      }

      else
      {

        let a = this.state.ischeckNonveg.slice(); //creates the clone of the state
                                                        
         a[index]['checked'] = true;
          a[index]['name'] = "1"
          this.setState({ischeckNonveg: a});
                                       
          console.log(this.state.ischeckNonveg)

      }
                    
  }



 handleUnlikeFoods= (i,event )=>
 {

       let values = [...this.state.values];
       values[i] = event.target.value;
       this.setState({ values });
  }

  addClick()
  {
    if(this.state.unlike_arr.length ==5)
    {
      alert("You can't add more than 5 unlike foods");
    }
    else
    this.setState(prevState => ({ values: [...prevState.values,'']}))
  }

  removeClick(i)
  {
    let values = [...this.state.values];
    values.splice(i,1);
    this.setState({ values });
  }


createUI()
 {
   return this.state.values.map((el, i) => 
       <div key={i}>
       <ul style={{ listStyle: 'none' }}><li>Food :{i+1} <input class="form-control"  type="text" id ="sabji" value={el||''} onChange={this.handleUnlikeFoods.bind(this, i)} autoComplete='off' required /></li></ul> 
        <input type='button' value='remove' onClick={this.removeClick.bind(this, i)}/>
       </div>          
   )
}


handleupdate=(userid)=> 
{

      var finalObj = this.state.extraItem_arr.concat(this.state.getselected);

    console.log(finalObj)
    // var jhgjh = finalObj.filter(x => x !== null);
  var  result = finalObj.map(o => {
      let obj = Object.assign({}, o);
      delete obj.total_price;
      return obj;
    });


  
      console.log(result);

      // event.preventDefault();
            this.setState({
                Load :true,
                });
        
   
        console.log(this.state.ischeckNonveg)
        
       var nonvegpreference_day= this.state.ischeckNonveg.reduce( (obj, item) => Object.assign(obj, { [item.new_days]: item.name }), {});

       var reapet_on= this.state.ischeck.reduce( (obj, item) => Object.assign(obj, { [item.new_days]: item.name }), {});


        console.log(nonvegpreference_day)
        this.state.newUnlike_arr = [];
        for(var i =0;i<this.state.unlike_arr.length;i++){
          if(document.getElementById(i+'_id').value!=""){
          this.state.newUnlike_arr.push( document.getElementById(i+'_id').value);
          }

       
          console.log(this.state.newUnlike_arr);


          if(this.state.values ==""){
            this.state.finalUnlike_arr = this.state.newUnlike_arr
          
          }
          else
          {
            
            this.state.finalUnlike_arr = this.state.newUnlike_arr.concat(this.state.values);
          }
          
          console.log(this.state.finalUnlike_arr.length);
         
        }

        if(this.state.finalUnlike_arr.length <= 5)
        {
          if(this.state.meal_time == "Lunch")
          {
              const formData = 
              {
                  name: this.state.name,
                  meal_time:this.state.meal_time,
                  plan_days:this.state.plan_days,
                  plantype : this.state.plantype,
                  plan_price:this.state.plan_price,
                  mealpreference : this.state.mealpreference,
                  tiffintype:this.state.tiffintype,
                  tiffin_price:this.state.tiffin_price,
                  amount:this.state.amount,
                  lunch_addressLine1:this.state.lunch_addressLine1,
                  lunch_addressLine2:this.state.lunch_addressLine2,
                  lunch_landmark:this.state.lunch_landmark,
                  lunch_house_no:this.state.lunch_house_no,
                  // dinner_addressLine1:this.state.dinner_addressLine1,
                  // dinner_addressLine2:this.state.dinner_addressLine2,
                  // dinner_landmark:this.state.dinner_landmark,
                  // dinner_house_no:this.state.dinner_house_no,
                  extra_item :result,
                  repeat_on : reapet_on,
                  nonveg_pre_d : nonvegpreference_day,
                  unlike_foods : this.state.finalUnlike_arr,
                  
                  userid:this.state.userid,
                  // userid: sessionStorage.getItem('userid'),
      
              }

              console.log(formData);
  
          try{
             axios.post(UPDATECUST_DATA, formData ,{ userid: sessionStorage.getItem('userid')}, {
               headers:{'Content-Type': 'multipart/formdata','content-Type': 'application/json'}
             })
               .then(res => {
                   //alert(res.data);
                   console.log(res.status);
                   console.log(res.data);
                 
                   if(res.data.msg=='success'){
                  
     
                 
                     console.log("success");
                     window.location.reload();
         
                   }
                   else
                   {
                      console.log("failure");
                    
                   }
     
                   this.setState({
                     Load :false,
                     // cname:'',
                     // email:'',
                     // mobile:'',
                     // address:''
                     });
                 
                 // console.log(res);
                 // console.log(res.data);
               })
             }  catch(error) {
              
                     console.log(error)
                     this.setState({
                         Load :false,
                         });
                     console.log("internal server error");
                   }
        
          }
          else if(this.state.meal_time == "Dinner")
          {
            const formData = 
            {
                name: this.state.name,
                meal_time:this.state.meal_time,
                plan_days:this.state.plan_days,
                plantype : this.state.plantype,
                plan_price:this.state.plan_price,
                mealpreference : this.state.mealpreference,
                tiffintype:this.state.tiffintype,
                tiffin_price:this.state.tiffin_price,
                amount:this.state.amount,
                // lunch_addressLine1:this.state.lunch_addressLine1,
                // lunch_addressLine2:this.state.lunch_addressLine2,
                // lunch_landmark:this.state.lunch_landmark,
                // lunch_house_no:this.state.lunch_house_no,
                dinner_addressLine1:this.state.dinner_addressLine1,
                dinner_addressLine2:this.state.dinner_addressLine2,
                dinner_landmark:this.state.dinner_landmark,
                dinner_house_no:this.state.dinner_house_no,
                repeat_on : reapet_on,
                nonveg_pre_d : nonvegpreference_day,
                unlike_foods : this.state.finalUnlike_arr,
                extra_item :result,
                userid:this.state.userid,
                // userid: sessionStorage.getItem('userid'),
    
            };
            console.log(formData);
  
          try{
             axios.post(UPDATECUST_DATA, formData ,{ userid: sessionStorage.getItem('userid')}, {
               headers:{'Content-Type': 'multipart/formdata','content-Type': 'application/json'}
             })
               .then(res => {
                   //alert(res.data);
                   console.log(res.status);
                   console.log(res.data);
                 
                   if(res.data.msg=='success'){
                  
     
                 
                     console.log("success");
                     window.location.reload();
         
                   }
                   else
                   {
                      console.log("failure");
                    
                   }
     
                   this.setState({
                     Load :false,
                     // cname:'',
                     // email:'',
                     // mobile:'',
                     // address:''
                     });
                 
                 // console.log(res);
                 // console.log(res.data);
               })
             }  catch(error) {
              
                     console.log(error)
                     this.setState({
                         Load :false,
                         });
                     console.log("internal server error");
                   }
        
  
          }
          else
          {
            const formData = 
            {
                name: this.state.name,
                meal_time:this.state.meal_time,
                plan_days:this.state.plan_days,
                plantype : this.state.plantype,
                plan_price:this.state.plan_price,
                mealpreference : this.state.mealpreference,
                tiffintype:this.state.tiffintype,
                tiffin_price:this.state.tiffin_price,
                amount:this.state.amount,
                lunch_addressLine1:this.state.lunch_addressLine1,
                lunch_addressLine2:this.state.lunch_addressLine2,
                lunch_landmark:this.state.lunch_landmark,
                lunch_house_no:this.state.lunch_house_no,
                dinner_addressLine1:this.state.dinner_addressLine1,
                dinner_addressLine2:this.state.dinner_addressLine2,
                dinner_landmark:this.state.dinner_landmark,
                dinner_house_no:this.state.dinner_house_no,
                repeat_on : reapet_on,
                nonveg_pre_d : nonvegpreference_day,
                unlike_foods : this.state.finalUnlike_arr,
               
                extra_item :result,
                
                userid:this.state.userid,
                // userid: sessionStorage.getItem('userid'),
    
            };

            console.log(formData);
  
          try{
             axios.post(UPDATECUST_DATA, formData ,{ userid: sessionStorage.getItem('userid')}, {
               headers:{'Content-Type': 'multipart/formdata','content-Type': 'application/json'}
             })
               .then(res => {
                   //alert(res.data);
                   console.log(res.status);
                   console.log(res.data);
                 
                   if(res.data.msg=='success'){
                  
     
                 
                     console.log("success");
                     window.location.reload();
         
                   }
                   else
                   {
                      console.log("failure");
                    
                   }
     
                   this.setState({
                     Load :false,
                     // cname:'',
                     // email:'',
                     // mobile:'',
                     // address:''
                     });
                 
                 // console.log(res);
                 // console.log(res.data);
               })
             }  catch(error) {
              
                     console.log(error)
                     this.setState({
                         Load :false,
                         });
                     console.log("internal server error");
                   }
        
          }
         

          // console.log(formData);
  
          // try{
          //    axios.post(UPDATECUST_DATA, formData ,{ userid: sessionStorage.getItem('userid')}, {
          //      headers:{'Content-Type': 'multipart/formdata','content-Type': 'application/json'}
          //    })
          //      .then(res => {
          //          //alert(res.data);
          //          console.log(res.status);
          //          console.log(res.data);
                 
          //          if(res.data.msg=='success'){
                  
     
                 
          //            console.log("success");
          //            window.location.reload();
         
          //          }
          //          else
          //          {
          //             console.log("failure");
                    
          //          }
     
          //          this.setState({
          //            Load :false,
          //            // cname:'',
          //            // email:'',
          //            // mobile:'',
          //            // address:''
          //            });
                 
          //        // console.log(res);
          //        // console.log(res.data);
          //      })
          //    }  catch(error) {
              
          //            console.log(error)
          //            this.setState({
          //                Load :false,
          //                });
          //            console.log("internal server error");
          //          }
        }

        else
        {
          alert("you can't add more than 5 unlike food ")
          return false;
        }
       
        
}

handledelete = (item_name)=>{
 

  this.setState({
    Load :true,
  
    });
  var sendId ={
    _id : this.state.usr_plan._id,
    item_name:item_name,
    // userid: sessionStorage.getItem('userid'),
  }
  console.log( sendId);
  try{
    axios.post(DELETE_EXTRAITEM_OBJ, sendId , {
      headers:{'Content-Type': 'application/json'},
        })
      .then(res => {
         
        
          if(res.data.msg=='success'){
         
            window.location.reload();
  

          }else{
     
            console.log("failure");
           
          }

          this.setState({
            Load :false,
          
            });
      
      })
    }  catch(error) 
       {   
            console.log(error)
            this.setState({
                Load :false,
                });
            console.log("internal server error");
       }
}


// *************************************************coding for new table**********************************************************

// handleChange_Itemname = event =>
// {
//   this.setState({item_qty : event.target.value})
//   console.log(this.state.item_qty);
// }

handleChange_Quantity = idx=>event =>
{
  console.log(idx);


  
        console.log(this.state.item_price);

        let a = this.state.getselected.slice(); //creates the clone of the state
        
        a[idx]['total_price'] =  this.state.getselected[idx].item_price*event.target.value
        a[idx]['item_qyt'] =  this.state.item_qauntity
  
        console.log(a)
       
        // this.setState({getselected: a});
        // var data = [];
  
        console.log(this.state.getselected)
  
  //  a.map((item)=>{
  
  // if(item.checked == true){
  // return data.push(item);;
  // }
  // })
  
  
    
   
    // var selectedarray = this.state.getselected.filter(function (e) {
    //     return e.item_name != event.target.value;
    // });
  
  
  


  // var total_price = this.state.item_price*;

  this.setState({item_qauntity : event.target.value})
 
  

  }
// handleChange_Price = event =>
// {
//   this.setState({item_price : event.target.value})
//   console.log(this.state.item_price);
// }

handleChangeName_item =idx=>event =>
{

  // console.log(this.state.getselected)
  console.log(event.target.value)
  // // console.log(this.state.preextraFood.length);
  // for(var i = 0; i< this.state.preextraFood.length; i++)
  // {
  //   if(this.state.preextraFood[i].item_name == e.target.value)
  //   {
  //     this.setState({item_price:this.state.preextraFood[i].item_price});
  //     break;
  //   }
  // }
  // const { item_name, value } = e.target;
  // const rows = [...this.state.rows];
  // rows[idx] = {
  //   [item_name]: value
  // };
  // this.setState({
  //   rows
  // });
  // console.log(this.state.rows);


this.setState({getitemname:event.target.value})



  // console.log(e.target.value)
  // console.log(this.state.preextraFood.length);
  // for(var i = 0; i< this.state.preextraFood.length; i++)
  // {
    // if(this.state.preextraFood[i].item_name == e.target.value)
    // {
    //   this.setState({item_price:this.state.preextraFood[i].item_price});
    //   break;
    // }


  // console.log(this.state.getselected)

  // if(this.state.getselected[idx]['item_name']==e.target.value){

  //   let a = this.state.getselected.slice(); //creates the clone of the state
        
  //       a[idx]['item_price'] = this.state.preextraFood[idx]['item_price'];
  //       this.setState({getselected: a});
        // var data = [];

//    a.map((item)=>{

//   if(item.checked == true){
//   return data.push(item);;
// }
// })
//   })





for(var i = 0; i< this.state.preextraFood.length; i++){

  if(this.state.preextraFood[i]['item_name']==event.target.value){

 
    let a = this.state.getselected.slice(); //creates the clone of the state


      
      
      a[idx]['item_name'] = this.state.preextraFood[i]['item_name'];
      a[idx]['item_qyt'] =  this.state.item_qauntity;
      a[idx]['item_price'] = this.state.preextraFood[i]['item_price'];
     
      a[idx]['total_price'] =  this.state.getselected[idx].item_price*this.state.item_qauntity;

  }
 
  // var selectedarray = this.state.getselected.filter(function (e) {
  //     return e.item_name != event.target.value;
  // });


}

console.log(this.state.getselected)

// this.setState({preextraFood:})




  const { item_name, value } = event.target;
  const rows = [...this.state.rows];
  rows[idx] = {
    [item_name]: value
  };
  this.setState({
    rows
  });
  console.log(this.state.rows);

}

    // handleChange = idx => e => 
    // {
    //       const { item_name, item_qty, item_price, value } = e.target;
    //       console.log(item_name);
    //       console.log(item_qty);
    //       console.log(item_price);
    //       const rows = [...this.state.rows];
    //       rows[idx] = {
    //         [item_name]: value,
    //         [item_qty]:value,
    //         [item_price]:value
    //       };
    //       this.setState({
    //         rows
    //       });
    // };

handleAddRow = (e) => {
  e.preventDefault();
  const item = {
    item_name: "",
    item_qty: "",
    item_price : ""
  };
  this.setState({
    // Load:false,
    rows: [...this.state.rows, item]
  });

  

 this.setState(prevState => ({ preextraFood: [...prevState.preextraFood,this.state.preextraFood.filter((i) => i.item_name !==this.state.getitemname ) ]}))

  // this.setState({
  //  preextraFood :filtered_array
  // });

};

handleRemoveRow = (e) => {
  e.preventDefault();
  this.setState({
    rows: this.state.rows.slice(0, -1)
  });
  this.setState({
    getselected: this.state.getselected.slice(0, -1)
  });
 

};

createUIForExtra_item=()=>
{
return this.state.rows.map((item, idx) => (
    <tr id="addr0" key={idx}>
      {/* <td>{idx}</td> */}
      <th scope="row" style={{ verticalAlign: "middle" }} >{this.state.i = this.state.i +1 } </th>

      <td>
        {/* <input
          type="text"
          name="item_name"
          value={this.state.rows[idx].item_name}
          onChange={this.handleChange(idx)}
          className="form-control"
          defaultValue={ this.state.item_name}
        /> */}
        <select class="form-control" name= "item_name" onChange = {this.handleChangeName_item(idx)} tabindex="-90"required>
           <option value="">Select Extra Item</option>
              {this.state.preextraFood.map(item_data =>
              (
                // this.state.item_name === item_data.item_name?
                // ( <option value={item_data.item_name} selected> {item_data.item_name} </option> ) 
                //  :  
                ( <option value={item_data.item_name} > {item_data.item_name} </option> )
              )
            )}
        </select>
         
      </td>
      <td>
        <input
          type="number"
          name="item_qty"
          value={this.state.rows[idx].item_qauntity}
          onChange={this.handleChange_Quantity(idx)}
          // onChange={this.handleChange(idx)}
          className="form-control"
          defaultValue={this.state.item_qauntity}
        />
      </td>
      
      <td>
        <input
          type="number"
          name="item_price"
          // value={this.state.rows[idx].item_price}
          value = {this.state.getselected[idx].item_price}
          className="form-control"
          defaultValue={this.state.item_price}
        />
      </td>
      <td>
        <input
          type="number"
          name="item_totalPrice"
          value={this.state.getselected[idx].total_price}
          // onChange={this.handleChange(idx)}
          className="form-control"
        />
      </td>
    </tr>
  ))
}
// handleRemoveSpecificRow = (idx,e) => () => {
//   // e.preventDefault();
//   this.setState({ Load:true })
//   console.log(idx);
//   const rows = [...this.state.rows]
//   rows.splice(idx, 1)
//   this.setState({ rows ,Load:false})
// }
// ***********************************************************************************************************
render() 
{
  // var displayports = object.keys(this.state.repeat_onName).filter((x)=>this.state.repeat_onName[x]);
    console.log(this.state.useraddress_arr.lunch_useraddress);
    //

// console.log(this.state.ischeck.map(d=>d.name));
    // console.log(this.state.dinner_addressLine1);
    // console.log(this.state.dinner_addressLine2);
    // console.log(this.state.dinner_landmark);
    // console.log(this.state.dinner_house_no);
    // console.log(this.state.lunch_addressLine1);
    // console.log(this.state.lunch_addressLine2);
    console.log(this.state.item_name );
    console.log(this.state.item_price );
    console.log(this.state.item_qty );

    // console.log(this.state.lunch_house_no);
    console.log(this.state.unlike_arr.length);
    console.log(this.state.extraItem_arr.length);
    // console.log(this.state.plan_price);
    console.log(this.state.preextraFood);


    return (
      <>
      <Header/>

      
     {/* main body area */}
<div className="main px-lg-5 px-md-2">

 {/* Body: Header */}
 <div className="body-header d-flex text-light border-top py-3">
   {/* {console.log(this.state.percentage)} */}
   <div className="container">
     <div className="row mb-3">
       <div className="col">
         <ol className="breadcrumb bg-transparent mb-0">
           <li className="breadcrumb-item"><a className="text-secondary" href="/">Home</a></li>
           <li className="breadcrumb-item active" aria-current="page">Update Customer Plan Info</li>
         </ol>
       </div>
       <div className="col-auto">
         <div className="d-md-flex d-none justify-content-lg-end align-items-center">
          
         </div>
       </div>
     </div>
     <div className="row align-items-center">
       <div className="col-auto">
         <h1 className="fs-4 mt-1 mb-0">Customer Plan </h1>
         <small className="text-muted"></small>
       </div>
       <div className="col d-flex justify-content-lg-end mt-2 mt-md-0">
      
       </div>
     </div>
   </div>
 </div>
 {/* Body: Body */}

 <div className="body d-flex py-lg-4 py-3">
   <div className="container">
     <div className="row g-4">
       <div className="col-lg-12 col-md-12 col-sm-12">
         <div className="card">
           <div className="card-body">
             <div className="row g-4 px-5">
                 
             { !this.state.Load ?(""
                ):(<div className="dropdown user-profile ms-2"><ReactLoading type="cubes" color="#3453FF"
                height={100} width={50} /></div>)}

                {/* {this.state.usr_plan.map(plan=>( */}
                <>
                   <form onSubmit={this.handleSubmit}  encType='multipart/form-data'   >


                   <div ><br></br></div>


                   <div className="col-lg-12">
                 <label>Customer Name</label><div><br></br></div>
                <input type="text" className="form-control" value={this.state.name}   name="cust_name"  placeholder=" Name" onChange={this.cust_nameinput}  required autoComplete='off'/>
                </div>

                <div ><br></br></div>
                {/* <div className="col-lg-12">
              <label>Plan Type </label><div><br></br></div>
                <input type="text" className="form-control" value={this.state.plantype}  name="plantype"   placeholder="plantype " onChange={this.plan_typeinput}   autoComplete='off'/>
              </div> */}
              <div className="col-lg-12">
                <label>Choose Plan Type </label><div><br></br></div>
                <div class="col-sm-12">
               
                                        {/* <label class="form-label">Select</label> */}
                                        <select class="form-control" name= "plantype" onChange = {this.plan_typeinput} tabindex="-90"required>
                                        <option value="">--category--</option>
                                        {/* {this.state.preCat.map(cat_data =>(
                                             this.state.plantype===cat_data.cat_name?(
                                            <option value={cat_data.cat_name} selected>{cat_data.cat_name}</option>):(
                                              <option value={cat_data.cat_name} >{cat_data.cat_name}</option>
                                            )
                                          
                                        ))} */}
                                        {this.state.plantype_data.map(plantype_data =>(
                                     this.state.plantype === plantype_data.plan_name ?
                                     (  <option value={plantype_data.plan_name} selected>{plantype_data.plan_name}</option> )
                                    :
                                    ( <option value={plantype_data.plan_name}>{plantype_data.plan_name}</option>)       
                          
                                   ))}
                                        </select>
                                    </div>
                                    </div>
              <div ><br></br></div>


                {/* <div className="col-lg-12">
                <label>Meal Time </label><div><br></br></div>
                  <input type="text" className="form-control" value={this.state.meal_time}   name="meal_time" placeholder="meal Time"  onChange={this.meal_timeinput}   autoComplete='off'/>
                </div> */}
                <div>
                    <label>Choose Meal Time <span>&nbsp;&nbsp;</span></label>
                    {this.state.meal_time ==='Lunch'?(
                        <div className="form-check-inline">
                        <input className="form-check-input" type="radio" name="meal_Radios" id="meal_Radios1" defaultValue="Lunch" onChange={this.meal_timeinput}  defaultChecked  />
                        <label className="form-check-label" htmlFor="meal_Radios1">
                        <span>&nbsp;&nbsp;</span>   Lunch 
                        </label>
                      </div>)
                    :(
                      <div className="form-check-inline">
                      <input className="form-check-input" type="radio" name="meal_Radios" id="meal_Radios1" defaultValue="Lunch" onChange={this.meal_timeinput}   />
                      <label className="form-check-label" htmlFor="meal_Radios1">
                      <span>&nbsp;&nbsp;</span>   Lunch 
                      </label>
                    </div>)}
                    {this.state.meal_time==='Dinner'?(
                    <div className="form-check-inline">
                      <input className="form-check-input" type="radio" name="meal_Radios" id="meal_Radios2" onChange={this.meal_timeinput}  defaultValue="Dinner"  defaultChecked  />
                      <label className="form-check-label" htmlFor="meal_Radios2">
                      <span>&nbsp;&nbsp;</span>  Dinner
                      </label>
                    </div>):(

                  <div className="form-check-inline">
                  <input className="form-check-input" type="radio" name="meal_Radios" id="meal_Radios2" onChange={this.meal_timeinput}  defaultValue="Dinner" />
                  <label className="form-check-label" htmlFor="meal_Radios2">
                  <span>&nbsp;&nbsp;</span>  Dinner
                  </label>
                  </div>
                    )}
                    {this.state.meal_time==='Both'?(
                    <div className="form-check-inline">
                      <input className="form-check-input" type="radio" name="meal_Radios" id="meal_Radios2" onChange={this.meal_timeinput}  defaultValue="Both"  defaultChecked  />
                      <label className="form-check-label" htmlFor="meal_Radios2">
                      <span>&nbsp;&nbsp;</span> Both
                      </label>
                    </div>):(

                  <div className="form-check-inline">
                  <input className="form-check-input" type="radio" name="meal_Radios" id="meal_Radios2" onChange={this.meal_timeinput}  defaultValue="Both" />
                  <label className="form-check-label" htmlFor="meal_Radios2">
                  <span>&nbsp;&nbsp;</span> Both
                  </label>
                  </div>


                    )}
                  
                  </div>
                <div ><br></br></div>


                {/* <div className="col-lg-12">
                <label>MealPreference </label><div><br></br></div>
                  <input type="text" className="form-control" value={this.state.mealpreference}   name="MealPreference" placeholder="MealPreference "  onChange={this.meal_prefinput}   autoComplete='off'/>
                </div> */}


                  <div>
                    <label>Choose MealPreference <span>&nbsp;&nbsp;</span></label>
                    {this.state.mealpreference ==='veg'?(
                        <div className="form-check-inline">
                        <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" defaultValue="veg" onChange={this.meal_prefinput}  defaultChecked  />
                        <label className="form-check-label" htmlFor="exampleRadios1">
                        <span>&nbsp;&nbsp;</span>   Veg 
                        </label>
                      </div>)
                    :(
                      <div className="form-check-inline">
                      <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" defaultValue="veg" onChange={this.meal_prefinput}   />
                      <label className="form-check-label" htmlFor="exampleRadios1">
                      <span>&nbsp;&nbsp;</span>   Veg 
                      </label>
                    </div>)}
                    {this.state.mealpreference==='nonveg'?(
                    <div className="form-check-inline">
                      <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" onChange={this.meal_prefinput}  defaultValue="nonveg"  defaultChecked  />
                      <label className="form-check-label" htmlFor="exampleRadios2">
                      <span>&nbsp;&nbsp;</span>  Non Veg
                      </label>
                    </div>):(

                  <div className="form-check-inline">
                  <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" onChange={this.meal_prefinput}  defaultValue="nonveg" />
                  <label className="form-check-label" htmlFor="exampleRadios2">
                  <span>&nbsp;&nbsp;</span>  Non Veg
                  </label>
                  </div>


                    )}
                  
                  </div>
                <div ><br></br></div>

                {/* <div className="col-lg-12">
                <label>Tiffin Type </label><div><br></br></div>
                  <input type="text" className="form-control" value={this.state.tiffintype}   name="tiffin_type"   placeholder="tiffin type" onChange={this.tifin_typeinput}   autoComplete='off'/>
                </div> */}

                  <div>
                    <label>Choose Tiffin Type <span>&nbsp;&nbsp;</span></label>
                    {this.state.tiffintype ==='heatable'?(
                        <div className="form-check-inline">
                        <input className="form-check-input" type="radio" name="tiffintype_Radios" id="tiffintype_Radios1" defaultValue="heatable" onChange={this.tifin_typeinput}  defaultChecked  />
                        <label className="form-check-label" htmlFor="tiffintype_Radios1">
                        <span>&nbsp;&nbsp;</span>   heatable 
                        </label>
                      </div>)
                    :(
                      <div className="form-check-inline">
                      <input className="form-check-input" type="radio" name="tiffintype_Radios" id="tiffintype_Radios1" defaultValue="heatable" onChange={this.tifin_typeinput}   />
                      <label className="form-check-label" htmlFor="tiffintype_Radios1">
                      <span>&nbsp;&nbsp;</span>   heatable 
                      </label>
                    </div>)}
                    {this.state.tiffintype==='nonheatable'?(
                    <div className="form-check-inline">
                      <input className="form-check-input" type="radio" name="tiffintype_Radios" id="tiffintype_Radios2" onChange={this.tifin_typeinput}  defaultValue="nonheatable"  defaultChecked  />
                      <label className="form-check-label" htmlFor="tiffintype_Radios2">
                      <span>&nbsp;&nbsp;</span>  Non heatable
                      </label>
                    </div>):(

                  <div className="form-check-inline">
                  <input className="form-check-input" type="radio" name="tiffintype_Radios" id="tiffintype_Radios2" onChange={this.tifin_typeinput}  defaultValue="nonheatable" />
                  <label className="form-check-label" htmlFor="tiffintype_Radios2">
                  <span>&nbsp;&nbsp;</span>  Non heatable
                  </label>
                  </div>


                    )}
                  
                  </div>
                <div ><br></br></div>

                <div className="col-lg-12">
                <label>Tiffin Price </label><div><br></br></div>
                  <input type="Number" className="form-control" value={this.state.tiffin_price}   name="tiffin_price"   placeholder="tiffin price" onChange={this.tifin_priceinput}   autoComplete='off'/>
                </div>
                <div ><br></br></div>

                <div className="col-lg-12">
                <label>Plan Days </label><div><br></br></div>
                  <input type="Number" className="form-control" value={this.state.plan_days}   name="plan_days"   placeholder="plan days " onChange={this.plan_daysinput}   autoComplete='off'/>
                </div>
                <div ><br></br></div>

                <div className="col-lg-12">
                <label>Plan Price </label><div><br></br></div>
                  <input type="Number" className="form-control" value={this.state.plan_price}   name="plan_price"   placeholder="plan price " onChange={this.plan_priceinput}   autoComplete='off'/>
                </div>
                <div ><br></br></div>

             

              <div className="col-lg-12">
              <label>Paid Amount</label><div><br></br></div>
                <input type="Number" className="form-control" value={this.state.amount}   name="amount"   placeholder="Amount " onChange={this.paid_amountinput}   autoComplete='off'/>
              </div>
              <div ><br></br></div>
              {this.state.meal_time == "Lunch" ?
               <div>
               <div className="col-lg-12"><h5>Lunch User Address</h5>
                <label>Address Line 1</label><div><br></br></div>
                 <input type="text" className="form-control" value={this.state.lunch_addressLine1}   name="lunch_address1"   placeholder="Address Line 1 " onChange={this.lunchAdd1_input}   autoComplete='off'/>
               </div>
 
               <div ><br></br></div>
               
               <div className="col-lg-12">
               <label>Address Line 2</label><div><br></br></div>
                 <input type="text" className="form-control" value={this.state.lunch_addressLine2}   name="lunch_address2"   placeholder="Address Line 2 " onChange={this.lunchAdd2_input}   autoComplete='off'/>
               </div>
               <div ><br></br></div>
               
               <div className="col-lg-12">
               <label>Landmark</label><div><br></br></div>
                 <input type="text" className="form-control" value={this.state.lunch_landmark}   name="lunch_landmark"   placeholder="Landmark " onChange={this.lunchAdd_landmarkinput}   autoComplete='off'/>
               </div>
               <div ><br></br></div>
               
               <div className="col-lg-12">
               <label>House No</label><div><br></br></div>
                 <input type="text" className="form-control" value={this.state.lunch_house_no}   name="lunch_house_no"   placeholder="House No " onChange={this.lunchAddHouse_noinput}   autoComplete='off'/>
               </div>
               </div>
               :<div></div> }

              {this.state.meal_time == "Dinner" ?
                <div>
                <div className="col-lg-12"><h5>Dinner User Address</h5>
                <label>Address Line 1</label><div><br></br></div>
                  <input type="text" className="form-control" value={this.state.dinner_addressLine1}   name="dinner_address1"   placeholder="Address Line 1 " onChange={this.dinnerAdd1_input}   autoComplete='off'/>
                </div>
                <div ><br></br></div>
               
  
                <div className="col-lg-12">
                <label>Address Line 2</label><div><br></br></div>
                  <input type="text" className="form-control" value={this.state.dinner_addressLine2}   name="dinner_address2"   placeholder="Address Line 2 " onChange={this.dinnerAdd2_input}   autoComplete='off'/>
                </div>
                <div ><br></br></div>
               
                <div className="col-lg-12">
                <label>Landmark</label><div><br></br></div>
                  <input type="text" className="form-control" value={this.state.dinner_landmark}   name="dinner_landmark"   placeholder="Landmark " onChange={this.dinnerAdd_landmarkinput}   autoComplete='off'/>
                </div>
                <div ><br></br></div>
               
                <div className="col-lg-12">
                <label>House No</label><div><br></br></div>
                  <input type="text" className="form-control" value={this.state.dinner_house_no}   name="dinner_house_no"   placeholder="House No " onChange={this.dinnerAddHouse_noinput}   autoComplete='off'/>
                </div>
  
                     </div> 
                     :<div></div>
                }
              
              <div ><br></br></div>
              

                   {this.state.meal_time == "Both" ?
                   <div>
                   <div className="col-lg-12"><h5>Lunch User Address</h5>
                    <label>Address Line 1</label><div><br></br></div>
                     <input type="text" className="form-control" value={this.state.lunch_addressLine1}   name="lunch_address1"   placeholder="Address Line 1 " onChange={this.lunchAdd1_input}   autoComplete='off'/>
                   </div>
     
                   <div ><br></br></div>
                   
                   <div className="col-lg-12">
                   <label>Address Line 2</label><div><br></br></div>
                     <input type="text" className="form-control" value={this.state.lunch_addressLine2}   name="lunch_address2"   placeholder="Address Line 2 " onChange={this.lunchAdd2_input}   autoComplete='off'/>
                   </div>
                   <div ><br></br></div>
                   
                   <div className="col-lg-12">
                   <label>Landmark</label><div><br></br></div>
                     <input type="text" className="form-control" value={this.state.lunch_landmark}   name="lunch_landmark"   placeholder="Landmark " onChange={this.lunchAdd_landmarkinput}   autoComplete='off'/>
                   </div>
                   <div ><br></br></div>
                   
                   <div className="col-lg-12">
                   <label>House No</label><div><br></br></div>
                     <input type="text" className="form-control" value={this.state.lunch_house_no}   name="lunch_house_no"   placeholder="House No " onChange={this.lunchAddHouse_noinput}   autoComplete='off'/>
                   </div>
                  
                    <div className="col-lg-12"><h5>Dinner User Address</h5>
                    <label>Address Line 1</label><div><br></br></div>
                      <input type="text" className="form-control" value={this.state.dinner_addressLine1}   name="dinner_address1"   placeholder="Address Line 1 " onChange={this.dinnerAdd1_input}   autoComplete='off'/>
                    </div>
                    <div ><br></br></div>
                   
      
                    <div className="col-lg-12">
                    <label>Address Line 2</label><div><br></br></div>
                      <input type="text" className="form-control" value={this.state.dinner_addressLine2}   name="dinner_address2"   placeholder="Address Line 2 " onChange={this.dinnerAdd2_input}   autoComplete='off'/>
                    </div>
                    <div ><br></br></div>
                   
                    <div className="col-lg-12">
                    <label>Landmark</label><div><br></br></div>
                      <input type="text" className="form-control" value={this.state.dinner_landmark}   name="dinner_landmark"   placeholder="Landmark " onChange={this.dinnerAdd_landmarkinput}   autoComplete='off'/>
                    </div>
                    <div ><br></br></div>
                   
                    <div className="col-lg-12">
                    <label>House No</label><div><br></br></div>
                      <input type="text" className="form-control" value={this.state.dinner_house_no}   name="dinner_house_no"   placeholder="House No " onChange={this.dinnerAddHouse_noinput}   autoComplete='off'/>
                    </div>
      
                     </div> 
                   :null}


{/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ purnima coding ++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/}
{/* Checkbox: <input type="checkbox" id="myCheck" onclick="myFunction()"> */}


<div ><br></br></div>
<div>
  {/* <strong>{displayports}</strong> */}
  <label>Tiffin Repeat on Perticular Day <span>&nbsp;&nbsp;</span></label>
  <div ><br></br></div>

  {this.state.ischeck.map((data,index)=>{

    return (
    <div className="form-check-inline">
          <input type="checkbox" style={{ fontSize: "15px" }} class="form-check-input" id="myCheck1"  onClick={this.inputCheckboxrepeat_on.bind(this, index)}  checked={data.checked} />
          <label className="form-check-label" htmlFor="exampleRadios1">
          <span>&nbsp;&nbsp;</span>   {data.days}
          </label>
      </div>
    )

  })}
 

</div>

<div ><br></br></div>



 {this.state.usr_plan.mealpreference == "veg" ?"": <label>Nonveg Preference Day <span>&nbsp;&nbsp;</span></label> } 
  <div ><br></br></div>
  {this.state.usr_plan.mealpreference == "veg" ?"":
(  
<div>
{this.state.ischeckNonveg.map((data,index)=>{

return (
<div className="form-check-inline">
      <input type="checkbox" style={{ fontSize: "15px" }} class="form-check-input" id="myCheck1"  onClick={this.inputCheckboxNonveg.bind(this, index)}  checked={data.checked} />
      <label className="form-check-label" htmlFor="exampleRadios1">
      <span>&nbsp;&nbsp;</span>   {data.days}
      </label>
  </div>
)

})}

</div> 
)}
{/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++end of purnima's coding++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
              
<div ><br></br></div>

{/* <div className="col-lg-12"> */}


{/* <div className="col-lg-12">
     <label>Choose  Extra Food </label><div><br></br></div>
     <div class="col-sm-12">  
        <select class="form-control" name= "category" onChange = {this.extraFood_input} tabindex="-90"required>
        <option value="">--Extra Item--</option>
        {this.state.preextraFood.map(item_data =>(
        this.state.item_name === item_data.item_name?(
       <option value={item_data.item_name} selected>{item_data.item_name}</option>):(
         <option value={item_data.item_name} >{item_data.item_name}</option>
                                            )
       ))}
          </select>
     </div>
 </div> */}

<b><label>Extra Item</label></b>  : &nbsp;&nbsp;<br></br>
{/* {this.state.extraItem_arr.map(plan=>
 <div className="col-lg-12">

    Item Name:<input type = "text" className="form-control" onChange={this.extraFood_input} value={plan.item_name}  id ="ItemName"/>
    <div ><br></br></div>
    item Quantity : <input type = "text" className="form-control" onChange={this.extraFood_input} value={plan.item_qty} id="itemQty"/>
    <div ><br></br></div>
    Price :  <input type = "text" className="form-control" onChange={this.extraFood_input} value={plan.item_price} id="itemPrice"/>
    <div ><br></br></div>

</div>
)} */}
{/* new coding for add delete row in table with in put field */}
              <table className="table table-bordered table-hover" id="tab_logic" >
                <thead>
                  <tr>
                    
                    <th className="text-center"> S.No </th>
                    <th className="text-center"> Item Name </th>
                    <th className="text-center"> Quantity </th>
                    <th className="text-center"> Per Plate Price </th>
                    <th className="text-center"> Total Price </th>
                    <th className="text-center"> Action </th>

                    <th />
                  </tr>
                </thead>
                <tbody>
                  {console.log(this.state.i=0)}
                  {this.state.extraItem_arr.map(item_data =>(
                 <tr >
                  <th scope="row" style={{ verticalAlign: "middle" }} >{this.state.i = this.state.i +1 } </th>
                  <td>
                    <input
                      type="text"
                      name="item_name"
                      value={item_data.item_name}
                      // onChange={this.handleChange()}
                      className="form-control"
                      defaultValue={ this.state.item_name}
                    />
                    
                  </td>
                  <td>
                    <input
                      type="text"
                      name="item_qty"
                      value={item_data.item_qyt}
                      // onChange={this.handleChange()}
                      className="form-control"
                      defaultValue={item_data.item_qyt}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="item_price"
                      value={item_data.item_price}
                      // onChange={this.handleChange()}
                      className="form-control"
                      defaultValue={this.state.item_price}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="item_totalPrice"
                      value={(item_data.total_price)}
                      // onChange={this.handleChange()}
                      className="form-control"
                      defaultValue={item_data.total_price}
                    />
                  </td>
                  <td style={{ verticalAlign: "middle" }}>
                  <button onClick={() => { if(window.confirm('Do you want to delete extra item?')){this.handledelete(item_data.item_name)}}}type="button" className="btn btn-danger valign-middle">
                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">

                  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                  <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                  </svg>
                </button>


            </td>
                </tr>
                
              ))}
              {this.createUIForExtra_item()}

                {/* {console.log(this.state.i=0)}
                {this.state.extraItem_arr.map(item_data =>(
                <tr>
                  <th scope="row" style={{ verticalAlign: "middle" }} >{this.state.i = this.state.i +1 } </th>
                  <td> {item_data.item_name}</td>
                  <td> {item_data.item_qty}</td>
                  <td> {item_data.item_price}</td>
                  <td> {(item_data.item_qty)*(item_data.item_price)}</td>
                  

                  <td style={{ verticalAlign: "middle" }}>
                    
            <button onClick={() => { if(window.confirm('Do you want to delete extra item?')){this.handledelete(item_data.item_name)}}}type="button" className="btn btn-danger valign-middle"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
              <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
              <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
            </svg></button>


            </td>
              
                </tr>
                ))} */}
                </tbody>
              </table>

              <button onClick={this.handleAddRow} className="btn btn-primary">
                Add Row
              </button>
              <button onClick={this.handleRemoveRow} className="btn btn-danger float-right" > Delete Last Row </button>
{/* End of new coding  */}

{/* <table className="table table-striped">
  <thead>
    <tr>
      <th scope="col">S.No</th>
      <th scope="col">Item Name</th>
      <th scope="col">Quantity </th>
      <th scope="col">Per Plate Price</th>
      <th scope="col">Total Price </th>
      <th scope="col">Action</th>
    
    </tr>
  </thead>
  <tbody>
  {console.log(this.state.i=0)}
    {this.state.extraItem_arr.map(item_data =>(
    <tr>
      <th scope="row" style={{ verticalAlign: "middle" }} >{this.state.i = this.state.i +1 } </th>
      <td> {item_data.item_name}</td>
      <td> {item_data.item_qty}</td>
      <td> {item_data.item_price}</td>
      <td> {(item_data.item_qty)*(item_data.item_price)}</td>
      

      <td style={{ verticalAlign: "middle" }}>
        
 <button onClick={() => { if(window.confirm('Do you want to delete extra item?')){this.handledelete(item_data.item_name)}}}type="button" className="btn btn-danger valign-middle"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
  <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
</svg></button>


</td>
  
    </tr>
    ))}
  
  </tbody>
</table> */}


<div ><br></br></div>
<div className="col-lg-12">

<label>Previous Unlike Foods</label><div><br></br></div>
                  {this.state.unlike_arr.map(function (value, index, array) {
                                         
                                          return ( <div className="col-sm-12">
                                          <input type="text" className="form-control no-resize"   id={index+"_id"} defaultValue={value} /><div><br></br></div>
                                        </div>)
                                        })
                                      }

{this.state.unlike_arr.length == 5?"":this.createUI()}
{/* {this.createUI()}  */}
<button type="button" className="btn btn-primary"  onClick={this.addClick.bind(this)} >Add Unlike foods</button>  <span>&nbsp;&nbsp;</span>
</div>

<div><br></br></div>

<button type="button" onClick={() => { if (window.confirm('Do you want to update?')) {this.handleupdate(this.state.userid)  } }} className="btn btn-primary" >Update  </button>
<div ><br></br></div>
</form>
                
                </>
                 {/* ))}          */}
             </div>
           </div>
         </div>
       </div>
    
     </div> {/* .row end */}
   </div>
 </div>
 {/* Body: Footer */}
 <div className="body-footer d-flex">
   <div className="container">
     <div className="col-12">
       <div className="card mb-3">
         <div className="card-body">
           <div className="row justify-content-between align-items-center">
             <div className="col">
               <p className="font-size-sm mb-0">© Tifinco <span className="d-none d-sm-inline-block"> Prixso Product.</span></p>
             </div>
             <div className="col-auto">
               <ul className="list-inline d-flex justify-content-end mb-0">
                 <li className="list-inline-item"><a className="list-separator-link" href="">About</a></li>
                 <li className="list-inline-item"><a className="list-separator-link" href="" target="_blank">License</a></li>
               </ul>
             </div>
           </div>
         </div>
       </div>
     </div>
   </div>
 </div>
</div>
<Footer/>
     </>
    )
  }
}

export default ViewOneCustProfile



