import React, { Component } from 'react'
import Header from  '../../../Components/admincomponent/Header';

import Footer from '../../../Components/admincomponent/Footer'
import axios from 'axios';
import { Route, Switch, Link } from 'react-router-dom';
import ReactLoading from "react-loading";
import {GET_PLANS,GET_ONE_PLANS,UPDATE_PLAN,CHECK_PLAN_UPDATE} from '../../../Components/admincomponent/links/superadminlinks';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'


export default class AddPlan extends Component {
    

    state = 
    {
      
        invalidImage_item:'',
        invalidImage_feacher:'',

        i:0,
        vegplan_item :[{id: Math.random(),item_image:'',itemheading:'',itemImgValidation:0}],
        nonvegplan_item :[{id: Math.random(),item_image2:'',itemheading:'',itemImgValidation:0}],


        plantype_data:[],
        Load:false,
        plantype:'',
       
        nonvegplan_item:[],
        vegplan_item:[],
        progress:'',
        chkplan : false,
        LoadForchk :false,
         
        pre_description :[],
        pre_item :[],

  
        image_array:[],
        // image_array1:[],
        bg_image:"",
        prebg_image:"",
        invalidImage:'',
        bg1_color:'',
        bg2_color:'',
        lb1_color:'',
        lb2_color:'',
        plan_pref:'',

        plantype_data:[],
        Load:false,
        plantype:'',
        vegstrikethrough_price:0,
        vegpermeal_price:0,
        vegpermonth_price:0,
        vegdiscount :0,
        vegdecription1:'',
        vegdecription2:'',
        vegdecription3:'',
        nonvegstrikethrough_price:0,
        nonvegpermeal_price:0,
        nonvegpermonth_price:0,
        nonvegdiscount :0,
        nonvegdescription1:'',
        nonvegdescription2:'',
        nonvegdescription3:'',
        plan_item1:'',
        progress:'',
        chkplan : false,
        LoadForchk :false,
        bg_image:"",
        invalidImage:'',

        bg1_color:'',
        bg2_color:'',
        lb1_color:'',
        lb2_color:'',
        plan_pref :'veg'
    }


    componentDidMount() 
    {
        this.setState({
          Load:true,
        })
         fetch( GET_PLANS,{
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

        //    alert(this.props.params.id);
             fetch( GET_ONE_PLANS,{
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  userid: sessionStorage.getItem('userid'),
                  _id:this.props.match.params.id,
                }),
              })
                  .then((res) => res.json())
                  .then((json) => {
                  console.log(json);
                    
                  json.map(pdata=>{
                        this.setState({

        plantype:pdata.plan_name,

        vegstrikethrough_price:pdata.vegstrikethrough_price,
        vegpermeal_price:pdata.vegpermeal_price,
        vegpermonth_price:pdata.vegpermonth_price,
        vegdiscount:pdata.vegdiscount,
        nonvegstrikethrough_price:pdata.nonvegstrikethrough_price,
        nonvegpermeal_price:pdata.nonvegpermeal_price,
        nonvegpermonth_price:pdata.nonvegpermonth_price,
        nonvegdiscount:pdata.nonvegdiscount,
        nonvegplan_item:pdata.nonvegplan_item,
        plan_feature:pdata.plan_feature,
      
        // nonvegplan_item :pdata.nonvegplan_item,
        prebg_image :pdata.bg_image,
        // Vegdecriptionsum:pdata.vegdecription1,
        bg_image:pdata.bg_image,
        bg1_color:pdata.bg1_color,
        bg2_color:pdata.bg2_color,
        lb1_color:pdata.lb1_color,
        lb2_color:pdata.lb2_color,
        nonvegdescription1:pdata.nonvegdescription1,
        nonvegdescription2:pdata.nonvegdescription2,
        nonvegdescription3:pdata.nonvegdescription3,
        vegdecription1:pdata.vegdecription1,
        vegdecription2:pdata.vegdecription2,
        vegdecription3:pdata.vegdecription3,
        vegplan_item:pdata.vegplan_item,


                            // plantype:pdata.plan_name,
                            // strikethrough_price:pdata.strikethrough_price,
                            // permeal_price:pdata.permeal_price,
                            // permonth_price:pdata.permonth_price,
                            // discount:pdata.discount,
                            // pre_description:pdata.plan_description,
                            // pre_item:pdata.plan_item,
                            // prebg_image :pdata.bg_image,
                            // bg1_color:pdata.bg1_color,
                            // bg2_color:pdata.bg2_color,
                            // lb1_color:pdata.lb1_color,
                            // lb2_color:pdata.lb2_color,
                            // plan_pref:pdata.plan_pref,


                        })

                        console.log(this.state.pre_description);
                        console.log(this.state.nonvegplan_item);
                        console.log(this.state.vegplan_item);
                        console.log(this.state.vegplan_item.length);
                        var  pre_veg_planitemarr =  [];
                        for(var i = 0 ; i<this.state.vegplan_item.length ; i++)
                        {
                          pre_veg_planitemarr[i] = false;  
                        }
                        var  pre_Nonveg_planitemarr =  [];
                        for(var i = 0 ; i<this.state.nonvegplan_item.length ; i++)
                        {
                          pre_Nonveg_planitemarr[i] = false;  
                        }

                        console.log(pre_veg_planitemarr);
                        console.log(pre_Nonveg_planitemarr);
                        
                  });




               
                  // this.state.plan_description = this.state.pre_description;
                  // this.state.vegplan_item  = this.state. ;
           

                  this.setState({ image_array: [...this.state.image_array, this.state.prebg_image] });
                  // this.setState({ image_array1: [...this.state.image_array1, this.state.item_image] });

                  // alert(this.state.vegplan_item[0]['item_image']);
                  // console.log(this.state.vegplan_item[0]['item_image']);

                  // this.state.vegplan_item.map(p=>{

                    
                  //   console.log(p['item_image']);


                  //   this.setState({ image_array: [... this.state.image_array, p.item_images ]});
                  //   this.state.image_array = p['item_image'];
                   
                  // })
                  // this.state.nonvegplan_item.map(p=>{

                  //   console.log(p['item_image2']);


                  //   this.setState({ image_array: [... this.state.image_array, p.item_images2 ]});
                  //   // this.state.image_array = p['item_image2'];
                   
                  // })
         
         

           
             
                      this.setState({
                        Load:false
                      });
                    
                  })//closing of second fetch
       
               
            })//closing of first fetch 

      }//closing of component did mount



      setBG = (event)=>
      {
            this.setState({ invalidImage: '' });
            const imageFile = event.target.files[0];
            if (imageFile == undefined) 
            {
              this.setState({ invalidImage: 'Please select BG image.' });
              return false;
            }
            var ImgSize = (imageFile.size)/(1024*1024);

            if (!imageFile.name.match(/\.(jpg|jpeg|png|gif)$/)) 
            {
              this.setState({ invalidImage: 'Please select valid image.' });
              console.log(this.state.invalidImage);
              return false;
            }
            
            if (ImgSize >='2') 
            {
              this.setState({ invalidImage: 'File Size Is Large ! Select File Below  2MB ' });
              console.log(this.state.invalidImage);
              return false;
            }

              this.setState({
                bg_image: event.target.files[0],
              })       
      }

     
    // planprefchange =  event =>{
    //   this.setState({ plan_pref :event.target.value})

    // }

      plantypechange =  event =>
      {
        this.setState({ plantype :event.target.value});
        var planType = document.getElementById('plantype').value;
        // var planpref = document.getElementById('planpref').value;
       // alert(planType);
        var formData = 
        {
            plan_name:planType,
            // planpref:planpref,
            userid:sessionStorage.getItem('userid'),
            _id:this.props.match.params.id,

        }
     
        try{
          axios.post(CHECK_PLAN_UPDATE, formData , {
            headers:{'Content-Type': 'application/json'},
                   })
            .then(res => {
                // //alert(res.data);
                // console.log(res.status);
                // console.log(res.data);
              
                if(res.data.msg=='success')
                {
                  this.setState({
                    chkplan:false,
                  })

                }
                else if(res.data.msg=='exist')
                {
                    this.setState({
                      chkplan:true,
                    })
                  // console.log( this.state.chkplan);
                  // this.state.chkplan = true;
                  // console.log( this.state.chkplan);
                 alert("Plan Exists");
                 window.location.reload();
                }
  
                // this.setState({
                //   Load :false,
                //                   });
                        })
          }  catch(error) 
          {  
                  console.log(error)
                  // this.setState({
                  //     Load :false,
                  //     });
                  console.log("internal server error");
          }


      }


      bg1 =  event =>
      {
        this.setState({ bg1_color :event.target.value})

      }

      bg2 =  event =>
      {
        this.setState({ bg2_color :event.target.value})

      }

      lb1 =  event =>
      {
        this.setState({ lb1_color :event.target.value})

      }

      lb2 =  event =>
      {
        this.setState({ lb2_color :event.target.value})

      }


      planprefchange =  event =>
      {
        this.setState({ plan_pref :event.target.value})

      }


      // setBG = (event)=>
      // {
      //       this.setState({ invalidImage: '' });
      //       const imageFile = event.target.files[0];
      //       if (imageFile == undefined)
      //       {
      //           this.setState({ invalidImage: 'Please select BG image.' });
      //           return false;
      //       }
        
      //       var ImgSize = (imageFile.size)/(1024*1024);
      
        
      //     if (!imageFile.name.match(/\.(jpg|jpeg|png|gif)$/)) 
      //     {
      //       this.setState({ invalidImage: 'Please select valid image.' });
      //       console.log(this.state.invalidImage);
      //       return false;
      //     }
          
      //     if (ImgSize >='2') 
      //     {
      //       this.setState({ invalidImage: 'File Size Is Large ! Select File Below  2MB ' });
      //       console.log(this.state.invalidImage);
      //       return false;
      //     }
      
      
      //       this.setState({
      //         bg_image: event.target.files[0],
      //       })
        
       
      // }
  

      vegstrikethrough_price=  event =>
      {
        this.setState({ vegstrikethrough_price :event.target.value})

      }
     
      vegpermeal_price =  event =>
      {
        this.setState({ vegpermeal_price :event.target.value})

      }
      vegpermonth_price =  event =>
      {
        this.setState({ vegpermonth_price :event.target.value})

      }
      vegdiscount =  event =>
      {
        this.setState({ vegdiscount :event.target.value})

      }
      vegdecription1=  event =>
      {
        this.setState({ vegdecription1 :event.target.value})

      }
      vegdecription2=  event =>
      {
        this.setState({ vegdecription2 :event.target.value})

      }
      vegdecription3=  event =>
      {
        this.setState({ vegdecription3 :event.target.value})

      }

//////////////////////////////////////////////////////////////




////////////////////////////////////////////


  

      createPlanDescription()
      {

        return this.state.nonvegplan_item.map((row, i) =>
            <div key={i}>
              <label> Nonveg plan Item {i+1}</label><br></br>
              <label style={{color:"red"}}> {row.itemImgValidation == 1?("choose right file(PNG,JPG,JPEG,GIF) & size <1MB"):("")}</label><br></br>
              
             {/* <input class="form-control form-control-lg" type="text" value={row||''}  /> */}
          {row.item_image2 ==""?(""):( <div><label>Previous Image:</label> <br></br>
          {/* {alert(row.item_image2)} */}
            <img src={row.item_image2} height="70" width="70" alt="Previous Image Will Be Updated Through Selected Image" ></img></div>)} <br></br>
            {row.item_image2 ==""?(<input type="file" className="form-control"  name="item_image2"  onChange={this.handleChangeInputForDescription.bind(this, row.id)}  required></input>):(<input type="file" className="form-control"  name="item_image2"  onChange={this.handleChangeInputForDescription.bind(this, row.id)} ></input>)}  <br></br>
              {/* <input type="file" className="form-control"  name="item_image2"  onChange={this.handleChangeInputForDescription.bind(this, row.id)}  required></input><br></br> */}
           <input type="text" className="form-control"  name="itemheading" placeholder='Heading..'  onChange={this.handleChangeInputForDescription.bind(this, row.id)} value={row.itemheading}  required></input><br></br>
             <br>
             </br>
           {i ?( <input type='button' className="btn btn-danger" value='X' onClick={this.handleRemoveFieldsForDescription.bind(this, row.id)}/>):("")}
                    <br></br><br></br>
            </div>


        )


      }
     


handleChangeInputForDescription(id, event)
{
      
    const nonvegplan_item = this.state.nonvegplan_item.map(i => {

    if(id === i.id) 
    {
      // i.itemImgValidation = 0;
      if(event.target.name ==='item_image2')
      {

        var ImgSize;
  
        i[event.target.name] = event.target.files[0];

        const imageFile = event.target.files[0];
            if (imageFile == undefined)
             {
               // this.setState({ invalidImage: 'Please select  image.' });
                i.itemImgValidation = 1;
               
            }
            else
            { 

                ImgSize = (imageFile.size)/(1024*1024);
                if (!imageFile.name.match(/\.(jpg|jpeg|png|gif)$/)) 
                {
                    i.itemImgValidation = 1;
                    if (ImgSize >='1') 
                    {
                          i.itemImgValidation = 1;
                    }//checking size
        
                }
                else
                {
                    if (ImgSize >='1')
                    {
                            i.itemImgValidation = 1;
                    }
                    else
                    {
                            i.itemImgValidation = 0;
                    }//checking size
        
                }
         
            }

      }
      else
      {
        i[event.target.name] = event.target.value
      }
    }
    return i;
  })

  this.setState({ nonvegplan_item });
}



handleAddFieldsForDescription()
{

  this.setState(prevState => ({ nonvegplan_item: [...prevState.nonvegplan_item,{ id: Math.random(),item_image2:'',itemheading:'' }]}));

}

handleRemoveFieldsForDescription(id)
{
    let nonvegplan_item= [...this.state.nonvegplan_item];
    nonvegplan_item.splice(nonvegplan_item.findIndex(value =>value.id===id),1);
    this.setState({ nonvegplan_item });
}


//////////////////////////////////// non veg /////////////////////////////////


nonvegstrikethrough_price=  event =>
{
  this.setState({ nonvegstrikethrough_price :event.target.value})

}

nonvegpermeal_price =  event =>
{
  this.setState({ nonvegpermeal_price :event.target.value})

}
nonvegpermonth_price =  event =>
{
  this.setState({ nonvegpermonth_price :event.target.value})

}
nonvegdiscount =  event =>
{
  this.setState({ nonvegdiscount :event.target.value})

}
nonvegdescription1=  event =>
{
  this.setState({ nonvegdescription1 :event.target.value})

}
nonvegdescription2=  event =>
{
  this.setState({ nonvegdescription2 :event.target.value})

}
nonvegdescription3=  event =>
{
  this.setState({ nonvegdescription3 :event.target.value})

}



////2222222222222222222222222222222222222222222222222222222 --------------------- nonveg plan item --------------------- 22222222222222222222222222222222222222222222222222222222222222222


      createPlanItem()
      {
 
      return this.state.vegplan_item.map((row, i) =>
     
          <div key={i}>
            <label>veg plan  Item {i+1}</label><br></br>
            <label style={{color:"red"}}> {row.itemImgValidation == 1?("choose right file(PNG,JPG,JPEG,GIF) & size <1MB"):("")}</label><br></br>
           {/* <input class="form-control form-control-lg" type="text" value={row||''}  /> */}
        {row.item_image ==""?(""):( <div><label>Previous Image{i}:</label> <br></br>
          {/* {alert(row.item_image)} */}
          <img src={row.item_image} height="70" width="70" alt="Previous Image Will Be Updated Through Selected Image" ></img></div>)} <br></br>
          {row.item_image ==""?(<input type="file" className="form-control"  name="item_image"  onChange={this.handleChangeInputForItem.bind(this, row.id)} required></input>):(<input type="file" className="form-control"  name="item_image"  onChange={this.handleChangeInputForItem.bind(this, row.id)} ></input>)}  <br></br>
           <input type="text" className="form-control"  name="itemheading" placeholder='Heading..'  onChange={this.handleChangeInputForItem.bind(this, row.id)}  value={row.itemheading} required></input><br></br>
          
         {i ?( <input type='button' className="btn btn-danger" value='X' onClick={this.handleRemoveFieldsForItem.bind(this, row.id)}/>):("")} 
                  <br></br><br></br>
          </div>
          

      )
   }

      
   handleChangeInputForItem(id, event)
   {
      
    const vegplan_item = this.state.vegplan_item.map(i => {

    if(id === i.id) 
    {
      // i.itemImgValidation = 0;
      if(event.target.name ==='item_image')
      {
        var ImgSize;
  
        i[event.target.name] = event.target.files[0];

        const imageFile = event.target.files[0];
        if (imageFile == undefined) 
        {
            // this.setState({ invalidImage: 'Please select  image.' });
             i.itemImgValidation = 1;        
        }
        else
        { 
             ImgSize = (imageFile.size)/(1024*1024);
             if (!imageFile.name.match(/\.(jpg|jpeg|png|gif)$/))
             {
                  i.itemImgValidation = 1;
          
                  if (ImgSize >='1') 
                  {
                      i.itemImgValidation = 1;
                
                  }//checking size
          
             }
             else
             {
                 if (ImgSize >='1')
                 {
                     i.itemImgValidation = 1;
            
                 }
                else
                {
                     i.itemImgValidation = 0;
            
                }//checking size
          
             }
         
        }

      }
      else
      {
        i[event.target.name] = event.target.value
      }

    }
    return i;
  })

  this.setState({ vegplan_item });
}


handleAddFieldsForItem()
{

  this.setState(prevState => ({ vegplan_item: [...prevState.vegplan_item,{ id: Math.random(),item_image:'',itemheading:'' }]}));

}

handleRemoveFieldsForItem(id)
{
  let vegplan_item= [...this.state.vegplan_item];
  vegplan_item.splice(vegplan_item.findIndex(value =>value.id===id),1);
  this.setState({ vegplan_item });

}



    handleSubmit = event =>  {
        event.preventDefault();
        // alert("call ");  
        
        if(this.state.invalidImage !="")
        {
          alert("Choose Correct BG Image ");
          return false;
        }
      ///////////////////////////////////////////////////////////////
      if(this.state.invalidImage !="")
      {
         alert("Choose Correct BG Image ");
         return false;
      }

        //for items
         this.state.invalidImage_item ="";
           console.log(this.state.vegplan_item) ;
           this.state.vegplan_item.map((val)=>{
             console.log(val.itemImgValidation);

             if(val.itemImgValidation == 1 )
             {
                this.state.invalidImage_item ="Please choose right image";
                console.log("found");
            }

          })

                   
             this.state.invalidImage_nonitem ="";
             console.log(this.state.nonvegplan_item) ;
             this.state.nonvegplan_item.map((value)=>{
               console.log(value.itemImgValidation);
               if(value.invalidImage_nonitem == 1 )
               {
                  this.state.invalidImage_nonitem ="Please choose right image";
                  console.log("found");
               }
    
            })

        

          //  if(this.state.invalidImage_item !=''){
          //   alert("Please Select Valid Image For Item!");
          //   return false;
          // }




      //////////////////////////////////////////////////////////////////////////
        //for items
        //  this.state.invalidImage_item ="";
        //     console.log(this.state.vegplan_item) ;
        //    this.state.vegplan_item.map((val)=>{
        //      console.log(val.itemImgValidation);
        //      if(val.itemImgValidation == 1 ){
        //        this.state.invalidImage_item ="Please choose right image";
        //        console.log("found");
        //      }
                  
        //    })

           if(this.state.invalidImage_item !='')
           {
              alert("Please Select Valid Image For Item!");
              return false;
          }
         
      
         console.log(this.state.image_array);


        this.setState({
            Load :true,
           
            });
            const formData = new FormData();





            ///////////////////////////////////////
            formData.append('_id',this.props.match.params.id);
            // formData.append('plan_pref', this.state.plan_pref);
            formData.append('image_array',JSON.stringify(this.state.image_array));
            formData.append('plan_type', this.state.plantype);
          //   formData.append('plan_strikethrough_price', this.state.strikethrough_price);
          //   formData.append('permeal_price', this.state.permeal_price);
          //  formData.append('permonth_price', this.state.permonth_price );
          //   formData.append('discount', this.state.discount);


          formData.append('vegstrikethrough_price', this.state.vegstrikethrough_price);
          formData.append('vegpermeal_price', this.state.vegpermeal_price);
         formData.append('vegpermonth_price', this.state.vegpermonth_price );
          formData.append('vegdiscount', this.state.vegdiscount);
          // formData.append('vegplan_item', JSON.stringify(this.state.plan_item));
          // formData.append('Vegdecriptionsum', this.state.Vegdecriptionsum);
          formData.append('nonvegstrikethrough_price', this.state.nonvegstrikethrough_price);
          formData.append('nonvegpermeal_price', this.state.nonvegpermeal_price);
         formData.append('nonvegpermonth_price', this.state.nonvegpermonth_price );
          formData.append('nonvegdiscount', this.state.nonvegdiscount);
     
          // formData.append('nonVegdecriptionsum',  this.state.nonVegdecriptionsum);
         
          formData.append('vegdecription1', this.state.vegdecription1);
          formData.append('vegdecription2', this.state.vegdecription2);
          formData.append('vegdecription3', this.state.vegdecription3);
          formData.append('nonvegdescription1', this.state.nonvegdescription1);
          formData.append('nonvegdescription2', this.state.nonvegdescription2);
          formData.append('nonvegdescription3', this.state.nonvegdescription3);

            formData.append('bg1_color', this.state.bg1_color);
            formData.append('bg2_color', this.state.bg2_color);

            formData.append('lb1_color', this.state.lb1_color);

            formData.append('lb2_color', this.state.lb2_color);


            formData.append('nonvegplan_item', JSON.stringify(this.state.nonvegplan_item));
            formData.append('vegplan_item', JSON.stringify(this.state.vegplan_item));


            ////////////////////////////////
            formData.append('_id',this.props.match.params.id);
            formData.append('files',JSON.stringify(this.state.prebg_image));


            //////////////////////////////////////////////

              var bg_file =   this.state.bg_image;

              if(bg_file.name===undefined){
                formData.append('files',JSON.stringify(this.state.prebg_image));

              }else{
                formData.append('files',this.state.bg_image);
                formData.append('files','nodata');
              }
         

            this.state.vegplan_item.map((val)=>{
              console.log(val.item_image);
              
              const image_file = val.item_image;
              console.log(image_file);
              console.log(image_file.name);
              if(image_file.name===undefined)
              {
                formData.append('files',JSON.stringify(val.item_image));

              }
              else
              {
                formData.append('files',val.item_image);
                formData.append('files','nodata');
              }
            
                   
            })
            this.state.nonvegplan_item.map((value)=>{
              console.log(value.item_image);
              
              const image_file = value.item_image2;
              if(image_file.name===undefined)
              {
                formData.append('files',JSON.stringify(value.item_image2));

              }
              else
              {
                formData.append('files',value.item_image2);
                formData.append('files','nodata');
              }
            
                   
            })



          
        console.log(formData)
          
     try{
        axios.post(UPDATE_PLAN, formData , {userid:sessionStorage.getItem('userid')},{
          headers:{'Content-Type': 'multipart/formdata','content-Type': 'application/json'},
          onUploadProgress: data => {
            //Set the progress value to show the progress bar
         //  setProgress(Math.round((100 * data.loaded) / data.total))
           this.setState({
            progress: Math.round((100 * data.loaded) / data.total)

           });
          },
        })
          .then(res => {
              //alert(res.data);
              console.log(res.status);
              console.log(res.data);
              alert("Data updated");
            
              if(res.data.msg=='success')
              {
                // alert("Data updated");
            
                console.log("success");
                // alert("Data updated");
                 window.location.reload();
      
    
              }
              else if(res.data.msg=='exist')
              {
                this.setState({ invalidImage: '' });
               alert("Plan Exists");
              //  window.location.reload();
              }

              this.setState({
                Load :false,
                });

          })
        }  catch(error) {
         
                console.log(error)
                this.setState({
                    Load :false,
                    });
                console.log("internal server error");
              }
 
      }//closing of form submit


      
    




  render() {
  
    return (
      <>
       <Header/>
      {/* main body area */}
<div className="main px-lg-5 px-md-2">

  {/* Body: Header */}
  <div className="body-header d-flex text-light border-top py-3">
    {console.log(this.state.percentage)}
    <div className="container">
      <div className="row mb-3">
        <div className="col">
          <ol className="breadcrumb bg-transparent mb-0">
            <li className="breadcrumb-item"><a className="text-secondary" href="/">Home</a></li>
            <li className="breadcrumb-item active" aria-current="page">Add Food Plan</li>
          </ol>
        </div>
        <div className="col-auto">
          <div className="d-md-flex d-none justify-content-lg-end align-items-center">
           
          </div>
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col-auto">
          <h1 className="fs-4 mt-1 mb-0">Update Food Plan</h1>
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
           
              {
              this.state.progress && <h5> {
                this.state.progress<100?
                `${this.state.progress}%` :"Photo Uploaded ,Please Wait Almost Done....!"}
                
                 </h5>
             
              }
              {this.state.invalidImage && <h5 style={{ color: "red" }}  className="error"> {this.state.invalidImage}</h5>}

             
                     
                  <form onSubmit={this.handleSubmit}  encType='multipart/form-data'   >
                        <br></br>
                       
                        <div class="col-sm-12">
                            
                       <label class="form-label">Plan Type</label> <br></br>
                        <select class="form-control" id= "plantype" onChange = {this.plantypechange} tabindex="-90" required>
                        <option value="">--Choose Plan Type--</option>
                                


                        {this.state.plantype_data.map(plantype_data =>(
                            this.state.plantype === plantype_data.plan_name ?(  <option value={plantype_data.plan_name} selected>{plantype_data.plan_name}</option>
                                
                                ):(

                                    <option value={plantype_data.plan_name}>{plantype_data.plan_name}</option>
                                )
                          
                          
                        ))}
                        </select>
                    </div>
                        


            
                           
                            <div className="col-lg-12">
                            <label>Background Image </label>
                          <input type="file" className="form-control" name='bg_img'  placeholder="Choose Background Image" onChange={this.setBG}  autoComplete='off'/>
                          <br></br>
                          <label>Previous Background Image  </label><br></br>
                          <img src={ this.state.prebg_image} height="70" width="70" alt="Background Image" ></img>
                          </div>
  
  
                          <br></br>    <br></br>



                  

                          <div>
                          <label><b>Plan Background Styles</b></label>
                          <br></br>
                          <label><b>BG Color 1</b></label>
                          <input type="text" className="form-control" value={this.state.bg1_color}  placeholder="Background color 1" onChange={this.bg1}  required autoComplete='off'/>
                          <br></br>
                          <label><b>BG Color 2</b></label>
                          <input type="text" className="form-control"  value={this.state.bg2_color}  placeholder="Background color 2" onChange={this.bg2}  required autoComplete='off'/>
  
  
                        </div>
                        <br></br>
  
                        <div>
                        <label><b>Plan Label Styles</b></label>
                        <br></br>
                        <label><b>Label Color 1</b></label>
                        <input type="text" className="form-control" value={this.state.lb1_color}  placeholder="Label color 1" onChange={this.lb1}  required autoComplete='off'/>
                        <br></br>
                        <label><b>Label Color 2</b></label>
                        <input type="text" className="form-control" value={this.state.lb2_color}  placeholder="Lable  color 2" onChange={this.lb2}  required autoComplete='off'/>
  
  
                      </div>
                      <br></br>

 {/* -------------------------------------------------------------------------- veg plan --------------------------------------------------------------------------- */}

 <br></br>
                    
 <hr></hr>

 <label><h1 style={{color:"blue", fontSize:"20px"}}>Veg plan</h1></label>
                           
                        <div className="col-lg-12">
                        <label class="form-label">Strikethrough Price</label> <br></br>
                        <input type="number" className="form-control"  value={this.state.vegstrikethrough_price}  placeholder="strikethrough price"  onChange={this.vegstrikethrough_price}  required autoComplete='off'/>
                        </div>
                      

                        <br></br>
                   
                        
                        <div className="col-lg-12">
                        <label class="form-label">Per Meal Price</label> <br></br>
                        <input type="number" className="form-control"  value={this.state.vegpermeal_price}  placeholder="Per meal price" onChange={this.vegpermeal_price}    required autoComplete='off'/>
                        </div>

                        <br></br>

                        <div className="col-lg-12">
                        <label class="form-label">Per Month Price</label> <br></br>
                        <input type="number" className="form-control" value={this.state.vegpermonth_price}  placeholder="Per month price" onChange={this.vegpermonth_price}   required autoComplete='off'/>
                        </div>

                        <br></br>

                        <div className="col-lg-12">
                        <label class="form-label">Discount</label> <br></br>
                        <input type="number" className="form-control"  value={this.state.vegdiscount}   placeholder="discount"  onChange={this.vegdiscount}  required autoComplete='off'/>
                        </div>

                        <br></br>


                     
                          
                        
                       
                        <label><b>Plan Description</b></label>
                      


                     
                       
               
                       
                        
                     
                       
                        <div ><br></br></div>
                       
                        <div>
                       
                    
                 
                      <input type="text" className="form-control"  value={this.state.vegdecription1}   placeholder=" veg Description1" onChange={this.vegdecription1}  required autoComplete='off'/>
                   
</div>

<div><br></br></div>
<div ><br></br></div>
                       
<div>



<input type="text" className="form-control"  value={this.state.vegdecription2}   placeholder=" veg Description1" onChange={this.vegdecription2}   required autoComplete='off'/>

</div>

<div><br></br></div>

<div ><br></br></div>
                       
<div>



<input type="text" className="form-control"  value={this.state.vegdecription3}   placeholder=" veg Description1" onChange={this.vegdecription3}   required autoComplete='off'/>

</div>



<br></br>    <br></br>

<div><br></br></div>


                        <div>
                        <label><b>Plan Items</b></label>
                      
                        <br></br>
                      {this.createPlanItem()}
                      
                    <button type="button" className="btn btn-primary"   onClick={this.handleAddFieldsForItem.bind(this)} >Add Items</button>
                         <span>&nbsp;&nbsp;</span>
                     
                      </div>
                      <br></br>     
                      <br></br>







                      


              

               



                      <hr></hr>



                         {/* -------------------------------------------------- Non  veg plan ------------------------------------------------------------ */}





                     
                      <label><h1 style={{color:"blue", fontSize:"20px"}}> NonVeg plan</h1></label>

                      <div className="col-lg-12">
                      <label class="form-label">Strikethrough Price</label> <br></br>
                      <input type="number" className="form-control"   value={this.state.nonvegstrikethrough_price}  placeholder="strikethrough price"  onChange={this.nonvegstrikethrough_price}  required autoComplete='off'/>
                      </div>


                      <br></br>


                      <div className="col-lg-12">
                      <label class="form-label">Per Meal Price</label> <br></br>
                      <input type="number" className="form-control" value={this.state.nonvegpermeal_price}    placeholder="Per meal price"  onChange={this.nonvegpermeal_price}   required autoComplete='off'/>
                      </div>


                      <br></br>
                      <div className="col-lg-12">
                      <label class="form-label">Per Month Price</label> <br></br>
                      <input type="number" className="form-control" value={this.state.nonvegpermonth_price}    placeholder="Per meal price"  onChange={this.nonvegpermonth_price}    required autoComplete='off'/>
                      </div>

                      <div ><br></br></div>
                      <br></br>
                      <div className="col-lg-12">
                      <label class="form-label">Nonveg Discount</label> <br></br>
                      <input type="number" className="form-control" value={this.state.nonvegdiscount}    placeholder="Per meal price"      onChange={this.nonvegdiscount}   required autoComplete='off'/>
                      </div>

                      <div ><br></br></div>
               
                 
                 
                   
                    <div ><br></br></div>
                   
                   
                      <div>
                      <label><b>Plan Description</b></label>
                

                      <div className="col-lg-12">

                      <input type="text" className="form-control"  value={this.state.nonvegdescription1} onChange={this.nonvegdescription1}   placeholder=" Nonveg Description1"required autoComplete='off'/>
                      </div>


                      <br></br>

                      <div className="col-lg-12">

                      <input type="text" className="form-control"  value={this.state.nonvegdescription2}   placeholder=" Nonveg Description1" onChange={this.nonvegdescription2}  required autoComplete='off'/>
                      </div>


                      <br></br>
                      <div className="col-lg-12">

                      <input type="text" className="form-control"  value={this.state.nonvegdescription3}   placeholder=" Nonveg Description1" onChange={this.nonvegdescription3}  required autoComplete='off'/>
                      </div>


                      <br></br>

                      <br></br>


                  
                    </div>
                    <br></br>



                     
                    
                   

                        <label><b> Nonveg Plan Items</b></label>
                  
                      <br></br>
               

               
                        <br></br>
                       

                             {this.createPlanDescription()}

                      <button type="button" className="btn btn-primary" onClick={this.handleAddFieldsForDescription.bind(this)} >Add  Items</button>
                           <span>&nbsp;&nbsp;</span>
  
                
                        <br></br>




                        <div><br></br></div>


                

                        <br></br>
                    
                        {this.state.chkplan ==false? (  
                <div className="col-sm-12">
                {/* <button type="button" className="btn btn-primary"  onClick={this.addClick.bind(this)} >Add Row</button>  <span>&nbsp;&nbsp;</span> */}
                <center>  <button type="submit" className="btn btn-primary">Update</button></center>
                </div>

                ):("")}

                
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
      </>
    )
  }
}

