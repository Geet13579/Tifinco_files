import React, { Component } from 'react'
import Header from  '../DeliveryHeader';
import Footer from '../DeliveryFooter'
import axios from 'axios';
import { Route, Switch, Link } from 'react-router-dom';
import ReactLoading from "react-loading";
import Popup from 'reactjs-popup';
import swal from 'sweetalert';
import 'reactjs-popup/dist/index.css';
import {GET_PLANINFO,GET_TIFFINS, GET_USERDATA, INSERT_TIFFIN_ALLOCATED_DATA} from '../../links/DeliveryLinks';
export class add_tiffin extends Component 
{

 state =
 {
  user_list:[],
  tiffin_status:false,
  plantype:'',
  user_name :'',
  user_mealpref:'',
  user_tiffin_type :'',
  planinfo :[],
  tiffininfo : [],
  values :[],
  items :[],
  quantity :[],
  tiffin_no:'',
  user_id :'',
  specificplan:'',
  speplan:'',
  My_sabji1:'',
  My_sabji2:'',
  length:'',
  extra_item_Length:'',
  invalidUser:'',
  i:0,
  j:0,
  item_name:[],
  item_qty :[],
  final_extraItem :'',
  // t_values:[],
  extra_item:[],
  // newP:[],
  // image_array:[],
  extraitem:[],
  // extra_item :[{ id: Math.random(),item_name:'',item_qty:'',item_price:0 }],
 }

 componentDidMount()
  {
 

        axios.post(GET_PLANINFO, {userid: sessionStorage.getItem('userid')}, {
          headers: { 'Content-Type': 'application/json' , 'Accept': 'application/json'},
          })
          .then(res => {
            const planinfo = res.data;
          
            this.setState({ planinfo :planinfo});
            // this.state.planinfo
            console.log( this.state.planinfo);
                  // for(var i = 1; i=this.state.planinfo.length;i++)
                  // {
            console.log(this.state.planinfo.map(data =>(data.plan_vegCount)));
        
                  // }
                })

                axios.post(GET_TIFFINS, {userid: sessionStorage.getItem('userid')}, {
          headers: { 'Content-Type': 'application/json' , 'Accept': 'application/json'},
          })
          .then(res => {
            const tiffininfo = res.data;
          
            this.setState({ tiffininfo :tiffininfo});
            // this.state.tiffininfo
            console.log( this.state.tiffininfo);
                  // for(var i = 1; i=this.state.tiffininfo.length;i++)
                  // {
            console.log(this.state.tiffininfo.map(data =>(data.tiffin_no)));
        
                  // }
                })
                var today = new Date();
               
                if(today.getHours()>15&&today.getHours()<18)
                {
                    console.log(today.getHours());
                    axios.post("https://tifinco.com:5000/admin/get_userplaninfo", {userid: sessionStorage.getItem('userid')}, {
                    headers: { 'Content-Type': 'application/json' , 'Accept': 'application/json'},
                    })
                    .then(res => {
                      const mydata = res.data;
                      console.log( mydata);
              
                })
              }
   }
    
  
  
   handleItem= (i,event )=>
   {
    let items = [...this.state.items];
    items[i] = event.target.value;
    this.setState({ items });

    // if(this.state.user_list[i]["plantype"]===this.state.plantype)
    // {
    //   var length = this.state.user_list[i]["extra_item"].length;
    // var length = this.state.extra_item_Length;
    //   for(var j = 0; j< length;j++)
    //   {
    //      this.setState(prevState => ({ values: [...prevState.values, '']})) ; 
    //      console.log("miss purnima");
    //   }
    // }   
  }
   createUIExtraItem()
  {
  //  console.log("-----------------------------------");
  //   return this.state.values.map((el, i) => 
  //       <div key={i}>
  //       <ul style={{ listStyle: 'none' }}><li>Extra Item :{i+1} <input class="form-control"  type="text" id ="extra_item" value={el||''} onChange={this.handleItem.bind(this, i)} autoComplete='off' required /></li>
  //       {/* <li>Quantity :{i+1} <input class="form-control"  type="text" id ="qty" value={el||''} onChange={this.handleItem.bind(this, i)} autoComplete='off' required /></li> */}
  //       </ul> 
  //        {/* <input type='button' value='remove' onClick={this.removeClick.bind(this, i)}/> */}
  //       </div>          
  //   )
   }
  


   getuserdata=(event)=>
   {
 
    var plantype = document.getElementById("plantype_id").value;
    var sendId = 
    {
      plantype : plantype,
      userid: sessionStorage.getItem('userid'),
    }
           
            console.log(plantype);
                
                    axios.post(GET_USERDATA,sendId, {
                    headers: { 'Content-Type': 'application/json' , 'Accept': 'application/json'},
                  })
                  .then(res => {
                    const user_list = res.data;
                    console.log(user_list);
                      // user_list.map(d=>
                        
                      //     this.setState({
                           
                      //       extra_item:d.extra_item,
                      //     }),
                     
                      //  
                    //   )
                      console.log(this.state.item_name);
                      console.log(this.state.item_qty);
                  
                     this.setState({ user_list :user_list, plantype:plantype,});
             
                     document.getElementById("user_id").focus();  

               
                          })

                          // this.setState({plantype:plantype})    
                 
          }
    
 onfocus_gettiffin_data = ()=>
{
 var specificplan = this.state.user_list.length;
 console.log(this.state.plantype);
 console.log(specificplan);
 console.log(this.state.user_list);

 
                    
  for( var i =0 ; i<this.state.user_list.length ; i++)
  {
    console.log(this.state.user_list[i]["plantype"]);
    console.log(this.state.plantype);
    console.log("loop");


    if(this.state.user_list[i]["plantype"]===this.state.plantype)
    {
      console.log("inside if");
    
        // var length= parseInt(this.state.user_list[i]["plan_vegCount"]);
          // console.log(length);
          //  for(var j = 0; j< length;j++)
          //  {
            console.log("connected ");
            var user_name = this.state.user_list[i]["name"];
            var user_tiffin_type = this.state.user_list[i]["tiffintype"]; 
            var user_mealpref = this.state.user_list[i]["mealpreference"];
            var user_id = this.state.user_list[i]["userid"];
            var extra_item_Length = this.state.user_list[i]["extra_item"].length;
            var extraitem =  this.state.user_list[i]["extra_item"];
            console.log(extraitem);
            console.log(extra_item_Length);
            console.log( user_id);
            // this.setState(prevState => ({ values: [...prevState.values, '']})) ; 
            //   console.log("miss nidhi");
          
          //  }

          this.setState({user_name :user_name ,  user_tiffin_type:  user_tiffin_type, user_mealpref: user_mealpref, user_id:user_id , specificplan:specificplan, extra_item_Length: extra_item_Length , extraitem:extraitem});
          document.getElementById("tiffin_no").focus();  
          
           break;

    }
   
    
  }
  console.log(extraitem);

}
tiffin_no_allocation= ()=>
{

  console.log(this.state.planinfo);
  if(this.state.tiffin_status == false )
  {
    for( var i =0 ; i<this.state.planinfo.length ; i++)
    {
      if(this.state.planinfo[i]["plan_name"]===this.state.plantype)
      {
          var length= parseInt(this.state.planinfo[i]["plan_vegCount"]);
          console.log(length);
           for(var j = 0; j< length;j++)
           {
              this.setState(prevState => ({ values: [...prevState.values, '']})) ; 
            //  this.setState(prevState => ({ items: [...prevState.items, '']})) ;
              console.log("miss nidhi");
           }
           this.setState({length:length});

      }
    }
    
  }
  else
   console.log("tiffin status is true, Invalid tiffin");
   
  // document.getElementById("sabji").focus(); 
  // document.getElementById("tiffin_no").focus(); 
  
}

   handleSabji= (i,event )=>
  {
    // let values = [...this.state.values];

    // values[i] = event.target.value;
    // var sabji1 = values[0].slice(11,-2);
    // var sabji2 = values[1].slice(11,-2);
   

    // this.setState({values });
 
        let values = [...this.state.values];
        values[i] = event.target.value;
        this.setState({ values });
   }

 createUI()
  {
    return this.state.values.map((el, i) => 
        <div key={i}>
        <ul style={{ listStyle: 'none' }}><li>Sabji :{i+1} <input class="form-control"  type="text" id ="sabji" value={el||''} onChange={this.handleSabji.bind(this, i)} autoComplete='off' required /></li></ul> 
         {/* <input type='button' value='remove' onClick={this.removeClick.bind(this, i)}/> */}
        </div>          
    )
 }

// createUIExtra()
//   {
//     return this.state.items.map((el, i) => 
//         <div key={i}>
//         <ul style={{ listStyle: 'none' }}><li>Extra Item :{i+1} <input class="form-control"  type="text" id ="extra_item" value={el||''} onChange={this.handleExtra.bind(this, i)} autoComplete='off' required /></li></ul> 
//          {/* <input type='button' value='remove' onClick={this.removeClick.bind(this, i)}/> */}
//         </div>          
//     )
//  }
//  handleExtra= (i,event )=>
//  {
//        let items = [...this.state.items];
//        items[i] = event.target.value;
//        this.setState({ items });
//   }





selectData = (event) =>
{
    // console.log(event.target.value);
    // console.log("***************************");     coded byyuvraj sir

        var tiffin_no = document.getElementById("tiffin_no").value
        var length = tiffin_no.length;
        console.log(tiffin_no);
        console.log(length);
  
        var meal_pref = document.getElementById("mealpref_id").value;
        var tiffin_type = document.getElementById("tiffintype_id").value;

            if(meal_pref[0] =="v" && tiffin_no[0] =="V")
            {  
                  if(tiffin_type[0]=="h" && tiffin_no[1] =="H")
                  {
                        console.log("vegheatable");
                        this.setState({tiffin_status:false,});
                        
                  }
                  else if (tiffin_type[0] == "n" && tiffin_no[1] =="N")
                  {
                      console.log("vegnonheatable");
                       this.setState({tiffin_status:false,});
                        
                  }
                  else
                  this.setState({tiffin_status:true,});
                  
            }
            else if (meal_pref[0]== "n" && tiffin_no[0] =="N")
            {
                   if(tiffin_type[0]=="h" && tiffin_no[2] =="H")
                    {
                      console.log("nonvegheatable")
                      this.setState({tiffin_status:false,});
                      
                    }
                   else if (tiffin_type[0]== "n" && tiffin_no[2] =="N")
                   {
                      console.log("nonvegnonheatable")
                      this.setState({tiffin_status:false,});
                      
                   }
                   else
                   this.setState({tiffin_status:true,});      
             }
             else
             this.setState({tiffin_status:true})
              // return false;
 
          
}

 showAnswer=(a)=>
 {
    // let items = [...this.state.items];
    // let quantity= [...this.state.quantity];

    // items[a] = document.getElementById("extra_item"+a).value;
    // quantity[a] = document.getElementById("qty"+a).value;

    // console.log(items);
    // console.log(quantity);

    // this.setState({ items, quantity });


           for(var p = 0;p<this.state.user_list.length;p++)
           {
             if(this.state.user_list[p]["plantype"] == this.state.plantype ){
              var my_extraitem = this.state.user_list[p]["extra_item"];
              console.log(my_extraitem);
            
             }
            //  this.setState({my_extraitem:my_extraitem});
             break;
            
           }

              //  for( var a =0 ; a< my_extraitem.length;a++)
              //  {
              //           var item_name = my_extraitem[a]["item_name"];
              //           var item_qty = my_extraitem[a]["item_qty"];

              //           this.setState({items:item_name,
              //           quantity:item_qty })
              //           // console.log(this.state.item_name[a]);
              //           // console.log(this.state.item_qty[a]);
              //   }

          
           
}
onTodoChange(value){
  this.setState({
       name: value
  });
}

// showAnswer = (i, e) => 
// {
  //   alert("call")
  // let extra_item = [...this.state.extra_item];
  // alert(extra_item)
//   extra_item[i] = event.target.extra_item;
//   this.setState({ extra_item });
  
// alert(i)
// // console.log(extra_item)
// const user_list = this.state.user_list.map(data => {
//   data.extra_item.map((d,index)=>(
 
//  this.state.extra_item=d.item_name,
// (i==index)? this.setState([...this.state.extra_item]): console.log(index)

//   ))
// })
// let extra_item = [...this.state.extra_item];
// extra_item[i] = e.target.value;
// this.setState({ extra_item });


  // const { value, name } = e.target;

  // const newState = [...this.state.extra_item];
  // newState[i] = {
  //   ...newState[i],
  //   [name]: value
  // };

  // console.log(newState);
  // this.setState(newState);


// (i==0)? 
// alert( this.state.extra_item)

// alert( this.state.extra_item)
// let extra_item = [...this.state.extra_item];
//   extra_item[i] = event.target.extra_item;
//   this.setState({extra_item });
// // alert({extra_item})

// console.log({extra_item})
// this.setState([...this.state.extra_item]);

// console.log(this.state.extra_item)

  // const extra_item = this.state.extra_item.map(i => {
 
  //   if(id != i.id) 
  //   {
  //     // i.itemImgValidation = 0;
  //       if(event.target.extra_item ==='item_name')
  //       {
  //          console.log("Oops its going to wrong!!!!!!!!!!");
  //       }
  //       else
  //       {

  //         i[event.target.name] = event.target.value
  //       }

  //   }
  //   return i;
  // })
  // console.log(extra_item);
  // // console.log(i.id);
  // console.log("My id is "+_id);

  // this.setState({ extra_item });





  // this.setState({ extra_item: event.target.value});
// }

handleSubmit = event => 
 {
      event.preventDefault();
      // if(event.key === 'Enter'){console.log(event.key);}
      
      // if(document.getElementById("qty").value==null ||document.getElementById("qty").value==""||document.getElementById("qty").value==undefined)
      // {
          // if(total_values.length == 0||total_values == null || total_values == "" || total_values == undefined)
          //      return false;

      // }

      // if(total_values.length == 0||total_values == null || total_values == "" || total_values == undefined)
      //          return false;
console.log(this.state.extra_item_Length);
    
      if(this.state.extra_item_Length == 0)
      {
        var total_item = "";
        var total_qty = "";
      }
      else
      {
        // var total_item = this.state.items.reduce((a, b) => a +"@"+ b);
        // var total_qty = this.state.quantity.reduce((a, b) => a +"@"+ b);
        console.log(this.state.extraitem.length);

        for(var i =0;i<this.state.extraitem.length;i++){
          // let items = [...this.state.item_name];
          // let quantity= [...this.state.item_qty];
          // var items = [];
          var item_name = this.state.extraitem[i]["item_name"] + "-" + this.state.extraitem[i]["item_qty"];
        console.log(this.state.items.push(item_name));
          // var item_qty = this.state.extraitem[i]["item_qty"];
          // console.log(this.state.quantity.push(item_qty));
          // console.log(item_name);
          // console.log(item_qty);
        }
        
      }

      var temp1 = this.state.values[0].length;
      console.log(this.state.values[0].length);
      if(this.state.length == 2)
      {
        var sabji1 = this.state.values[0];
        var sabji2 = this.state.values[1];
  
        console.log(sabji1);
        console.log(sabji2);
  
        var total_values = [sabji1, sabji2];
      }
      else
      {
        var sabji1 = this.state.values[0];
    
        console.log(sabji1);

        var total_values = [sabji1];
      }
              
            if(this.state.tiffin_status == true)
            {
              alert("Please Select Valid Tiffin");
              return false;
            }
      
        //     if(this.state.user_status == true){
        //       alert("Please Select Valid User");
        //       return false;
        //     }
            this.setState({
                Load :true,
                // sabji1:sabji1,
                // sabji2:sabji2
                });
                


                var formdata =
                 {
                  userid : this.state.user_id,
                  name : this.state.user_name,
                  tiffin_no : document.getElementById('tiffin_no').value,
                  meal_pref : document.getElementById("mealpref_id").value,
                  tiffintype : document.getElementById("tiffintype_id").value,
                  extra_item : this.state.items,
                  // quantity :this.state.quantity,
                  sabji : total_values,
                  // sabji : this.state.values,
                  plantype : this.state.plantype,
                  // userid: sessionStorage.getItem('userid')
                  
                }

               console.log(formdata);
                // document.getElementById("extra_item").focus() 
               
      
        try{
              axios.post(INSERT_TIFFIN_ALLOCATED_DATA, formdata , {
              headers:{'Content-Type': 'application/json' },
              onUploadProgress: data => {
            
              this.setState({
                progress: Math.round((100 * data.loaded) / data.total)
      
              });
              },
              })
              .then(res => {
                 console.log(res.status);
                  console.log(res.data);
                
                  if(res.data.msg=='success')
                  {         
                   console.log("success");
                     swal({
                      // title: "Good job",
                      text: " successfully inserted !",
                      icon: "success",
                      // content: 'You can place <b>anything</b> <i>you</i> want in here.',
                      buttons: [
                      'NO',
                      'YES'
                    ],
                  }).then(function(isConfirm)
                   {
                      if (isConfirm)
                      {
                      window.location.reload();
                      } 
                      else
                      {
                        //if no clicked => do something else
                      }

                      
                      //   if (this.state.user_list) {
                       
                      // <ol>
                      //   <li>NAME : <b>{this.state.name}</b></li>
                      //   <li>MealPreference : <b>{this.state.meal_pref}</b></li>
                      //   <li>Tiffin Type : <b>{this.state.tiffin_type}</b></li>
                      //   <li>Tiffin No : <b>{this}</b></li>
                      // </ol>
                      //   }
                     
                   });
                    // alert("Data Saved");
                    //  window.location.reload();                                                
      
                  }
                  // else if(res.data.msg=='exist')
                  // {
                  //   this.setState({ invalidUser: '' });
                  //   alert("User Exists");
                  //   window.location.reload();
                  // }
      
                  this.setState({
                    Load :false,
                    });
              
              })
            }  
            catch(error) 
            {
            
                    console.log(error)
                    this.setState({
                        Load :false,
                        });
                    console.log("internal server error");
            }
      
  }

  sabjiChange()
  {
  //   var sabji1=  document.getElementById('sabji1').value;
  //   var sabji2= document.getElementById('sabji2').value;
  //   var My_sabji1 = sabji1.slice(11,-2);
  //   console.log( My_sabji1);
  //   var My_sabji2 = sabji2.slice(11,-2);
  //   console.log( My_sabji2);

  //   this.setState({My_sabji1:My_sabji1, My_sabji2:My_sabji2 })
  }
  
  render() {
    console.log(this.state.items);
    console.log(this.state.quantity);
    let Xmas95 = new Date();
    let hours = Xmas95.getHours();


    var today = new Date();

    // console.log(today.getDay()+"day");
  // console.log(this.state.user_id);

    var days = today.getDay();
    return (
      <div>
{console.log(this.state.tiffin_status)}
        {/* onLoad={() => this.resetFunction()} */}
           {/* {alert(days)} */}
          <Header/>
      {/* main body area */}
<div className="main px-lg-5 px-md-2"  >

  {/* Body: Header */}
  <div className="body-header d-flex text-light border-top py-3">
    {/* {console.log(this.state.percentage)} */}
    <div className="container">
      <div className="row mb-3">
        <div className="col">
          <ol className="breadcrumb bg-transparent mb-0">
            <li className="breadcrumb-item"><a className="text-secondary" href="/">Home</a></li>
            <li className="breadcrumb-item active" aria-current="page">Allocate Tiffin To Users</li>
          </ol>
        </div>
        <div className="col-auto">
          <div className="d-md-flex d-none justify-content-lg-end align-items-center">
           
          </div>
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col-auto">
          <h1 className="fs-4 mt-1 mb-0">Allocate Tiffin </h1>
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
              
           
                <form onSubmit={this.handleSubmit} encType='multipart/form-data'  id ="formdata">
                  
{/*  { if (window.confirm('Do you want to insert?')){ this.handleSubmit()} } */}
{/* onSubmit={()=>window.confirm('Are you sure?')} */}
{/* onClick={() => { if (window.confirm('Do you want to insert?')){ this.handleSubmit()} }} */}

                  {/* <div className="row g-4">
                  <lable><b>Select Plan Type</b></lable>
                    <select className="form-control form-control-lg"  name="mealpreference"  tabIndex={-88} id="meal_pref_id"  required>
                    {this.state.user_list.map(userlist =>
                              <option value={userlist.userid}>{userlist.plantype}</option> //  ( <option value={data._id}>{data.userid}</option>)
                            )}
                    </select>
                    </div> */}

                       <div className="row g-4">
                          <lable><b>Select Plan Type</b></lable>
                          <select className="form-control form-control-lg"  name="plantype" onChange ={this.getuserdata} tabIndex={-88} id='plantype_id'  >
                               <option >------Select Plan Type------</option>
                               {this.state.planinfo.map(plan =>
                              <option value={plan.plan_name}>{plan.plan_name}</option> //  ( <option value={data._id}>{data.userid}</option>)
                            )}
                                {/* <option defaultValue="Eco">Eco</option> 
                                <option defaultValue = "Premium">Premium</option> 
                                <option defaultValue = "Executive">Executive</option>  */}
                         
                          </select>
                        </div>

                    <div ><br></br></div>
                   {/* {
                    console.log( "jk"),
                   console.log(this.state.plantype)} */}

                   <div className="col-sm-12">
                   <lable><b>User Name</b></lable>
                          <input class="form-control"  value = {this.state.user_name } type="text" name = "validate_user" tabIndex={-88} id="user_id" onFocus={this.onfocus_gettiffin_data} autoComplete='off' />
                   </div>
                   {/* {this.state.user_list.map(d=>d.plantype==this.state.plantype && this.state.user_list.length == 0 ? ("User Not Available"):(null))} */}
                   {this.state.user_list.length == 0? ("User Not Available"):(null)}
                    

                    <div ><br></br></div>

                    <div className="row g-4">
                        <lable><b>MealPreference</b></lable>
                        <input class="form-control" type="text" value={ this.state.user_mealpref} tabIndex={-88} name="mealpref_id"  id="mealpref_id"  autoComplete='off' />  
                    </div>

                    <div ><br></br></div>

                    <div className="row g-4">
                        <lable><b>Tiffin Type</b></lable>
                        <input class="form-control" type="text" value = {this.state.user_tiffin_type }  tabIndex={-88} name="tiffintype_id"  id="tiffintype_id" autoComplete='off' />  
                    </div>

                    <div ><br></br></div>

                  <div className="row g-4">
                      <lable><b>Tiffin Number</b></lable>
                      <input class="form-control" type="text"  tabIndex={-88} name="tiffin_no"  id="tiffin_no" onChange = {this.selectData}  onFocus = {this.tiffin_no_allocation} autoComplete='off' />  
                  </div>
{/*  onFocus = {this.tiffin_no_allocation} */}
                  {this.state.tiffininfo.length == 0 ?("Tiffin Not Available"):this.state.tiffin_status==true?("Invalid Tiffin"):(null)}<br></br>
                  {/* {this.state.tiffininfo.map(d=>d.tiffin_cat == this.state.user_mealpref && d.tiffin_type == this.state.user_tiffin_type)?(null):("Invalid Tiffin")} */}
                   {/* {this.state.tiffin_status==true?("Invalid Tiffin"):("")}             */}
                    
                  {/* (this.state.tiffininfo.map(t=>(t.tiffin_no === this.state.tiffin_no ))?("valid Tiffin"):("Invalid Tiffin")) */}
                  <div><br></br></div>

                       <div>
                   
                        
                       &nbsp; &nbsp; &nbsp; &nbsp; {this.state.user_list.map(data=>(data.userid== this.state.user_id?(<h6> <u>User Plan Detail</u></h6>):("")))} 
                       {this.state.user_list.map(data =>((data.userid== this.state.user_id?(
                           

                        <ol  >
                        
                        {data.mealpreference =="nonveg"?(<li>NonVeg Preference days : 
                         <b> {data.nonveg_pre_d.m == "1"&&days ==1 ? "Yes":data.nonveg_pre_d.t == "1"&&days ==2 ? "Yes":data.nonveg_pre_d.w == "1"&&days ==3 ? "Yes":
                          data.nonveg_pre_d.th == "1"&&days ==4 ? "Yes":data.nonveg_pre_d.fr == "1"&&days ==5 ? "Yes":data.nonveg_pre_d.sat == "1"&&days ==6 ? "Yes":
                          data.nonveg_pre_d.sun == "1"&&days ==0 ? "Yes":"No"
                         
                           }</b>
                           </li>):("")}
                        <div><br></br></div>
                       
                           <li>Unlike foods :<b>{data.unlike_foods+ ' ,'
                          //  .map((inner_data)=>(  inner_data.veg+ ' ,' ))
                           } </b></li>

                           <div><br></br></div>
                        {data.extra_item.length>0 ? <li>Extra Item Name:<b>{data.extra_item.map(d=>d.item_name+ ' ,' )}</b> </li>:null} 
                        {/* <li>Extra Item Name:<b>{data.extra_item.map(d=>d.item_name )
                          //  .map((inner_data)=>(  inner_data.veg+ ' ,' ))
                           }</b> </li> */}
                             <div><br></br></div>
                             {data.extra_item.length>0 ?<li>Extra Item Quantity:<b>{data.extra_item.map(d=>d.item_qty+ ' ,')} </b> </li>  :null}
                            
                             {/* <li>Extra Item Quantity:<b>{data.extra_item.map(d=>d.item_qty) 
                          //  .map((inner_data)=>(  inner_data.veg+ ' ,' ))
                           } </b></li> */}
                           


                       </ol>
                       ):" ")))} 
                        </div>




                
                                        
                      {this.state.user_list.length == 0 ? null:<h5><b>Today's {this.state.plantype } Meal</b></h5>}  
                       {this.createUI()}    

            
                       {/* {this.createUIExtra()} */}
                       
                       {/* <li> Sabji 1 :<input class="form-control" name = "sabji1" type="text" id ="sabji1"  onChange= {this.handleSubmit()} autoComplete='off'  /></li> <div><br></br></div> 
                       <li> Sabji 2:<input class="form-control" name = "sabji2" type="text" id ="sabji2"   onChange= {this.handleSubmit()} autoComplete='off'  /></li> <div><br></br></div>  */}
                       
                       {/* {this.createUI_ExtraItem()}    (this, row.id) */}
                       
                       <ul style={{ listStyle: 'none' }}>

                       {console.log(this.state.i=0)}
                       {console.log(this.state.j=0)}

                        <div className="col-lg-12">
                     
                  {/* <input type="text" className="form-control"   name="discount_offer" placeholder="Offer Discount"     autoComplete='off'/> */}
                      
                </div>
                <div ><br></br></div>

{/* <input type="text" className="form-control"value={ this.state.extra_item} /> */}

                      {this.state.user_list.map((data) =>((data.extra_item.length>0 && data.userid == this.state.user_id )? 
                      (data.extra_item.map((d,i)=>(<div>
                      <li> Extra Item{this.state.i=this.state.i+1} :<input class="form-control" type="text" key={i} value ={ d.item_name} 
                      onChange={()=>{this.showAnswer(i)}} /> </li>
                     
                      <li> Quantity{this.state.j=this.state.j+1} :<input class="form-control" type="text" id ={"qty"+i} key={i} 
                      onChange={()=>{this.showAnswer(i)}} value={d.item_qty} required  /></li>
                      <div><br></br></div>
                      </div>)
                       ))  :
                        (<input class="form-control"  type="hidden" id ="extra_item" value= {null}    />)
                        ))} 
                        
                         <div><br></br></div> 
                     </ul>   

               
                      <div><br></br></div>
                    
                      <div><br></br></div>

                        {/* onClick={() => { if (window.confirm('Do you want to insert?')){ this.handleSubmit()} }}  */}
                            <div className="col-sm-12">
                               <button type="submit" className="btn btn-primary" >Submit</button>
                               <a href="" className="btn btn-primary" > Reset</a>
                             
                             </div>
                </form>
                
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

      </div>
    )
  }
}

export default add_tiffin




















































































//   state = 
//   {
//     name:'',  
//     users: [],
//       i:0,
//       repeat_on:[],
//       nonveg_pre_d:[],
//       unlike_veg:[],
//       unlike_nonveg:[],
//       tiffintype_data :[],
//       Load: false,
//       progress: '',
//       meal_pref_id:'',
//       tiffin: [],
//       pre_repeat_on :[],
//       nonveg_pre_day :[],
//       pre_unlike_veg :[],
//       pre_unlike_veg :[],
//       date_day :'',
//       meal_pref :'',
//       tiffintype:'',
//       validtiffin:'',
//       userid:'',
//       menus : [],
//       values : [],
//       planinfo :[],
//       tiffin_status:false,
//       user_status :false,
//       tiffin_data:[],
//       user_list :[],
//       food_menu:[{id: Math.random(),food_item:''}],
//       todayMeal: '',
//       today_meal_id:'',
//       sabji_1:'',
//       sabji_2:'',
//       sabji_3:'',
//       final_sabji:'',
//       selected_plan:'',
//       plan_name:'',
//       //  rand: '',
//       //  NAME:''
//       // prevState :[],

//       // timer = ''
//   }

//   componentDidMount()
//   {
//     axios.post("https://tifinco.com:5000/admin/get_planInfo", {userid: sessionStorage.getItem('userid')}, {
//       headers: { 'Content-Type': 'application/json' , 'Accept': 'application/json'},
//       })
//       .then(res => {
//         const planinfo = res.data;
       
//         this.setState({ planinfo :planinfo});
//         // this.state.planinfo
//         console.log( this.state.planinfo);
//               // for(var i = 1; i=this.state.planinfo.length;i++)
//               // {
//         console.log(this.state.planinfo.map(data =>(data.plan_vegCount)));
    
//               // }
//             })

//             var today = new Date();

//             // if(today.getHours()>15&&today.getHours()<18)
//             // {
//                console.log(today.getHours());
//               axios.post("https://tifinco.com:5000/admin/get_userplaninfo", {userid: sessionStorage.getItem('userid')}, {
//                 headers: { 'Content-Type': 'application/json' , 'Accept': 'application/json'},
//                 })
//                 .then(res => {
//                   const mydata = res.data;
//                   console.log( mydata);
                
                 
                
                
//                 })
//          //   }
  
  
//   }

//     resetFunction = () =>
//     {
//       // console.log("page is loaded successfully");

//       // try 
//       // {
//       //     axios.post("https://tifinco.com:5000/admin/get_userplaninfo", {userid: sessionStorage.getItem('userid')}, {
//       //     headers: { 'Content-Type': 'application/json' , 'Accept': 'application/json'},
//       //     })
//       //     .then(res => {
//       //       const mydata = res.data;
           
//       //       // this.setState({ menus });
  
//       //       // this.state.count =menus.length;
//       //       console.log( mydata);
//       //             // for(var i = 1; i=this.state.count;i++){
           
          
          
//       //     })
          
//       // } // INNER get_kitchewn_menu TRY BLOCK CLOSES
//       // catch (error)
//       // {
//       //     console.log(error)
//       //     this.setState({
//       //     Load: false,
//       //     });
//       //     console.log("internal server error");
//       // }




//   }
//   // }
//   selectData = () =>
//   {
  
//             var meal_pref = document.getElementById('meal_pref_id').value;
    
//             let temp3 = meal_pref.slice(0, 3);
//             let temp6 = meal_pref.slice(0, 6);
  
//            if(temp3 == "veg")
//            {
    
//                   let temp8 = meal_pref.slice(3, 11);
//                   let temp11 = meal_pref.slice(3, 14);
  
//                   if(temp8=="heatable")
//                   {
    
//                       document.getElementById("tiffintype").focus();
//                       document.getElementById("tiffintype").value = temp8;
//                       document.getElementById("getvalidtiffin").focus();
//                       let final_meal = meal_pref.length-11;
//                       document.getElementById("getvalidtiffin").value = temp11.slice(11,final_meal);
//                       document.getElementById("meal_pref_id").value = temp3;
//                   }
//                   else if(temp11=="nonheatable")
//                   {
             
//                       document.getElementById("tiffintype").focus();
//                       document.getElementById("tiffintype").value = temp11;
//                       document.getElementById("getvalidtiffin").focus();
//                       let final_meal = meal_pref.length-14;
//                       document.getElementById("getvalidtiffin").value = temp11.slice(14,final_meal);
//                       document.getElementById("meal_pref_id").value = temp3;
    
//                   }
//             }
//             else if(temp6 == "nonveg")
//             {
//                       let temp8 = meal_pref.slice(6, 14);
//                       let temp11 = meal_pref.slice(6, 17);
                
//                       if(temp8=="heatable")
//                       {
    
//                           document.getElementById("tiffintype").focus();
//                           document.getElementById("tiffintype").value = temp8;
//                           document.getElementById("getvalidtiffin").focus();
//                           let final_meal = meal_pref.length-14;
//                           document.getElementById("getvalidtiffin").value = temp11.slice(14,final_meal);
//                           document.getElementById("meal_pref_id").value = temp6;
    
    
//                       }
//                       else if(temp11=="nonheatable")
//                       {
                        
//                           document.getElementById("tiffintype").focus();
//                           document.getElementById("tiffintype").value = temp11;
//                           document.getElementById("getvalidtiffin").focus();
//                           let final_meal = meal_pref.length-17;
//                           document.getElementById("getvalidtiffin").value = temp11.slice(17,final_meal);
//                           document.getElementById("meal_pref_id").value = temp6;
//                       }
//              }
         
//       }
  
//       onfocus_gettiffin_data =()=>{

//       //   var sendId = 
//       //           {
//       //             meal_pref: document.getElementById("meal_pref_id").value,
//       //             tiffintype: document.getElementById("tiffintype").value, 
//       //             // userid: sessionStorage.getItem('userid')
//       //           }
//       //   axios.post("https://tifinco.com:5000/admin/get_tiffinno",sendId, {
//       //     headers: { 'Content-Type': 'application/json' , 'Accept': 'application/json'},
//       //     })
        
//       //     .then(res => {
//       //       // alert(res.data);
//       //      console.log(res.status);
//       //       console.log(res.data);
//       //       const tiffin_data = res.data;
//       //       console.log(tiffin_data);
//       //       console.log("KKKKKKKKKKKKKKKKK");
//       //     })
//       // }
// //    onfocus_gettiffin_data =()=>
// //    {
//      if(this.state.user_list.length==0)
//      {
//         console.log("on focus wala");
//         var sendId = 
//         {
//           meal_pref: document.getElementById("meal_pref_id").value,
//           tiffintype: document.getElementById("tiffintype").value, 
//           // userid: sessionStorage.getItem('userid')
//         }
       

//        console.log(sendId);

//     try 
//     {
//        console.log("try...");
//         axios.post("https://tifinco.com:5000/admin/get_tiffinno",sendId, {
//         headers: { 'Content-Type': 'application/json' , 'Accept': 'application/json'},
//         })
      
//         .then(res => {
//           // alert(res.data);
//          console.log(res.status);
//           console.log(res.data);
//           const tiffin_data = res.data;
//           // alert(tiffin_data);
//           console.log(this.state.tiffin_data.length);



//           this.setState({ tiffin_data:tiffin_data })
          
//           console.log(this.state.tiffin_data.map(data =>(data.tiffin_no)));
//            this.setState({
//         Load: false,
//         });

//     try 
//     {
//       //document.getElementById("tiffintype").focus();

//       console.log("try...WAla ===================");
//       console.log( sendId);
//         axios.post("https://tifinco.com:5000/admin/get_userdata", sendId, {
//         headers: { 'Content-Type': 'application/json' , 'Accept': 'application/json'},
//         // 
//         })
      
//         .then(res => {
//           // alert(res.data);
//         //  console.log("user list data ===");
//          // console.log(res.data);
//           const user_list= res.data;
//           console.log(user_list);
//           this.setState({user_list:user_list});
//           // console.log(this.state.user_list.map(data =>{this.setState({NAME :(data.name)})}));
//             this.setState({
//             Load: false,
//             });


//             // document.getElementById('getvalidtiffin').value = "";
//             // document.getElementById('getvaliduser').value = "";
//             // //window.location.reload();
//         })
        
//     } 
//     catch (error)
//     {
//         console.log(error)
//         this.setState({
//         Load: false,
//         });
//         console.log("internal server error");
//     }
  
//         })
       

//      }  catch (error)
//     {
//         console.log(error)
//         this.setState({
//         Load: false,
//         });
//         console.log("internal server error");
//     }


//   }
//   else
//   {

//   }//closing of else
//    }

//   getvalidate_tiffin= (event)=>
//    { 
 
//     var sendId = 
//     {
//       meal_pref: document.getElementById("meal_pref_id").value,
//       tiffintype: document.getElementById("tiffintype").value, 
//       // userid: sessionStorage.getItem('userid')
//     }

//     try 
//     {
//        console.log("try...");
//         axios.post("https://tifinco.com:5000/admin/get_tiffinno", sendId, {
//         headers: { 'Content-Type': 'application/json' , 'Accept': 'application/json'},
//         })
      
//         .then(res => {
//           // alert(res.data);
//          console.log(res.status);
//           console.log(res.data);
//           const tiffin_data = res.data;
//           console.log(tiffin_data);
//           console.log("KKKKKKKKKKKKKKKKK");



//           this.setState({ tiffin_data:tiffin_data })
          
//           console.log(this.state.tiffin_data.map(data =>(data.tiffin_no)));
//            this.setState({
//         Load: false,
//         });
//         })
//       }
//       catch (error)
//       {
//           console.log(error)
//           this.setState({
//           Load: false,
//           });
//           console.log("internal server error");
//       }
  
//     console.log(this.state.user_list.length+"++++++++++++");
//     if(this.state.user_list.length==0)
//     {
//      console.log("user_list not found");
//     }
//     else
//     {

    
//           this.setState({   
//         tiffin_status:false,
//         })
//         let validtiffin = String(document.getElementById('getvalidtiffin').value);
      
//         this.setState({ validtiffin:validtiffin});


//         for(var i =0;i<this.state.tiffin_data.length;i++)
//         {
      
//               if(this.state.tiffin_data[i].tiffin_no === validtiffin)
//               {
//                 //   console.log("matched");
//                   this.setState({   
//                   tiffin_status:false  })
//                 break;
//               }
//               else
//               {
//                 this.setState({ tiffin_status:true})
//               }

//         }
      

//         if(this.state.tiffin_data.length==0){

//           this.setState({
//             tiffin_status:true,
//           })
//         }
      
//   }//closing of else




//   }


//   getvalidate_user= ()=>
//   {

//     var validuser = document.getElementById('getvaliduser').value;

//           this.state.userid = validuser;
//           this.setState({ userid:validuser});
 
//           console.log(this.state.userid);
//       for(var i =0;i<this.state.user_list.length;i++)
//       {
//         //console.log(this.state.tiffin_data[0].tiffin_no);
//         if(this.state.user_list[i].userid === validuser)
//         {
          
//           this.state.selected_plan = this.state.user_list[i]["plantype"];
//           this.state.name = this.state.user_list[i]["name"];
           
//           this.setState({   
//             user_status:false,
//             selected_plan : this.state.user_list[i]["plantype"],
//             name :this.state.user_list[i]["name"],
//                 })

//                 console.log( this.state.selected_plan);
//                 console.log( this.state.name);
//           break;
//         }
//         else
//         {
//           this.setState({  user_status:true, })
//         }

//    }
   
//     if(this.state.user_list.length==0)
//     {

//         this.setState({
//         user_status:true,
//       })
//     }


// for( var i =0 ; i<this.state.planinfo.length ; i++)
// {
//   console.log(this.state.planinfo[i]["plan_name"]);
//   console.log(this.state.selected_plan);
//   console.log("loop");


//   if(this.state.planinfo[i]["plan_name"]===this.state.selected_plan)
//   {
//     console.log("inside if");
//       var length= parseInt(this.state.planinfo[i]["plan_vegCount"]);
//         console.log(length);
//          for(var j = 0; j< length;j++)
//          {
//           // console.log("connected ");

       
//           this.setState(prevState => ({ values: [...prevState.values, '']})) ; 
//             console.log("miss nidhi");
         
//          }
//          break;
//   }
  
  
// }

//   // {
//   //   // 
//   //  var veg =  this.state.planinfo.map(data =>(data.plan_vegCount));
//   //  console.log(veg);
//   //  console.log(this.state.planinfo.map(data =>(data.plan_name)));
//   //  console.log(this.state.selected_plan);
//   //   for(var i= 1;i<= 3;i++)
//   //   {
//   //     this.setState(prevState => ({ values: [...prevState.values, '']}))


//   //   }
//   // }
 
//   // var rand = this.state.user_list[(Math.random() * this.state.user_list.length) | 0]
//   // console.log(rand)
//   // this.setState({
//   //  randdom : rand})
//     document.getElementById('getvaliduser').value = this.state.name;
    
//   }

  
//   handleFoodMenu= (event )=>
//   {
// //     var Myid = event.currentTarget.id;
// // console.log(Myid);
//     try 
//     {
//         axios.post("https://tifinco.com:5000/admin/get_kitchen_menu", {userid: sessionStorage.getItem('userid')}, {
//         headers: { 'Content-Type': 'application/json' , 'Accept': 'application/json'},
//         })
//         .then(res => {
//           const menus = res.data;
         
//           this.setState({ menus });

//           this.state.count =menus.length;
//           console.log( this.state.count);
//                 // for(var i = 1; i=this.state.count;i++){
//           console.log(this.state.menus.map(data =>(data.p_name)));
        
        
//         })
        
//     } // INNER get_kitchewn_menu TRY BLOCK CLOSES
//     catch (error)
//     {
//         console.log(error)
//         this.setState({
//         Load: false,
//         });
//         console.log("internal server error");
//     }
//   }


//   handleSabji= (i,event )=>
//   {
//     let values = [...this.state.values];
//     values[i] = event.target.value;
//     this.setState({ values });
  


//   }

//   addClick(){
//   //   for(var i =0;i<this.state.planinfo.length;i++)
//   //   {
//   //     if(this.state.planinfo[i].plan_name === this.state.selected_plan)
//   //     {
        
//   //       this.state.plan_name = this.state.planinfo[i]["plan_vegCount"];
         
//   //       this.setState({   
//   //         plan_name : this.state.planinfo[i]["plan_vegCount"]
//   //             })

//   //             console.log( this.state.plan_name);
//   //       break;
//   //     }
//   //     else
//   //     {
//   //       console.log("ITS A ELSE ");
//   //       // this.setState({  user_status:true, })
//   //     }
//   //   }



//   //   if(this.state.planinfo.map(data =>(data.plan_name == this.state.selected_plan)))
//   // {
//   //   // 
//   //  var veg =  this.state.planinfo.map(data =>(data.plan_vegCount));
//   //  console.log(veg);
//   //  console.log(this.state.planinfo.map(data =>(data.plan_name)));
//   //  console.log(this.state.selected_plan);
//   //   for(var i= 1;i<= 3;i++)
//   //   {
//   //     this.setState(prevState => ({ values: [...prevState.values, '']}))


//   //   }
//   // }
   
//   }
//   createUI(){
//     return this.state.values.map((el, i) => 
//         <div key={i}>
//         <ul style={{ listStyle: 'none' }}><li>Sabji :{i+1} <input class="form-control" type="text" value={el||''} onChange={this.handleSabji.bind(this, i)} autoComplete='off' required/></li></ul> 
//          {/* <input type='button' value='remove' onClick={this.removeClick.bind(this, i)}/> */}
//         </div>          
//     )
//  }


// //   todayMeal()
// //   {


    
// //     // console.log(e.keyCode);
// //   //   if (today_meal_id.keyCode == 13) {
// //   //     alert("asdasd");
// //   // }
// //     // for(var i=0;i!='\0';i++){
// //     //   console.log(i);
      
// //     // }
// //     // for(var i = 0; i<=today_meal_id.length; i++){
// //     //   if(today_meal_id[i]==this.state.menus.map(data =>(data.p_name))){
// //     //     console.log(today_meal_id);
// //     //   }
// //     // }
// //     // alert(today_meal_id)
// //     // var option = document.getElementById("category").value;
// //     // var timer = setTimeout(() => this.today_meal_id , 3000)
// //     // console.log(timer);
// //     // if(today_meal_id!=''){

// //     // return this.setState(prevState => ({ food_menu: [...prevState.food_menu,'']}))
 

// //     // }
// //     // var today_meal_id = document.getElementById('today_meal_id').value;
// //     // console.log(today_meal_id);
        
// // //     var today_meal_id = document.getElementById("today_meal_id").value;
// // //     console.log(today_meal_id);
// // // if(today_meal_id.length!=0){
// // //     let result = today_meal_id.slice(13,-2);

// // //     document.getElementById("today_meal_id").value= result;}
    

  
// //   }


// // //   handleChange(i, event) 
// // //   {


// // //     var today_meal_id = document.getElementById('today_meal_id').value;

// // //     console.log(today_meal_id);


      
 
// // //     if(this.timeout) clearTimeout(this.timeout);

// // //  this.timeout = setTimeout(() => {
// // //   this.setState(prevState => ({ food_menu: [...prevState.food_menu,'']})) ;
// // //     }, 500);

// // //    // todayMeal();
// // //       let food_menu = [...this.state.food_menu];
// // //       food_menu[i] = event.target.value;
     
// // //       this.setState({ food_menu });
// // //       this.setState(prevState => ({ food_menu: [...prevState.food_menu,'']}))   
         
// // //       // for(var i = 0; i<= this.state.food_menu.length; i++){
// // //       //   if( this.state.food_menu[i]==this.state.menus.map(data =>(data.p_name))){
// // //       //     console.log( this.state.food_menu);
// // //       //   }
// // //       // }
  
// // //   }


// // createFoodTextfeild(){

// //   return this.state.food_menu.map((row, i) =>
// //       <div key={i}>
// //         <label> Food Name {i+1}</label><br></br>
// //        <textarea rows={2} className="form-control no-resize inline"  id={row.id}  onChange={this.handleChangeInputForFood.bind(this, row.id)}  defaultValue={row.food_item||''} required/><br>
// //        </br>
// //      {i ?( <input type='button' className="btn btn-danger" value='X' onClick={this.handleRemoveFieldsForFood.bind(this, row.id)}/>):("")}
// //               <br></br><br></br>
// //       </div>


// //   )


// // }


// // handleChangeInputForFood(id, event){

// //   // var today_meal_id = document.getElementById('today_meal_id').value;

// //     console.log(id);
  
// //       if(this.timeout) clearTimeout(this.timeout);
  
// //    this.timeout = setTimeout(() => {
// //    this.setState(prevState => ({ food_menu: [...prevState.food_menu,{ id: Math.random(),food_item:''}]}));
// //    document.getElementById(id).focus();
// //       }, 500);

// //   const food_menu = this.state.food_menu.map(i => {
// //   if(id === i.id) {



// //       i[event.target.name] = event.target.value


// //   }
// //   return i;
// // })

// // this.setState({ food_menu });
// // }

// // // handleAddFieldsForDescription(){
// // // this.setState(prevState => ({ food_menu: [...prevState.food_menu,{ id: Math.random(),heading_desc:''}]}))
// // // }

// // handleRemoveFieldsForFood(id){
// // let food_menu= [...this.state.food_menu];
// // food_menu.splice(food_menu.findIndex(value =>value.id===id),1);
// // this.setState({ food_menu });

// // }




//     handleSubmit = event => 
//      {
//       event.preventDefault();
//       console.log(this.state.values);

//       if(this.state.tiffin_status == true){
//         alert("Please Select Valid Tiffin");
//         return false;
//       }

//       if(this.state.user_status == true){
//         alert("Please Select Valid User");
//         return false;
//       }
//       this.setState({
//           Load :true,
//           });

//           var formdata =
//            {
//             userid : this.state.userid,
//             tiffin_no : document.getElementById('getvalidtiffin').value,
//             meal_pref : document.getElementById("meal_pref_id").value,
//             tiffintype : document.getElementById("tiffintype").value,
//             // sweet_dish : document.getElementById("sweet_dish").value,
//             extra_item : document.getElementById("extra_item").value,
//             sabji : this.state.values,
//             plantype : this.state.selected_plan,
//             name : this.state.name

//           }

//           console.log(formdata);
        


//   try{
//         axios.post("https://tifinco.com:5000/admin/insert_tiffin_allocated_data", formdata , {
//         headers:{'Content-Type': 'application/json' },
//         onUploadProgress: data => {
      
//         this.setState({
//           progress: Math.round((100 * data.loaded) / data.total)

//         });
//         },
//         })
//         .then(res => {
//            console.log(res.status);
//             console.log(res.data);
          
//             if(res.data.msg=='success')
//             {         
//              // console.log("success");
//               alert("Data Saved");
//                window.location.reload();                                                

//             }
//             // else if(res.data.msg=='exist')
//             // {
//             //   this.setState({ invalidImage: '' });
//             //   alert("Food Exists");
//             //   window.location.reload();
//             // }

//             this.setState({
//               Load :false,
//               });
        
//         })
//       }  
//       catch(error) {
      
//               console.log(error)
//               this.setState({
//                   Load :false,
//                   });
//               console.log("internal server error");
//             }

//     }


// render() {

// let Xmas95 = new Date();
// let hours = Xmas95.getHours();


// var today = new Date();

// // console.log(today.getDay()+"day");

// var days = today.getDay();
// // alert(days);   setTimeout( function() { FetchData(); }, 1000);
//     return (

//       <div>

//         {/* onLoad={() => this.resetFunction()} */}
//            {/* {alert(days)} */}
//           <Header/>
//       {/* main body area */}
// <div className="main px-lg-5 px-md-2"  >

//   {/* Body: Header */}
//   <div className="body-header d-flex text-light border-top py-3">
//     {/* {console.log(this.state.percentage)} */}
//     <div className="container">
//       <div className="row mb-3">
//         <div className="col">
//           <ol className="breadcrumb bg-transparent mb-0">
//             <li className="breadcrumb-item"><a className="text-secondary" href="/">Home</a></li>
//             <li className="breadcrumb-item active" aria-current="page">Allocate Tiffin To Users</li>
//           </ol>
//         </div>
//         <div className="col-auto">
//           <div className="d-md-flex d-none justify-content-lg-end align-items-center">
           
//           </div>
//         </div>
//       </div>
//       <div className="row align-items-center">
//         <div className="col-auto">
//           <h1 className="fs-4 mt-1 mb-0">Allocate Tiffin </h1>
//           <small className="text-muted"></small>
//         </div>
//         <div className="col d-flex justify-content-lg-end mt-2 mt-md-0">
       
//         </div>
//       </div>
//     </div>
//   </div>
//   {/* Body: Body */}

//   <div className="body d-flex py-lg-4 py-3">
//     <div className="container">
//       <div className="row g-4">
//         <div className="col-lg-12 col-md-12 col-sm-12">
//           <div className="card">
//             <div className="card-body">
//               <div className="row g-4 px-5">
              
           
//                 <form onSubmit={this.handleSubmit} encType='multipart/form-data'  id ="formdata">


//                   {/* <div className="row g-4">
//                   <lable><b>Select Plan Type</b></lable>
//                     <select className="form-control form-control-lg"  name="mealpreference"  tabIndex={-88} id="meal_pref_id"  required>
//                     {this.state.user_list.map(userlist =>
//                               <option value={userlist.userid}>{userlist.plantype}</option> //  ( <option value={data._id}>{data.userid}</option>)
//                             )}
//                     </select>
//                     </div> */}

//                          <div className="row g-4">
//                          <lable><b>Select Meal Preference</b></lable>
//                   <input class="form-control" type="text"  name="mealpreference" onChange={this.selectData} tabIndex={-88} id="meal_pref_id"  autoComplete='off' length="3" required/>

//                 {/* <datalist id="mealpref">
                
//                 <option value="veg" > </option>
//                         <option value="nonveg" ></option>
//                 </datalist> */}

        
//           </div>

//                     <div ><br></br></div>


//                     {/* <div className="row g-4">
//                     <lable><b>Select Tiffin Type</b></lable>
//                     <select className="form-control form-control-lg"  name="tiffintype"  onChange={this.selectData} tabIndex={-88} id="tiffintype"  required>
//                       <option value="heatable" >Heatable</option>
//                         <option value="nonheatable" >Non Heatable </option>
//                     </select>
//                     </div> */}

//                              <div className="row g-4">
                   

//                              <lable><b>Select Tiffin Type</b></lable>
//                             <input class="form-control" type="text"  tabIndex={-88} name="tiffintype"  onChange={this.selectData} id="tiffintype" autoComplete='off' required/>
// {/* 
//                           <datalist id="tifintype">
//                           <option value="heatable" ></option>
//                         <option value="nonheatable" > </option>
//                           </datalist> */}

                  
//                     </div>



//                     <div ><br></br></div>
                  
//                     <div className="row g-4">

//                            <lable><b>Select Tiffin</b></lable>
//                             <input class="form-control" type="text" name ="validate_tiffin" tabIndex={-88} id="getvalidtiffin"  onChange={this.getvalidate_tiffin} autoComplete='off' required/>
// {/*  */}
//                           {/* <datalist id="data">
//                             {this.state.tiffin_data.map(tiffinNo =>
//                               <option  value={tiffinNo.tiffin_no} />
//                             )}
//                           </datalist> */}
//                           {this.state.tiffin_data.length == 0 ?("Tiffin Not Available"):("")}<br></br>
//                              {this.state.tiffin_status==true?("Invalid Tiffin"):("")}

//                     </div>    
//                     <div ><br></br></div>
                    
//                     <div className="row g-4">

//                     <lable><b>Select User</b></lable>
//                             {/*    value={this.state.NAME}   <input class="form-control" type="text" list="datauser"  name = "validate_user" tabIndex={-88} id="getvaliduser"  onFocus={this.onfocus_gettiffin_data} onChange={this.getvalidate_user} autoComplete='off' required/> */}                  
                          
//                             <input class="form-control" type="text" list="datauser" name = "validate_user" tabIndex={-88} id="getvaliduser" onFocus={this.onfocus_gettiffin_data} onChange={this.getvalidate_user} autoComplete='off' required/>
//                           <datalist id="datauser">
//                             {this.state.user_list.map(userlist =>
//                               <option value={userlist.userid}>{userlist.name}</option> //  ( <option value={data._id}>{data.userid}</option>)
//                             )}
                            
//                           </datalist>
//                           {this.state.user_list.length == 0 ?("No User Found"):("")}<br></br>
//                           {this.state.user_status==true?("Invalid User"):("")}
//                     </div>
//                     <div ><br></br></div>
                   
//                     <div className="col-sm-12">
//                     {/* <center> <button type="submit" className="btn btn-primary">Insert</button></center> */}
//                     {/* {this.state.users.map(data =>
//                     <button type="submit" className="btn btn-primary" onClick = { () => this.handleSearch(data._id) }>Allocate To</button>)} */}
//                     </div>
//                       <div><br></br></div>
//                       <div  style= {{float:"right"}} ><button type = "button" className="btn btn-primary" onClick = { this.handleFoodMenu }> Today's Food Menus </button > 
//                       <div><br></br></div> {this.state.menus.map(data =>(
//                          <ul>
//                         <li>{data.p_name} : <b>{data.food_rawmaterial}</b></li>
                      
//                        </ul>))}
//                       </div> 
                      
//                       <div>
                   
                        
//                       &nbsp; &nbsp; &nbsp; &nbsp; {this.state.user_list.map(data=>(data.userid== this.state.userid?(<h6> <u>User Plan Detail</u></h6>):("")))} 
//                       {this.state.user_list.map(data =>(data.userid== this.state.userid?(
                           

//                         <ol  >
//                          <li>Name: <b>{data.name}</b></li>
                      
//                         <div><br></br></div>
//                         <li>Plantype : <b>{data.plantype}</b></li>
//                         <div><br></br></div>
//                         <li>Meal Days :<b>{data.meal_days}</b></li>
//                         <div><br></br></div>

//                         <li>MealPreference :<b>{data.mealpreference}</b></li>
//                         <div><br></br></div>
//                         <li>Starting Date :<b>{data.starting_date}</b></li>
//                         <div><br></br></div>
//                         <li>Meal_time :<b>{data.meal_time}</b></li>
//                         <div><br></br></div>
//                         <li>Repeat On :
//                           <b> {data.repeat_on.m == "1" && days ==1 ? "Monday":data.repeat_on.t == "1" && days ==2 ? "Tuesday":data.repeat_on.w == "1" && days ==3 ? "Wednesday":
//                            data.repeat_on.th == "1" && days ==4 ? "Thursday":data.repeat_on.fr == "1" && days ==5 ? "Friday":data.repeat_on.sat == "1" && days ==6 ? "Saturday":
//                            data.repeat_on.sun == "1" && days ==0 ? "Sunday":null
//                           //  .map(inner_data=>(
//                           //  (inner_data.m=="1" &&days ==1)?"mon":(inner_data.t==1 &&days ==2)?"tues":(inner_data.w=="1" &&days ==3)?"wed":(inner_data.th==1 &&days ==4)?"thur":(inner_data.fr==1 &&days ==5)?"fri":
//                           //  (inner_data.sat==1 &&days ==6)?"sat" :(inner_data.sun==1 &&days ==0)?"sun":null))
//                            }</b>
//                            </li>
//                             <div><br></br></div>
//                         <li>Tiffin type :<b>{data.tiffintype}</b></li>
//                         <div><br></br></div>
//                         {data.mealpreference =="nonveg"?(<li>NonVeg Preference days : 
//                          <b> {data.nonveg_pre_d.m == "1"&&days ==1 ? "Yes":data.nonveg_pre_d.t == "1"&&days ==2 ? "Yes":data.nonveg_pre_d.w == "1"&&days ==3 ? "Yes":
//                           data.nonveg_pre_d.th == "1"&&days ==4 ? "Yes":data.nonveg_pre_d.fr == "1"&&days ==5 ? "Yes":data.nonveg_pre_d.sat == "1"&&days ==6 ? "Yes":
//                           data.nonveg_pre_d.sun == "1"&&days ==0 ? "Yes":"No"
//                           // .map(inner_data=>(data.mealpreference==="nonveg"? 
//                           //  [(inner_data.m==1 &&days ==1)?"Yes":"no"]||[(inner_data.t==1 &&days ==2)?"yes":"no"]||[(inner_data.w=="1" &&days ==3)?"Yes":"no"]||[(inner_data.th==1 &&days ==4)?"Yes":"no"]||
//                           //  [(inner_data.fr==1 &&days ==5)?"Yes":"no"]||[(inner_data.sat==1 &&days ==6)?"Yes" :"no"]||[(inner_data.s==1 &&days ==0)?"Yes":"no"]:null))
//                            }</b>
//                            </li>):("")}
//                         <div><br></br></div>
                       
//                            <li>Unlike foods :{data.unlike_foods+ ' ,'
//                           //  .map((inner_data)=>(  inner_data.veg+ ' ,' ))
//                            } </li>

//                            <div><br></br></div>
//                          <li>Extra Item (Name):<b>{data.extra_item.item_name+ ' ,' 
//                           //  .map((inner_data)=>(  inner_data.veg+ ' ,' ))
//                            }</b> </li>
//                              <div><br></br></div>
//                            <li>Extra Item (Quantity):<b>{data.extra_item.item_qty+ ' ,' 
//                           //  .map((inner_data)=>(  inner_data.veg+ ' ,' ))
//                            } </b></li>
                           


//                        </ol>
//                         ):" "))} 
//                         </div>
//                     <div><br></br></div>
//                   <div>     
//                         {/* <lable><h5><b>Today's Meal</b></h5></lable> */}
//                         <div><br></br></div>
//                            {/* <input class="form-control"  type="text" id ="today_meal_id" onChange={this.todayMeal} onClick={this.f1} autoComplete='off'/> */}
//                            {this.state.user_list.map(data=>(data.userid == this.state.userid && data.plantype == this.state.selected_plan)?
                       
//                       (<ol>
                        
//                         <h5><b>Today's {this.state.selected_plan } Meal</b></h5>
//                          {/* <li> Sweet Dish : <input class="form-control"  type="text" id ="sweet_dish" onChange={this.input_sweet_dish} autoComplete='off' required/></li>  */}
//                         {this.createUI()}     
//                         <li> Extra Item :<input class="form-control"  type="text" id ="extra_item" onFocus={this.addClick.bind(this)} autoComplete='off' required/></li> <div><br></br></div> 
          
//                       </ol>) :null)}
                  
//                   </div>
//                <div>
               
//                {/* {this.createFoodTextfeild()} */}
      
//                </div>
//                <div className="col-sm-12">
         
//                 {/* <button type="button" className="btn btn-primary"  onClick={this.addClick.bind(this)} >Add Row</button>  <span>&nbsp;&nbsp;</span> */}
//                 </div>
              
//                 <div><br></br></div>

//                             <div className="col-sm-12">
//                               <button type="submit" className="btn btn-primary">Submit</button>
//                               <a href="" className="btn btn-primary" > Reset</a>
                             
//                             </div>
//                 </form>
                
//               </div>
//             </div>
//           </div>
//         </div>
     
//       </div> {/* .row end */}
//     </div>
//   </div>
//   {/* Body: Footer */}
//   <div className="body-footer d-flex">
//     <div className="container">
//       <div className="col-12">
//         <div className="card mb-3">
//           <div className="card-body">
//             <div className="row justify-content-between align-items-center">
//               <div className="col">
//                 <p className="font-size-sm mb-0">© Tifinco <span className="d-none d-sm-inline-block"> Prixso Product.</span></p>
//               </div>
//               <div className="col-auto">
//                 <ul className="list-inline d-flex justify-content-end mb-0">
//                   <li className="list-inline-item"><a className="list-separator-link" href="">About</a></li>
//                   <li className="list-inline-item"><a className="list-separator-link" href="" target="_blank">License</a></li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
// <Footer/>

//       </div>
//     )
//   }


























//  --------------------Monday---------------------------++++++++++++++++++   its My code   +++++++++++++++++--------------------------July 18 2022-------------------------------


// import React, { Component } from 'react'
// import Header from  '../DeliveryHeader';
// import Footer from '../DeliveryFooter'
// import axios from 'axios';
// import { Route, Switch, Link } from 'react-router-dom';
// import ReactLoading from "react-loading";
// import Popup from 'reactjs-popup';
// import 'reactjs-popup/dist/index.css';
// import {GET_PLANINFO,GET_TIFFINS, GET_USERDATA, INSERT_TIFFIN_ALLOCATED_DATA} from '../../links/DeliveryLinks';
// export class add_tiffin extends Component 
// {

//  state =
//  {
//   user_list:[],
//   tiffin_status:false,
//   plantype:'',
//   user_name :'',
//   user_mealpref:'',
//   user_tiffin_type :'',
//   planinfo :[],
//   tiffininfo : [],
//   values :[],
//   items :[],
//   quantity :[],
//   tiffin_no:'',
//   user_id :'',
//   specificplan:'',
//   speplan:'',
//   My_sabji1:'',
//   My_sabji2:'',
//   length:'',
//   extra_item_Length:'',
//   extra_item:'',
//   i:0,
//   j:0,
//   item_name:[],
//   item_qty :[],
//   final_extraItem :'',
//   // t_values:[],

//   // extra_item :[{ id: Math.random(),item_name:'',item_qty:'',item_price:0 }],
//  }

//  componentDidMount()
//   {
 

//         axios.post(GET_PLANINFO, {userid: sessionStorage.getItem('userid')}, {
//           headers: { 'Content-Type': 'application/json' , 'Accept': 'application/json'},
//           })
//           .then(res => {
//             const planinfo = res.data;
          
//             this.setState({ planinfo :planinfo});
//             // this.state.planinfo
//             console.log( this.state.planinfo);
//                   // for(var i = 1; i=this.state.planinfo.length;i++)
//                   // {
//             console.log(this.state.planinfo.map(data =>(data.plan_vegCount)));
        
//                   // }
//                 })

//                 axios.post(GET_TIFFINS, {userid: sessionStorage.getItem('userid')}, {
//           headers: { 'Content-Type': 'application/json' , 'Accept': 'application/json'},
//           })
//           .then(res => {
//             const tiffininfo = res.data;
          
//             this.setState({ tiffininfo :tiffininfo});
//             // this.state.tiffininfo
//             console.log( this.state.tiffininfo);
//                   // for(var i = 1; i=this.state.tiffininfo.length;i++)
//                   // {
//             console.log(this.state.tiffininfo.map(data =>(data.tiffin_no)));
        
//                   // }
//                 })
//    }
    
  
  
//    handleItem= (i,event )=>
//    {
//     let items = [...this.state.items];
//     items[i] = event.target.value;
//     this.setState({ items });

//     // if(this.state.user_list[i]["plantype"]===this.state.plantype)
//     // {
//     //   var length = this.state.user_list[i]["extra_item"].length;
//     // var length = this.state.extra_item_Length;
//     //   for(var j = 0; j< length;j++)
//     //   {
//     //      this.setState(prevState => ({ values: [...prevState.values, '']})) ; 
//     //      console.log("miss purnima");
//     //   }
//     // }   
//   }
//    createUIExtraItem()
//   {
//   //  console.log("-----------------------------------");
//   //   return this.state.values.map((el, i) => 
//   //       <div key={i}>
//   //       <ul style={{ listStyle: 'none' }}><li>Extra Item :{i+1} <input class="form-control"  type="text" id ="extra_item" value={el||''} onChange={this.handleItem.bind(this, i)} autoComplete='off' required /></li>
//   //       {/* <li>Quantity :{i+1} <input class="form-control"  type="text" id ="qty" value={el||''} onChange={this.handleItem.bind(this, i)} autoComplete='off' required /></li> */}
//   //       </ul> 
//   //        {/* <input type='button' value='remove' onClick={this.removeClick.bind(this, i)}/> */}
//   //       </div>          
//   //   )
//    }
  


//    getuserdata=(event)=>
//    {
 
//     var plantype = document.getElementById("plantype_id").value;
//     var sendId = 
//     {
//       plantype : plantype,
//       userid: sessionStorage.getItem('userid'),
//     }
           
//             console.log(plantype);
                
//                     axios.post(GET_USERDATA,sendId, {
//                     headers: { 'Content-Type': 'application/json' , 'Accept': 'application/json'},
//                   })
//                   .then(res => {
//                     const user_list = res.data;
                    
//                       // user_list.map(d=>d.extra_item.map((d,i)=>
//                       //   {
//                       //     this.setState({
//                       //       item_name: d.item_name,
//                       //       item_qty: d.item_qty
//                       //     })
//                       //   }
//                       //  ) )

                      
//                       // user_list.map(d=>d.extra_item.map(d=>d.item_qty))
                    
//                     // console.log(this.state.item_name);
//                     // console.log(this.state.item_qty);

//                     // user_list.map(list=>(list.extra_item.map(d=>
//                     //   {
//                     //     this.setState({
//                     //       items_name: d.item_name,
//                     //       item_qty:d.item_qty
//                     //       })
//                     //     }
//                     //     ))
                    
//                     //   )
//                       console.log(this.state.item_name);
//                       console.log(this.state.item_qty);
                  
//                     this.setState({ user_list :user_list});
//                 //    alert( this.state.user_list);
//                 // alert(this.state.plantype);
//                 document.getElementById("user_id").focus();  
//                     // console.log( this.state.user_list);
               
//                           })

//                           this.setState({plantype:plantype})
                        
                     
//                   //         var count= 0;
                 
//                   // for( var i =0 ; i<this.state.user_list.length ; i++)
//                   // {
//                   //   console.log(this.state.user_list[i]["plantype"]);
//                   //   console.log(this.state.plantype);
//                   //   console.log("loop");
                        
                    

//                   //   if(this.state.user_list[i]["plantype"]===this.state.plantype)
//                   //   {
                       
//                   //     var count=count+1;
                   
//                   //   } 
//                   // }
//                   // console.log(count);
                
                
                
//                   for(var i= 0;i<this.state.user_list.length;i++)
//                   {
                    
//                     if((this.state.user_list[i]["extra_item"])>0)
//                     {
//                          console.log(this.state.user_list["extra_item"][i]["item_name"]);
//                          console.log(this.state.user_list["extra_item"][i]["item_quantity"]);
//                         //  this.setState({ item_name,item_})
//                     }
//                   }
                 
//           }
    
//  onfocus_gettiffin_data = ()=>
// {
//  var specificplan = this.state.user_list.length;
//  console.log(this.state.plantype);
//  console.log(specificplan);
//  console.log(this.state.user_list);

 
                    
//   for( var i =0 ; i<this.state.user_list.length ; i++)
//   {
//     console.log(this.state.user_list[i]["plantype"]);
//     console.log(this.state.plantype);
//     console.log("loop");


//     if(this.state.user_list[i]["plantype"]===this.state.plantype)
//     {
//       console.log("inside if");
    
//         // var length= parseInt(this.state.user_list[i]["plan_vegCount"]);
//         //   console.log(length);
//           //  for(var j = 0; j< length;j++)
//           //  {
//             console.log("connected ");
//             var user_name = this.state.user_list[i]["name"];
//             var user_tiffin_type = this.state.user_list[i]["tiffintype"]; 
//             var user_mealpref = this.state.user_list[i]["mealpreference"];
//             var user_id = this.state.user_list[i]["userid"];
//             var extra_item_Length = this.state.user_list[i]["extra_item"].length;
//             console.log(extra_item_Length);
//             // this.setState(prevState => ({ values: [...prevState.values, '']})) ; 
//             //   console.log("miss nidhi");
          
//           //  }

//           this.setState({user_name :user_name ,  user_tiffin_type:  user_tiffin_type, user_mealpref: user_mealpref, user_id:user_id , specificplan:specificplan, extra_item_Length: extra_item_Length});
//           document.getElementById("tiffin_no").focus();  
          
//            break;

//     }
    
    
//   }

// }
// tiffin_no_allocation= ()=>
// {

//   console.log(this.state.planinfo);
//   if(this.state.tiffin_status == false )
//   {
//     for( var i =0 ; i<this.state.planinfo.length ; i++)
//     {
//       if(this.state.planinfo[i]["plan_name"]===this.state.plantype)
//       {
//           var length= parseInt(this.state.planinfo[i]["plan_vegCount"]);
//           console.log(length);
//            for(var j = 0; j< length;j++)
//            {
//               this.setState(prevState => ({ values: [...prevState.values, '']})) ; 
//             //  this.setState(prevState => ({ items: [...prevState.items, '']})) ;
//               console.log("miss nidhi");
//            }
//            this.setState({length:length});

//       }
//     }
    
//   }
//   else
//    console.log("tiffin status is true, Invalid tiffin");
   
//   // document.getElementById("sabji").focus(); 
//   // document.getElementById("tiffin_no").focus(); 
  
// }

//    handleSabji= (i,event )=>
//   {
//     // let values = [...this.state.values];

//     // values[i] = event.target.value;
//     // var sabji1 = values[0].slice(11,-2);
//     // var sabji2 = values[1].slice(11,-2);
   

//     // this.setState({values });
 
//         let values = [...this.state.values];
//         values[i] = event.target.value;
//         this.setState({ values });
//    }

//  createUI()
//   {
//     return this.state.values.map((el, i) => 
//         <div key={i}>
//         <ul style={{ listStyle: 'none' }}><li>Sabji :{i+1} <input class="form-control"  type="text" id ="sabji" value={el||''} onChange={this.handleSabji.bind(this, i)} autoComplete='off' required /></li></ul> 
//          {/* <input type='button' value='remove' onClick={this.removeClick.bind(this, i)}/> */}
//         </div>          
//     )
//  }

// // createUIExtra()
// //   {
// //     return this.state.items.map((el, i) => 
// //         <div key={i}>
// //         <ul style={{ listStyle: 'none' }}><li>Extra Item :{i+1} <input class="form-control"  type="text" id ="extra_item" value={el||''} onChange={this.handleExtra.bind(this, i)} autoComplete='off' required /></li></ul> 
// //          {/* <input type='button' value='remove' onClick={this.removeClick.bind(this, i)}/> */}
// //         </div>          
// //     )
// //  }
// //  handleExtra= (i,event )=>
// //  {
// //        let items = [...this.state.items];
// //        items[i] = event.target.value;
// //        this.setState({ items });
// //   }





// selectData = (event) =>
// {
//     // console.log(event.target.value);
//     // console.log("***************************");     coded byyuvraj sir

//         var tiffin_no = document.getElementById("tiffin_no").value
//         var length = tiffin_no.length;
//         console.log(tiffin_no);
//         console.log(length);
  
//         var meal_pref = document.getElementById("mealpref_id").value;
//         var tiffin_type = document.getElementById("tiffintype_id").value;

//             if(meal_pref[0] =="v" && tiffin_no[0] =="V")
//             {  
//                   if(tiffin_type[0]=="h" && tiffin_no[1] =="H")
//                   {
//                         console.log("vegheatable");
//                         this.setState({tiffin_status:false,});
                        
//                   }
//                   else if (tiffin_type[0] == "n" && tiffin_no[1] =="N")
//                   {
//                       console.log("vegnonheatable");
//                        this.setState({tiffin_status:false,});
                        
//                   }
//                   else
//                   this.setState({tiffin_status:true,});
                  
//             }
//             else if (meal_pref[0]== "n" && tiffin_no[0] =="N")
//             {
//                    if(tiffin_type[0]=="h" && tiffin_no[2] =="H")
//                     {
//                       console.log("nonvegheatable")
//                       this.setState({tiffin_status:false,});
                      
//                     }
//                    else if (tiffin_type[0]== "n" && tiffin_no[2] =="N")
//                    {
//                       console.log("nonvegnonheatable")
//                       this.setState({tiffin_status:false,});
                      
//                    }
//                    else
//                    this.setState({tiffin_status:true,});      
//              }
//              else
//              this.setState({tiffin_status:true})
//               // return false;
 
          
// }

// //  showAnswer=(a)=>
// //  {
// //     let items = [...this.state.items];
// //     let quantity= [...this.state.quantity];

// //     items[a] = document.getElementById("extra_item"+a).value;
// //     quantity[a] = document.getElementById("qty"+a).value;

// //     console.log(items);
// //     console.log(quantity);

// //     this.setState({ items, quantity });


// //           //  for(var p = 0;p<this.state.user_list.length;p++)
// //           //  {
// //           //    if(this.state.user_list[p]["plantype"] == this.state.plantype ){
// //           //     var my_extraitem = this.state.user_list[p]["extra_item"];
// //           //     console.log(my_extraitem);
// //           //     this.setState({my_extraitem:my_extraitem});
// //           //    }
// //           //    break;
            
// //           //  }

// //           //  for( var a =0 ; a< my_extraitem.length;a++)
// //           //  {
// //           //           var item_name = my_extraitem[a]["item_name"];
// //           //           var item_qty = my_extraitem[a]["item_qty"];

// //           //           this.setState({items:item_name,
// //           //           quantity:item_qty })
// //           //           // console.log(this.state.item_name[a]);
// //           //           // console.log(this.state.item_qty[a]);
// //             // }

          
           
// // }

// showAnswer = event => {
//   this.setState({ extra_item: event.target.value});
// }

// handleSubmit = event => 
//  {
//       event.preventDefault();
//       if(event.key === 'Enter'){console.log(event.key);}
      
//       // if(document.getElementById("qty").value==null ||document.getElementById("qty").value==""||document.getElementById("qty").value==undefined)
//       // {
//       //     // if(total_values.length == 0||total_values == null || total_values == "" || total_values == undefined)
//       //          return false;

//       // }

//       // if(total_values.length == 0||total_values == null || total_values == "" || total_values == undefined)
//       //          return false;
//       if(this.state.extra_item_Length == 0)
//       {
//         var total_item = "";
//         var total_qty = "";
//       }
//       else
//       {
//         // var total_item = this.state.items.reduce((a, b) => a +"@"+ b);
//         // var total_qty = this.state.quantity.reduce((a, b) => a +"@"+ b);
//         console.log(this.state.items);
//         console.log(this.state.quantity);
//       }

//       var temp1 = this.state.values[0].length;
//       console.log(this.state.values[0].length);
//       if(this.state.length == 2)
//       {
//         var sabji1 = this.state.values[0];
//         var sabji2 = this.state.values[1];
  
//         console.log(sabji1);
//         console.log(sabji2);
  
//         var total_values = [sabji1, sabji2];
//       }
//       else
//       {
//         var sabji1 = this.state.values[0];
    
//         console.log(sabji1);

//         var total_values = [sabji1];
//       }
              
//             if(this.state.tiffin_status == true)
//             {
//               alert("Please Select Valid Tiffin");
//               return false;
//             }
      
//         //     if(this.state.user_status == true){
//         //       alert("Please Select Valid User");
//         //       return false;
//         //     }
//             this.setState({
//                 Load :true,
//                 // sabji1:sabji1,
//                 // sabji2:sabji2
//                 });
                


//                 var formdata =
//                  {
//                   userid : this.state.user_id,
//                   name : this.state.user_name,
//                   tiffin_no : document.getElementById('tiffin_no').value,
//                   meal_pref : document.getElementById("mealpref_id").value,
//                   tiffintype : document.getElementById("tiffintype_id").value,
//                   extra_item : total_item,
//                   quantity :total_qty,
//                   sabji : total_values,
//                   // sabji : this.state.values,
//                   plantype : this.state.plantype,
//                   // userid: sessionStorage.getItem('userid')
                  
//                 }

//                console.log(formdata);
//                 // document.getElementById("extra_item").focus() 
               
      
//         try{
//               axios.post(INSERT_TIFFIN_ALLOCATED_DATA, formdata , {
//               headers:{'Content-Type': 'application/json' },
//               onUploadProgress: data => {
            
//               this.setState({
//                 progress: Math.round((100 * data.loaded) / data.total)
      
//               });
//               },
//               })
//               .then(res => {
//                  console.log(res.status);
//                   console.log(res.data);
                
//                   if(res.data.msg=='success')
//                   {         
//                    // console.log("success");
//                     alert("Data Saved");
//                      window.location.reload();                                                
      
//                   }
//         //           // else if(res.data.msg=='exist')
//         //           // {
//         //           //   this.setState({ invalidImage: '' });
//         //           //   alert("Food Exists");
//         //           //   window.location.reload();
//         //           // }
      
//                   this.setState({
//                     Load :false,
//                     });
              
//               })
//             }  
//             catch(error) 
//             {
            
//                     console.log(error)
//                     this.setState({
//                         Load :false,
//                         });
//                     console.log("internal server error");
//             }
      
//   }

//   sabjiChange()
//   {
//   //   var sabji1=  document.getElementById('sabji1').value;
//   //   var sabji2= document.getElementById('sabji2').value;
//   //   var My_sabji1 = sabji1.slice(11,-2);
//   //   console.log( My_sabji1);
//   //   var My_sabji2 = sabji2.slice(11,-2);
//   //   console.log( My_sabji2);

//   //   this.setState({My_sabji1:My_sabji1, My_sabji2:My_sabji2 })
//   }



//   render() {
//     console.log(this.state.items);
//     console.log(this.state.quantity);;
//     let Xmas95 = new Date();
//     let hours = Xmas95.getHours();


//     var today = new Date();

//     // console.log(today.getDay()+"day");
//   // console.log(this.state.user_id);

//     var days = today.getDay();
//     return (
//       <div>
// {console.log(this.state.tiffin_status)}
//         {/* onLoad={() => this.resetFunction()} */}
//            {/* {alert(days)} */}
//           <Header/>
//       {/* main body area */}
// <div className="main px-lg-5 px-md-2"  >

//   {/* Body: Header */}
//   <div className="body-header d-flex text-light border-top py-3">
//     {/* {console.log(this.state.percentage)} */}
//     <div className="container">
//       <div className="row mb-3">
//         <div className="col">
//           <ol className="breadcrumb bg-transparent mb-0">
//             <li className="breadcrumb-item"><a className="text-secondary" href="/">Home</a></li>
//             <li className="breadcrumb-item active" aria-current="page">Allocate Tiffin To Users</li>
//           </ol>
//         </div>
//         <div className="col-auto">
//           <div className="d-md-flex d-none justify-content-lg-end align-items-center">
           
//           </div>
//         </div>
//       </div>
//       <div className="row align-items-center">
//         <div className="col-auto">
//           <h1 className="fs-4 mt-1 mb-0">Allocate Tiffin </h1>
//           <small className="text-muted"></small>
//         </div>
//         <div className="col d-flex justify-content-lg-end mt-2 mt-md-0">
       
//         </div>
//       </div>
//     </div>
//   </div>
//   {/* Body: Body */}

//   <div className="body d-flex py-lg-4 py-3">
//     <div className="container">
//       <div className="row g-4">
//         <div className="col-lg-12 col-md-12 col-sm-12">
//           <div className="card">
//             <div className="card-body">
//               <div className="row g-4 px-5">
              
           
//                 <form onSubmit={this.handleSubmit} encType='multipart/form-data'  id ="formdata">


//                   {/* <div className="row g-4">
//                   <lable><b>Select Plan Type</b></lable>
//                     <select className="form-control form-control-lg"  name="mealpreference"  tabIndex={-88} id="meal_pref_id"  required>
//                     {this.state.user_list.map(userlist =>
//                               <option value={userlist.userid}>{userlist.plantype}</option> //  ( <option value={data._id}>{data.userid}</option>)
//                             )}
//                     </select>
//                     </div> */}

//                        <div className="row g-4">
//                           <lable><b>Select Plan Type</b></lable>
//                           <select className="form-control form-control-lg"  name="plantype" onChange ={this.getuserdata} tabIndex={-88} id='plantype_id'  required>
//                                <option >------Select Plan Type------</option>
//                                {this.state.planinfo.map(plan =>
//                               <option value={plan.plan_name}>{plan.plan_name}</option> //  ( <option value={data._id}>{data.userid}</option>)
//                             )}
//                                 {/* <option defaultValue="Eco">Eco</option> 
//                                 <option defaultValue = "Premium">Premium</option> 
//                                 <option defaultValue = "Executive">Executive</option>  */}
                         
//                           </select>
//                         </div>

//                     <div ><br></br></div>
//                    {/* {
//                     console.log( "jk"),
//                    console.log(this.state.plantype)} */}

//                    <div className="col-sm-12">
//                    <lable><b>User Name</b></lable>
//                           <input class="form-control"  value = {this.state.user_name } type="text" name = "validate_user" tabIndex={-88} id="user_id" onFocus={this.onfocus_gettiffin_data} autoComplete='off' required/>
//                    </div>
//                    {/* {this.state.user_list.map(d=>d.plantype==this.state.plantype && this.state.user_list.length == 0 ? ("User Not Available"):(null))} */}
//                    {this.state.user_list.length == 0? ("User Not Available"):(null)}
                    

//                     <div ><br></br></div>

//                     <div className="row g-4">
//                         <lable><b>MealPreference</b></lable>
//                         <input class="form-control" type="text" value={ this.state.user_mealpref} tabIndex={-88} name="mealpref_id"  id="mealpref_id"  autoComplete='off' required/>  
//                     </div>

//                     <div ><br></br></div>

//                     <div className="row g-4">
//                         <lable><b>Tiffin Type</b></lable>
//                         <input class="form-control" type="text" value = {this.state.user_tiffin_type }  tabIndex={-88} name="tiffintype_id"  id="tiffintype_id" autoComplete='off' required/>  
//                     </div>

//                     <div ><br></br></div>

//                   <div className="row g-4">
//                       <lable><b>Tiffin Number</b></lable>
//                       <input class="form-control" type="text"  tabIndex={-88} name="tiffin_no"  id="tiffin_no" onChange = {this.selectData}  onFocus = {this.tiffin_no_allocation} autoComplete='off' required/>  
//                   </div>
// {/*  onFocus = {this.tiffin_no_allocation} */}
//                   {this.state.tiffininfo.length == 0 ?("Tiffin Not Available"):this.state.tiffin_status==true?("Invalid Tiffin"):(null)}<br></br>
//                   {/* {this.state.tiffininfo.map(d=>d.tiffin_cat == this.state.user_mealpref && d.tiffin_type == this.state.user_tiffin_type)?(null):("Invalid Tiffin")} */}
//                    {/* {this.state.tiffin_status==true?("Invalid Tiffin"):("")}             */}
                    
//                   {/* (this.state.tiffininfo.map(t=>(t.tiffin_no === this.state.tiffin_no ))?("valid Tiffin"):("Invalid Tiffin")) */}
//                   <div><br></br></div>

//                        <div>
                   
                        
//                        &nbsp; &nbsp; &nbsp; &nbsp; {this.state.user_list.map(data=>(data.userid== this.state.user_id?(<h6> <u>User Plan Detail</u></h6>):("")))} 
//                        {this.state.user_list.map(data =>((data.userid== this.state.user_id?(
                           

//                         <ol  >
                        
//                         {data.mealpreference =="nonveg"?(<li>NonVeg Preference days : 
//                          <b> {data.nonveg_pre_d.m == "1"&&days ==1 ? "Yes":data.nonveg_pre_d.t == "1"&&days ==2 ? "Yes":data.nonveg_pre_d.w == "1"&&days ==3 ? "Yes":
//                           data.nonveg_pre_d.th == "1"&&days ==4 ? "Yes":data.nonveg_pre_d.fr == "1"&&days ==5 ? "Yes":data.nonveg_pre_d.sat == "1"&&days ==6 ? "Yes":
//                           data.nonveg_pre_d.sun == "1"&&days ==0 ? "Yes":"No"
                         
//                            }</b>
//                            </li>):("")}
//                         <div><br></br></div>
                       
//                            <li>Unlike foods :<b>{data.unlike_foods+ ' ,'
//                           //  .map((inner_data)=>(  inner_data.veg+ ' ,' ))
//                            } </b></li>

//                            <div><br></br></div>
//                         {data.extra_item.length>0 ? <li>Extra Item Name:<b>{data.extra_item.map(d=>d.item_name+ ' ,' )}</b> </li>:null} 
//                         {/* <li>Extra Item Name:<b>{data.extra_item.map(d=>d.item_name )
//                           //  .map((inner_data)=>(  inner_data.veg+ ' ,' ))
//                            }</b> </li> */}
//                              <div><br></br></div>
//                              {data.extra_item.length>0 ?<li>Extra Item Quantity:<b>{data.extra_item.map(d=>d.item_qty+ ' ,')} </b> </li>  :null}
                            
//                              {/* <li>Extra Item Quantity:<b>{data.extra_item.map(d=>d.item_qty) 
//                           //  .map((inner_data)=>(  inner_data.veg+ ' ,' ))
//                            } </b></li> */}
                           


//                        </ol>
//                        ):" ")))} 
//                         </div>




                
                                        
//                        <h5><b>Today's {this.state.plantype } Meal</b></h5> 
//                        {this.createUI()}    
//                        {/* {this.createUIExtra()} */}
                       
//                        {/* <li> Sabji 1 :<input class="form-control" name = "sabji1" type="text" id ="sabji1"  onChange= {this.handleSubmit()} autoComplete='off'  /></li> <div><br></br></div> 
//                        <li> Sabji 2:<input class="form-control" name = "sabji2" type="text" id ="sabji2"   onChange= {this.handleSubmit()} autoComplete='off'  /></li> <div><br></br></div>  */}
                       
//                        {/* {this.createUI_ExtraItem()}    (this, row.id) */}
                       
//                        <ul style={{ listStyle: 'none' }}>

//                        {console.log(this.state.i=0)}
//                        {console.log(this.state.j=0)}

//                       {this.state.user_list.map((data) =>(data.extra_item.length>0 ? (data.extra_item.map((d,a)=>(<li> Extra Item{this.state.i=this.state.i+1} :<input class="form-control"  
//                       type="text"  onChange={()=>{this.showAnswer(a)}}  id ={"extra_item"+a} key={a}  value= {d.item_name}required  /></li> )))  :
//                         (<input class="form-control"  type="hidden" id ="extra_item" value= {null}    />)))} 
                        
//                          <div><br></br></div>
// {/* value={d.item_name}  value={d.item_qty} */}

//                       {this.state.user_list.map((data) =>(data.extra_item.length>0 ? (data.extra_item.map((d,a)=>(<li> Quantity{this.state.j=this.state.j+1} :<input class="form-control" 
//                        type="text" id ={"qty"+a} key={a} onChange={()=>{this.showAnswer(a)}}  value={d.item_qty} required  /></li> ))):
//                        (<input class="form-control"  type="hidden" id ="qty"   value={null}    />)))}  <div><br></br></div> 
                     
                    
//                      </ul>   

               
//                       <div><br></br></div>
                    
//                       <div><br></br></div>

                        
//                             <div className="col-sm-12">
//                                <button type="submit" className="btn btn-primary" >Submit</button>
//                                <a href="" className="btn btn-primary" > Reset</a>
                             
//                              </div>
//                 </form>
                
//               </div>
//             </div>
//           </div>
//         </div>
     
//       </div> {/* .row end */}
//     </div>
//   </div>
//   {/* Body: Footer */}
//   <div className="body-footer d-flex">
//     <div className="container">
//       <div className="col-12">
//         <div className="card mb-3">
//           <div className="card-body">
//             <div className="row justify-content-between align-items-center">
//               <div className="col">
//                 <p className="font-size-sm mb-0">© Tifinco <span className="d-none d-sm-inline-block"> Prixso Product.</span></p>
//               </div>
//               <div className="col-auto">
//                 <ul className="list-inline d-flex justify-content-end mb-0">
//                   <li className="list-inline-item"><a className="list-separator-link" href="">About</a></li>
//                   <li className="list-inline-item"><a className="list-separator-link" href="" target="_blank">License</a></li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
// <Footer/>

//       </div>
//     )
//   }
// }

// export default add_tiffin



